'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {
      const play = () => { if (v.paused) v.play() }
      document.body.addEventListener('click', play, { once: true })
    })
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-media">
        <video ref={ref} src="/video/0313.mp4" autoPlay loop muted playsInline disablePictureInPicture style={{ pointerEvents: 'none' }} />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <Link href="/about">
          <Image src="https://i.imgur.com/pm9J4PI.gif" alt="CM 로고" width={280} height={100} unoptimized priority
            style={{ maxWidth: 280, height: 'auto', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))', borderRadius: 10, cursor: 'pointer' }} />
        </Link>
        <div style={{ color: '#fff', marginTop: 20, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 15, textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
            기계시스템의 고장 진단
          </h2>
          <p style={{ fontSize: '1.25rem', textShadow: '0 2px 5px rgba(0,0,0,0.8)', lineHeight: 1.6 }}>
            기계시스템의 유지보수는 고장 대응형에서 고장 예측형으로,<br />
            예방 조치에서 예지 보전으로 발전하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
