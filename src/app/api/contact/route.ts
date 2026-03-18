import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body.company || !body.name || !body.email || !body.inquiry || !body.message) {
      return NextResponse.json({ success: false, message: '필수 항목을 모두 입력해주세요.' }, { status: 400 })
    }
    await sendContactEmail(body)
    return NextResponse.json({ success: true, message: '문의가 접수되었습니다.' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, message: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}
