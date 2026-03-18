import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  title: '주식회사 씨엠 | CM Co., Ltd.',
  description: '기계시스템의 고장 진단 전문 기업. AI 기반 예지보전 솔루션.',
}

const whyCards = [
  { title: '독자적 H/W 설계', desc: '최대 200kHz 초고속 샘플링 모듈과 극한의 현장 환경을 견디는 강력한 내구성', img: 'https://i.imgur.com/IMWv841.jpeg' },
  { title: '실시간 AI 분석', desc: '단 1시간의 자율 학습만으로 설비의 미세한 이상 징후와 불량을 즉각 판별', img: 'https://i.imgur.com/5uMryPI.png' },
  { title: '완벽한 수직 계열화', desc: '현장 센싱부터 시각화 대시보드, 인터록 제어까지 지연 없는 통합 아키텍처 제공', img: 'https://i.imgur.com/VkwOsd1.jpeg' },
]

const industries = [
  { title: '자동차 산업', desc: '차체 용접 불량 검출 및 모터 조립 검사', img: 'https://i.imgur.com/ME4TZhs.jpeg' },
  { title: '중공업·조선 산업', desc: '대형 구조물 아크 용접 심층 결함 탐지', img: 'https://i.imgur.com/LT8vVlh.jpeg' },
  { title: '2차 전지 산업', desc: '배터리 초정밀 용접 검사 및 예지 보전', img: 'https://i.imgur.com/IQiK4Qs.jpeg' },
]

const partners = ['HYUNDAI','KIA','HD HYUNDAI','HANWHA OCEAN','SAMSUNG SDI','LG ENERGY SOLUTION','SK ON','POSCO FUTURE M']

const steps = [
  { step: 'STEP 1', title: '산업 설비', desc: '제조 공장에서 작동하는 설비는 진동, 전류, 온도 등 다양한 물리 신호를 발생시킵니다.', pts: ['공장 자동화 라인','용접 설비','모터 및 구동계'] },
  { step: 'STEP 2', title: '센서 데이터 수집', desc: 'CM 솔루션은 고정밀 산업용 센서를 통해 설비에서 발생하는 물리적 변화 신호를 실시간으로 수집합니다.', pts: ['진동 및 전류 데이터','설비 회전 및 온도','비정상 음향 탐지'] },
  { step: 'STEP 3', title: '고속 데이터 수집 (DAQ)', desc: '수집된 신호는 CM의 독자적인 고속 DAQ 장치로 처리됩니다. 초고속 샘플링으로 미세한 이상 신호까지 포착합니다.', pts: ['200kHz 초고속 샘플링','현장 노이즈 필터링','초정밀 신호 전처리'] },
  { step: 'STEP 4', title: 'Edge AI 분석', desc: '정제된 신호 데이터는 현장의 Edge AI 엔진을 통해 실시간으로 분석됩니다.', pts: ['Auto-Trigger 신호 분석','지능형 패턴 인식','실시간 딥러닝 병렬 처리'] },
  { step: 'STEP 5', title: '이상 탐지 및 예측', desc: 'AI 분석 결과를 기반으로 설비의 이상 상태를 즉각 탐지하고 고장 전 예지 보전을 가능하게 합니다.', pts: ['다운타임 방지','불량품 발생 원천 차단','공정 수율 및 품질 향상'] },
  { step: 'STEP 6', title: '스마트 공장 운영', desc: '모든 분석 결과는 관리자의 실시간 대시보드로 즉각 제공됩니다.', pts: ['실시간 통합 대시보드','이상 알람 및 인터록 제어','유지보수 자동화 리포트'] },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* WHY CHOOSE US */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2 className="main-title">씨엠을 선택해야 하는 이유</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>파편화된 기술이 아닌, 완벽하게 통합된 올인원(All-in-One) 솔루션입니다.</p>
          </div>
          <div className="grid-3 mobile-slider">
            {whyCards.map(c => (
              <div key={c.title} className="image-card">
                <div className="image-wrap"><img src={c.img} alt={c.title} /></div>
                <div className="image-card-body"><h4>{c.title}</h4><p>{c.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS AREAS */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">BUSINESS AREAS</span>
            <h2 className="main-title">현장 맞춤형 적용 분야</h2>
          </div>
          <div className="grid-3 mobile-slider">
            {industries.map(c => (
              <Link key={c.title} href="/industry" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="image-card">
                  <div className="image-wrap"><img src={c.img} alt={c.title} /></div>
                  <div className="image-card-body"><h4>{c.title}</h4><p>{c.desc}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="industry-logo-marquee">
        <div className="logo-marquee">
          <div className="logo-track">
            {[...partners, ...partners].map((p, i) => <div key={i} className="logo-item">{p}</div>)}
          </div>
        </div>
      </section>

      {/* CM TECHNOLOGY */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-head center">
            <span className="section-tag">CM TECHNOLOGY</span>
            <h2 className="main-title" style={{ marginBottom: 10 }}>AI 기반 산업 설비 신호 분석 플랫폼</h2>
            <h3 style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.4rem', marginBottom: 20 }}>기계의 신호를 읽고 고장을 예측합니다.</h3>
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 800, margin: '0 auto' }}>
              CM의 산업 AI 플랫폼은 센서 데이터 수집부터 AI 분석, 설비 진단, 공장 운영까지<br />
              제조 현장의 모든 데이터를 지능적으로 연결합니다.
            </p>
          </div>
          <div className="grid-3">
            {steps.map(s => (
              <div key={s.step} className="tech-card">
                <span className="step-badge">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="tech-points">{s.pts.map(pt => <span key={pt}>{pt}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>산업 현장의 완벽한 지능화,<br />주식회사 씨엠과 함께 시작하세요.</h2>
          <p>현장 맞춤형 솔루션 제안 및 기술 데모(PoC)를 원하신다면 언제든 문의해 주십시오.</p>
          <Link href="/contents" className="btn-white">솔루션 도입 문의하기 ➔</Link>
        </div>
      </section>
    </>
  )
}
