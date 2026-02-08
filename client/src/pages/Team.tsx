/* 
  Neo-Brutalist Team Page
  - Display team members with geometric card design
  - Professor, researchers, and students sections
*/

import Navigation from "@/components/Navigation";
import { Mail, GraduationCap, User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  research?: string;
  image?: string;
}

export default function Team() {
  const professor: TeamMember = {
    name: "김교수",
    role: "Principal Investigator",
    email: "professor@symple.ac.kr",
    research: "인공지능, 데이터 과학, 시스템 최적화"
  };

  const researchers: TeamMember[] = [
    {
      name: "이박사",
      role: "Postdoctoral Researcher",
      email: "researcher1@symple.ac.kr",
      research: "머신러닝, 딥러닝"
    },
    {
      name: "박박사",
      role: "Research Scientist",
      email: "researcher2@symple.ac.kr",
      research: "분산 시스템, 클라우드 컴퓨팅"
    }
  ];

  const students: TeamMember[] = [
    {
      name: "최석사",
      role: "Ph.D. Candidate",
      email: "phd1@symple.ac.kr",
      research: "자연어 처리, 대규모 언어 모델"
    },
    {
      name: "정석사",
      role: "Ph.D. Student",
      email: "phd2@symple.ac.kr",
      research: "컴퓨터 비전, 이미지 인식"
    },
    {
      name: "한학사",
      role: "Master's Student",
      email: "master1@symple.ac.kr",
      research: "데이터 마이닝, 예측 분석"
    },
    {
      name: "윤학사",
      role: "Master's Student",
      email: "master2@symple.ac.kr",
      research: "강화학습, 로봇공학"
    }
  ];

  const renderMemberCard = (member: TeamMember, index: number) => (
    <div 
      key={index}
      className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-[#0047AB] border-4 border-[#2C2C2C] flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {member.name}
          </h3>
          
          <p className="text-[#0047AB] font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {member.role}
          </p>
          
          {member.research && (
            <div className="mb-3">
              <p className="text-sm text-[#666666] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                <span className="font-bold text-[#2C2C2C]">연구 분야:</span> {member.research}
              </p>
            </div>
          )}
          
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-[#666666] hover:text-[#0047AB] transition-colors"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{member.email}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="ml-20 lg:ml-64">
        {/* Header Section */}
        <section className="py-20 bg-[#2C2C2C] border-b-4 border-[#0047AB]">
          <div className="container">
            <div className="inline-block bg-[#0047AB] text-white px-4 py-1 border-4 border-white mb-6">
              <span className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>TEAM</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              연구진
            </h1>
            
            <p className="text-xl text-[#C0C0C0] max-w-3xl leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              SYMPLE Lab은 열정적이고 재능있는 연구자들로 구성되어 있습니다. 우리는 함께 혁신적인 연구를 수행하며 미래를 만들어갑니다.
            </p>
          </div>
        </section>

        {/* Team Image Section */}
        <section 
          className="py-20 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/vWCdQNDao4suePJbjySeiF/sandbox/MSQHb4klKiCRVKTk2gHtbd-img-3_1770558319000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdldDZFFORGFvNHN1ZVBKYmp5U2VpRi9zYW5kYm94L01TUUhiNGtsS2lDUlZLVGsyZ0h0YmQtaW1nLTNfMTc3MDU1ODMxOTAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DXBHFdB-eGKjEAQkELOeG~~gn5fA46JunIQxOprAuQs0F5bGVrswHivBfISQGjgYe1qyiXnGjGjR0puOCIL-OiUS7V7OoArFVrzQF2C50YqdJQUyzF413Jar9kq0GmRPeqh4LeTvZQ5SM3JEMBZWQ9U73iS3C5xy3uX5AZAQ1Tm~YxP8VssH4WqVX0jdlKXEjF33-yldIoipspzT9asuXD5P2TI3eWCwkuszk3jR-8UCBUwyz8aIDJvxg9-UWVGdjAmCtARVrfmjCMmJyjQbGAN-652zQJLk0DCSvkKo1N5MNBEoWBeqPtx5bROXs7Jn25EZDTndMZWEUVS4rRlmXg__')`
          }}
        >
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="container relative z-10 text-center">
            <div className="inline-block bg-white border-4 border-[#2C2C2C] p-8 hard-shadow max-w-2xl">
              <GraduationCap className="w-16 h-16 text-[#0047AB] mx-auto mb-4" />
              <h2 className="text-3xl font-black text-[#2C2C2C] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                협력과 혁신의 문화
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                우리는 개방적인 연구 환경에서 서로의 아이디어를 존중하고 발전시킵니다. 다양한 배경과 전문성을 가진 구성원들이 모여 시너지를 창출합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Principal Investigator */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-black mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Principal Investigator
            </h2>
            
            <div className="max-w-3xl">
              {renderMemberCard(professor, 0)}
            </div>
          </div>
        </section>

        {/* Researchers */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <h2 className="text-4xl font-black mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Researchers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {researchers.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>
        </section>

        {/* Students */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-black mb-8 text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Students
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {students.map((member, index) => renderMemberCard(member, index))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-[#2C2C2C]">
          <div className="container text-center">
            <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              함께 연구할 인재를 찾습니다
            </h2>
            
            <p className="text-xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              SYMPLE Lab에서 함께 연구하고 싶으신가요? 석사, 박사 과정 학생 및 박사후 연구원을 모집하고 있습니다.
            </p>
            
            <a href="mailto:professor@symple.ac.kr">
              <div className="inline-flex items-center gap-3 bg-[#0047AB] text-white px-8 py-4 border-4 border-white font-bold text-lg hard-shadow hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <Mail className="w-6 h-6" />
                문의하기
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
