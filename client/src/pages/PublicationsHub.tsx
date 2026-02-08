import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface Publication {
  type: "Journal" | "Conference";
  year: number;
  title: string;
  venue: string;
  authors: string;
  status?: string;
}

export default function PublicationsHub() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Excel 파일에서 publications 데이터 로드
    const loadPublications = async () => {
      try {
        const response = await fetch("/publications.xlsx");
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json<Publication>(sheet);

        // 데이터 검증 및 정렬
        const validRows = rows.filter(row => row.type && row.year && row.title);
        validRows.sort((a, b) => b.year - a.year);

        setPublications(validRows);
        
        // localStorage에도 저장
        localStorage.setItem("publications", JSON.stringify(validRows));
      } catch (error) {
        console.error("Publications 파일 로드 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  const pubCategories = [
    { title: "Journal", desc: "Journal publications", path: "/publications/journal" },
    { title: "Conference", desc: "Conference papers", path: "/publications/conference" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Publications</h1>
            <p className="text-lg text-muted-foreground mb-12">Loading publications...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Publications</h1>
          <p className="text-lg text-muted-foreground mb-12">Explore our research publications and achievements</p>

          {/* Publication Categories */}
          {publications.length > 0 ? (
            <div>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {pubCategories.map((cat) => {
                  const count = publications.filter(p => p.type === cat.title).length;
                  return (
                    <Link key={cat.path} href={cat.path}>
                      <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-all cursor-pointer">
                        <h3 className="text-lg font-bold text-primary mb-2">{cat.title}</h3>
                        <p className="text-muted-foreground mb-4">{cat.desc}</p>
                        <span className="inline-flex items-center gap-2 text-primary font-medium">
                          {count} papers <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Statistics */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-50 rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {publications.length}
                  </div>
                  <p className="text-muted-foreground">Total Publications</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {publications.filter(p => p.type === "Journal").length}
                  </div>
                  <p className="text-muted-foreground">Journal Papers</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {publications.filter(p => p.type === "Conference").length}
                  </div>
                  <p className="text-muted-foreground">Conference Papers</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No publications loaded.</p>
              <p className="text-sm text-muted-foreground">Please check the publications.xlsx file.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
