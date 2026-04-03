'use client'
import { useState } from 'react'

const TABS = [
  { id: '1', label: 'CEO 인사말' },
  { id: '2', label: '핵심 경쟁력' },
  { id: '3', label: '적용 분야 및 가치' },
  { id: '4', label: '회사 연혁' },
  { id: '5', label: '인증 및 보유 기술' },
]

const HISTORY = [
  { year: '2026', items: ['AI 예지 보전 솔루션 글로벌 시장 진출 (북미, 동남아시아 지사 설립 추진)', "차세대 초정밀 신호 측정 모듈 'Signal HX-Pro' 시리즈 정식 런칭", '국내 주요 2차 전지 셀 메이커 통합 예지 보전 시스템 전사 구축 완료'] },
  { year: '2025', items: ['국내 최대 자동차 부품사 AI 분석 모듈 공급 계약 체결', 'AI 기반 용접 불량 실시간 검출 시스템(INS LC-AD 시리즈) 자동차 부품 1차 벤더 양산 라인 전면 도입', '기업부설연구소 및 벤처기업 등록', '초고속 신호 분석 핵심 기술 이전'] },
  { year: '2024', items: ['주식회사 씨엠 부설 AI 비전 및 신호처리 연구소 설립', '초고속 샘플링(200kHz) 지원 H/W 데이터 수집 모듈 자체 개발 성공', '중공업 및 조선 분야 실증 사업(PoC) 성공적 완료 및 솔루션 상용화 시작', '시리즈 A (Series A) 투자 유치 성공'] },
  { year: '2023', items: ["'기계 신호 분석 기반 고장 진단 알고리즘' 개발 및 프로토타입 시연", '스마트 제조 혁신 추진단 기술 개발 지원 사업 선정', '중소벤처기업부 초기창업패키지 최우수 기업 선정'] },
  { year: '2022', items: ['주식회사 씨엠 법인 설립', '딥러닝 기반 산업용 비정형 데이터 분석 원천 기술 연구 착수'] },
]

export default function AboutPage() {
  const [tab, setTab] = useState('1')
  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">ABOUT US</span>
        <h2 className="main-title">회사 소개</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => { setTab(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t.label}</a>)}
      </div>

      {tab === '1' && (
        <div className="ceo-message">
          <h3>"기계의 언어를 이해하고,<br />제조의 미래를 예측합니다."</h3>
          <p>안녕하십니까, 주식회사 씨엠 방문을 환영합니다.</p>
          <p>오늘날의 제조 현장에서 '무중단 생산'과 '완벽한 품질'은 기업의 생존과 직결된 핵심 경쟁력입니다. 예기치 못한 고장은 막대한 시간적, 금전적 손실로 이어집니다.</p>
          <p>주식회사 씨엠은 기계가 내뿜는 미세한 진동, 전류, 전압의 변화를 <strong>'기계가 보내는 구조 신호(언어)'</strong>로 바라보았습니다.</p>
          <p>독자적인 고속 신호 처리 하드웨어와 실시간 AI 분석 소프트웨어를 결합하여 <strong>'상태 기반 예지 보전(Predictive Maintenance)'</strong>으로 혁신하고 있습니다.</p>
          <p>끊임없는 기술 개발을 통해 고객사의 설비가 스스로 건강 상태를 진단하고 불량을 사전에 차단하는 진정한 스마트 팩토리를 완성하는 데 앞장서겠습니다. 감사합니다.</p>
          <div style={{ textAlign: 'right', marginTop: 40, fontSize: '1.2rem', color: '#111' }}>주식회사 씨엠 대표이사 <strong>최 철 훈</strong></div>
        </div>
      )}

      {tab === '2' && (
        <>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>산업용 AI 신호 분석의 혁신 리더</h2>
            <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7 }}>하드웨어 설계부터 AI 소프트웨어 분석까지 완벽하게 통합된 <strong>올인원(All-in-One) 솔루션</strong>을 제공합니다.</p>
          </div>
          <h3 className="sub-title">💡 핵심 경쟁력</h3>
          <div className="grid-3">
            {[
              { icon: '📡', title: '독보적인 비정형 신호 처리 기술', desc: '최대 200kHz의 고속 샘플링으로 찰나의 미세한 이상 징후도 놓치지 않고 포착합니다.' },
              { icon: '🧠', title: '실시간 AI 이상 감지 알고리즘', desc: '설비 가동 후 단 1시간 이내에 정상 패턴을 학습하며, 불량 및 고장 징후를 빠르고 정확하게 판별합니다.' },
              { icon: '📊', title: '직관적인 모니터링 및 이력 관리', desc: '실시간 측정 신호 뷰와 분석 히스토리를 직관적인 UI로 제공하고, 데일리 리포트를 자동 생성합니다.' },
            ].map(item => (
              <div key={item.title} className="white-card feature-card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: 20 }}>{item.icon}</span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 15 }}>{item.title}</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === '3' && (
        <>
          <h3 className="sub-title">🏭 주요 적용 분야</h3>
          <div className="grid-2">
            <div className="area-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 15 }}>자동차 및 중공업·조선 분야<br /><span style={{ fontSize: '1rem', color: '#666', fontWeight: 500 }}>(용접 품질 검사)</span></h4>
              <p style={{ color: '#555', lineHeight: 1.6 }}>CO2, MIG, TIG 등 아크 용접 공정에서 발생하는 기공, 균열, 용입 불량 등을 실시간으로 검출하여 불량품 유출을 원천적으로 차단합니다.</p>
            </div>
            <div className="area-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 15 }}>2차 전지 및 첨단 제조 분야<br /><span style={{ fontSize: '1rem', color: '#666', fontWeight: 500 }}>(설비 예지 보전)</span></h4>
              <p style={{ color: '#555', lineHeight: 1.6 }}>원통형 배터리 이송 설비 등 핵심 제조 라인의 진동 신호를 실시간으로 분석하여 예기치 않은 공장 가동 중단을 방지합니다.</p>
            </div>
          </div>
          <h3 className="sub-title" style={{ marginTop: 80 }}>🎯 고객 가치</h3>
          <div className="grid-3">
            {[
              { title: '01. 품질 비용 절감', desc: '실시간 불량 검출을 통한 불량률 최소화 및 생산 수율 극대화' },
              { title: '02. 유지보수 혁신', desc: '고장 예측을 통한 다운타임 최소화 및 수리 비용 대폭 절감' },
              { title: '03. 스마트 팩토리 구현', desc: '실시간 데이터 기반의 공정 가시성 확보 및 선제적 대응 체계 구축' },
            ].map(v => (
              <div key={v.title} className="white-card" style={{ padding: 30 }}>
                <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>{v.title}</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === '4' && (
        <>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>끊임없는 연구 개발과 혁신으로<br />산업용 AI의 표준을 만들어갑니다.</h2>
          </div>
          <div className="history-timeline">
            {HISTORY.map(h => (
              <div key={h.year} className="history-item">
                <div className="history-year">{h.year}</div>
                <ul className="history-list">{h.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === '5' && (
        <>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 50px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>엄격한 글로벌 표준을 충족하는 신뢰성,<br />독보적인 기술 특허로 경쟁력을 입증합니다.</h2>
          </div>

          <h3 className="sub-title-left">01. 주요 인증 현황</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 60 }}>

            {/* 기업부설연구소 */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 16, padding: '30px 20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: '0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#0056b3'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e0e0e0'; }}>
              <div style={{ width: 80, height: 80, margin: '0 auto 16px', background: 'linear-gradient(135deg, #1a3a6b 0%, #0056b3 100%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 6L6 14V22C6 30.8 13.1 39.1 22 41C30.9 39.1 38 30.8 38 22V14L22 6Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
                  <path d="M14 20H30M14 26H26M18 14V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="22" cy="26" r="3" fill="white" fillOpacity="0.8"/>
                </svg>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0056b3', letterSpacing: 1.5, marginBottom: 6 }}>CERTIFIED</div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', marginBottom: 10 }}>기업부설연구소</h5>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, wordBreak: 'keep-all' }}>자체 R&D 역량을 공식 인정받은 기업부설연구소 설립. 핵심 원천기술 개발 기반 구축.</p>
            </div>

            {/* 벤처기업 */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 16, padding: '30px 20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: '0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e63312'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e0e0e0'; }}>
              <div style={{ width: 80, height: 80, margin: '0 auto 16px', background: 'linear-gradient(135deg, #b5200e 0%, #e63312 100%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <polygon points="22,6 28,16 40,18 31,27 33,39 22,33 11,39 13,27 4,18 16,16" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
                  <path d="M16 22L20 26L28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e63312', letterSpacing: 1.5, marginBottom: 6 }}>VENTURE</div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', marginBottom: 10 }}>벤처기업 인증</h5>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, wordBreak: 'keep-all' }}>기술력과 성장 가능성을 인정받은 벤처기업 공식 등록. 혁신 기술 기반 고성장 기업.</p>
            </div>

            {/* ISO 9001 */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 16, padding: '30px 20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: '0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#0077b6'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e0e0e0'; }}>
              <div style={{ width: 80, height: 80, margin: '0 auto 16px', background: 'linear-gradient(135deg, #023e7d 0%, #0077b6 100%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 900, letterSpacing: 1, opacity: 0.85 }}>ISO</span>
                <span style={{ color: 'white', fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.1 }}>9001</span>
                <span style={{ color: 'white', fontSize: '0.55rem', fontWeight: 700, opacity: 0.75, letterSpacing: 0.5 }}>CERTIFIED</span>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0077b6', letterSpacing: 1.5, marginBottom: 6 }}>QUALITY</div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', marginBottom: 10 }}>ISO 9001</h5>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, wordBreak: 'keep-all' }}>품질경영시스템 국제 인증. 설계부터 유지보수까지 국제 표준 체계적 품질 관리.</p>
            </div>

            {/* ISO 14001 */}
            <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 16, padding: '30px 20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: '0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#2d6a4f'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e0e0e0'; }}>
              <div style={{ width: 80, height: 80, margin: '0 auto 16px', background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 900, letterSpacing: 1, opacity: 0.85 }}>ISO</span>
                <span style={{ color: 'white', fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.1 }}>14001</span>
                <span style={{ color: 'white', fontSize: '0.55rem', fontWeight: 700, opacity: 0.75, letterSpacing: 0.5 }}>CERTIFIED</span>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2d6a4f', letterSpacing: 1.5, marginBottom: 6 }}>ENVIRONMENT</div>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', marginBottom: 10 }}>ISO 14001</h5>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, wordBreak: 'keep-all' }}>환경경영시스템 국제 인증. 친환경 제조 경영과 탄소 저감을 통한 지속 가능 경영.</p>
            </div>

          </div>

          <h3 className="sub-title-left" style={{ marginTop: 20 }}>02. 핵심 보유 기술 및 지식재산권</h3>
          <div className="patent-list">
            {[
              { tag: '기술이전', title: '초고속 신호 분석 핵심 기술 이전', desc: '200kHz 이상 초고속 샘플링 기반 AI 이상 탐지 알고리즘의 공식 기술 이전 계약 완료. 산업 현장 적용을 위한 원천 기술 라이선스를 보유합니다.' },
              { tag: '특허 기술 1', title: '비정형 다중 센서 신호를 활용한 설비 이상 징후 조기 탐지 방법', desc: '이종 센서 데이터를 융합하여 예측 정확도를 99% 이상으로 끌어올리는 AI 알고리즘 기술입니다.' },
              { tag: '특허 기술 2', title: '산업 환경 맞춤형 고주파 노이즈 동적 필터링 시스템', desc: '기계 자체의 진동과 환경 백색 소음을 AI가 실시간으로 분리하여 순수 이상 신호만 추출합니다.' },
              { tag: '특허 기술 3', title: 'Auto-Trigger 기반 초고속 데이터 분산 수집 및 압축 전송 시스템', desc: '방대한 고속 샘플링 데이터를 네트워크 과부하 없이 안전하게 전송하는 핵심 통신 제어 기술입니다.' },
            ].map(p => (
              <div key={p.tag} className="patent-item">
                <span className="patent-tag">{p.tag}</span>
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  )
}
