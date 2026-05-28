'use server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type PreorderResult =
  | { ok: true }
  | { ok: false; error: string }

export async function submitPreorder(formData: FormData): Promise<PreorderResult> {
  const raw = formData.get('email')
  const email = typeof raw === 'string' ? raw.trim().toLowerCase() : ''

  if (!email || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[preorder] RESEND_API_KEY not set; email not sent', { email })
    return { ok: false, error: 'Email service is not configured yet. Please email hello@acefluento.com directly.' }
  }

  const notifyTo = process.env.PREORDER_NOTIFY_TO || 'hello@acefluento.com'
  const fromAddress = process.env.RESEND_FROM || 'Acefluento <onboarding@resend.dev>'
  const audienceId = process.env.RESEND_AUDIENCE_ID

  try {
    // 1) Notify the team
    const notifyRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [notifyTo],
        reply_to: email,
        subject: `[ETS Guide] New pre-order signup: ${email}`,
        html: `<p>New ETS Guide pre-order signup.</p><p><strong>Email:</strong> ${email}</p><p><em>Submitted ${new Date().toISOString()}</em></p>`,
      }),
    })

    if (!notifyRes.ok) {
      const body = await notifyRes.text()
      console.error('[preorder] Resend notify failed', notifyRes.status, body)
      return { ok: false, error: 'Something went wrong on our end. Try again in a moment.' }
    }

    // 2) Confirmation email to the subscriber (best-effort; don't fail submission if this errors)
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [email],
        subject: "You're on the ETS Guide list",
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;color:#18181B">
            <h2 style="color:#AF222E;margin-bottom:8px">You're in.</h2>
            <p>Thanks for pre-ordering The Everyday Technology Survival Guide.</p>
            <p>The guide drops <strong>Friday at 10:00 AM ET</strong>. You'll get a download link the moment it goes live.</p>
            <p style="color:#71717A;font-size:13px;margin-top:32px">
              — Acefluento<br>
              <a href="https://www.acefluento.com" style="color:#AF222E">www.acefluento.com</a>
            </p>
          </div>
        `,
      }),
    }).catch((e) => console.error('[preorder] confirmation send failed', e))

    // 3) Optional: add to Resend Audience for later broadcasts
    if (audienceId) {
      fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }).catch((e) => console.error('[preorder] audience add failed', e))
    }

    return { ok: true }
  } catch (err) {
    console.error('[preorder] unexpected error', err)
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }
}
