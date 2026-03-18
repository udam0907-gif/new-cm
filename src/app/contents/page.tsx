'use client'
import { useState } from 'react'
import ContactForm from '@/components/forms/ContactForm'

const TABS = [
  { id: '1', label: '뉴스 (News)' },
  { id: '2', label: '공지 및 자료실' },
  { id: '3', label: '오시는 길' },
  { id: '4', label: '온라인 문의' },
]

const NEWS = [
  { date: '2026.03', tag: '글로벌', color: '#1EB464', title: 'CM, 북미·동남아 글로벌 시장 진출 본격화', desc: '주식회사 씨엠이 AI 예지보전 솔루션의 글로벌 시장 진출을 위해 북미 및 동남아시아 지사 설립을 추진하고 있습니다.' },
  { date: '2026.01', tag: '제품', color: '#0056b3', title: "차세대 측정 모듈 'Signal HX-Pro' 공식 출시", desc: '씨엠의 차세대 초정밀 신호 측정 모듈 HX-Pro 시리즈가 정식 런칭되었습니다. 기존 대비 2배 향상된 샘플링 속도와 AI 처리 성능을 제공합니다.' },
  { date: '2025.11', tag: '수상', color: '#C8880A', title: "산업통상자원부 '우수 스마트팩토리 공급기업' 선정", desc: '씨엠이 산업통상자원부 주관 2025년도 우수 스마트팩토리 공급기업으로 선정되어 국내 최고 수준의 기술력을 공식 인정받았습니다.' },
  { date: '2025.09', tag: '도입', color: '#A064F0', title: '자동차 부품 1차 벤더 양산 라인 전면 도입 성공', desc: 'AI 기반 용접 불량 실시간 검출 시스템(INS LC-AD 시리즈)이 국내 주요 자동차 부품 1차 벤더의 양산 라인에 전면 도입되었습니다.' },
]

const NOTICES = [
  { date: '2026.02.28', title: '[공지] 2026년 1분기 솔루션 업데이트 안내 (v3.2.0)', type: '공지' },
  { date: '2026.01.15', title: '[자료] Signal HX-Pro 제품 카탈로그 다운로드', type: '자료' },
  { date: '2025.12.20', title: '[공지] 연말 고객 지원 운영 시간 변경 안내', type: '공지' },
  { date: '2025.11.05', title: '[자료] CM AI 예지보전 솔루션 기술 백서 (White Paper)', type: '자료' },
  { date: '2025.09.18', title: '[자료] 2차전지 제조 공정 예지보전 적용 사례 (Case Study)', type: '자료' },
]

export default function ContentsPage() {
  const [tab, setTab] = useState('1')
  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">CONTENTS</span>
        <h2 className="main-title">컨텐츠</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => { setTab(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t.label}</a>)}
      </div>

      {tab === '1' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {NEWS.map(n => (
            <div key={n.title} className="white-card" style={{ padding: 30, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 80 }}>
                <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: 6 }}>{n.date}</div>
                <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700, color: '#fff', background: n.color }}>{n.tag}</span>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8, wordBreak: 'keep-all' }}>{n.title}</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, wordBreak: 'keep-all' }}>{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === '2' && (
        <div style={{ border: '1px solid var(--card-border)', borderRadius: 15, overflow: 'hidden' }}>
          {NOTICES.map((n, i) => (
            <div key={n.title} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px', borderBottom: i < NOTICES.length - 1 ? '1px solid var(--card-border)' : 'none', background: '#fff' }}>
              <span style={{ padding: '3px 10px', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, background: n.type === '공지' ? '#eef4fb' : '#f0faf4', color: n.type === '공지' ? 'var(--accent)' : '#1EB464' }}>{n.type}</span>
              <span style={{ flex: 1, fontSize: '1rem', color: '#333', wordBreak: 'keep-all' }}>{n.title}</span>
              <span style={{ fontSize: '0.85rem', color: '#999', flexShrink: 0 }}>{n.date}</span>
            </div>
          ))}
        </div>
      )}

      {tab === '3' && (
        <>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.0!2d126.978!3d37.566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzU3LjYiTiAxMjbCsDU4JzQwLjgiRQ!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              title="오시는 길"
            />
          </div>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 16 }}>📍 주소</h4>
              <ul className="card-list">
                <li><strong>본사:</strong> 주소 입력 예정</li>
                <li><strong>연구소:</strong> 주소 입력 예정</li>
              </ul>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 16 }}>📞 연락처</h4>
              <ul className="card-list">
                <li><strong>이메일:</strong> cm2407@naver.com</li>
                <li><strong>운영 시간:</strong> 평일 09:00 – 18:00</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {tab === '4' && (
        <>
          <div className="section-head center" style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>솔루션 도입을 고려하고 계신가요?</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>현장 방문 기술 데모(PoC)부터 도입 상담까지, 전문 엔지니어가 직접 응대합니다.</p>
          </div>
          <ContactForm />
        </>
      )}
    </main>
  )
}
