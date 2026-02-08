import { CheckCircle } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "System-Level Integration",
      description: "We view memory, processor, and logic as an integrated system rather than isolated components, enabling holistic optimization across all levels."
    },
    {
      title: "Cross-Level Optimization",
      description: "From circuit and digital logic to microarchitecture, we identify system bottlenecks and connect them to algorithm and model design for consistent design principles."
    },
    {
      title: "Real-World Impact",
      description: "We focus on chip/architecture design and validation that translates research into practical, deployable technologies for on-device and generative AI."
    },
    {
      title: "Efficiency-First Design",
      description: "Meeting the demanding performance and efficiency requirements of modern AI through specialized hardware design in the post-Moore's law era."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">About SYMPLE Lab</h1>
          
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              <span className="font-bold">SYMPLE Lab</span> (System-level Memory, Processor, Logic Engineering Laboratory) conducts integrated semiconductor chip and architecture research for next-generation AI computing.
            </p>

            <p>
              We adopt a unified design perspective that views memory, processor, and logic at the system level. By redefining power, area, timing, and data movement constraints encountered at the circuit, digital logic, and microarchitecture levels as system bottlenecks, we establish consistent design principles from chip to system by connecting these insights to algorithm and model design.
            </p>

            <p>
              In response to the growing performance and efficiency demands driven by the proliferation of generative AI and on-device AI, we conduct research through cross-level optimization-based chip and architecture design and validation, ensuring our work translates into practically deployable technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Core Principles</h2>

          <div className="space-y-8">
            {principles.map((principle, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Scope */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Research Scope</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Full-Stack AI/ML Acceleration
              </h3>
              <p className="text-muted-foreground mb-4">
                Our research spans the complete stack from chip design to system optimization:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Chip Design:</strong> Circuit and physical design for specialized AI accelerators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Architecture:</strong> Microarchitecture and system-level optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Algorithm:</strong> Model optimization and algorithm-hardware co-design</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Key Research Topics
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Hardware-centric LLM quantization and low-bit inference accelerators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Digital accelerator chips for emerging generative AI models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>DRAM-based computing-in-memory (CIM) architectures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>3D spatial computing and point cloud processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Neuromorphic and spiking neural network hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <p className="text-foreground font-medium mb-2">Tape-outs</p>
              <p className="text-sm text-muted-foreground">
                Digital and mixed-signal chip designs with end-to-end validation capability
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">16</div>
              <p className="text-foreground font-medium mb-2">First-Authored Papers</p>
              <p className="text-sm text-muted-foreground">
                Including 10 conferences (ISSCC×3, VLSI×2, HPCA) and 6 journals (JSSC×3)
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">80+</div>
              <p className="text-foreground font-medium mb-2">Co-Authored Papers</p>
              <p className="text-sm text-muted-foreground">
                53 conferences and 27 journals with leading research institutions
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">739</div>
              <p className="text-foreground font-medium mb-2">Google Scholar Citations</p>
              <p className="text-sm text-muted-foreground">
                As of December 2025, demonstrating significant research impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
