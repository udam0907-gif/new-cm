'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV = [
  { label: '회사소개', href: '/about' },
  { label: '제품소개', href: '/product' },
  { label: '적용산업', href: '/industry' },
  { label: '컨텐츠',   href: '/contents' },
]

export default function Header() {
  const pathname   = usePathname()
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 홈: 투명 → 스크롤 시 진한 배경 / 기타: 항상 흰 배경
  const headerBg = isHome
    ? scrolled
      ? 'rgba(5,5,5,0.96)'
      : 'transparent'
    : 'rgba(255,255,255,0.97)'

  const headerBorder = isHome
    ? scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none'
    : '1px solid #e8e8e8'

  const logoTextColor = isHome ? '#fff' : '#111'
  const logoSubColor  = isHome ? 'rgba(255,255,255,0.45)' : '#999'
  const navColor      = isHome ? 'rgba(255,255,255,0.7)' : '#444'
  const navActiveColor= isHome ? '#4FC3F7' : '#0056b3'
  const contactBg     = isHome
    ? 'rgba(79,195,247,0.15)'
    : 'rgba(0,86,179,0.08)'
  const contactColor  = isHome ? '#4FC3F7' : '#0056b3'
  const contactBorder = isHome ? '1px solid rgba(79,195,247,0.3)' : '1px solid rgba(0,86,179,0.25)'

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 9999,
      background: headerBg,
      backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
      borderBottom: headerBorder,
      padding: '16px 0',
      transition: 'background 0.4s ease, border 0.4s ease',
    }}>
      <div className="container nav-wrap">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image
            src="https://i.imgur.com/XkPSCm5.png"
            alt="씨엠 로고" width={90} height={32}
            style={{ height: 32, width: 'auto', filter: isHome ? 'brightness(0) invert(1)' : 'none' }}
            priority
          />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <strong style={{ fontSize: '1rem', fontWeight: 800, color: logoTextColor, transition: 'color 0.3s' }}>
              주식회사 씨엠
            </strong>
            <em style={{ fontSize: '0.7rem', fontStyle: 'normal', color: logoSubColor, transition: 'color 0.3s', letterSpacing: 0.5 }}>
              CM Co., Ltd.
            </em>
          </span>
        </Link>

        {/* 모바일 햄버거 */}
        <button
          style={{
            display: 'none', flexDirection: 'column', gap: 5,
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          }}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: isHome ? '#fff' : '#333',
              borderRadius: 2, transition: '0.3s',
            }}/>
          ))}
        </button>

        <nav className={`site-nav${open ? ' open' : ''}`} style={{
          display: 'flex', gap: 6, alignItems: 'center',
        }}>
          {NAV.map(item => {
            const active = pathname.startsWith(item.href)
            return (
              <div key={item.href} style={{ position: 'relative' }}>
                <Link
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '8px 14px',
                    fontSize: '0.95rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? navActiveColor : navColor,
                    transition: 'color 0.25s',
                    letterSpacing: 0.2,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = navActiveColor }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = active ? navActiveColor : navColor }}
                >
                  {item.label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: 2, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 4, height: 4, borderRadius: '50%',
                      background: navActiveColor,
                    }}/>
                  )}
                </Link>
              </div>
            )
          })}
          <Link
            href="/contents"
            style={{
              marginLeft: 8,
              padding: '8px 20px',
              background: contactBg,
              border: contactBorder,
              borderRadius: 4,
              color: contactColor,
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: 0.3,
              transition: '0.25s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = isHome ? 'rgba(79,195,247,0.25)' : 'rgba(0,86,179,0.15)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = contactBg
            }}
          >
            문의하기
          </Link>
        </nav>
      </div>
    </header>
  )
}
