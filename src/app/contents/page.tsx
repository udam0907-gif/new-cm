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
  { date: '2025.11', tag: '계약', color: '#A064F0', title: '국내 최대 자동차 부품사 AI 분석 모듈 공급 계약 체결', desc: '국내 최대 규모 자동차 부품 제조사와 AI 기반 신호 분석 모듈 공급 계약을 체결하였습니다. 양산 라인 전면 적용을 통해 실시간 불량 검출 및 예지보전 체계를 구축합니다.' },
  { date: '2025.08', tag: '기술이전', color: '#C8880A', title: '초고속 신호 분석 핵심 기술 이전', desc: '씨엠이 보유한 초고속 신호 분석 원천 기술의 공식 기술 이전 계약을 완료하였습니다. 해당 기술은 200kHz 이상 고속 샘플링 기반 AI 이상 탐지 알고리즘을 포함합니다.' },
  { date: '2025.05', tag: '인증', color: '#1EB464', title: '기업부설연구소 및 벤처기업 등록', desc: '주식회사 씨엠이 기업부설연구소 설립 인가 및 벤처기업 공식 등록을 완료하였습니다. 독자 R&D 역량을 강화하고 기술 혁신 기업으로서의 입지를 공식화하였습니다.' },
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
  function goTab(id: string) { setTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">CONTENTS</span>
        <h2 className="main-title">컨텐츠</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => goTab(t.id)}>{t.label}</a>)}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.8!2d128.8237!3d35.9123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664b4b8c5e3b7d%3A0x1234567890abcdef!2z6rWs67aB7Iq464yJ7JeQ7JWE7JuQ7JW066-57JeQ7Yq4IOuwnOyViOydmCDsnbTsl6zroZwg7JaR7J207Weg7Yq565Ok66asIDMx!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              title="주식회사 씨엠 오시는 길"
            />
          </div>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 20 }}>📍 주소</h4>
              <ul className="card-list">
                <li>
                  <strong>본사</strong><br />
                  경상북도 경산시 하양읍 아이웨어로 31<br />
                  경북융합산학연구원 407호
                </li>
                <li style={{ marginTop: 12 }}>
                  <strong>연구소</strong><br />
                  경상북도 경산시 하양읍 아이웨어로 31<br />
                  경북융합산학연구원 410호
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 20 }}>📞 연락처</h4>
              <ul className="card-list">
                <li><strong>이메일:</strong> cm2407@naver.com</li>
                <li><strong>운영 시간:</strong> 평일 09:00 – 18:00</li>
                <li style={{ marginTop: 20 }}>
                  <strong>찾아오시는 방법</strong><br />
                  <span style={{ fontSize: '0.95rem', color: '#666' }}>
                    경부고속도로 경산IC → 하양읍 방면 10분<br />
                    대구선 하양역에서 차량 10분
                  </span>
                </li>
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
