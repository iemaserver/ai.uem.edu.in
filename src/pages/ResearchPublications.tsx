import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { publications, annexures } from "@/data/departmentData";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { getAcademicYear, ACADEMIC_YEAR_OPTIONS } from "@/lib/academicYear";

interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: string;
  category: 'publication' | 'annexure';
  indexedIn?: string;
  link?: string;
  doi?: string;
  academicYear: string;
}

const allPublications: PublicationItem[] = [
  ...publications.map(p => ({
    ...p,
    id: `pub-${p.id}`,
    category: 'publication' as const,
    academicYear: getAcademicYear(p.journal, p.year),
  })),
  ...annexures.map(a => ({
    ...a,
    id: `annex-${a.id}`,
    category: 'annexure' as const,
    academicYear: getAcademicYear(a.journal, a.year),
  }))
];

const types = ["all", "journal", "conference", "book_chapter", "annexure"] as const;

const ResearchPublications = () => {
  const [sessionFilter, setSessionFilter] = useState<string | "all">("all");
  const [typeFilter, setTypeFilter] = useState<typeof types[number]>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filtered = allPublications.filter(p => {
    if (sessionFilter !== "all" && p.academicYear !== sessionFilter) return false;
    if (typeFilter !== "all") {
      if (typeFilter === "annexure" && p.category !== "annexure") return false;
      if (typeFilter !== "annexure" && p.category === "annexure") return false;
      if (typeFilter !== "annexure" && p.type !== typeFilter) return false;
    }
    return true;
  });

  const grouped = ACADEMIC_YEAR_OPTIONS
    .filter(y => sessionFilter === "all" || y === sessionFilter)
    .map(y => ({ session: y, pubs: filtered.filter(p => p.academicYear === y) }))
    .filter(g => g.pubs.length > 0);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Publications</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-8">
            <select
              value={sessionFilter}
              onChange={(e) => setSessionFilter(e.target.value)}
              className="px-3 py-2 rounded-md border border-border bg-card text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All Academic Years</option>
              {ACADEMIC_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <div className="flex gap-1">
              {types.map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                    typeFilter === t ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t === "all" ? "All" : t === "book_chapter" ? "Book Chapter" : t === "annexure" ? "Annexure" : t}
                </button>
              ))}
            </div>
          </div>

          {grouped.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground font-body">No publications found for the selected filter.</p>
            </div>
          ) : (
            grouped.map(({ session, pubs }) => (
              <div key={session} className="mb-10">
                <h3 className="font-display font-bold text-xl text-foreground mb-4 border-b border-border pb-2">Academic Session {session}</h3>
                <div className="space-y-4">
                  {pubs.map((p) => {
                    const isExpanded = expandedIds.has(p.id);
                    const titleLength = p.title.length;
                    const shouldTruncate = titleLength > 150;
                    const displayTitle = shouldTruncate && !isExpanded 
                      ? p.title.substring(0, 150) + "..." 
                      : p.title;

                    return (
                      <div key={p.id} className="bg-card border border-border rounded-lg p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-[15px] font-medium text-foreground font-body italic mb-1">
                              {displayTitle}
                              {shouldTruncate && (
                                <button
                                  onClick={() => toggleExpand(p.id)}
                                  className="ml-2 text-xs text-primary hover:text-primary-light font-semibold"
                                >
                                  {isExpanded ? "Show less" : "Show more"}
                                </button>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground font-body mb-2">{p.authors.join(", ")}</p>
                            <p className="text-sm text-muted-foreground font-body">{p.journal}</p>
                            <div className="flex gap-2 mt-2">
                              <span className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-body font-medium capitalize">{p.category === 'annexure' ? 'Annexure' : (p.type === "book_chapter" ? "Book Chapter" : p.type)}</span>
                              <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full font-body font-medium">{p.academicYear}</span>
                              {p.indexedIn && <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body font-medium">{p.indexedIn}</span>}
                            </div>
                          </div>
                          {p.link ? (
                            <a 
                              href={p.link}
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-primary hover:text-primary-light transition-colors shrink-0"
                              title="View Document"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : p.doi ? (
                            <a 
                              href={p.doi}
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-primary hover:text-primary-light transition-colors shrink-0"
                              title="View DOI"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <a 
                              href={`https://scholar.google.com/scholar?q=${encodeURIComponent(p.title)}`}
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-primary hover:text-primary-light transition-colors shrink-0"
                              title="Search on Google Scholar"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <ResearchSubNav />
    </div>
  );
};

export default ResearchPublications;
