import { Link } from "wouter";
import { ArrowRight, Zap, Cpu, Layers } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Cpu,
      title: "Chip Design",
      description: "Full-stack semiconductor design from circuit to system level"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Optimizing power consumption for next-generation AI computing"
    },
    {
      icon: Layers,
      title: "Cross-Level Optimization",
      description: "Algorithm-architecture-circuit co-design approach"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-4">
                SYMPLE Lab
              </h1>
              <p className="text-xl text-primary font-medium mb-2">
                System-level Memory, Processor, Logic Engineering Laboratory
              </p>
              <p className="text-lg text-muted-foreground">
                Integrated design for next-generation AI computing
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              We conduct full-stack AI/ML acceleration research spanning chip design, architecture, and algorithm optimization. Our mission is to advance modern computing systems through specialized hardware design in the post-Moore's law era.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                  Learn More <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </Link>
              <Link href="/research">
                <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  Our Research
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Research Highlights
          </h2>

          <div className="space-y-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Research Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground">Tape-outs</p>
              <p className="text-sm text-muted-foreground mt-1">Digital & Mixed-Signal</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">16</div>
              <p className="text-muted-foreground">First-Authored Papers</p>
              <p className="text-sm text-muted-foreground mt-1">Top-tier venues</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80+</div>
              <p className="text-muted-foreground">Co-Authored Papers</p>
              <p className="text-sm text-muted-foreground mt-1">ISSCC, VLSI, etc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-l-4 border-primary bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Hardware-Centric LLM Quantization
              </h3>
              <p className="text-muted-foreground text-sm">
                Low-bit LLM accelerator co-design with rotation and group quantization for efficient inference
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Digital Accelerator Chips
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialized chips for emerging GenAI models including diffusion and language models
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">
                DRAM-based Computing-in-Memory
              </h3>
              <p className="text-muted-foreground text-sm">
                Reconfigurable eDRAM-CIM architectures with dynamic resource switching and adaptive bit-truncation
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-3">
                3D AI Hardware Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Efficient spatial computing processors for point cloud and 3D workloads
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
