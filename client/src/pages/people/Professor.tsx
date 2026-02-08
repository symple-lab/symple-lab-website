import { Mail, Phone, Linkedin, Award, BookOpen } from "lucide-react";

export default function Professor() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-12">Faculty</h1>

          {/* Professor Profile */}
          <div className="bg-blue-50 p-8 rounded-lg border border-border mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-2">Sangjin Kim</h2>
                <p className="text-lg text-primary font-medium mb-6">Researcher, PIM Semiconductor Design Research Center, KAIST</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:sangjinkim@kaist.ac.kr" className="text-foreground hover:text-primary">
                      sangjinkim@kaist.ac.kr
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+82-10-2980-1114</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <a href="https://linkedin.com/in/sj-kim-efficient-ai/" className="text-foreground hover:text-primary">
                      linkedin.com/in/sj-kim-efficient-ai/
                    </a>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-border">
                  <h3 className="font-bold text-foreground mb-2">Research Focus</h3>
                  <p className="text-muted-foreground">
                    Full-stack AI/ML acceleration research spanning chip design, architecture, and algorithm optimization. Specializing in DRAM-CIM, digital AI accelerators, and GenAI algorithm-architecture co-design.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded border border-border">
                <h3 className="font-bold text-foreground mb-4">Key Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-accent">8</div>
                    <p className="text-sm text-muted-foreground">Tape-outs</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">16</div>
                    <p className="text-sm text-muted-foreground">1st-authored Papers</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">80+</div>
                    <p className="text-sm text-muted-foreground">Co-authored Papers</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">739</div>
                    <p className="text-sm text-muted-foreground">Google Scholar Citations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">Education</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">Ph.D. in Electrical Engineering</h4>
                  <p className="text-muted-foreground">KAIST, Mar 2021 - Feb 2024</p>
                  <p className="text-sm text-muted-foreground">Advisor: Hoi-Jun Yoo</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">M.S. in Electrical Engineering</h4>
                  <p className="text-muted-foreground">KAIST, Mar 2019 - Feb 2021</p>
                  <p className="text-sm text-muted-foreground">Advisor: Hoi-Jun Yoo</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">B.S. in Electrical Engineering</h4>
                  <p className="text-muted-foreground">KAIST, Mar 2014 - Feb 2019</p>
                  <p className="text-sm text-muted-foreground">GPA: 95.0/100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">Research Areas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Hardware-Centric LLM Quantization</h4>
                <p className="text-sm text-muted-foreground">Low-bit LLM accelerator co-design with rotation and group quantization</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Digital AI Accelerators</h4>
                <p className="text-sm text-muted-foreground">Chips for emerging GenAI models including diffusion and language models</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-2">DRAM-CIM Design</h4>
                <p className="text-sm text-muted-foreground">Reconfigurable eDRAM computing-in-memory with dynamic resource switching</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-2">3D AI Hardware</h4>
                <p className="text-sm text-muted-foreground">Spatial computing and point-cloud processing for 3D applications</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">Recognition</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Recipient of 8 research awards</span>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Invited speaker at leading companies (Apple, Google, Samsung, Neuralink)</span>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Lecturer of KAIST graduate course AS501 (Spring 2025)</span>
              </div>
            </div>
          </div>

          {/* Professional Activity */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">Professional Activity</h3>
            <div className="space-y-3 text-foreground">
              <p>• Researcher of PIM Semiconductor Design Research Center, KAIST (AI-PIM) (Mar 2024 – Present)</p>
              <p>• Reviewer for major IEEE conferences (ISCAS, AICAS) and journals (JSSC, TCAS-I/II, TCSVT, T-VLSI, Proc. of IEEE)</p>
              <p>• Lecturer designing curriculum, lectures, projects, and exams for graduate courses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
