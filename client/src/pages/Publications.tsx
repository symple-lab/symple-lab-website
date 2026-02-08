/* 
  Neo-Brutalist Publications Page
  - Display publications list
  - Excel file upload and parsing functionality
  - Filter and search capabilities
*/

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Upload, FileText, Search, ExternalLink, Calendar, Users as UsersIcon } from "lucide-react";
import { toast } from "sonner";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([
    {
      title: "Advanced Machine Learning Techniques for Data Classification",
      authors: "Kim, J., Lee, S., Park, H.",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2025",
      doi: "10.1234/icml.2025.001",
      url: "https://example.com/paper1"
    },
    {
      title: "Optimization Algorithms for Large-Scale Systems",
      authors: "Lee, S., Choi, M.",
      venue: "IEEE Transactions on Systems",
      year: "2024",
      doi: "10.1234/ieee.2024.002"
    },
    {
      title: "Real-time Data Processing in Distributed Environments",
      authors: "Park, H., Kim, J., Jung, Y.",
      venue: "ACM Symposium on Cloud Computing",
      year: "2024",
      url: "https://example.com/paper3"
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      toast.error("Excel 파일(.xlsx, .xls) 또는 CSV 파일만 업로드 가능합니다.");
      return;
    }

    try {
      const XLSX = await import('xlsx');
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];
      
      // Map Excel columns to Publication interface
      // Expected columns: title, authors, venue, year, doi, url
      const parsedPublications: Publication[] = jsonData.map(row => ({
        title: row.title || row.Title || '',
        authors: row.authors || row.Authors || '',
        venue: row.venue || row.Venue || '',
        year: String(row.year || row.Year || ''),
        doi: row.doi || row.DOI || undefined,
        url: row.url || row.URL || undefined
      })).filter(pub => pub.title && pub.authors); // Filter out invalid entries
      
      if (parsedPublications.length > 0) {
        setPublications(parsedPublications);
        toast.success(`${parsedPublications.length}개의 논문이 성공적으로 로드되었습니다.`);
      } else {
        toast.error("유효한 논문 데이터를 찾을 수 없습니다. Excel 파일의 열 이름을 확인하세요 (title, authors, venue, year).");
      }
      
    } catch (error) {
      toast.error("파일 파싱 중 오류가 발생했습니다. 파일 형식을 확인하세요.");
      console.error(error);
    }
  };

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchQuery === "" || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === "all" || pub.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });

  const years = Array.from(new Set(publications.map(p => p.year))).sort().reverse();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="ml-20 lg:ml-64">
        {/* Header Section */}
        <section className="py-20 bg-[#2C2C2C] border-b-4 border-[#0047AB]">
          <div className="container">
            <div className="inline-block bg-[#0047AB] text-white px-4 py-1 border-4 border-white mb-6">
              <span className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>PUBLICATIONS</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              연구 성과
            </h1>
            
            <p className="text-xl text-[#C0C0C0] max-w-3xl leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              SYMPLE Lab의 연구 성과를 확인하세요. Excel 파일을 업로드하여 논문 목록을 관리할 수 있습니다.
            </p>
          </div>
        </section>

        {/* Upload Section */}
        <section 
          className="py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/vWCdQNDao4suePJbjySeiF/sandbox/MSQHb4klKiCRVKTk2gHtbd-img-4_1770558329000_na1fn_cHVibGljYXRpb25zLXBhdHRlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdldDZFFORGFvNHN1ZVBKYmp5U2VpRi9zYW5kYm94L01TUUhiNGtsS2lDUlZLVGsyZ0h0YmQtaW1nLTRfMTc3MDU1ODMyOTAwMF9uYTFmbl9jSFZpYkdsallYUnBiMjV6TFhCaGRIUmxjbTQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zztt~WSPesB5GyQBx9u9cH39F1HpJRDwOVm5MvjUhtbGqZEm~9B7X5ZTMEbKiJmmB7pRbcgpWT0bcosr-mTB72t57aHphMQflr97Zc~SFiRQVbXhyLnPpF3sK7Nd6mJAyiveBYMD6~tDVrnjuH3QgnI7HZoGfAZ4~D2djWVYbt18WlZuTCc-cImlm1Dm2ewv5WjXpg5gOW-8Mc75ZwDVb5zVlZHXBQpkWTM-ZPseuwMOfU5dg-KcJvvEVAJT9A7tyNQwoagPVZgTplk0llAjxEIGfiI96v43LxkSPk09d7LqaskpF74Zt~k1g0wM9Z~rPsuBC3PNKu7B2u8P31peog__')`
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto bg-white border-4 border-[#2C2C2C] p-8 hard-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0047AB] border-4 border-[#2C2C2C] flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Excel 파일 업로드
                  </h3>
                  <p className="text-sm text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    논문 목록이 포함된 Excel 파일을 업로드하세요
                  </p>
                </div>
              </div>
              
              <div className="border-4 border-dashed border-[#C0C0C0] p-8 text-center">
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button 
                    className="bg-[#0047AB] hover:bg-[#0066FF] text-white border-4 border-[#2C2C2C] px-6 py-3 font-bold hard-shadow-sm cursor-pointer"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    asChild
                  >
                    <span>
                      <Upload className="mr-2 w-5 h-5" />
                      파일 선택
                    </span>
                  </Button>
                </label>
                <p className="text-sm text-[#666666] mt-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  지원 형식: .xlsx, .xls, .csv
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-[#F5F5F5] border-y-4 border-[#2C2C2C]">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                <Input
                  type="text"
                  placeholder="논문 제목, 저자, 학회명으로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 border-4 border-[#2C2C2C] h-14 text-lg"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                />
              </div>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border-4 border-[#2C2C2C] px-6 h-14 bg-white font-bold cursor-pointer"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <option value="all">모든 연도</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <p className="text-[#666666] text-lg" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                총 <span className="font-bold text-[#0047AB]">{filteredPublications.length}</span>개의 논문
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-white border-4 border-[#2C2C2C] p-6 hard-shadow-sm hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0047AB] border-4 border-[#2C2C2C] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#2C2C2C] mb-3 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {pub.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-[#666666]">
                          <UsersIcon className="w-4 h-4" />
                          <span style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{pub.authors}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-[#666666]">
                          <Calendar className="w-4 h-4" />
                          <span style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                            {pub.venue} ({pub.year})
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {pub.doi && (
                          <a 
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#E5E5E5] text-[#2C2C2C] px-3 py-1 border-2 border-[#2C2C2C] text-sm font-bold hover:bg-[#0047AB] hover:text-white transition-colors"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            DOI
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        
                        {pub.url && (
                          <a 
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#E5E5E5] text-[#2C2C2C] px-3 py-1 border-2 border-[#2C2C2C] text-sm font-bold hover:bg-[#0047AB] hover:text-white transition-colors"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            PDF
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPublications.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-[#C0C0C0] mx-auto mb-4" />
                <p className="text-xl text-[#666666]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  검색 결과가 없습니다.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
