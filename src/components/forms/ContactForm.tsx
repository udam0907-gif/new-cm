'use client'
import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      inquiry: (form.elements.namedItem('inquiry') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (json.success) { setStatus('success') }
      else { setStatus('error'); setMsg(json.message || '오류가 발생했습니다.') }
    } catch {
      setStatus('error')
      setMsg('네트워크 오류가 발생했습니다.')
    }
  }

  if (status === 'success') return (
    <div className="contact-form-wrap" style={{ textAlign: 'center', padding: '60px' }}>
      <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 15 }}>문의가 접수되었습니다!</h3>
      <p style={{ color: '#666', marginBottom: 30 }}>영업일 기준 1~2일 이내 <strong>cm2407@naver.com</strong>으로 회신드리겠습니다.</p>
      <button onClick={() => setStatus('idle')} style={{ padding: '12px 30px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 30, fontWeight: 700, cursor: 'pointer' }}>
        새 문의 작성하기
      </button>
    </div>
  )

  return (
    <div className="contact-form-wrap">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>회사명 <span style={{ color: 'var(--accent)' }}>*</span></label>
          <input name="company" type="text" placeholder="주식회사 씨엠" required />
        </div>
        <div className="form-group">
          <label>담당자 성함 <span style={{ color: 'var(--accent)' }}>*</span></label>
          <input name="name" type="text" placeholder="홍길동" required />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>이메일 <span style={{ color: 'var(--accent)' }}>*</span></label>
            <input name="email" type="email" placeholder="example@company.com" required />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>연락처</label>
            <input name="phone" type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
        <div style={{ marginBottom: 24 }} />
        <div className="form-group">
          <label>문의 유형 <span style={{ color: 'var(--accent)' }}>*</span></label>
          <select name="inquiry" required defaultValue="">
            <option value="" disabled>선택해주세요</option>
            <option>솔루션 도입 문의</option>
            <option>기술 데모(PoC) 요청</option>
            <option>파트너십 제안</option>
            <option>기타 문의</option>
          </select>
        </div>
        <div className="form-group">
          <label>문의 내용 <span style={{ color: 'var(--accent)' }}>*</span></label>
          <textarea name="message" placeholder="도입을 검토 중인 설비 환경, 현재 문제점, 원하시는 솔루션 등을 자유롭게 작성해주세요." required />
        </div>
        {status === 'error' && (
          <div style={{ padding: '12px 16px', background: '#fff3f3', border: '1px solid #f5c6c6', borderRadius: 8, color: '#d32f2f', marginBottom: 20 }}>
            ⚠️ {msg}
          </div>
        )}
        <button type="submit" className="btn-submit" disabled={status === 'loading'}>
          {status === 'loading' ? '전송 중...' : '문의하기 →'}
        </button>
        <p style={{ textAlign: 'center', color: '#999', fontSize: '0.82rem', marginTop: 14 }}>
          입력하신 정보는 문의 답변 목적으로만 사용됩니다.
        </p>
      </form>
    </div>
  )
}
