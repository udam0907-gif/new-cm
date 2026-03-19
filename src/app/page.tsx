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
    metric: '99.2%',
    metricLabel: '불량 검출 정확도',
    img: 'https://i.imgur.com/ME4TZhs.jpeg',
    link: '/product',
  },
  {
    tag: '설비 예지보전',
    title: '고장 나기 전에\n먼저 알아냅니다.',
    desc: '진동·전류·온도 신호를 실시간 분석하여 설비 고장 징후를 선제적으로 감지하고 다운타임을 제로화합니다.',
    metric: '57%',
    metricLabel: '다운타임 감소',
    img: 'https://i.imgur.com/VkwOsd1.jpeg',
    link: '/product',
  },
  {
    tag: '2차전지 품질',
    title: '배터리 셀 하나도\n놓치지 않습니다.',
    desc: '초음파·레이저 용접 전 공정의 미세 불량을 200kHz 초고속 샘플링으로 전수 검사합니다.',
    metric: '94%',
    metricLabel: '불량 유출 감소',
    img: 'https://i.imgur.com/IQiK4Qs.jpeg',
    link: '/industry',
  },
]

const STATS = [
  { num: 200, unit: 'kHz', label: '초고속 샘플링 속도' },
  { num: 1,   unit: 'Hr',  label: 'AI 자율 학습 완료' },
  { num: 99,  unit: '%',   label: '불량 검출 정확도' },
  { num: 57,  unit: '%',   label: '다운타임 감소율' },
]

const FLOW = [
  { icon: '🏭', title: '산업 설비', sub: 'Industrial Equipment' },
  { icon: '📡', title: '신호 수집', sub: 'Signal Acquisition' },
  { icon: '⚡', title: 'DAQ 처리', sub: 'High-Speed DAQ' },
  { icon: '🧠', title: 'Edge AI', sub: 'Real-time Analysis' },
  { icon: '🔍', title: '이상 탐지', sub: 'Anomaly Detection' },
  { icon: '🛡️', title: '예지 보전', sub: 'Predictive Maintenance' },
]

// ── 스크롤 애니메이션 훅 ─────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ── 카운터 애니메이션 ────────────────────────────────
function Counter({ target, unit }: { target: number; unit: string }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useReveal(0.3)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target])
  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}{unit}
    </span>
  )
}

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0)

  // 히어로 텍스트 전환
  useEffect(() => {
    const t = setInterval(() => setHeroIdx(p => (p + 1) % 2), 5000)
    return () => clearInterval(t)
  }, [])

  const hero0 = useReveal(0)
  const s1 = useReveal()
  const s2 = useReveal()
  const s3 = useReveal()
  const s4 = useReveal()
  const s5 = useReveal()

  return (
    <>
      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section style={{
        position: 'relative', width: '100vw', minHeight: '100vh',
        background: '#000', overflow: 'hidden', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <video
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
          src="/video/0313.mp4"
        />
        {/* 그라디언트 오버레이 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1,
        }}/>

        <div ref={hero0.ref} style={{
          position: 'relative', zIndex: 2, textAlign: 'center',
          padding: '0 5%', maxWidth: 1100,
          opacity: hero0.visible ? 1 : 0,
          transform: hero0.visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>
          {/* 상단 태그 */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 30, padding: '8px 20px', marginBottom: 40,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4FC3F7', animation: 'pulse 1.5s infinite' }}/>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: 2 }}>
              AI SIGNAL ANALYSIS PLATFORM
            </span>
          </div>

          {/* 메인 헤드라인 — 전환 애니메이션 */}
          <div style={{ position: 'relative', minHeight: 200, marginBottom: 32 }}>
            <h1 style={{
              position: 'absolute', inset: 0,
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              fontWeight: 900, color: '#fff', lineHeight: 1.15,
              letterSpacing: -1, wordBreak: 'keep-all',
              opacity: heroIdx === 0 ? 1 : 0,
              transform: heroIdx === 0 ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}>
              기계의 신호를 읽고,<br/>
              <span style={{ color: '#4FC3F7' }}>고장을 예측합니다.</span>
            </h1>
            <h1 style={{
              position: 'absolute', inset: 0,
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              fontWeight: 900, color: '#fff', lineHeight: 1.15,
              letterSpacing: -1, wordBreak: 'keep-all',
              opacity: heroIdx === 1 ? 1 : 0,
              transform: heroIdx === 1 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}>
              제조 현장의 완전한<br/>
              <span style={{ color: '#4FC3F7' }}>지능화를 실현합니다.</span>
            </h1>
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
            marginBottom: 50, wordBreak: 'keep-all',
          }}>
            200kHz 초고속 신호 분석부터 Edge AI 실시간 판정까지,<br/>
            씨엠의 올인원 플랫폼이 산업 현장을 수호합니다.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/product" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4FC3F7', color: '#000',
              padding: '16px 36px', borderRadius: 4, fontWeight: 800,
              fontSize: '1rem', letterSpacing: 0.5, transition: '0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4FC3F7' }}
            >
              솔루션 살펴보기 →
            </Link>
            <Link href="/contents" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#fff',
              padding: '16px 36px', borderRadius: 4, fontWeight: 700,
              fontSize: '1rem', border: '1px solid rgba(255,255,255,0.35)',
              letterSpacing: 0.5, transition: '0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
            >
              도입 문의하기
            </Link>
          </div>
        </div>

        {/* 스크롤 유도 */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: 2 }}>SCROLL</span>
          <div style={{
            width: 1, height: 60, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            animation: 'scrollLine 1.5s ease infinite',
          }}/>
        </div>
      </section>

      {/* ════════════════════════════════════
          파트너 마퀴 (다크)
      ════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: '24px 0', overflow: 'hidden', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{
          display: 'flex', gap: 0,
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}>
          <div style={{
            display: 'flex', gap: 0, animation: 'marquee 25s linear infinite',
            willChange: 'transform', flexShrink: 0,
          }}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} style={{
                padding: '0 40px', borderRight: '1px solid #222',
                display: 'flex', alignItems: 'center',
                color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem',
                fontWeight: 800, letterSpacing: 2, whiteSpace: 'nowrap',
                transition: 'color 0.3s', height: 52,
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          STATS
      ════════════════════════════════════ */}
      <section style={{ background: '#050505', padding: '120px 5%' }}>
        <div ref={s1.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            opacity: s1.visible ? 1 : 0,
            transform: s1.visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}>
            <p style={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, marginBottom: 20 }}>
              TECHNOLOGY SPECS
            </p>
            <h2 style={{
              color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900, lineHeight: 1.2, marginBottom: 70,
              letterSpacing: -0.5, wordBreak: 'keep-all',
            }}>
              숫자로 증명하는<br/>
              <span style={{ color: '#4FC3F7' }}>씨엠의 기술력</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1px', background: '#1a1a1a',
            border: '1px solid #1a1a1a', borderRadius: 4, overflow: 'hidden',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#0a0a0a', padding: '50px 40px',
                opacity: s1.visible ? 1 : 0,
                transform: s1.visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 0.1}s`,
              }}>
                <div style={{
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  fontWeight: 900, color: '#fff', lineHeight: 1,
                  marginBottom: 12, letterSpacing: -2,
                }}>
                  <Counter target={s.num} unit={s.unit}/>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 500 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SOLUTIONS (풀스크린 카드)
      ════════════════════════════════════ */}
      <section style={{ background: '#000' }}>
        <div ref={s2.ref} style={{
          padding: '80px 5% 40px', maxWidth: 1300, margin: '0 auto',
          opacity: s2.visible ? 1 : 0,
          transform: s2.visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          <p style={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>
            SOLUTIONS
          </p>
          <h2 style={{
            color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
          }}>
            현장 맞춤형 AI 솔루션
          </h2>
        </div>

        {SOLUTIONS.map((sol, i) => (
          <div key={i} style={{
            position: 'relative', height: '80vh', minHeight: 500,
            overflow: 'hidden', cursor: 'pointer',
          }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('.sol-img') as HTMLElement
              if (img) img.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('.sol-img') as HTMLElement
              if (img) img.style.transform = 'scale(1)'
            }}
          >
            {/* 배경 이미지 */}
            <img
              className="sol-img"
              src={sol.img} alt={sol.title}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', filter: 'brightness(0.35)',
                transition: 'transform 0.8s ease',
              }}
            />
            {/* 오버레이 그라디언트 */}
            <div style={{
              position: 'absolute', inset: 0,
              background: i % 2 === 0
                ? 'linear-gradient(to right, rgba(0,0,0,0.9) 50%, transparent 100%)'
                : 'linear-gradient(to left, rgba(0,0,0,0.9) 50%, transparent 100%)',
            }}/>

            {/* 콘텐츠 */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              padding: '0 8%',
            }}>
              <div style={{ maxWidth: 520 }}>
                <span style={{
                  display: 'inline-block', padding: '5px 14px',
                  border: '1px solid rgba(79,195,247,0.5)', color: '#4FC3F7',
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2,
                  borderRadius: 2, marginBottom: 24,
                }}>
                  {sol.tag}
                </span>
                <h3 style={{
                  color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 900, lineHeight: 1.2, marginBottom: 20,
                  whiteSpace: 'pre-line', letterSpacing: -0.5, wordBreak: 'keep-all',
                }}>
                  {sol.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
                  lineHeight: 1.8, marginBottom: 32, wordBreak: 'keep-all',
                }}>
                  {sol.desc}
                </p>

                {/* 메트릭 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36,
                  padding: '20px 24px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4, width: 'fit-content',
                }}>
                  <div style={{
                    fontSize: '2.8rem', fontWeight: 900, color: '#4FC3F7', lineHeight: 1,
                  }}>
                    {sol.metric}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    {sol.metricLabel}
                  </div>
                </div>

                <Link href={sol.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 4,
                  transition: '0.3s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4FC3F7'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#4FC3F7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'rgba(255,255,255,0.3)' }}
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 번호 */}
            <div style={{
              position: 'absolute', bottom: 40, right: 40,
              color: 'rgba(255,255,255,0.1)', fontSize: '6rem',
              fontWeight: 900, lineHeight: 1, userSelect: 'none',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </section>

      {/* ════════════════════════════════════
          TECHNOLOGY FLOW
      ════════════════════════════════════ */}
      <section style={{ background: '#050505', padding: '140px 5%' }}>
        <div ref={s3.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            opacity: s3.visible ? 1 : 0,
            transform: s3.visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
            marginBottom: 80,
          }}>
            <p style={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>
              TECHNOLOGY PIPELINE
            </p>
            <h2 style={{
              color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
            }}>
              데이터에서 인사이트까지,<br/>
              <span style={{ color: '#4FC3F7' }}>6단계 완전 자동화</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FLOW.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 40,
                padding: '32px 40px',
                background: '#0a0a0a',
                border: '1px solid #141414',
                borderRadius: 4,
                opacity: s3.visible ? 1 : 0,
                transform: s3.visible ? 'translateX(0)' : 'translateX(-40px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = '#111'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#4FC3F7'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = '#0a0a0a'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#141414'
                }}
              >
                <span style={{
                  fontSize: '0.75rem', fontWeight: 900,
                  color: 'rgba(255,255,255,0.15)', width: 24, flexShrink: 0,
                  letterSpacing: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{f.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', marginBottom: 3 }}>
                    {f.title}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: 1 }}>
                    {f.sub}
                  </div>
                </div>
                {i < FLOW.length - 1 && (
                  <div style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>↓</div>
                )}
                {i === FLOW.length - 1 && (
                  <div style={{
                    padding: '6px 16px', background: 'rgba(79,195,247,0.1)',
                    border: '1px solid rgba(79,195,247,0.3)',
                    color: '#4FC3F7', fontSize: '0.75rem', fontWeight: 700,
                    borderRadius: 2, letterSpacing: 1,
                  }}>
                    COMPLETE
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════ */}
      <section style={{ background: '#000', padding: '140px 5%' }}>
        <div ref={s4.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 60, flexWrap: 'wrap', gap: 20,
            opacity: s4.visible ? 1 : 0,
            transform: s4.visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}>
            <div>
              <p style={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>
                TARGET INDUSTRIES
              </p>
              <h2 style={{
                color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
              }}>
                모든 제조 산업의<br/>파트너
              </h2>
            </div>
            <Link href="/industry" style={{
              color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600,
              borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 3,
              transition: '0.3s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4FC3F7' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
            >
              전체 보기 →
            </Link>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2,
          }}>
            {[
              { title: '자동차 산업', sub: 'Automotive', desc: '차체 용접 불량 검출 및\nEV 구동 부품 고장 예측', img: 'https://i.imgur.com/ME4TZhs.jpeg', link: '/industry' },
              { title: '중공업·조선', sub: 'Heavy Industry', desc: '대형 구조물 아크 용접\n결함 실시간 탐지', img: 'https://i.imgur.com/LT8vVlh.jpeg', link: '/industry' },
              { title: '2차 전지', sub: 'Battery', desc: '배터리 셀 초정밀 용접\n검사 및 예지보전', img: 'https://i.imgur.com/IQiK4Qs.jpeg', link: '/industry' },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} style={{
                position: 'relative', height: 400, overflow: 'hidden', display: 'block',
                opacity: s4.visible ? 1 : 0,
                transform: s4.visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('.ind-img') as HTMLElement
                  const overlay = e.currentTarget.querySelector('.ind-overlay') as HTMLElement
                  if (img) img.style.transform = 'scale(1.08)'
                  if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('.ind-img') as HTMLElement
                  const overlay = e.currentTarget.querySelector('.ind-overlay') as HTMLElement
                  if (img) img.style.transform = 'scale(1)'
                  if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 100%)'
                }}
              >
                <img className="ind-img" src={ind.img} alt={ind.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease',
                }}/>
                <div className="ind-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 100%)',
                  transition: 'background 0.4s ease',
                }}/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: 2, marginBottom: 8 }}>
                    {ind.sub}
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: 8 }}>
                    {ind.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6,
                    whiteSpace: 'pre-line', wordBreak: 'keep-all',
                  }}>
                    {ind.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          파트너사 로고 (화이트 마퀴)
      ════════════════════════════════════ */}
      <section style={{ background: '#050505', padding: '80px 0', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div ref={s5.ref} style={{
          textAlign: 'center', marginBottom: 50,
          opacity: s5.visible ? 1 : 0,
          transform: s5.visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3 }}>
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </div>
        <div style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}>
          <div style={{
            display: 'flex', animation: 'marquee 30s linear infinite',
            width: 'max-content', gap: 0,
          }}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} style={{
                padding: '16px 48px',
                borderRight: '1px solid #1a1a1a',
                color: 'rgba(255,255,255,0.18)',
                fontSize: '0.85rem', fontWeight: 800, letterSpacing: 2, whiteSpace: 'nowrap',
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CTA
      ════════════════════════════════════ */}
      <section style={{
        background: '#000', padding: '160px 5%', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* 배경 글로우 */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, marginBottom: 24 }}>
            GET STARTED
          </p>
          <h2 style={{
            color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900, lineHeight: 1.15, letterSpacing: -1,
            marginBottom: 28, wordBreak: 'keep-all',
          }}>
            지금 바로 시작하세요.
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem',
            lineHeight: 1.8, marginBottom: 56, wordBreak: 'keep-all',
          }}>
            현장 방문 기술 데모(PoC)부터 도입 컨설팅까지,<br/>
            전문 엔지니어가 직접 제안드립니다.
          </p>
          <Link href="/contents" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#4FC3F7', color: '#000',
            padding: '20px 52px', borderRadius: 4, fontWeight: 800,
            fontSize: '1.1rem', letterSpacing: 0.5, transition: '0.3s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4FC3F7' }}
          >
            도입 문의하기 →
          </Link>
        </div>
      </section>

      {/* CSS 애니메이션 */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
        }
      `}</style>
    </>
  )
}
