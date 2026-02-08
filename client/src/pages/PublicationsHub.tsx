import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function PublicationsHub() {
  const pubCategories = [
    { title: "Papers", desc: "Journal and conference publications", path: "/publications/paper" },
    { title: "Patents", desc: "Registered patents and IP", path: "/publications/patent" },
    { title: "Awards", desc: "Recognition and awards", path: "/publications/award" },
    { title: "News", desc: "Latest lab news and announcements", path: "/publications/news" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Publications</h1>
          <p className="text-lg text-muted-foreground mb-12">Explore our research publications and achievements</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pubCategories.map((cat) => (
              <Link key={cat.path} href={cat.path}>
                <a className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-all">
                  <h3 className="text-lg font-bold text-primary mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    View <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
