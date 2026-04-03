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
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'

  // 홈: 스크롤 감지로 투명 → 불투명
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 9999,
      background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
      backdropFilter: transparent ? 'none' : 'blur(14px)',
      WebkitBackdropFilter: transparent ? 'none' : 'blur(14px)',
      borderBottom: transparent ? 'none' : '1px solid #eee',
      padding: '14px 0',
      boxShadow: transparent ? 'none' : '0 2px 12px rgba(0,0,0,0.06)',
      transition: 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease',
    }}>
      <div className="container nav-wrap">
        {/* 로고 */}
        <Link href="/" className="brand">
          <Image
            src="https://i.imgur.com/XkPSCm5.png"
            alt="씨엠 로고" width={100} height={35}
            className="brand-logo-img"
            style={{ filter: transparent ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.3s' }}
            priority
          />
          <span className="brand-copy">
            <strong style={{ color: transparent ? '#fff' : '#111', transition: 'color 0.3s' }}>
              주식회사 씨엠
            </strong>
            <em style={{ color: transparent ? 'rgba(255,255,255,0.55)' : '#999', transition: 'color 0.3s' }}>
              CM Co., Ltd.
            </em>
          </span>
        </Link>

        {/* 모바일 토글 */}
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="메뉴">
          <span style={{ background: transparent ? '#fff' : '#333' }}/>
          <span style={{ background: transparent ? '#fff' : '#333' }}/>
          <span style={{ background: transparent ? '#fff' : '#333' }}/>
        </button>

        {/* 내비 */}
        <nav className={`site-nav${open ? ' open' : ''}`}>
          {NAV.map(item => (
            <div key={item.href} className="nav-item">
              <Link
                href={item.href}
                className={pathname.startsWith(item.href) ? 'active' : ''}
                style={{
                  color: transparent
                    ? pathname.startsWith(item.href) ? '#4FC3F7' : 'rgba(255,255,255,0.8)'
                    : undefined,
                  transition: 'color 0.3s',
                }}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
