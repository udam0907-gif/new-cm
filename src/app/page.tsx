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
  { icon: '🏭', title: '산업 설비',      sub: 'Industrial Equipment' },
  { icon: '📡', title: '신호 수집',      sub: 'Signal Acquisition' },
  { icon: '⚡', title: 'DAQ 처리',       sub: 'High-Speed DAQ' },
  { icon: '🧠', title: 'Edge AI 분석',   sub: 'Real-time Analysis' },
  { icon: '🔍', title: '이상 탐지',      sub: 'Anomaly Detection' },
  { icon: '🛡️', title: '예지 보전',     sub: 'Predictive Maintenance' },
]

// ── 스크롤 애니메이션 훅 ─────────────────────────────
function useReveal(threshold = 0.12) {
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

// ── 숫자 카운터 ──────────────────────────────────────
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

  const hero  = useReveal(0)
  const s1    = useReveal()
  const s2    = useReveal()
  const s3    = useReveal()
  const s4    = useReveal()
  const s5    = useReveal()

  const ACCENT   = '#0056b3'
  const ACCENT_L = '#e8f2ff'

  return (
    <>
      {/* ──────────────────────────────────────
          HERO  — 비디오 배경
      ────────────────────────────────────── */}
      <section style={{
        position: 'relative', width: '100vw', height: '100vh',
        minHeight: 600, background: '#0a0f1e', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <video
          autoPlay loop muted playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4,
          }}
          src="/video/0313.mp4"
        />
        {/* 그라디언트 오버레이 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.7) 60%, rgba(10,15,30,0.95) 100%)',
          zIndex: 1,
        }}/>

        {/* 히어로 콘텐츠 */}
        <div
          ref={hero.ref}
          style={{
            position: 'relative', zIndex: 2,
            textAlign: 'center',
            padding: '0 5%', maxWidth: 900,
            opacity:    hero.visible ? 1 : 0,
            transform:  hero.visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          {/* 상단 뱃지 */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 30, padding: '8px 20px', marginBottom: 36,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4FC3F7', display: 'inline-block',
              boxShadow: '0 0 8px #4FC3F7',
            }}/>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 2.5 }}>
              AI SIGNAL ANALYSIS PLATFORM
            </span>
          </div>

          {/* 헤드라인 */}
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 900, lineHeight: 1.18,
            letterSpacing: -1, marginBottom: 28,
            wordBreak: 'keep-all',
          }}>
            기계의 신호를 읽고,<br/>
            <span style={{ color: '#4FC3F7' }}>고장을 예측합니다.</span>
          </h1>

          {/* 설명 */}
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.85, marginBottom: 48,
            wordBreak: 'keep-all',
          }}>
            200kHz 초고속 신호 분석부터 Edge AI 실시간 판정까지,<br/>
            씨엠의 올인원 플랫폼이 산업 현장을 수호합니다.
          </p>

          {/* 버튼 */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/product" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4FC3F7', color: '#000',
              padding: '15px 36px', borderRadius: 6,
              fontWeight: 800, fontSize: '1rem', letterSpacing: 0.3,
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4FC3F7' }}
            >
              솔루션 살펴보기 →
            </Link>
            <Link href="/contents" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#fff',
              padding: '15px 36px', borderRadius: 6,
              fontWeight: 700, fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.35)',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
            >
              도입 문의하기
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div style={{
          position: 'absolute', bottom: 36, left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: 3 }}>SCROLL</span>
          <div style={{
            width: 1, height: 50,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            animation: 'scrollFade 1.8s ease infinite',
          }}/>
        </div>
      </section>

      {/* ──────────────────────────────────────
          파트너 마퀴  (흰 배경)
      ────────────────────────────────────── */}
      <section style={{
        background: '#fff', padding: '20px 0',
        borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          maskImage:        'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}>
          <div style={{
            display: 'flex', flexShrink: 0,
            animation: 'marquee 28s linear infinite',
            willChange: 'transform',
          }}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} style={{
                padding: '0 36px', borderRight: '1px solid #eee',
                display: 'flex', alignItems: 'center', height: 48,
                color: '#bbb', fontSize: '0.78rem', fontWeight: 800,
                letterSpacing: 1.8, whiteSpace: 'nowrap',
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          STATS  (라이트 그레이 배경)
      ────────────────────────────────────── */}
      <section style={{ background: '#f8f9fc', padding: '110px 5%' }}>
        <div ref={s1.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            opacity:    s1.visible ? 1 : 0,
            transform:  s1.visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'all 0.8s ease',
            marginBottom: 60,
          }}>
            <p style={{ color: ACCENT, fontSize: '0.78rem', fontWeight: 800, letterSpacing: 3, marginBottom: 14 }}>
              TECHNOLOGY SPECS
            </p>
            <h2 style={{
              color: '#0a0f1e', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.5, wordBreak: 'keep-all',
            }}>
              숫자로 증명하는 씨엠의 기술력
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 2, background: '#e8ecf4',
            border: '1px solid #e8ecf4', borderRadius: 8, overflow: 'hidden',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#fff', padding: '48px 36px',
                opacity:    s1.visible ? 1 : 0,
                transform:  s1.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.65s ease ${i * 0.1}s`,
              }}>
                <div style={{
                  fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
                  fontWeight: 900, color: ACCENT, lineHeight: 1,
                  marginBottom: 10, letterSpacing: -2,
                }}>
                  <Counter target={s.num} unit={s.unit}/>
                </div>
                <p style={{ color: '#888', fontSize: '0.88rem', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SOLUTIONS  (흰 배경 + 이미지 카드)
      ────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '110px 5%' }}>
        <div ref={s2.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            opacity:    s2.visible ? 1 : 0,
            transform:  s2.visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'all 0.8s ease',
            marginBottom: 60,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <p style={{ color: ACCENT, fontSize: '0.78rem', fontWeight: 800, letterSpacing: 3, marginBottom: 14 }}>
                SOLUTIONS
              </p>
              <h2 style={{
                color: '#0a0f1e', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
                fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
              }}>
                현장 맞춤형 AI 솔루션
              </h2>
            </div>
            <Link href="/product" style={{
              color: ACCENT, fontSize: '0.9rem', fontWeight: 700,
              borderBottom: `1px solid ${ACCENT}55`, paddingBottom: 3,
            }}>
              전체 보기 →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {SOLUTIONS.map((sol, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                minHeight: 420, overflow: 'hidden',
                borderRadius: 12, border: '1px solid #eaecf4',
                opacity:    s2.visible ? 1 : 0,
                transform:  s2.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}>
                {/* 이미지 — 짝수는 왼쪽, 홀수는 오른쪽 */}
                <div style={{
                  order: i % 2 === 0 ? 0 : 1,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <img src={sol.img} alt={sol.title} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    display: 'block',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                  />
                </div>

                {/* 텍스트 */}
                <div style={{
                  order: i % 2 === 0 ? 1 : 0,
                  background: '#fff', padding: '56px 52px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <span style={{
                    display: 'inline-block', padding: '5px 14px',
                    background: ACCENT_L, color: ACCENT,
                    fontSize: '0.75rem', fontWeight: 800, letterSpacing: 1.5,
                    borderRadius: 4, marginBottom: 22, width: 'fit-content',
                  }}>
                    {sol.tag}
                  </span>
                  <h3 style={{
                    color: '#0a0f1e', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    fontWeight: 900, lineHeight: 1.3, marginBottom: 18,
                    whiteSpace: 'pre-line', letterSpacing: -0.3, wordBreak: 'keep-all',
                  }}>
                    {sol.title}
                  </h3>
                  <p style={{
                    color: '#666', fontSize: '1rem', lineHeight: 1.8,
                    marginBottom: 32, wordBreak: 'keep-all',
                  }}>
                    {sol.desc}
                  </p>

                  {/* 메트릭 뱃지 */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 14,
                    padding: '16px 24px', background: '#f4f8ff',
                    border: '1px solid #d4e4ff',
                    borderRadius: 8, marginBottom: 32, width: 'fit-content',
                  }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 900, color: ACCENT, lineHeight: 1 }}>
                      {sol.metric}
                    </span>
                    <span style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.4 }}>
                      {sol.metricLabel}
                    </span>
                  </div>

                  <Link href={sol.link} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    color: ACCENT, fontWeight: 700, fontSize: '0.95rem',
                    borderBottom: `1px solid ${ACCENT}40`, paddingBottom: 3, width: 'fit-content',
                    transition: '0.2s',
                  }}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          TECHNOLOGY PIPELINE  (라이트 그레이)
      ────────────────────────────────────── */}
      <section style={{ background: '#f8f9fc', padding: '110px 5%' }}>
        <div ref={s3.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            opacity:    s3.visible ? 1 : 0,
            transform:  s3.visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'all 0.8s ease',
            marginBottom: 60,
          }}>
            <p style={{ color: ACCENT, fontSize: '0.78rem', fontWeight: 800, letterSpacing: 3, marginBottom: 14 }}>
              TECHNOLOGY PIPELINE
            </p>
            <h2 style={{
              color: '#0a0f1e', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
            }}>
              데이터에서 인사이트까지,<br/>
              <span style={{ color: ACCENT }}>6단계 완전 자동화</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FLOW.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 32,
                padding: '28px 36px',
                background: '#fff',
                borderRadius: 8, border: '1px solid #eaecf4',
                cursor: 'default',
                opacity:    s3.visible ? 1 : 0,
                transform:  s3.visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.6s ease ${i * 0.09}s`,
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = ACCENT
                  el.style.background  = '#f0f7ff'
                  el.style.transform   = 'translateX(6px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = '#eaecf4'
                  el.style.background  = '#fff'
                  el.style.transform   = 'translateX(0)'
                }}
              >
                <span style={{
                  fontSize: '0.72rem', fontWeight: 900,
                  color: '#ccc', width: 22, flexShrink: 0, letterSpacing: 0.5,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{f.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#111', fontWeight: 800, fontSize: '1rem', marginBottom: 2 }}>
                    {f.title}
                  </div>
                  <div style={{ color: '#aaa', fontSize: '0.78rem', letterSpacing: 1 }}>
                    {f.sub}
                  </div>
                </div>
                {i < FLOW.length - 1
                  ? <span style={{ color: '#ccc', fontSize: '1rem' }}>↓</span>
                  : (
                    <span style={{
                      padding: '5px 14px',
                      background: ACCENT_L, color: ACCENT,
                      fontSize: '0.72rem', fontWeight: 800,
                      borderRadius: 4, letterSpacing: 1,
                    }}>
                      COMPLETE
                    </span>
                  )
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          INDUSTRIES  (흰 배경)
      ────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '110px 5%' }}>
        <div ref={s4.ref} style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: 16,
            marginBottom: 50,
            opacity:    s4.visible ? 1 : 0,
            transform:  s4.visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'all 0.8s ease',
          }}>
            <div>
              <p style={{ color: ACCENT, fontSize: '0.78rem', fontWeight: 800, letterSpacing: 3, marginBottom: 14 }}>
                TARGET INDUSTRIES
              </p>
              <h2 style={{
                color: '#0a0f1e', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
                fontWeight: 900, letterSpacing: -0.5, wordBreak: 'keep-all',
              }}>
                모든 제조 산업의 파트너
              </h2>
            </div>
            <Link href="/industry" style={{ color: ACCENT, fontSize: '0.9rem', fontWeight: 700 }}>
              전체 보기 →
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {[
              { title: '자동차 산업',  sub: 'Automotive',     desc: '차체 용접 불량 검출 및 EV 구동 부품 고장 예측', img: 'https://i.imgur.com/ME4TZhs.jpeg', link: '/industry' },
              { title: '중공업·조선', sub: 'Heavy Industry',  desc: '대형 구조물 아크 용접 결함 실시간 탐지',         img: 'https://i.imgur.com/LT8vVlh.jpeg', link: '/industry' },
              { title: '2차 전지',    sub: 'Battery',         desc: '배터리 셀 초정밀 용접 검사 및 예지보전',         img: 'https://i.imgur.com/IQiK4Qs.jpeg', link: '/industry' },
            ].map((ind, i) => (
              <Link key={i} href={ind.link} style={{
                position: 'relative', height: 360,
                overflow: 'hidden', display: 'block',
                borderRadius: 12,
                opacity:    s4.visible ? 1 : 0,
                transform:  s4.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.65s ease ${i * 0.13}s`,
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('.ind-img') as HTMLElement
                  if (img) img.style.transform = 'scale(1.07)'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('.ind-img') as HTMLElement
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <img className="ind-img" src={ind.img} alt={ind.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.7s ease', display: 'block',
                }}/>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 60%)',
                }}/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: 2, marginBottom: 6 }}>
                    {ind.sub}
                  </p>
                  <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 800, marginBottom: 6 }}>
                    {ind.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                    {ind.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          파트너 마퀴 2 (라이트 배경)
      ────────────────────────────────────── */}
      <section style={{
        background: '#f8f9fc', padding: '64px 0',
        borderTop: '1px solid #eaecf4', borderBottom: '1px solid #eaecf4',
        overflow: 'hidden',
      }}>
        <div ref={s5.ref} style={{
          textAlign: 'center', marginBottom: 36,
          opacity:    s5.visible ? 1 : 0,
          transform:  s5.visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.7s ease',
        }}>
          <p style={{ color: '#bbb', fontSize: '0.75rem', fontWeight: 800, letterSpacing: 3 }}>
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </div>
        <div style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          maskImage:        'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}>
          <div style={{
            display: 'flex', animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} style={{
                padding: '14px 44px', borderRight: '1px solid #e8e8e8',
                color: '#ccc', fontSize: '0.82rem', fontWeight: 800,
                letterSpacing: 1.8, whiteSpace: 'nowrap',
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          CTA  (어두운 네이비)
      ────────────────────────────────────── */}
      <section style={{
        background: '#0a0f1e', padding: '140px 5%', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 700, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(0,86,179,0.12) 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}/>
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: '#4FC3F7', fontSize: '0.78rem', fontWeight: 800, letterSpacing: 3, marginBottom: 20 }}>
            GET STARTED
          </p>
          <h2 style={{
            color: '#fff', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight: 900, lineHeight: 1.2, letterSpacing: -1,
            marginBottom: 22, wordBreak: 'keep-all',
          }}>
            지금 바로 시작하세요.
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem',
            lineHeight: 1.9, marginBottom: 50, wordBreak: 'keep-all',
          }}>
            현장 방문 기술 데모(PoC)부터 도입 컨설팅까지,<br/>
            전문 엔지니어가 직접 제안드립니다.
          </p>
          <Link href="/contents" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#0056b3', color: '#fff',
            padding: '18px 48px', borderRadius: 6,
            fontWeight: 800, fontSize: '1.05rem', letterSpacing: 0.3,
            transition: '0.25s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4FC3F7'; (e.currentTarget as HTMLAnchorElement).style.color = '#000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0056b3'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
          >
            도입 문의하기 →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollFade {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          40%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          60%  { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-overlay-play-button {
          display: none !important; opacity: 0 !important;
        }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
