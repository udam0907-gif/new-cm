import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_TO_EMAIL || 'cm2407@naver.com'
const FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

interface MailData {
  company: string
  name: string
  email: string
  phone?: string
  inquiry: string
  message: string
}

export async function sendContactEmail(d: MailData) {
  const html = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background:#f8f9fa">
  <div style="background:#0056b3;color:white;padding:30px;border-radius:12px 12px 0 0;text-align:center">
    <h2 style="margin:0">📩 새로운 홈페이지 문의</h2>
    <p style="margin:8px 0 0;opacity:0.85">주식회사 씨엠</p>
  </div>
  <div style="background:white;padding:30px;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:100px">문의유형</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:700;color:#0056b3">${d.inquiry}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">회사명</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">${d.company}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">담당자</td><td style="padding:10px 0;border-bottom:1px solid #eee">${d.name}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">이메일</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${d.email}">${d.email}</a></td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">연락처</td><td style="padding:10px 0;border-bottom:1px solid #eee">${d.phone || '미입력'}</td></tr>
    </table>
    <div style="margin-top:20px;background:#f8f9fa;padding:20px;border-radius:8px;border-left:4px solid #0056b3;white-space:pre-wrap;line-height:1.7">${d.message}</div>
  </div>
</div>`

  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[CM 문의] ${d.inquiry} - ${d.company} ${d.name}`,
    html,
  })
}
