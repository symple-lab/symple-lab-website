import { FileText, ExternalLink } from "lucide-react";

export default function Paper() {
  const papers = [
    {
      id: "J1",
      title: "EdgeDiff: Energy-Efficient Multi-Modal Few-Step Diffusion Model Accelerator using Mixed-Precision and Reordered Group Quantization",
      venue: "IEEE Journal of Solid-State Circuits (JSSC)",
      year: 2025,
      type: "Journal",
      authors: "Sangjin Kim, Jungjun Oh, Jeonggyu So, Yuseon Choi, Sangyeob Kim, Dongseok Im, Gwangtae Park, Hoi-Jun Yoo",
      status: "Invited"
    },
    {
      id: "J2",
      title: "LightRot: A Light-weighted Rotation Scheme and Architecture for Accurate Low-bit Large Language Model Inference",
      venue: "IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS)",
      year: 2025,
      type: "Journal",
      authors: "Sangjin Kim, Yuseon Choi, Jungjun Oh, Byeongcheol Kim, Hoi-Jun Yoo"
    },
    {
      id: "J3",
      title: "Scaling-CIM: eDRAM In-Memory-Computing Accelerator With Dynamic-Scaling ADC and Adaptive Analog Operation",
      venue: "IEEE Journal of Solid-State Circuits (JSSC)",
      year: 2024,
      type: "Journal",
      authors: "Sangjin Kim, Soyeon Um, Wooyoung Jo, Jingu Lee, Sangwoo Ha, Zhiyong Li, Hoi-Jun Yoo"
    },
    {
      id: "J4",
      title: "DynaPlasia: An eDRAM in-memory computing-based reconfigurable spatial accelerator with triple-mode cell",
      venue: "IEEE Journal of Solid-State Circuits (JSSC)",
      year: 2023,
      type: "Journal",
      authors: "Sangjin Kim, Zhiyong Li, Soyeon Um, Wooyoung Jo, Sangwoo Ha, Juhyoung Lee, Sangyeob Kim, Donghyeon Han, Hoi-Jun Yoo",
      status: "Invited"
    },
    {
      id: "C1",
      title: "GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference",
      venue: "IEEE International Symposium on High-Performance Computer Architecture (HPCA)",
      year: 2026,
      type: "Conference",
      authors: "Sangjin Kim, Yuseon Choi, Byeongcheol Kim, Jungjun Oh, Hoi-jun Yoo"
    },
    {
      id: "C2",
      title: "Revolver: Low-Bit GenAI Accelerator for Distilled-Model and CoT with Phase-Aware-Quantization and Rotation-Based Integer-Scaled Group Quantization",
      venue: "IEEE International Solid-State Circuits Conference (ISSCC)",
      year: 2026,
      type: "Conference",
      authors: "Sangjin Kim, Jungjun Oh, Byeongcheol Kim, Yuseon Choi, Gwangtae Park, Hoi-jun Yoo"
    },
    {
      id: "C5",
      title: "DynaPlasia: An eDRAM in-memory-computing-based reconfigurable spatial accelerator with triple-mode cell for dynamic resource switching",
      venue: "IEEE International Solid-State Circuits Conference (ISSCC)",
      year: 2023,
      type: "Conference",
      authors: "Sangjin Kim, Zhiyong Li, Soyeon Um, Wooyoung Jo, Sangwoo Ha, Juhyoung Lee, Sangyeob Kim, Donghyeon Han, Hoi-Jun Yoo",
      status: "Invited to JSSC"
    },
    {
      id: "C6",
      title: "Scaling-CIM: An eDRAM-based in-memory-computing accelerator with dynamic-scaling ADC for SQNR-boosting and layer-wise adaptive bit-truncation",
      venue: "IEEE Symposium on VLSI Technology and Circuits",
      year: 2023,
      type: "Conference",
      authors: "Sangjin Kim, Soyeon Um, Wooyoung Jo, Jingu Lee, Sangwoo Ha, Zhiyong Li, Hoi-Jun Yoo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Papers</h1>
          <p className="text-lg text-muted-foreground mb-12">Journal and conference publications</p>

          <div className="space-y-6">
            {papers.map((paper) => (
              <div key={paper.id} className="border-b border-border pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {paper.title}
                      </h3>
                      <span className="text-sm font-medium text-accent flex-shrink-0">
                        {paper.year}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm font-medium text-primary mb-1">
                        {paper.venue}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {paper.authors}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium border border-border rounded">
                        {paper.type}
                      </span>
                      {paper.status && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-primary border border-primary rounded">
                          {paper.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              For a complete list of publications, please visit{" "}
              <a href="https://scholar.google.com" className="text-primary font-medium hover:underline">
                Google Scholar
              </a>
              {" "}or contact the lab directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
