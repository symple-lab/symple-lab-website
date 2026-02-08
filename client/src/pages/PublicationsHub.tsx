import { Link } from "wouter";
import { ArrowRight, Upload } from "lucide-react";
import { useState } from "react";
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
  const [publications, setPublications] = useState<Publication[]>(() => {
    const stored = localStorage.getItem("publications");
    return stored ? JSON.parse(stored) : [];
  });
  const [fileUploaded, setFileUploaded] = useState(publications.length > 0);

  const pubCategories = [
    { title: "Journal", desc: "Journal publications", path: "/publications/journal" },
    { title: "Conference", desc: "Conference papers", path: "/publications/conference" }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json<Publication>(sheet);

        // 데이터 검증 및 정렬
        const validRows = rows.filter(row => row.type && row.year && row.title);
        validRows.sort((a, b) => b.year - a.year);

        setPublications(validRows);
        setFileUploaded(true);
        
        // localStorage에 저장
        localStorage.setItem("publications", JSON.stringify(validRows));
        
        alert(`${validRows.length}개의 논문이 로드되었습니다.`);
      } catch (error) {
        console.error("파일 읽기 오류:", error);
        alert("파일을 읽을 수 없습니다. Excel 또는 CSV 파일을 확인하세요.");
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Publications</h1>
          <p className="text-lg text-muted-foreground mb-12">Explore our research publications and achievements</p>

          {/* Excel Upload Section */}
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-2 border-dashed border-primary">
            <div className="flex items-center gap-4 mb-4">
              <Upload className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Upload Publications</h3>
                <p className="text-sm text-muted-foreground">Upload an Excel or CSV file to populate publications</p>
              </div>
            </div>
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-muted-foreground
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-medium
                file:bg-primary file:text-white
                hover:file:opacity-90"
            />
            {fileUploaded && (
              <p className="text-sm text-primary font-medium mt-3">
                ✓ {publications.length} publications loaded
              </p>
            )}
          </div>

          {/* Publication Categories */}
          {fileUploaded && publications.length > 0 ? (
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
              <p className="text-muted-foreground mb-4">No publications loaded yet.</p>
              <p className="text-sm text-muted-foreground">Upload an Excel file to get started.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
