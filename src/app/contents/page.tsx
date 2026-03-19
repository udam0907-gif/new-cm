'use client'
import { useState } from 'react'
import ContactForm from '@/components/forms/ContactForm'

const TABS = [
  { id: '1', label: '뉴스 (News)' },
  { id: '2', label: '공지 및 자료실' },
  { id: '3', label: '오시는 길' },
  { id: '4', label: '온라인 문의' },
]

const NEWS = [
  {
    id: 1,
    date: '2026.03',
    tag: '글로벌',
    color: '#1EB464',
    title: 'CM, 북미·동남아 글로벌 시장 진출 본격화',
    desc: '주식회사 씨엠이 AI 예지보전 솔루션의 글로벌 시장 진출을 위해 북미 및 동남아시아 지사 설립을 추진하고 있습니다.',
    detail: `주식회사 씨엠은 2026년 상반기를 기점으로 글로벌 시장 진출을 본격화하고 있습니다.

북미 시장의 경우, 미국 디트로이트 인근 자동차 제조 클러스터를 중심으로 현지 법인 설립 및 파트너십 협약을 추진 중이며, 동남아시아는 베트남·태국의 스마트팩토리 고도화 수요를 겨냥해 현지 대리점 네트워크를 구축할 예정입니다.

씨엠의 AI 기반 신호 분석 플랫폼은 언어·환경에 관계없이 동일한 성능을 제공하며, 현지 PLC 및 MES 시스템과의 호환성도 사전 검증을 완료했습니다.

■ 추진 일정
- 2026년 Q1: 북미 현지 법인 설립 준비 완료
- 2026년 Q2: 동남아 파트너사 MOU 체결
- 2026년 Q3: 글로벌 기술지원 센터 운영 개시`,
  },
  {
    id: 2,
    date: '2026.01',
    tag: '제품',
    color: '#0056b3',
    title: "차세대 측정 모듈 'Signal HX-Pro' 공식 출시",
    desc: '씨엠의 차세대 초정밀 신호 측정 모듈 HX-Pro 시리즈가 정식 런칭되었습니다. 기존 대비 2배 향상된 샘플링 속도와 AI 처리 성능을 제공합니다.',
    detail: `주식회사 씨엠의 차세대 H/W 라인업 'Signal HX-Pro' 시리즈가 2026년 1월 정식 출시되었습니다.

Signal HX-Pro는 기존 HX 시리즈 대비 샘플링 속도를 최대 400kHz/ch까지 끌어올렸으며, Edge AI 처리 모듈을 내장하여 별도의 PC 없이도 현장에서 직접 실시간 이상 분석이 가능합니다.

■ 주요 사양
- 최대 샘플링 속도: 400 kHz/ch (기존 200kHz 대비 2배)
- 채널 구성: 1ch ~ 8ch 동시 측정
- 내장 Edge AI 모듈 탑재 (실시간 추론 지연 < 1ms)
- 방진/방수 등급: IP67
- PLC 연동: SIEMENS, MITSUBISHI, FANUC 지원

■ 출시 제품군
- Signal HX-Pro-2: 2채널 고속 불량 검출 특화
- Signal HX-Pro-8: 8채널 다중 설비 동시 모니터링`,
  },
  {
    id: 3,
    date: '2025.11',
    tag: '계약',
    color: '#A064F0',
    title: '국내 최대 자동차 부품사 AI 분석 모듈 공급 계약 체결',
    desc: '국내 최대 규모 자동차 부품 제조사와 AI 기반 신호 분석 모듈 공급 계약을 체결하였습니다. 양산 라인 전면 적용을 통해 실시간 불량 검출 및 예지보전 체계를 구축합니다.',
    detail: `주식회사 씨엠은 국내 최대 규모의 자동차 부품 1차 벤더와 AI 기반 신호 분석 모듈 공급 계약을 공식 체결하였습니다.

이번 계약을 통해 해당 기업의 전국 4개 생산 거점에 씨엠의 AI 불량 검출 솔루션이 단계적으로 도입될 예정입니다. 1단계로 아크 용접 공정에 INS LC-AD 시리즈를 우선 적용하고, 이후 저항 용접 및 핵심 구동 부품 고장 예측 시스템으로 확대할 계획입니다.

■ 계약 주요 내용
- 공급 품목: INS LC-AD-2 / INS HC-AD-2 시리즈
- 적용 공정: 아크 용접, 저항 용접, 모터 조립 검사
- 도입 규모: 총 4개 공장, 약 120개 공정 라인
- 공급 기간: 2025년 12월 ~ 2026년 12월 (1차)

■ 기대 효과
씨엠의 AI 실시간 분석 시스템 도입으로 불량 유출 최소화, 설비 다운타임 50% 이상 감축, 연간 유지보수 비용 절감 효과가 기대됩니다.`,
  },
  {
    id: 4,
    date: '2025.08',
    tag: '기술이전',
    color: '#C8880A',
    title: '초고속 신호 분석 핵심 기술 이전',
    desc: '씨엠이 보유한 초고속 신호 분석 원천 기술의 공식 기술 이전 계약을 완료하였습니다. 해당 기술은 200kHz 이상 고속 샘플링 기반 AI 이상 탐지 알고리즘을 포함합니다.',
    detail: `주식회사 씨엠은 자체 보유한 초고속 신호 분석 원천 기술에 대한 공식 기술 이전 계약을 완료하였습니다.

이번 기술 이전의 핵심은 200kHz 이상 초고속 샘플링 환경에서 작동하는 AI 이상 탐지 알고리즘 'SCAP (Signal Condition Analysis Platform)'으로, 이 기술은 KIST(한국과학기술연구원) 연구진의 협력을 바탕으로 개발된 준지도학습 기반의 비정형 신호 분석 알고리즘입니다.

■ 이전 기술 범위
- 초고속(200kHz↑) 비정형 신호 실시간 이상 탐지 알고리즘
- Auto-Trigger 기반 신호 자동 수집 및 전처리 모듈
- Edge AI 추론 최적화 경량화 모델 패키지

■ 의의
씨엠의 핵심 기술이 외부 기관에 공식 이전됨으로써 기술의 산업 표준화 가능성이 높아졌으며, 씨엠은 기술 로열티 수익과 함께 지속적인 공동 R&D를 이어갈 예정입니다.`,
  },
  {
    id: 5,
    date: '2025.05',
    tag: '인증',
    color: '#1EB464',
    title: '기업부설연구소 및 벤처기업 등록',
    desc: '주식회사 씨엠이 기업부설연구소 설립 인가 및 벤처기업 공식 등록을 완료하였습니다. 독자 R&D 역량을 강화하고 기술 혁신 기업으로서의 입지를 공식화하였습니다.',
    detail: `주식회사 씨엠이 기업부설연구소 설립 인가 및 벤처기업 공식 등록을 완료하였습니다.

기업부설연구소는 과학기술정보통신부 산하 한국산업기술진흥협회(KOITA)로부터 공식 인가를 받았으며, 신호 분석 AI 알고리즘 연구, 차세대 DAQ 하드웨어 개발, 산업 특화 데이터셋 구축 등의 R&D 활동을 체계적으로 수행하게 됩니다.

■ 기업부설연구소 주요 연구 분야
- AI 기반 비정형 신호 이상 탐지 알고리즘 고도화
- 초고속 데이터 수집 H/W 아키텍처 연구
- 산업별 기계 신호 데이터셋 구축 및 학습 모델 개발

■ 벤처기업 인증 효과
중소벤처기업부 벤처기업 확인을 통해 정부 R&D 지원사업 우선 신청 자격, 세제 혜택, 인력 채용 지원 등 다양한 성장 지원을 받을 수 있게 되었습니다.`,
  },
]

const NOTICES = [
  {
    id: 1,
    date: '2026.02.28',
    title: '[공지] 2026년 1분기 솔루션 업데이트 안내 (v3.2.0)',
    type: '공지',
    detail: `안녕하십니까, 주식회사 씨엠입니다.

2026년 1분기 솔루션 업데이트(v3.2.0)에 대해 안내드립니다.

■ 주요 업데이트 내용
1. [innoAD] 이상 탐지 AI 모델 성능 향상
   - 오탐률(False Positive) 기존 대비 23% 감소
   - 신규 불량 유형 자동 학습 기능 추가

2. [innoPM] 고장 예측 리포트 자동화 개선
   - 데일리 리포트 생성 속도 2배 향상
   - PDF 내보내기 기능 추가

3. [innoDQ] 데이터 수집 모듈 안정성 개선
   - 네트워크 단절 시 로컬 버퍼링 기능 강화
   - PLC 연동 프로토콜 FANUC 추가 지원

■ 업데이트 적용 일정
- 배포일: 2026년 03월 05일
- 적용 방법: 고객 전담 엔지니어가 직접 방문하여 업데이트 진행

문의사항은 cm2407@naver.com 으로 연락해 주시기 바랍니다.`,
  },
  {
    id: 2,
    date: '2026.01.15',
    title: '[자료] Signal HX-Pro 제품 카탈로그 다운로드',
    type: '자료',
    detail: `Signal HX-Pro 시리즈 제품 카탈로그를 공개합니다.

■ 카탈로그 포함 내용
- Signal HX-Pro 시리즈 전체 라인업 스펙 비교
- 적용 공정별 추천 모델 가이드
- 시스템 구성도 및 배선 다이어그램
- PLC 연동 통신 프로토콜 가이드
- 설치 환경 요구사항 및 체크리스트

■ 다운로드 안내
제품 카탈로그 및 기술 문서는 영업 담당자를 통해 제공됩니다.
아래 연락처로 요청해 주시면 영업일 기준 1일 이내 이메일로 발송드립니다.

📧 cm2407@naver.com
⏰ 평일 09:00 – 18:00`,
  },
  {
    id: 3,
    date: '2025.12.20',
    title: '[공지] 연말 고객 지원 운영 시간 변경 안내',
    type: '공지',
    detail: `안녕하십니까, 주식회사 씨엠입니다.

연말 연시를 맞이하여 고객 지원 운영 시간 변경에 대해 안내드립니다.

■ 변경 운영 일정
- 2025년 12월 27일(금): 정상 운영
- 2025년 12월 30일(월) ~ 31일(화): 단축 운영 (10:00 ~ 15:00)
- 2026년 1월 1일(수): 휴무 (신정)
- 2026년 1월 2일(목): 정상 운영 재개

■ 긴급 현장 지원
연말 기간 중 긴급 현장 지원이 필요하신 경우, 이메일(cm2407@naver.com)로 연락해 주시면 담당 엔지니어가 신속하게 대응하겠습니다.

새해에도 변함없는 기술력과 서비스로 보답하겠습니다.
고객 여러분의 성원에 감사드립니다.`,
  },
  {
    id: 4,
    date: '2025.11.05',
    title: '[자료] CM AI 예지보전 솔루션 기술 백서 (White Paper)',
    type: '자료',
    detail: `씨엠 AI 예지보전 솔루션의 기술 백서(White Paper)를 발간하였습니다.

■ 백서 주요 내용
Chapter 1. 제조 분야 AI 트렌드와 기계 신호 분석
Chapter 2. 씨엠 SCAP 알고리즘 기술 원리
Chapter 3. 산업별 적용 사례 및 성과 데이터
  - 자동차: 용접 불량 검출 정확도 99.2% 달성
  - 2차전지: 설비 다운타임 57% 감소
  - 중공업: 아크 용접 결함 조기 탐지 선행 시간 평균 4.3시간
Chapter 4. 도입 로드맵 및 ROI 분석 가이드

■ 자료 신청
기술 백서는 도입 검토 중인 고객사에 한해 제공됩니다.
이메일 요청 시 회사명, 담당자명, 연락처를 함께 기재해 주세요.

📧 cm2407@naver.com`,
  },
  {
    id: 5,
    date: '2025.09.18',
    title: '[자료] 2차전지 제조 공정 예지보전 적용 사례 (Case Study)',
    type: '자료',
    detail: `2차전지 제조 공정에 씨엠 솔루션을 적용한 실제 도입 사례를 공개합니다.

■ 적용 고객사 개요
- 업종: 원통형 2차전지 셀 제조
- 규모: 연간 생산 1억셀 이상
- 도입 공정: 초음파 용접 (토셔널 방식), 전해액 주입 설비

■ 도입 솔루션
- INS HX-AD-8: 초음파 용접 불량 실시간 검출
- INS LX-PM-24: 전해액 주입 설비 예지보전

■ 도입 성과 (6개월 운영 기준)
- 초음파 용접 불량 검출 정확도: 98.7%
- 전해액 주입 설비 계획 외 중단: 전무 (0건)
- 월평균 불량 유출 건수: 도입 전 대비 94% 감소
- 설비 유지보수 비용: 연간 약 34% 절감

■ 사례집 신청
상세 사례집은 이메일로 요청해 주시면 발송드립니다.
📧 cm2407@naver.com`,
  },
]

export default function ContentsPage() {
  const [tab, setTab] = useState('1')
  const [openNews, setOpenNews] = useState<number | null>(null)
  const [openNotice, setOpenNotice] = useState<number | null>(null)

  function goTab(id: string) {
    setTab(id)
    setOpenNews(null)
    setOpenNotice(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function toggleNews(id: number) {
    setOpenNews(prev => prev === id ? null : id)
    setTimeout(() => {
      const el = document.getElementById(`news-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function toggleNotice(id: number) {
    setOpenNotice(prev => prev === id ? null : id)
    setTimeout(() => {
      const el = document.getElementById(`notice-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">CONTENTS</span>
        <h2 className="main-title">컨텐츠</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => (
          <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => goTab(t.id)}>
            {t.label}
          </a>
        ))}
      </div>

      {/* ── 뉴스 ── */}
      {tab === '1' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {NEWS.map(n => {
            const isOpen = openNews === n.id
            return (
              <div
                key={n.id}
                id={`news-${n.id}`}
                style={{
                  background: '#fff',
                  border: `1px solid ${isOpen ? n.color : 'var(--card-border)'}`,
                  borderRadius: 15,
                  overflow: 'hidden',
                  boxShadow: isOpen ? `0 4px 20px ${n.color}25` : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                {/* 헤더 클릭 영역 */}
                <button
                  onClick={() => toggleNews(n.id)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '24px 28px', display: 'flex', gap: 20, alignItems: 'center', textAlign: 'left',
                  }}
                >
                  <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 80 }}>
                    <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: 6 }}>{n.date}</div>
                    <span style={{
                      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
                      fontSize: '0.75rem', fontWeight: 700, color: '#fff', background: n.color,
                    }}>
                      {n.tag}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.1rem', fontWeight: 700, marginBottom: 6,
                      wordBreak: 'keep-all', color: '#111',
                    }}>
                      {n.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.5, wordBreak: 'keep-all', margin: 0 }}>
                      {n.desc}
                    </p>
                  </div>
                  {/* 화살표 */}
                  <div style={{
                    flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                    background: isOpen ? n.color : '#f4f4f4',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s, transform 0.3s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 5L7 10L12 5" stroke={isOpen ? '#fff' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* 상세 내용 */}
                {isOpen && (
                  <div style={{
                    padding: '0 28px 28px',
                    borderTop: `1px solid ${n.color}30`,
                    background: `${n.color}06`,
                  }}>
                    <div style={{
                      marginTop: 20,
                      padding: '20px 24px',
                      background: '#fff',
                      borderRadius: 12,
                      border: `1px solid ${n.color}25`,
                      fontSize: '0.95rem',
                      color: '#444',
                      lineHeight: 1.9,
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                    }}>
                      {n.detail}
                    </div>
                    <div style={{ textAlign: 'right', marginTop: 14 }}>
                      <button
                        onClick={() => setOpenNews(null)}
                        style={{
                          padding: '8px 20px', background: 'none',
                          border: `1px solid ${n.color}`, borderRadius: 20,
                          color: n.color, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                        }}
                      >
                        닫기 ↑
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ── 공지 및 자료실 ── */}
      {tab === '2' && (
        <div style={{ border: '1px solid var(--card-border)', borderRadius: 15, overflow: 'hidden' }}>
          {NOTICES.map((n, i) => {
            const isOpen = openNotice === n.id
            return (
              <div key={n.id} id={`notice-${n.id}`}>
                {/* 행 클릭 */}
                <button
                  onClick={() => toggleNotice(n.id)}
                  style={{
                    width: '100%', background: isOpen ? '#f0f7ff' : '#fff',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 24px',
                    borderBottom: (isOpen || i < NOTICES.length - 1) ? '1px solid var(--card-border)' : 'none',
                    transition: 'background 0.2s',
                  }}
                >
                  <span style={{
                    padding: '3px 10px', borderRadius: 4, fontSize: '0.75rem',
                    fontWeight: 700, flexShrink: 0,
                    background: n.type === '공지' ? '#eef4fb' : '#f0faf4',
                    color: n.type === '공지' ? 'var(--accent)' : '#1EB464',
                  }}>
                    {n.type}
                  </span>
                  <span style={{
                    flex: 1, fontSize: '0.98rem',
                    color: isOpen ? 'var(--accent)' : '#333',
                    wordBreak: 'keep-all', fontWeight: isOpen ? 700 : 400,
                    transition: 'color 0.2s',
                  }}>
                    {n.title}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#999', flexShrink: 0 }}>{n.date}</span>
                  <div style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    background: isOpen ? 'var(--accent)' : '#f4f4f4',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.25s, transform 0.25s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke={isOpen ? '#fff' : '#999'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* 상세 내용 */}
                {isOpen && (
                  <div style={{
                    padding: '24px 28px',
                    background: '#f8fbff',
                    borderBottom: i < NOTICES.length - 1 ? '1px solid var(--card-border)' : 'none',
                  }}>
                    <div style={{
                      padding: '20px 24px',
                      background: '#fff',
                      borderRadius: 12,
                      border: '1px solid #d0e4f7',
                      fontSize: '0.95rem',
                      color: '#444',
                      lineHeight: 1.9,
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                    }}>
                      {n.detail}
                    </div>
                    <div style={{ textAlign: 'right', marginTop: 12 }}>
                      <button
                        onClick={() => setOpenNotice(null)}
                        style={{
                          padding: '7px 18px', background: 'none',
                          border: '1px solid var(--accent)', borderRadius: 20,
                          color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                        }}
                      >
                        닫기 ↑
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ── 오시는 길 ── */}
      {tab === '3' && (
        <>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.8!2d128.8237!3d35.9123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664b4b8c5e3b7d%3A0x1234567890abcdef!2z6rWs67aB7Iq464yJ7JeQ7JWE7JuQ7JW066-57JeQ7Yq4IOuwnOyViOydmCDsnbTsl6zroZwg7JaR7J207Weg7Yq565Ok66asIDMx!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              title="주식회사 씨엠 오시는 길"
            />
          </div>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 20 }}>📍 주소</h4>
              <ul className="card-list">
                <li>
                  <strong>본사</strong><br />
                  경상북도 경산시 하양읍 아이웨어로 31<br />
                  경북융합산학연구원 407호
                </li>
                <li style={{ marginTop: 12 }}>
                  <strong>연구소</strong><br />
                  경상북도 경산시 하양읍 아이웨어로 31<br />
                  경북융합산학연구원 410호
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: 20 }}>📞 연락처</h4>
              <ul className="card-list">
                <li><strong>이메일:</strong> cm2407@naver.com</li>
                <li><strong>운영 시간:</strong> 평일 09:00 – 18:00</li>
                <li style={{ marginTop: 20 }}>
                  <strong>찾아오시는 방법</strong><br />
                  <span style={{ fontSize: '0.95rem', color: '#666' }}>
                    경부고속도로 경산IC → 하양읍 방면 10분<br />
                    대구선 하양역에서 차량 10분
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* ── 온라인 문의 ── */}
      {tab === '4' && (
        <>
          <div className="section-head center" style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>솔루션 도입을 고려하고 계신가요?</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>현장 방문 기술 데모(PoC)부터 도입 상담까지, 전문 엔지니어가 직접 응대합니다.</p>
          </div>
          <ContactForm />
        </>
      )}
    </main>
  )
}
