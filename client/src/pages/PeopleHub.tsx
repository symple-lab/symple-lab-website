import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function PeopleHub() {
  const peopleCategories = [
    { title: "Professor", desc: "Principal investigator and advisors", path: "/people/professor" },
    { title: "Students", desc: "PhD candidates and master's students", path: "/people/student" },
    { title: "Gallery", desc: "Lab photos and team moments", path: "/people/gallery" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">People</h1>
          <p className="text-lg text-muted-foreground mb-12">Meet the SYMPLE Lab team</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {peopleCategories.map((cat) => (
              <Link key={cat.path} href={cat.path}>
                <div className="p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-all cursor-pointer">
                  <h3 className="text-lg font-bold text-primary mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    View <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
