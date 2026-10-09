import { useState } from "react";
import { Star } from "lucide-react";
import { achievements, fundedProjects } from "@/data/departmentData";
import { getAcademicYear, ACADEMIC_YEAR_OPTIONS } from "@/lib/academicYear";
import MoreSubNav from "@/components/more/MoreSubNav";

const Achievements = () => {
  const [sessionFilter, setSessionFilter] = useState<string | "all">("all");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredAchievements = achievements.studentAchievements
    .filter(a => {
      if (sessionFilter !== "all" && getAcademicYear(a.date, a.year) !== sessionFilter) return false;
      return true;
    })
    .sort((a, b) => {
      const timeA = a.date ? new Date(a.date).getTime() : new Date(`${a.year}-01-01`).getTime();
      const timeB = b.date ? new Date(b.date).getTime() : new Date(`${b.year}-01-01`).getTime();
      return timeB - timeA;
    });

  const filteredProjects = fundedProjects
    .filter(p => {
      if (sessionFilter !== "all" && getAcademicYear(p.duration, p.year) !== sessionFilter) return false;
      return true;
    })
    .slice(0, 5);

  return (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Excellence</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Achievements & Awards</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <select
            value={sessionFilter}
            onChange={(e) => setSessionFilter(e.target.value)}
            className="px-3 py-2 rounded-md border border-border bg-card text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="all">All Academic Years</option>
            {ACADEMIC_YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Student Achievements */}
        <div className="section-header">
          <p className="section-label">Students</p>
          <h2 className="section-title">Student Achievements</h2>
        </div>

        {filteredAchievements.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-lg border border-border mb-16">
            <p className="text-muted-foreground font-body mb-3">No student achievements found for the selected academic year.</p>
            <button
              onClick={() => setSessionFilter("all")}
              className="px-3.5 py-1.5 rounded-md bg-secondary text-xs font-semibold text-primary hover:bg-secondary/80 transition-colors font-body"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredAchievements.map((a) => {
              const isExpanded = expandedItems.includes(a.achievement);
              const description = a.description || "";
              const truncatedDesc = description.length > 100 ? description.substring(0, 100) + "..." : description;
              
              return (
                <div key={a.achievement} className="bg-card border border-border rounded-lg p-5 card-hover">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-sm text-foreground mb-1">{a.student}</h3>
                      <p className="text-sm text-muted-foreground font-body mb-2">{a.achievement}</p>
                      {description && (
                        <p className="text-xs text-muted-foreground font-body mb-2">
                          {isExpanded ? description : truncatedDesc}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body font-medium">{a.rank}</span>
                        <span className="text-xs text-muted-foreground font-body">{a.event} · {a.year}</span>
                        <span className="text-[10px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full font-body ml-auto">
                          AY {getAcademicYear(a.date, a.year)}
                        </span>
                      </div>
                      {description && description.length > 100 && (
                        <button
                          onClick={() => toggleExpand(a.achievement)}
                          className="text-xs text-primary hover:text-primary/80 font-body font-medium transition-colors"
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Top Funded Projects */}
        <div className="section-header">
          <p className="section-label">Research Impact</p>
          <h2 className="section-title">Top Funded Projects</h2>
        </div>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8 bg-card rounded-lg border border-border">
            <p className="text-sm text-muted-foreground font-body">No funded projects found for the selected academic year.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((p, i) => (
              <div key={p.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-mono font-bold text-primary">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm text-foreground">{p.title}</h4>
                  <p className="text-xs text-muted-foreground font-body">{p.pi} · {p.agency}</p>
                </div>
                <span className="font-mono font-bold text-sm text-primary shrink-0">{p.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    <MoreSubNav />
  </div>
  );
};

export default Achievements;
