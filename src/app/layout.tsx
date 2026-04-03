import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '주식회사 씨엠 | CM Co., Ltd.',
  description: '기계시스템의 고장 진단 전문 기업 주식회사 씨엠. AI 기반 예지보전 솔루션.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
