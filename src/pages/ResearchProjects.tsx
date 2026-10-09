import { useState } from "react";
import { fundedProjects } from "@/data/departmentData";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { getAcademicYear, ACADEMIC_YEAR_OPTIONS } from "@/lib/academicYear";

const ResearchProjects = () => {
  const [sessionFilter, setSessionFilter] = useState<string | "all">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "ongoing" | "completed">("all");

  const filtered = fundedProjects.filter((p) => {
    if (sessionFilter !== "all" && getAcademicYear(p.duration, p.year) !== sessionFilter) return false;
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Funded Projects</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 mb-8">
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
            <div className="flex gap-1">
              {(["all", "ongoing", "completed"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                    statusFilter === s ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s === "all" ? "All Status" : s}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground font-body">No funded projects found for the selected filter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground">#</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Project Title</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">PI</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Agency</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Amount</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Duration / Grant Date</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Academic Year</th>
                    <th className="py-3 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <tr key={p.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 text-muted-foreground">{i + 1}</td>
                      <td className="py-3 pr-4 text-foreground font-medium max-w-xs">{p.title}</td>
                      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                        <span className="text-foreground font-medium">{p.pi}</span>
                        {p.coPi && (
                          <span className="block text-[11px] text-muted-foreground mt-0.5">
                            Co-PI: {p.coPi}
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.agency}</td>
                      <td className="py-3 pr-4 font-mono text-foreground">{p.amount}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{p.duration}</td>
                      <td className="py-3 pr-4 font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {getAcademicYear(p.duration, p.year)}
                      </td>
                      <td className="py-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          p.status === "ongoing" ? "bg-green-100 text-green-800" : "bg-secondary text-muted-foreground"
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      <ResearchSubNav />
    </div>
  );
};

export default ResearchProjects;
