/* 
  Neo-Brutalist Research Page
  - Display research areas and directions
  - Geometric card layouts with hard shadows
*/

import Navigation from "@/components/Navigation";
import { Brain, Database, Cpu, Network, BarChart3, Zap } from "lucide-react";

export default function Research() {
  const researchAreas = [
    {
      icon: Brain,
      title: "인공지능 및 머신러닝",
      description: "딥러닝, 강화학습, 자연어 처리 등 최신 AI 기술을 활용한 지능형 시스템 연구",
      keywords: ["Deep Learning", "Reinforcement Learning", "NLP", "Computer Vision"]
    },
    {
      icon: Database,
      title: "데이터 과학 및 분석",
      description: "대규모 데이터 처리, 패턴 인식, 예측 모델링을 통한 인사이트 도출",
      keywords: ["Big Data", "Data Mining", "Predictive Analytics", "Statistical Modeling"]
    },
    {
      icon: Cpu,
      title: "시스템 최적화",
      description: "알고리즘 최적화, 성능 개선, 효율적인 자원 관리 시스템 설계",
      keywords: ["Algorithm Design", "Performance Optimization", "Resource Management"]
    },
    {
      icon: Network,
      title: "네트워크 및 분산 시스템",
      description: "클라우드 컴퓨팅, 분산 처리, 네트워크 프로토콜 및 보안 연구",
      keywords: ["Cloud Computing", "Distributed Systems", "Network Security"]
    },
    {
      icon: BarChart3,
      title: "의사결정 지원 시스템",
      description: "데이터 기반 의사결정, 최적화 모델, 시뮬레이션 및 예측 시스템",
      keywords: ["Decision Support", "Optimization Models", "Simulation"]
    },
    {
      icon: Zap,
      title: "실시간 처리 시스템",
      description: "스트림 데이터 처리, 실시간 분석, IoT 및 엣지 컴퓨팅 연구",
      keywords: ["Stream Processing", "Real-time Analytics", "IoT", "Edge Computing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="ml-20 lg:ml-64">
        {/* Header Section */}
        <section className="py-20 bg-[#2C2C2C] border-b-4 border-[#0047AB]">
          <div className="container">
            <div className="inline-block bg-[#0047AB] text-white px-4 py-1 border-4 border-white mb-6">
              <span className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>RESEARCH</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              연구 분야
            </h1>
            
            <p className="text-xl text-[#C0C0C0] max-w-3xl leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              SYMPLE Lab은 다양한 분야에서 혁신적인 연구를 수행하고 있습니다. 우리의 연구는 학문적 우수성과 실용적 가치를 동시에 추구합니다.
            </p>
          </div>
        </section>

        {/* Research Areas Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white border-4 border-[#2C2C2C] p-8 hard-shadow hover:translate-x-1 hover:translate-y-1 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-[#0047AB] border-4 border-[#2C2C2C] flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {area.title}
                      </h3>
                      
                      <p className="text-[#666666] leading-relaxed mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword, idx) => (
                      <span 
                        key={idx}
                        className="bg-[#E5E5E5] text-[#2C2C2C] px-3 py-1 border-2 border-[#2C2C2C] text-sm font-bold"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Philosophy Section */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-black mb-12 text-center text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                연구 철학
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#0047AB]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    학제간 협력
                  </h3>
                  <p className="text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    다양한 분야의 전문가들과 협력하여 복합적인 문제를 해결합니다.
                  </p>
                </div>
                
                <div className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#0047AB]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    이론과 실무의 결합
                  </h3>
                  <p className="text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    학문적 엄밀성과 실용적 가치를 동시에 추구하는 연구를 수행합니다.
                  </p>
                </div>
                
                <div className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#0047AB]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    개방적 연구 문화
                  </h3>
                  <p className="text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    연구 성과를 적극적으로 공유하고 학계에 기여합니다.
                  </p>
                </div>
                
                <div className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#0047AB]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    지속 가능한 혁신
                  </h3>
                  <p className="text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    장기적인 관점에서 사회에 긍정적인 영향을 미치는 연구를 지향합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
