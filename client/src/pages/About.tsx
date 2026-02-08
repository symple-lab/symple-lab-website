export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Us</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                SYMPLE Lab (Semiconductor, Memory, and Processing-In-Memory Electronics Laboratory) aims to advance modern computer systems based on specialized hardware in the post-Moore's law era. We conduct research in various fields of hardware design including computer architecture, VLSI, FPGA, hardware/software co-design, and processing-in-memory with a holistic design approach to improve overall system performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Research Focus</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Our current mission is to build high-performance and scalable computing platforms for future AI applications. We specialize in full-stack AI/ML acceleration research spanning chip design, architecture, and algorithm optimization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Key Research Areas</h2>
              <ul className="space-y-3 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Hardware-Centric LLM Quantization and Low-bit LLM Accelerator Co-Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Digital Accelerator Chips for Emerging GenAI Models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>DRAM-based Computing-in-Memory Chip Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>3D AI Hardware Design for Spatial Computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Efficient AI Hardware for Various Computing Methods and Workloads</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Research Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <p className="text-foreground font-medium">Tape-outs</p>
                  <p className="text-sm text-muted-foreground">Digital and mixed-signal designs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">80+</div>
                  <p className="text-foreground font-medium">Publications</p>
                  <p className="text-sm text-muted-foreground">Top-tier conferences and journals</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">16</div>
                  <p className="text-foreground font-medium">First-authored Papers</p>
                  <p className="text-sm text-muted-foreground">Including ISSCC, VLSI, HPCA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
