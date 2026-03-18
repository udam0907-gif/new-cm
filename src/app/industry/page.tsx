'use client'
import { useState } from 'react'

const TABS = [
  { id: '0', label: '전체 개요' },
  { id: '1', label: '자동차 산업' },
  { id: '2', label: '중공업·조선 산업' },
  { id: '3', label: '2차 전지 산업' },
]

export default function IndustryPage() {
  const [tab, setTab] = useState('0')
  function goTab(id: string) { setTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <main className="page-content container">
      <div className="section-head center">
        <span className="section-tag">TARGET INDUSTRIES</span>
        <h2 className="main-title">현장 맞춤형 AI 적용 분야</h2>
      </div>
      <div className="sub-tabs">
        {TABS.map(t => <a key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => goTab(t.id)}>{t.label}</a>)}
      </div>

      {tab === '0' && (
        <>
          <div className="intro-quote" style={{ textAlign: 'center', borderLeft: 'none', borderTop: '6px solid var(--accent)' }}>
            <h3>"산업의 경계를 넘어,<br />제조 현장의 완벽한 지능화를 구현합니다."</h3>
            <p style={{ maxWidth: 800, margin: '0 auto' }}>현대 제조 산업에서는 수많은 설비와 공정이 동시에 작동하며, 작은 이상 신호 하나가 생산 품질과 설비 안정성에 큰 영향을 미칩니다. 기존의 고장 후 반응형 유지보수(Reactive Maintenance)를 넘어, <strong>기계 신호 기반 데이터 분석과 인공지능 기술을 결합한 산업 특화 AI 분석 플랫폼</strong>을 제공합니다.</p>
          </div>

          <div className="grid-3" style={{ marginBottom: 60 }}>
            {[{ num: '200kHz', label: '초고속 데이터 수집' }, { num: '1시간', label: 'AI 자율 학습' }, { num: '실시간', label: '설비 상태 분석' }].map(item => (
              <div key={item.label} className="white-card" style={{ textAlign: 'center', padding: 30 }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)', display: 'block', marginBottom: 10 }}>{item.num}</span>
                <p style={{ fontSize: '1.1rem', color: '#111', fontWeight: 700, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>

          <h3 className="sub-title-left">🔄 기술 적용 흐름</h3>
          <p style={{ color: '#666', marginBottom: 20, fontSize: '1.05rem' }}>설비에서 발생하는 파편화된 데이터가 직관적인 통찰력으로 변환되는 과정입니다.</p>
          <div className="tech-flow-container">
            {[{ icon: '🏭', label: '산업 설비' }, { icon: '📡', label: '센서 데이터 수집' }, { icon: '🧠', label: 'AI 데이터 분석' }, { icon: '🔍', label: '이상 탐지' }, { icon: '🩺', label: '설비 상태 진단' }, { icon: '🛡️', label: '예지 보전' }].map((s, i, arr) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="flow-step"><span className="flow-icon">{s.icon}</span><h5>{s.label}</h5></div>
                {i < arr.length - 1 && <div className="flow-arrow">➔</div>}
              </div>
            ))}
          </div>

          <h3 className="sub-title-left" style={{ marginTop: 60 }}>⚡ 제조 현장의 과제와 CM의 해결책</h3>
          <div className="grid-2">
            <div className="info-card" style={{ borderTop: '4px solid #e74c3c' }}>
              <h4 style={{ color: '#e74c3c', fontSize: '1.4rem', marginBottom: 15 }}>기존 현장의 한계</h4>
              <ul className="card-list">
                <li>설비 고장으로 인한 예기치 못한 생산 라인 중단</li>
                <li>미세한 공정 결함 누적으로 인한 대량 품질 불량</li>
                <li>정량적 데이터 부재로 인한 설비 상태 파악의 어려움</li>
                <li>사전 예방이 불가능한 사후 대응 위주의 유지보수 체계</li>
              </ul>
            </div>
            <div className="info-card" style={{ borderTop: '4px solid var(--accent)' }}>
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 10 }}>CM 솔루션 도입 결과</h4>
              <p style={{ color: '#444', fontWeight: 600, marginBottom: 15 }}>진동, 전류, 회전 신호 실시간 분석을 통해 완벽한 통제력 확보</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['설비 이상 신호 조기 감지 및 다운타임 방지', '실시간 공정 품질 이상 탐지 및 불량률 제로화', '과학적 데이터 기반의 설비 고장 사전 예측'].map(item => (
                  <li key={item} style={{ position: 'relative', paddingLeft: 25, marginBottom: 12, fontSize: '1.05rem', color: '#444', fontWeight: 500 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✔</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="sub-title-left" style={{ marginTop: 60 }}>⚙️ CM 산업 AI 플랫폼 구성</h3>
          <div className="grid-3">
            {[
              { step: 'STEP 1', title: '데이터 수집', desc: '산업용 고정밀 센서를 통해 설비의 진동, 전류, 회전, 온도 등 다양한 물리적 데이터를 왜곡 없이 실시간으로 수집합니다.' },
              { step: 'STEP 2', title: 'AI 데이터 분석', desc: '수집된 방대한 원시 데이터를 기반으로, AI 알고리즘이 스스로 정상 패턴을 분석하고 미세한 이상 징후와 고장을 예측합니다.' },
              { step: 'STEP 3', title: '현장 적용 솔루션', desc: '분석 결과를 바탕으로 즉각적인 공정 품질 모니터링, 설비 상태 진단 리포트, 최적의 유지보수 일정을 현장 관리자에게 제공합니다.' },
            ].map(item => (
              <div key={item.step} className="white-card feature-card">
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ddd', display: 'block', marginBottom: 10 }}>{item.step}</span>
                <h4 style={{ color: '#111', marginBottom: 12 }}>{item.title}</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="sub-title-left" style={{ marginTop: 60 }}>🏭 주요 적용 산업</h3>
          <div className="grid-3">
            {[
              { icon: '🚘', title: '자동차 산업', desc: '차체 용접 품질 검사 및 전동화(EV) 부품 조립 불량 실시간 탐지', id: '1' },
              { icon: '🏗️', title: '중공업·조선 산업', desc: '대형 구조물 용접 결함 정밀 분석 및 극한 환경 산업 설비 상태 진단', id: '2' },
              { icon: '🔋', title: '2차 전지 산업', desc: '배터리 셀 제조 공정 초정밀 용접 검사 및 핵심 설비 무중단 예지 보전', id: '3' },
            ].map(item => (
              <div key={item.title} className="info-card" style={{ cursor: 'pointer', border: '2px solid #eef0f2', display: 'flex', flexDirection: 'column' }} onClick={() => goTab(item.id)}>
                <span style={{ fontSize: '2.5rem', marginBottom: 15, display: 'block' }}>{item.icon}</span>
                <h4 style={{ color: 'var(--accent)', marginBottom: 12 }}>{item.title}</h4>
                <p style={{ color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
                <span style={{ color: 'var(--accent)', fontWeight: 800, marginTop: 'auto', paddingTop: 15, display: 'inline-block' }}>상세 내용 보기 ➔</span>
              </div>
            ))}
          </div>

          <div className="white-card" style={{ marginTop: 60, background: 'linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)', border: '1px solid #dce8f5' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--accent)', fontWeight: 800, textAlign: 'center', marginBottom: 30 }}>CM 솔루션 도입 효과</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, maxWidth: 800, margin: '0 auto' }}>
              {['생산 공정 품질 대폭 향상', '치명적 설비 고장 사전 예방', '불필요한 유지보수 비용 절감', '생산 라인 무중단 안정성 확보'].map(item => (
                <li key={item} style={{ background: '#fff', padding: '15px 25px 15px 45px', borderRadius: 30, boxShadow: '0 4px 10px rgba(0,0,0,0.03)', position: 'relative', fontSize: '1rem', color: '#333', fontWeight: 500 }}>
                  <span style={{ position: 'absolute', left: 18, color: 'var(--accent)' }}>✔</span>{item}
                </li>
              ))}
            </ul>
            <p style={{ textAlign: 'center', color: '#555', marginTop: 30, fontSize: '1.1rem', fontWeight: 600 }}>"더 안전하고 효율적인 스마트 제조 환경, 주식회사 씨엠이 완성합니다."</p>
          </div>
        </>
      )}

      {tab === '1' && (
        <>
          <div className="img-banner">
            <img src="https://i.imgur.com/ME4TZhs.jpeg" alt="자동차 산업" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="intro-quote">
            <h3>"수만 개의 부품이 맞물려 돌아가는 자동차 생산라인,<br />단 하나의 미세한 결함도 전체 품질을 좌우합니다."</h3>
            <p>자동차 제조 공정에서는 용접, 모터 조립, 베어링 회전, 차체 구조물 등 다양한 기계 설비와 공정이 동시에 작동합니다. 이 과정에서 발생하는 미세한 진동 변화나 용접 품질 이상은 초기에는 눈에 보이지 않지만 시간이 지나면 대량 불량 또는 설비 고장으로 이어질 수 있습니다.</p>
            <p>주식회사 씨엠의 AI 기반 기계 신호 분석 기술은 이러한 미세한 이상 신호를 실시간으로 분석하여 품질 문제와 설비 이상을 사전에 감지합니다.</p>
          </div>
          <h3 className="sub-title-left">💡 핵심 적용 공정</h3>
          <div className="grid-3">
            {[
              { title: '01. 자동차 차체 및 핵심 부품 용접 검사', desc: '아크 용접, 레이저 용접, 블로우 홀 발생 등 다양한 용접 공정에서 용접 불량은 차량 강도와 직결됩니다. AI 분석 시스템으로 품질을 실시간 판별합니다.', list: ['용접 전류 및 진동 신호 분석', '아크 안정성 분석', '내부 기공 및 균열 가능성 탐지'] },
              { title: '02. 전동화(EV) 핵심 구동 부품 검사', desc: '전기차 시대가 되면서 모터, 감속기, 인버터 등의 구동계 부품 품질 관리가 더욱 중요해졌습니다. 초기 불량을 조기 발견하여 안정성을 높입니다.', list: ['모터 회전 진동 분석', '베어링 이상 탐지', '모터 조립 공정 이상 감지'] },
              { title: '03. 엔진 및 내구 시험 설비 고장 예측', desc: '자동차 제조 공정에서는 다양한 내구 시험 장비가 사용됩니다. CM 시스템은 시험 설비의 고장을 사전에 완벽하게 예측합니다.', list: ['가속도 센서를 통한 진동 분석', 'CAN 통신 데이터 분석', '베어링 및 회전체 상태 진단'] },
            ].map(c => (
              <div key={c.title} className="info-card">
                <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: 12 }}>{c.title}</h4>
                <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 15 }}>{c.desc}</p>
                <ul className="card-list">{c.list.map(l => <li key={l}>{l}</li>)}</ul>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === '2' && (
        <>
          <div className="img-banner">
            <img src="https://i.imgur.com/LT8vVlh.jpeg" alt="중공업·조선" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="intro-quote">
            <h3>"극한의 환경과 초대형 구조물,<br />보이지 않는 심부 결함이 가장 큰 위험입니다."</h3>
            <p>조선 및 중공업 분야에서는 대형 철 구조물, 압력 용기, 선박 구조물 등 대규모 용접 구조물이 생산됩니다. 이 과정에서 발생하는 미세한 결함은 시간이 지나면서 구조물 파손이나 안전사고로 이어질 수 있습니다.</p>
            <p>CM의 산업 AI 기술은 대형 구조물의 용접 상태와 설비 상태를 분석하여 심부 결함을 조기에 발견하고 생산 안정성을 확보합니다.</p>
          </div>
          <h3 className="sub-title-left">💡 핵심 적용 공정</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>01. 대형 구조물 아크 용접 결함 탐지</h4>
              <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 15 }}>조선 및 중공업 현장에서는 CO2, MIG, TIG 등 다양한 용접 방식이 사용됩니다. CM 시스템은 아래 항목들을 통해 실시간 탐지를 지원합니다.</p>
              <ul className="card-list">
                <li><strong>분석:</strong> 용접 아크 신호 분석, 용접 전류 패턴 분석, 결함 패턴 AI 분석</li>
                <li><strong>검출 항목:</strong> 기공(Porosity), 균열(Crack), 용입 부족(Lack of fusion)</li>
              </ul>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>02. 극한 환경 산업 설비 분석</h4>
              <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 15 }}>강한 전자기 노이즈, 고온 환경, 먼지 및 금속 분진 등 매우 열악한 환경에서도 안정적인 데이터 수집과 분석이 가능하도록 인프라를 제공합니다.</p>
              <ul className="card-list">
                <li>초고속 샘플링 센서 적용</li>
                <li>강력한 전자기파(EMI) 내성 설계</li>
                <li>산업 환경(방진/방수) 특화 대응 시스템</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {tab === '3' && (
        <>
          <div className="img-banner">
            <img src="https://i.imgur.com/IQiK4Qs.jpeg" alt="2차전지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="intro-quote">
            <h3>"초당 수십 개의 배터리가 생산되는 라인,<br />단 하나의 불량도 안전 문제로 이어질 수 있습니다."</h3>
            <p>2차전지 생산 공정에서는 전극 제조, 셀 조립, 레이저 용접, 패키징 등 다양한 공정이 빠른 속도로 진행됩니다. 이 과정에서 발생하는 미세한 결함은 배터리 성능 저하뿐 아니라 폭발 위험으로도 이어질 수 있습니다.</p>
            <p>CM의 AI 분석 시스템은 배터리 제조 공정의 품질 이상을 실시간으로 분석하여 생산 안정성과 제품 품질을 동시에 확보합니다.</p>
          </div>
          <h3 className="sub-title-left">💡 핵심 적용 공정</h3>
          <div className="grid-2">
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>01. 배터리 셀 초정밀 용접 검사</h4>
              <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 15 }}>배터리 제조에서는 레이저 용접을 통해 전극과 탭을 연결하는 공정이 이루어집니다. 이를 정밀하게 분석하여 무결점을 달성합니다.</p>
              <ul className="card-list">
                <li><strong>분석:</strong> 용접 신호 분석, 레이저 출력 패턴 분석, 진동 신호 분석</li>
                <li><strong>검출 항목:</strong> 용접 불량, 기포 발생, 미세 균열</li>
              </ul>
            </div>
            <div className="info-card">
              <h4 style={{ color: 'var(--accent)', fontSize: '1.4rem', marginBottom: 12 }}>02. 배터리 생산 설비 예지 보전</h4>
              <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 15 }}>코팅, 슬리팅, 권취, 컨베이어 등 다양한 기계 장비의 설비 고장을 사전에 예측하고 치명적인 생산 중단(Downtime)을 예방합니다.</p>
              <ul className="card-list">
                <li>설비 진동 신호 정밀 분석</li>
                <li>핵심 구동부 베어링 상태 분석</li>
                <li>장비 모터 이상 탐지</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
