'use client'
import { useState } from 'react'

const TABS = [
  { id: '0', label: '전체 개요' },
  { id: '1', label: '자동차 산업' },
  { id: '2', label: '중공업·조선 산업' },
  { id: '3', label: '2차 전지 산업' },
]

export default function IndustryPage() {
  const [tab, setTab] = useState('0')
  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">INDUSTRIES</span>
        <h2 className="main-title">적용 산업</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => { setTab(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t.label}</a>)}
      </div>

      {tab === '0' && (
        <>
          <div className="intro-quote">
            <h3>"정밀함이 생명인 제조 현장,<br />씨엠이 완벽하게 지켜냅니다."</h3>
            <p>주식회사 씨엠의 AI 예지보전 솔루션은 자동차, 중공업·조선, 2차전지 등 대한민국 핵심 제조 산업에 최적화된 맞춤형 솔루션을 제공합니다.</p>
          </div>
          <div className="grid-3">
            {[
              { title: '자동차 산업', img: 'https://i.imgur.com/ME4TZhs.jpeg', desc: '차체 용접 불량 검출 및 모터·구동계 예지보전으로 완성차 품질 완성' },
              { title: '중공업·조선 산업', img: 'https://i.imgur.com/LT8vVlh.jpeg', desc: '대형 구조물 아크 용접 심층 결함 탐지 및 핵심 설비 이상 조기 감지' },
              { title: '2차 전지 산업', img: 'https://i.imgur.com/IQiK4Qs.jpeg', desc: '배터리 초정밀 용접 검사 및 이송 설비 예지보전으로 생산 라인 안정화' },
            ].map(item => (
              <div key={item.title} className="white-card" style={{ padding: 0, overflow: 'hidden', borderRadius: 15 }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 25 }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === '1' && (
        <>
          <div className="split-grid">
            <div>
              <span className="section-tag">AUTOMOTIVE</span>
              <h2 className="main-title">자동차 산업</h2>
              <div className="intro-quote" style={{ marginTop: 20 }}>
                <h3>"한 대의 불량차도 허용할 수 없는<br />자동차 산업의 완벽한 파트너."</h3>
                <p>자동차 제조 공정에서 용접 불량 및 구동계 이상은 치명적인 안전 문제로 직결됩니다. CM 솔루션은 용접 순간부터 설비 이상 징후까지 모든 신호를 실시간으로 감지합니다.</p>
              </div>
            </div>
            <div className="rounded-img-wrap">
              <img src="https://i.imgur.com/ME4TZhs.jpeg" alt="자동차 산업" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <h3 className="sub-title-left">주요 적용 솔루션</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>차체 용접 불량 실시간 검출</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>CO2·MIG·TIG 아크 용접 공정에서 발생하는 기공, 균열, 스패터 등 미세 용접 불량을 전류 및 전압 신호 분석을 통해 용접 순간 즉각 검출합니다. 불량품이 다음 공정으로 넘어가는 것을 원천 차단합니다.</p>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>모터 및 구동계 예지보전</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>차체 조립 로봇, 이송 컨베이어, 서보 모터 등 핵심 구동 설비의 진동 및 전류 신호를 실시간으로 분석하여 베어링 마모, 모터 이상 등을 사전에 감지합니다.</p>
            </div>
          </div>
        </>
      )}

      {tab === '2' && (
        <>
          <div className="split-grid">
            <div>
              <span className="section-tag">HEAVY INDUSTRY</span>
              <h2 className="main-title">중공업·조선 산업</h2>
              <div className="intro-quote" style={{ marginTop: 20 }}>
                <h3>"수백 톤 구조물의 용접 결함,<br />신호로 먼저 잡아냅니다."</h3>
                <p>대형 구조물의 용접 결함은 발견 후 보수가 극도로 어렵고 비용이 막대합니다. CM 솔루션은 용접 진행 중 실시간으로 결함 신호를 분석하여 사전에 대응합니다.</p>
              </div>
            </div>
            <div className="rounded-img-wrap">
              <img src="https://i.imgur.com/LT8vVlh.jpeg" alt="중공업 산업" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <h3 className="sub-title-left">주요 적용 솔루션</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>대형 구조물 아크 용접 결함 탐지</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>선박 블록, 압력용기, 철골 구조물 등 대형 용접 구조물 제작 시 발생하는 심층 결함을 아크 신호 분석을 통해 비파괴 방식으로 실시간 탐지합니다.</p>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>핵심 생산 설비 이상 조기 감지</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>크레인, 대형 펌프, 압연기 등 중공업 핵심 설비의 진동·전류 신호를 24시간 모니터링하여 예기치 않은 설비 고장으로 인한 대규모 생산 차질을 예방합니다.</p>
            </div>
          </div>
        </>
      )}

      {tab === '3' && (
        <>
          <div className="split-grid">
            <div>
              <span className="section-tag">SECONDARY BATTERY</span>
              <h2 className="main-title">2차 전지 산업</h2>
              <div className="intro-quote" style={{ marginTop: 20 }}>
                <h3>"배터리 한 셀의 불량이<br />전체 팩의 안전을 위협합니다."</h3>
                <p>2차전지 제조에서 용접 불량과 설비 다운타임은 곧 대규모 손실로 이어집니다. CM의 초정밀 신호 분석이 배터리 생산의 완전한 안전을 보장합니다.</p>
              </div>
            </div>
            <div className="rounded-img-wrap">
              <img src="https://i.imgur.com/IQiK4Qs.jpeg" alt="2차전지 산업" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <h3 className="sub-title-left">주요 적용 솔루션</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>배터리 초정밀 용접 품질 검사</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>원통형·각형·파우치형 배터리 캡 어셈블리 용접, 탭 용접 등 초정밀 용접 공정에서 발생하는 미세 결함을 레이저 용접 신호 분석을 통해 실시간으로 검출합니다.</p>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 12 }}>이송 설비 예지보전으로 라인 안정화</h4>
              <p style={{ color: '#555', lineHeight: 1.7 }}>배터리 제조 핵심 공정인 노칭, 권취, 이송 설비의 진동 신호를 실시간 채널별로 분석하여 예기치 않은 설비 다운타임 없이 계획 정비로 전환할 수 있도록 지원합니다.</p>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
