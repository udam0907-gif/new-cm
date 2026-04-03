'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const PARTNERS = [
  'HYUNDAI','KIA','HD HYUNDAI','HANWHA OCEAN','SAMSUNG SDI',
  'LG ENERGY SOLUTION','SK ON','POSCO FUTURE M','DOOSAN','LS ELECTRIC',
]

const SOLUTIONS = [
  {
    tag: '용접 품질 검사',
    title: '실시간 용접 불량,\n발생 즉시 차단합니다.',
    desc: 'CO2·MIG·TIG·레이저 용접 전 공정에서 기공, 균열, Burn-through를 AI가 실시간으로 검출합니다.',
    metric: '99.2%', metricLabel: '불량 검출 정확도',
    img: 'https://i.imgur.com/ME4TZhs.jpeg', link: '/product',
  },
  {
    tag: '설비 예지보전',
    title: '고장 나기 전에\n먼저 알아냅니다.',
    desc: '진동·전류·온도 신호를 실시간 분석하여 설비 고장 징후를 선제적으로 감지하고 다운타임을 제로화합니다.',
    metric: '57%', metricLabel: '다운타임 감소',
    img: 'https://i.imgur.com/VkwOsd1.jpeg', link: '/product',
  },
  {
    tag: '2차전지 품질',
    title: '배터리 셀 하나도\n놓치지 않습니다.',
    desc: '초음파·레이저 용접 전 공정의 미세 불량을 200kHz 초고속 샘플링으로 전수 검사합니다.',
    metric: '94%', metricLabel: '불량 유출 감소',
    img: 'https://i.imgur.com/IQiK4Qs.jpeg', link: '/industry',
  },
]

const STATS = [
  { num: 200, unit: 'kHz', label: '초고속 샘플링 속도' },
  { num: 1,   unit: 'Hr',  label: 'AI 자율 학습 완료' },
  { num: 99,  unit: '%',   label: '불량 검출 정확도' },
  { num: 57,  unit: '%',   label: '다운타임 감소율' },
]

const FLOW = [
  { icon: '🏭', title: '산업 설비',    sub: 'Industrial Equipment' },
  { icon: '📡', title: '신호 수집',    sub: 'Signal Acquisition' },
  { icon: '⚡', title: 'DAQ 처리',     sub: 'High-Speed DAQ' },
  { icon: '🧠', title: 'Edge AI 분석', sub: 'Real-time Analysis' },
  { icon: '🔍', title: '이상 탐지',    sub: 'Anomaly Detection' },
  { icon: '🛡️', title: '예지 보전',   sub: 'Predictive Maintenance' },
]

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Counter({ target, unit }: { target: number; unit: string }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useReveal(0.3)
  useEffect(() => {
    if (!visible) return
    let cur = 0
    const step = Math.max(1, Math.ceil(target / 80))
    const t = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(cur)
    }, 18)
    return () => clearInterval(t)
  }, [visible, target])
  return <span ref={ref}>{count}{unit}</span>
}

export default function HomePage() {
  const hero = useReveal(0)
  const s1 = useReveal()
  const s2 = useReveal()
  const s3 = useReveal()
  const s4 = useReveal()
  const s5 = useReveal()

  const ACCENT = '#0056b3'

  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-wrap">
        <video
          autoPlay loop muted playsInline
          className="hero-video"
          src="/video/0313.mp4"
        />
        <div className="hero-overlay" />

        <div
          ref={hero.ref}
          className={`hero-content${hero.visible ? ' reveal' : ''}`}
        >
          <div className="hero-badge">
            <span className="hero-dot" />
            <span>AI SIGNAL ANALYSIS PLATFORM</span>
          </div>
          <h1 className="hero-title">
            기계의 신호를 읽고,<br />
            <span style={{ color: '#4FC3F7' }}>고장을 예측합니다.</span>
          </h1>
          <p className="hero-desc">
            200kHz 초고속 신호 분석부터 Edge AI 실시간 판정까지,<br className="pc-only" />
            씨엠의 올인원 플랫폼이 산업 현장을 수호합니다.
          </p>
          <div className="hero-btns">
            <Link href="/product" className="btn-primary">솔루션 살펴보기 →</Link>
            <Link href="/contents" className="btn-outline">도입 문의하기</Link>
          </div>
        </div>

        <div className="scroll-hint">
          <span className="scroll-txt">SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ───── 파트너 마퀴 ───── */}
      <section className="marquee-section">
        <div className="marquee-mask">
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="marquee-item">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <section className="section bg-gray">
        <div ref={s1.ref} className={`container-inner${s1.visible ? ' reveal' : ''}`}>
          <div className="section-label">TECHNOLOGY SPECS</div>
          <h2 className="section-h2">숫자로 증명하는 씨엠의 기술력</h2>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-num"><Counter target={s.num} unit={s.unit} /></div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SOLUTIONS ───── */}
      <section className="section bg-white">
        <div ref={s2.ref} className={`container-inner${s2.visible ? ' reveal' : ''}`}>
          <div className="section-top">
            <div>
              <div className="section-label">SOLUTIONS</div>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>현장 맞춤형 AI 솔루션</h2>
            </div>
            <Link href="/product" className="link-more">전체 보기 →</Link>
          </div>

          <div className="sol-list">
            {SOLUTIONS.map((sol, i) => (
              <div key={i} className={`sol-card${i % 2 === 1 ? ' sol-reverse' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                {/* 이미지 */}
                <div className="sol-img-wrap">
                  <img src={sol.img} alt={sol.title} className="sol-img" />
                </div>
                {/* 텍스트 */}
                <div className="sol-body">
                  <span className="sol-tag">{sol.tag}</span>
                  <h3 className="sol-title">{sol.title}</h3>
                  <p className="sol-desc">{sol.desc}</p>
                  <div className="sol-metric">
                    <span className="sol-metric-num">{sol.metric}</span>
                    <span className="sol-metric-lbl">{sol.metricLabel}</span>
                  </div>
                  <Link href={sol.link} className="sol-link">자세히 보기 →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PIPELINE ───── */}
      <section className="section bg-gray">
        <div ref={s3.ref} className={`container-inner${s3.visible ? ' reveal' : ''}`}>
          <div className="section-label">TECHNOLOGY PIPELINE</div>
          <h2 className="section-h2">
            데이터에서 인사이트까지,<br />
            <span style={{ color: ACCENT }}>6단계 완전 자동화</span>
          </h2>
          <div className="flow-list">
            {FLOW.map((f, i) => (
              <div key={i} className="flow-item" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="flow-icon">{f.icon}</span>
                <div className="flow-text">
                  <div className="flow-title">{f.title}</div>
                  <div className="flow-sub">{f.sub}</div>
                </div>
                {i < FLOW.length - 1
                  ? <span className="flow-arrow">↓</span>
                  : <span className="flow-done">COMPLETE</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INDUSTRIES ───── */}
      <section className="section bg-white">
        <div ref={s4.ref} className={`container-inner${s4.visible ? ' reveal' : ''}`}>
          <div className="section-top">
            <div>
              <div className="section-label">TARGET INDUSTRIES</div>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>모든 제조 산업의 파트너</h2>
            </div>
            <Link href="/industry" className="link-more">전체 보기 →</Link>
          </div>
          <div className="ind-grid">
            {[
              { title: '자동차 산업',  sub: 'Automotive',    desc: '차체 용접 불량 검출 및 EV 구동 부품 고장 예측', img: 'https://i.imgur.com/ME4TZhs.jpeg' },
              { title: '중공업·조선', sub: 'Heavy Industry', desc: '대형 구조물 아크 용접 결함 실시간 탐지',         img: 'https://i.imgur.com/LT8vVlh.jpeg' },
              { title: '2차 전지',    sub: 'Battery',        desc: '배터리 셀 초정밀 용접 검사 및 예지보전',         img: 'https://i.imgur.com/IQiK4Qs.jpeg' },
            ].map((ind, i) => (
              <Link key={i} href="/industry" className="ind-card"
                style={{ transitionDelay: `${i * 0.12}s` }}>
                <img src={ind.img} alt={ind.title} className="ind-img" />
                <div className="ind-overlay" />
                <div className="ind-body">
                  <p className="ind-sub">{ind.sub}</p>
                  <h3 className="ind-title">{ind.title}</h3>
                  <p className="ind-desc">{ind.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 파트너 로고 2 ───── */}
      <section className="section bg-gray" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div ref={s5.ref} className={`trusted-label${s5.visible ? ' reveal' : ''}`}>
          TRUSTED BY INDUSTRY LEADERS
        </div>
        <div className="marquee-mask" style={{ marginTop: 32 }}>
          <div className="marquee-track marquee-slow">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="marquee-item">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="cta-inner">
          <div className="section-label" style={{ color: '#4FC3F7' }}>GET STARTED</div>
          <h2 className="cta-title">지금 바로 시작하세요.</h2>
          <p className="cta-desc">
            현장 방문 기술 데모(PoC)부터 도입 컨설팅까지,<br className="pc-only" />
            전문 엔지니어가 직접 제안드립니다.
          </p>
          <Link href="/contents" className="btn-cta">도입 문의하기 →</Link>
        </div>
      </section>

      {/* ───── 전역 스타일 ───── */}
      <style>{`
        /* ── 기본 ── */
        .section { padding: 100px 5%; }
        .bg-white { background: #fff; }
        .bg-gray  { background: #f6f8fc; }
        .container-inner { max-width: 1280px; margin: 0 auto; opacity: 0; transform: translateY(36px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .container-inner.reveal { opacity: 1; transform: translateY(0); }
        .section-label { color: #0056b3; font-size: 0.75rem; font-weight: 800; letter-spacing: 3px; margin-bottom: 14px; }
        .section-h2 { color: #0a0f1e; font-size: clamp(1.7rem, 3.5vw, 2.8rem); font-weight: 900; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 48px; word-break: keep-all; }
        .section-top { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 44px; }
        .link-more { color: #0056b3; font-size: 0.9rem; font-weight: 700; border-bottom: 1px solid #0056b355; padding-bottom: 2px; white-space: nowrap; }
        .pc-only { display: block; }

        /* ── Hero ── */
        .hero-wrap { position: relative; width: 100vw; height: 100vh; min-height: 600px; background: #0a0f1e; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.42; }
        .hero-video::-webkit-media-controls { display: none !important; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,15,30,0.45) 0%, rgba(10,15,30,0.65) 60%, rgba(10,15,30,0.92) 100%); z-index: 1; }
        .hero-content { position: relative; z-index: 2; text-align: center; padding: 0 20px; max-width: 860px; opacity: 0; transform: translateY(30px); transition: opacity 1s ease, transform 1s ease; }
        .hero-content.reveal { opacity: 1; transform: translateY(0); }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.15); border-radius: 30px; padding: 8px 18px; margin-bottom: 30px; }
        .hero-dot { width: 7px; height: 7px; border-radius: 50%; background: #4FC3F7; box-shadow: 0 0 8px #4FC3F7; flex-shrink: 0; }
        .hero-badge span:last-child { color: rgba(255,255,255,0.8); font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; }
        .hero-title { color: #fff; font-size: clamp(2.2rem, 6vw, 4.8rem); font-weight: 900; line-height: 1.18; letter-spacing: -1px; margin-bottom: 22px; word-break: keep-all; }
        .hero-desc { color: rgba(255,255,255,0.65); font-size: clamp(0.95rem, 2vw, 1.15rem); line-height: 1.85; margin-bottom: 40px; word-break: keep-all; }
        .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-primary { display: inline-flex; align-items: center; background: #4FC3F7; color: #000; padding: 14px 32px; border-radius: 6px; font-weight: 800; font-size: 0.95rem; transition: background 0.25s; }
        .btn-primary:hover { background: #fff; }
        .btn-outline { display: inline-flex; align-items: center; background: transparent; color: #fff; padding: 14px 32px; border-radius: 6px; font-weight: 700; font-size: 0.95rem; border: 1px solid rgba(255,255,255,0.35); transition: background 0.25s; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }
        .scroll-hint { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .scroll-txt { color: rgba(255,255,255,0.3); font-size: 0.65rem; letter-spacing: 3px; }
        .scroll-line { width: 1px; height: 46px; background: linear-gradient(to bottom, rgba(255,255,255,0.35), transparent); animation: scrollFade 1.8s ease infinite; }

        /* ── 마퀴 ── */
        .marquee-section { background: #fff; padding: 18px 0; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; overflow: hidden; }
        .marquee-mask { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent); mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent); }
        .marquee-track { display: flex; width: max-content; animation: marquee 26s linear infinite; }
        .marquee-slow { animation-duration: 34s; }
        .marquee-item { padding: 12px 36px; border-right: 1px solid #eee; color: #bbb; font-size: 0.75rem; font-weight: 800; letter-spacing: 1.8px; white-space: nowrap; }

        /* ── Stats ── */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: #dde3ef; border: 1px solid #dde3ef; border-radius: 10px; overflow: hidden; }
        .stat-card { background: #fff; padding: 44px 32px; opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .container-inner.reveal .stat-card { opacity: 1; transform: translateY(0); }
        .stat-num { font-size: clamp(2.6rem, 4.5vw, 3.8rem); font-weight: 900; color: #0056b3; line-height: 1; margin-bottom: 10px; letter-spacing: -2px; }
        .stat-lbl { color: #999; font-size: 0.85rem; font-weight: 500; }

        /* ── Solutions ── */
        .sol-list { display: flex; flex-direction: column; gap: 3px; }
        .sol-card { display: grid; grid-template-columns: 1fr 1fr; border-radius: 12px; overflow: hidden; border: 1px solid #eaecf4; min-height: 380px; opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .container-inner.reveal .sol-card { opacity: 1; transform: translateY(0); }
        .sol-card.sol-reverse .sol-img-wrap { order: 1; }
        .sol-card.sol-reverse .sol-body    { order: 0; }
        .sol-img-wrap { overflow: hidden; min-height: 260px; }
        .sol-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s ease; }
        .sol-img-wrap:hover .sol-img { transform: scale(1.05); }
        .sol-body { background: #fff; padding: 48px 44px; display: flex; flex-direction: column; justify-content: center; }
        .sol-tag { display: inline-block; padding: 5px 14px; background: #e8f2ff; color: #0056b3; font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px; border-radius: 4px; margin-bottom: 20px; width: fit-content; }
        .sol-title { color: #0a0f1e; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 900; line-height: 1.3; margin-bottom: 16px; white-space: pre-line; letter-spacing: -0.3px; word-break: keep-all; }
        .sol-desc { color: #666; font-size: 0.97rem; line-height: 1.8; margin-bottom: 28px; word-break: keep-all; }
        .sol-metric { display: inline-flex; align-items: center; gap: 14px; padding: 16px 22px; background: #f4f8ff; border: 1px solid #d4e4ff; border-radius: 8px; margin-bottom: 28px; width: fit-content; }
        .sol-metric-num { font-size: 2rem; font-weight: 900; color: #0056b3; line-height: 1; }
        .sol-metric-lbl { color: #888; font-size: 0.82rem; line-height: 1.4; }
        .sol-link { color: #0056b3; font-weight: 700; font-size: 0.92rem; border-bottom: 1px solid #0056b340; padding-bottom: 2px; width: fit-content; }

        /* ── Flow ── */
        .flow-list { display: flex; flex-direction: column; gap: 2px; }
        .flow-item { display: flex; align-items: center; gap: 24px; padding: 24px 32px; background: #fff; border-radius: 8px; border: 1px solid #eaecf4; transition: border-color 0.25s, background 0.25s, transform 0.25s; cursor: default; opacity: 0; transform: translateX(-24px); }
        .container-inner.reveal .flow-item { opacity: 1; transform: translateX(0); transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.25s, background 0.25s; }
        .flow-item:hover { border-color: #0056b3; background: #f0f7ff; transform: translateX(5px); }
        .flow-num { font-size: 0.68rem; font-weight: 900; color: #ccc; width: 20px; flex-shrink: 0; }
        .flow-icon { font-size: 1.5rem; flex-shrink: 0; }
        .flow-text { flex: 1; }
        .flow-title { color: #111; font-weight: 800; font-size: 0.97rem; margin-bottom: 2px; }
        .flow-sub { color: #aaa; font-size: 0.72rem; letter-spacing: 0.8px; }
        .flow-arrow { color: #ccc; font-size: 0.95rem; }
        .flow-done { padding: 5px 12px; background: #e8f2ff; color: #0056b3; font-size: 0.7rem; font-weight: 800; border-radius: 4px; letter-spacing: 0.8px; }

        /* ── Industries ── */
        .ind-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .ind-card { position: relative; height: 340px; overflow: hidden; display: block; border-radius: 12px; opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .container-inner.reveal .ind-card { opacity: 1; transform: translateY(0); }
        .ind-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s ease; }
        .ind-card:hover .ind-img { transform: scale(1.07); }
        .ind-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 60%); }
        .ind-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; }
        .ind-sub { color: rgba(255,255,255,0.5); font-size: 0.68rem; letter-spacing: 2px; margin-bottom: 5px; }
        .ind-title { color: #fff; font-size: 1.25rem; font-weight: 800; margin-bottom: 5px; }
        .ind-desc { color: rgba(255,255,255,0.65); font-size: 0.84rem; line-height: 1.5; word-break: keep-all; }

        /* ── Trusted ── */
        .trusted-label { text-align: center; color: #bbb; font-size: 0.72rem; font-weight: 800; letter-spacing: 3px; opacity: 0; transform: translateY(14px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .trusted-label.reveal { opacity: 1; transform: translateY(0); }

        /* ── CTA ── */
        .cta-section { background: #0a0f1e; padding: 130px 5%; text-align: center; position: relative; overflow: hidden; }
        .cta-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(0,86,179,0.12) 0%, transparent 65%); pointer-events: none; }
        .cta-inner { position: relative; max-width: 700px; margin: 0 auto; }
        .cta-title { color: #fff; font-size: clamp(2rem, 4.5vw, 3.8rem); font-weight: 900; line-height: 1.2; letter-spacing: -1px; margin-bottom: 20px; word-break: keep-all; }
        .cta-desc { color: rgba(255,255,255,0.5); font-size: 1rem; line-height: 1.9; margin-bottom: 46px; word-break: keep-all; }
        .btn-cta { display: inline-flex; align-items: center; background: #0056b3; color: #fff; padding: 17px 44px; border-radius: 6px; font-weight: 800; font-size: 1rem; transition: background 0.25s, color 0.25s; }
        .btn-cta:hover { background: #4FC3F7; color: #000; }

        /* ── 애니메이션 ── */
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollFade { 0% { opacity:0; transform:scaleY(0); transform-origin:top; } 40% { opacity:1; transform:scaleY(1); transform-origin:top; } 60% { opacity:1; transform:scaleY(1); transform-origin:bottom; } 100% { opacity:0; transform:scaleY(0); transform-origin:bottom; } }
        video::-webkit-media-controls, video::-webkit-media-controls-enclosure, video::-webkit-media-controls-overlay-play-button { display:none !important; opacity:0 !important; }

        /* ── 태블릿 (768px 이하) ── */
        @media (max-width: 768px) {
          .section { padding: 72px 5%; }
          .pc-only { display: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-card { padding: 32px 24px; }

          /* Solutions: 모바일 세로 레이아웃 */
          .sol-card { grid-template-columns: 1fr; min-height: unset; }
          .sol-card.sol-reverse .sol-img-wrap { order: 0; }
          .sol-card.sol-reverse .sol-body    { order: 1; }
          .sol-img-wrap { min-height: 220px; height: 220px; }
          .sol-body { padding: 28px 24px; }
          .sol-title { font-size: 1.3rem; }
          .sol-metric { padding: 12px 18px; }
          .sol-metric-num { font-size: 1.7rem; }

          /* Flow */
          .flow-item { padding: 18px 20px; gap: 16px; }

          /* Industries: 모바일 1열 */
          .ind-grid { grid-template-columns: 1fr; gap: 12px; }
          .ind-card { height: 280px; }

          /* Hero */
          .hero-title { font-size: 2.2rem; }
          .hero-badge span:last-child { font-size: 0.65rem; letter-spacing: 1.5px; }
          .btn-primary, .btn-outline { padding: 13px 26px; font-size: 0.9rem; }

          /* CTA */
          .cta-section { padding: 90px 5%; }
          .cta-glow { width: 300px; height: 300px; }
        }

        /* ── 소형 모바일 (480px 이하) ── */
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1px; }
          .section-h2 { font-size: 1.6rem; }
          .hero-title { font-size: 1.9rem; }
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; justify-content: center; }
          .flow-item:hover { transform: none; }
          .sol-body { padding: 22px 18px; }
        }
      `}</style>
    </>
  )
}
