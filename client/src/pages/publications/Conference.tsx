import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

interface Publication {
  type: "Journal" | "Conference";
  year: number;
  title: string;
  venue: string;
  authors: string;
  status?: string;
}

export default function Conference() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [groupedByYear, setGroupedByYear] = useState<Map<number, Publication[]>>(new Map());

  useEffect(() => {
    // localStorage에서 publications 데이터 가져오기
    const stored = localStorage.getItem("publications");
    if (stored) {
      try {
        const data = JSON.parse(stored) as Publication[];
        const conferences = data.filter(p => p.type === "Conference").sort((a, b) => b.year - a.year);
        setPublications(conferences);

        // 연도별로 그룹화
        const grouped = new Map<number, Publication[]>();
        conferences.forEach(pub => {
          if (!grouped.has(pub.year)) {
            grouped.set(pub.year, []);
          }
          grouped.get(pub.year)!.push(pub);
        });
        setGroupedByYear(grouped);
      } catch (error) {
        console.error("데이터 로드 오류:", error);
      }
    }
  }, []);

  if (publications.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-4">Conference Papers</h1>
            <p className="text-lg text-muted-foreground mb-12">Conference publications</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">No conference papers loaded yet.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Please upload an Excel file on the Publications page.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Conference Papers</h1>
          <p className="text-lg text-muted-foreground mb-12">
            {publications.length} conference publications
          </p>

          {/* Year Groups */}
          <div className="space-y-12">
            {Array.from(groupedByYear.entries())
              .sort(([yearA], [yearB]) => yearB - yearA)
              .map(([year, pubs]) => (
                <div key={year}>
                  {/* Year Header */}
                  <div className="mb-6 pb-4 border-b-2 border-primary">
                    <h2 className="text-2xl font-bold text-primary">{year}</h2>
                  </div>

                  {/* Papers in Year */}
                  <div className="space-y-6 mb-8">
                    {pubs.map((paper, idx) => (
                      <div key={`${year}-${idx}`} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start gap-4">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-lg font-bold text-foreground leading-tight">
                                {paper.title}
                              </h3>
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
                                Conference
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
