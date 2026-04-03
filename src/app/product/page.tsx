'use client'
import { useState } from 'react'

const TABS = [
  { id: '1', label: '솔루션 총괄' },
  { id: '2', label: '하드웨어 (H/W)' },
  { id: '3', label: '소프트웨어 (S/W)' },
]

const FLOW = ['🏭 산업 설비','📡 센서 수집','⚡ DAQ 모듈','🧠 AI 분석','🔍 이상 탐지','🩺 상태 진단','🖥️ 스마트 운영']

const ARCH = [
  { step: '1️⃣ Sensor Layer', desc: '산업 설비에 설치된 센서가 진동, 전류, 온도, 회전 등 다양한 데이터를 실시간으로 수집합니다.' },
  { step: '2️⃣ Edge Data Acquisition', desc: '자체 개발한 DAQ 모듈이 고속 샘플링, 하드웨어 노이즈 제거, 데이터 전처리를 현장(Edge)에서 즉각 수행합니다.' },
  { step: '3️⃣ AI Signal Analysis', desc: '수집된 정밀 데이터를 바탕으로 AI 알고리즘이 패턴 분석, 이상 탐지, 고장 예측을 수행합니다.' },
  { step: '4️⃣ Factory Operation Platform', desc: '운영 시스템을 통해 실시간 알람, 데일리 리포트, 공정 관리 대시보드를 관리자에게 제공합니다.' },
]

export default function ProductPage() {
  const [tab, setTab] = useState('1')
  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">PRODUCTS &amp; SOLUTIONS</span>
        <h2 className="main-title">AI 통합 솔루션</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => { setTab(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t.label}</a>)}
      </div>

      {tab === '1' && (
        <>
          <div className="intro-quote">
            <h3>"하드웨어의 정밀함과 소프트웨어의 통찰력이 만나,<br />제조 현장의 무결점을 완성합니다."</h3>
            <p>데이터 수집(H/W)부터 분석, 운영 및 제어(S/W)까지 <strong>완전히 통합된 산업 AI 플랫폼</strong>을 제공합니다.</p>
          </div>
          <h3 className="sub-title-left">🔄 CM 기술 적용 흐름 (Data Pipeline)</h3>
          <div className="tech-flow-container">
            {FLOW.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="flow-step">
                  <span className="flow-icon">{s.split(' ')[0]}</span>
                  <h5>{s.split(' ').slice(1).join(' ')}</h5>
                </div>
                {i < FLOW.length - 1 && <div className="flow-arrow">➔</div>}
              </div>
            ))}
          </div>
          <h3 className="sub-title-left" style={{ marginTop: 60 }}>🏗️ AI 스마트 팩토리 아키텍처</h3>
          <div className="split-grid">
            <ul className="arch-list">
              {ARCH.map(a => <li key={a.step}><strong>{a.step}</strong><p>{a.desc}</p></li>)}
            </ul>
            <div className="rounded-img-wrap">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" alt="Architecture" />
            </div>
          </div>
        </>
      )}

      {tab === '2' && (
        <>
          <div className="intro-quote">
            <h3>"가장 가혹한 산업 현장에서도<br />왜곡 없는 순수한 데이터를 추출합니다."</h3>
            <p>CM의 하드웨어 라인업은 극심한 노이즈 속에서도 기계 본연의 신호를 정밀하게 획득할 수 있도록 <strong>현장 맞춤형 산업 장비</strong>로 특화 설계되었습니다.</p>
          </div>
          <h3 className="sub-title-left">01. 산업 환경 완벽 대응 설계</h3>
          <div className="split-grid">
            <div className="info-card">
              <ul className="card-list" style={{ fontSize: '1.05rem' }}>
                <li><strong>고온 환경 대응:</strong> 설비 발열에도 성능 저하 없는 방열 설계</li>
                <li><strong>전자기 노이즈 차폐:</strong> 용접 및 대형 모터 등 EMI 쉴딩 완벽 적용</li>
                <li><strong>먼지 및 분진 대응:</strong> 쇳가루나 절삭유가 날리는 현장을 위한 방진/방수</li>
                <li><strong>24시간 연속 운용:</strong> 멈추지 않는 공장 라인을 위한 내구성 확보</li>
              </ul>
            </div>
            <div className="rounded-img-wrap">
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80" alt="센서" />
            </div>
          </div>
          <h3 className="sub-title-left">02. 확장 가능한 다차원 센서 구조</h3>
          <div className="grid-3">
            {[
              { title: '가속도 센서 (진동)', desc: '베어링 마모, 구동축 이상 정밀 감지' },
              { title: '전류/전압 센서', desc: '아크 용접 전압 강하, 과부하 모니터링' },
              { title: '음향/온도 센서', desc: '비정상 소음 및 과열 징후 통합 감지' },
            ].map(s => (
              <div key={s.title} className="white-card" style={{ textAlign: 'center', padding: '25px 20px' }}>
                <h4 style={{ color: '#111', marginBottom: 10 }}>{s.title}</h4>
                <p style={{ color: '#666' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="sub-title-left" style={{ marginTop: 40 }}>03. 기존 생산 설비와의 호환성</h3>
          <div className="info-card">
            <ul className="card-list">
              <li><strong>PLC 연동:</strong> 인터록 제어 및 실시간 통신 지원</li>
              <li><strong>산업용 네트워크:</strong> 공장 내 통신 프로토콜 완벽 호환</li>
              <li><strong>기존 센서 재활용:</strong> 이미 설치된 센서 데이터 통합 수집</li>
            </ul>
          </div>
        </>
      )}

      {tab === '3' && (
        <>
          <div className="img-banner">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Dashboard" />
          </div>
          <div className="intro-quote">
            <h3>"데이터를 넘어 운영의 해답을 제시하는<br />스마트 공장 운영 플랫폼."</h3>
            <p>CM 소프트웨어는 AI 기반의 통찰력을 시각화하여, 현장 관리자가 전체 공정을 손쉽게 관리할 수 있도록 돕는 <strong>통합 산업 AI 플랫폼</strong>입니다.</p>
          </div>
          <h3 className="sub-title-left">01. 스마트 공장 운영 플랫폼</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>실시간 설비 모니터링</h4>
              <p>직관적인 대시보드를 통해 <strong>현재 설비의 가동 상태, 채널별 진동 파형, 이상 알람</strong>을 딜레이 없이 실시간으로 파악할 수 있습니다.</p>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>스마트 리포트 시스템</h4>
              <p>시스템이 자동으로 <strong>설비 상태 종합 보고서, 이상 발생 및 조치 기록, 정기 유지보수 리포트</strong>를 매일 생성합니다.</p>
            </div>
          </div>
          <h3 className="sub-title-left" style={{ marginTop: 60 }}>02. 독보적인 AI 신호 분석 및 예방</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>정밀한 AI 이상 탐지</h4>
              <p>AI 알고리즘이 1시간 만에 정상 패턴을 딥러닝으로 학습합니다. <strong>진동 패턴의 미세한 이상, 이상 주파수 대역 증가, 장비 부하 변화</strong>를 포착하여 고장을 조기에 탐지합니다.</p>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>예지 보전 관리 (Predictive Maintenance)</h4>
              <p>AI 분석 결과를 기반으로 <strong>부품의 잔여 수명과 교체 시기 예측, 최적의 유지보수(P/M) 일정 관리</strong>를 제안하여 다운타임 제로(0)를 실현합니다.</p>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
