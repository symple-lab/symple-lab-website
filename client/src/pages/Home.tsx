import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            SYMPLE Lab
          </h1>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            Semiconductor, Memory, and Processing-In-Memory Electronics Laboratory
          </p>
          <p className="text-lg text-foreground mb-8 leading-relaxed max-w-2xl">
            We conduct full-stack AI/ML acceleration research spanning chip design, architecture, and algorithm optimization. Our mission is to advance modern computing systems through specialized hardware design in the post-Moore's law era.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/research">
              <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                Our Research
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <h2 className="section-heading">Research Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="publication-item">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-foreground">8</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Tape-outs</h3>
                  <p className="text-muted-foreground">Digital and mixed-signal chip designs with end-to-end validation capability</p>
                </div>
              </div>
            </div>

            <div className="publication-item">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-foreground">80+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Publications</h3>
                  <p className="text-muted-foreground">Peer-reviewed papers in top-tier conferences and journals</p>
                </div>
              </div>
            </div>

            <div className="publication-item">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-foreground">AI</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Focus</h3>
                  <p className="text-muted-foreground">Specialized hardware for AI/ML acceleration and emerging workloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <h2 className="section-heading">Quick Links</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/publications">
              <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-white transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-primary mb-2">Publications</h3>
                <p className="text-muted-foreground mb-4">Explore our papers, patents, awards, and news</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View All <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/people">
              <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-white transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-primary mb-2">People</h3>
                <p className="text-muted-foreground mb-4">Meet our faculty, students, and collaborators</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View All <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/gallery">
              <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-white transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-primary mb-2">Chip Gallery</h3>
                <p className="text-muted-foreground mb-4">Showcase of our chip designs and tape-outs</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View All <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/research">
              <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-white transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-primary mb-2">Research Areas</h3>
                <p className="text-muted-foreground mb-4">Explore our current research focus and directions</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View All <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">SYMPLE Lab</h4>
              <p className="text-sm text-muted-foreground">
                Semiconductor, Memory, and Processing-In-Memory Electronics Laboratory at KAIST
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: sangjinkim@kaist.ac.kr<br />
                Phone: +82-10-2980-1114
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Location</h4>
              <p className="text-sm text-muted-foreground">
                KAIST, Daejeon, South Korea
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SYMPLE Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
