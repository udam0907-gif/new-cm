'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV = [
  { label: '회사소개', href: '/about' },
  { label: '제품소개', href: '/product' },
  { label: '적용산업', href: '/industry' },
  { label: '컨텐츠', href: '/contents' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Image src="https://i.imgur.com/XkPSCm5.png" alt="씨엠 로고" width={100} height={35} className="brand-logo-img" priority />
          <span className="brand-copy">
            <strong>주식회사 씨엠</strong>
            <em>CM Co., Ltd.</em>
          </span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="메뉴">
          <span /><span /><span />
        </button>
        <nav className={`site-nav${open ? ' open' : ''}`}>
          {NAV.map(item => (
            <div key={item.href} className="nav-item">
              <Link href={item.href} className={pathname.startsWith(item.href) ? 'active' : ''}>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
