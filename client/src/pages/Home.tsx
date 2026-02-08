/* 
  Neo-Brutalist Home Page
  - Asymmetric layout with diagonal cuts
  - Hero section with geometric background
  - Bold typography and hard shadows
  - Cobalt blue, charcoal, silver color scheme
*/

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Content Area - offset by sidebar */}
      <main className="ml-20 lg:ml-64">
        {/* Hero Section with Geometric Background */}
        <section 
          className="relative min-h-screen flex items-center diagonal-cut-reverse"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/vWCdQNDao4suePJbjySeiF/sandbox/MSQHb4klKiCRVKTk2gHtbd-img-1_1770558330000_na1fn_aGVyby1nZW9tZXRyaWMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdldDZFFORGFvNHN1ZVBKYmp5U2VpRi9zYW5kYm94L01TUUhiNGtsS2lDUlZLVGsyZ0h0YmQtaW1nLTFfMTc3MDU1ODMzMDAwMF9uYTFmbl9hR1Z5YnkxblpXOXRaWFJ5YVdNdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hJfHBzFCjX~ujznq14Xnp08FxOnzKnyjcLQ1-2Bwlh6kpOz6oxW32A~51~zXnsre~n7ylB~GZybdIKT1skqijCV5yxQbvO~LCL69svC6d1g6M-9l0H7O8ynIHQB52i7ydUezoFruBfwSxeP2spBa0S7mdj8hypwxCaiexWtR0gQ5gC7PGyqY6PYx9kr87an0w63w3nqLwwdHsf~4ZXe0EBUh6EoVK04V1iaZ1yZXovp5UQp52VudsC25gDcctU4qyH4o2gkaB4EemZ6fivYNg9OhYjiwPnhtqKay5KuwDxS2o2ElMuys7rHKFVSHeWLNVCxxwt-0Adv35XS2UtoEJA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: '-5rem',
            paddingTop: '8rem',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C]/80 via-[#0047AB]/60 to-transparent"></div>
          
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl">
              <div className="inline-block bg-[#0047AB] text-white px-6 py-2 border-4 border-white mb-8 hard-shadow">
                <span className="font-bold text-sm tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  RESEARCH LABORATORY
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black mb-6 text-white leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                SYMPLE<br />Laboratory
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#C0C0C0] mb-12 max-w-2xl leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                첨단 기술 연구를 통해 미래를 설계하는 혁신적인 연구실입니다. 데이터 과학, 인공지능, 시스템 최적화 분야에서 선도적인 연구를 수행합니다.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/research">
                  <Button 
                    size="lg" 
                    className="bg-[#0047AB] hover:bg-[#0066FF] text-white border-4 border-white px-8 py-6 text-lg font-bold hard-shadow transition-all hover:translate-x-1 hover:translate-y-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    연구 분야 탐색
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <Link href="/publications">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white text-[#2C2C2C] border-4 border-white px-8 py-6 text-lg font-bold hard-shadow hover:bg-[#C0C0C0] transition-all"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    연구 성과 보기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#0047AB] text-white px-4 py-1 border-4 border-[#2C2C2C] mb-6">
                  <span className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ABOUT US</span>
                </div>
                
                <h2 className="text-5xl font-black mb-6 text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  혁신을 향한<br />끊임없는 도전
                </h2>
                
                <p className="text-lg text-[#666666] mb-6 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  SYMPLE Lab은 복잡한 문제를 단순하고 효율적인 솔루션으로 해결하는 것을 목표로 합니다. 우리는 최신 기술과 창의적인 접근법을 결합하여 학계와 산업계 모두에 기여하는 연구를 수행합니다.
                </p>
                
                <p className="text-lg text-[#666666] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  다학제적 협력을 통해 데이터 과학, 머신러닝, 최적화 알고리즘 등 다양한 분야에서 혁신적인 연구 성과를 창출하고 있습니다.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/vWCdQNDao4suePJbjySeiF/sandbox/MSQHb4klKiCRVKTk2gHtbd-img-2_1770558323000_na1fn_cmVzZWFyY2gtYWJzdHJhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdldDZFFORGFvNHN1ZVBKYmp5U2VpRi9zYW5kYm94L01TUUhiNGtsS2lDUlZLVGsyZ0h0YmQtaW1nLTJfMTc3MDU1ODMyMzAwMF9uYTFmbl9jbVZ6WldGeVkyZ3RZV0p6ZEhKaFkzUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vWwp61guy-J~5T4EIEG-SoEiRLx0dTMP4tF6~h3DrvopI9a51D8ORNCbKDdfKNwPwRrNj9s-Cc-yTSr19rK2JlCALDEvhXWrQ07FKQnp8mqMON1ITtvGVePHDWXYF4dEfQhzQCcDRr03CBzX3J6FhE3MOsMcvjStyQzvVXsKWb4BNT5HhIfTLgrc5ycVZWXQPDj4YFzq98PjsK6P4E3pIvp0SpJDblsTwXYdPYgYqJ-p-lRzsYa61BrqnkRjwhq3z-BRJRW6V-fwE7zk0IGUOynpqlNIw7SalJrEFsOqpzVDvGulMkZkxmSbUvL9PuA0o7eLOwpxsSooDoCteZk2Aw__"
                  alt="Research Abstract"
                  className="w-full border-4 border-[#2C2C2C] hard-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-5xl font-black mb-16 text-center text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              핵심 가치
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "명확한 목표",
                  description: "복잡한 문제를 단순하고 효과적인 솔루션으로 해결합니다."
                },
                {
                  icon: Lightbulb,
                  title: "창의적 혁신",
                  description: "기존의 틀을 벗어난 새로운 접근법으로 연구를 진행합니다."
                },
                {
                  icon: TrendingUp,
                  title: "지속적 성장",
                  description: "끊임없는 학습과 발전을 통해 연구 역량을 강화합니다."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white border-4 border-[#2C2C2C] p-8 hard-shadow hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="w-16 h-16 bg-[#0047AB] border-4 border-[#2C2C2C] flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {value.title}
                  </h3>
                  
                  <p className="text-[#666666] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#2C2C2C]">
          <div className="container text-center">
            <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              함께 연구하고 싶으신가요?
            </h2>
            
            <p className="text-xl text-[#C0C0C0] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              SYMPLE Lab은 열정적인 연구자들과 함께 성장하고 있습니다. 우리의 팀에 합류하세요.
            </p>
            
            <Link href="/team">
              <Button 
                size="lg"
                className="bg-[#0047AB] hover:bg-[#0066FF] text-white border-4 border-white px-8 py-6 text-lg font-bold hard-shadow transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                팀 구성원 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
