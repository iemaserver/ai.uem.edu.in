import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Award,
  Globe,
  Linkedin,
} from "lucide-react";
import {
  placementStats,
  higherEducation,
  recruiters,
  alumniData,
} from "@/data/departmentData";

const Placements = () => {
  const [higherEdFilter, setHigherEdFilter] = useState<string>("all");

  const filteredHigherEd = higherEducation.filter((student) => {
    if (higherEdFilter === "all") return true;
    return student.batch === higherEdFilter;
  });

  const totalOffersCombined = placementStats.reduce(
    (acc, curr) => acc + curr.totalOffers,
    0
  );
  const totalMultipleOffers = placementStats.reduce(
    (acc, curr) => acc + curr.multipleOffers,
    0
  );

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">
            Careers & Higher Studies
          </p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">
            Placements & Higher Education
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mt-2 font-body">
            Comprehensive placement records and postgraduate academic admissions
            for Batch 2021–2025 and Batch 2022–2026.
          </p>
        </div>
      </section>

      {/* Key Metric Highlights */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
              <Briefcase className="w-7 h-7 text-accent mx-auto mb-2" />
              <p className="font-mono font-bold text-2xl md:text-3xl text-primary mb-1">
                {totalOffersCombined}+
              </p>
              <p className="text-xs text-muted-foreground font-body font-medium">
                Total Placement Offers
              </p>
              <p className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                Batches 2021-25 & 2022-26
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
              <Building2 className="w-7 h-7 text-accent mx-auto mb-2" />
              <p className="font-mono font-bold text-2xl md:text-3xl text-primary mb-1">
                {recruiters.length}+
              </p>
              <p className="text-xs text-muted-foreground font-body font-medium">
                Recruiting Partners
              </p>
              <p className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                Top MNCs & Tech Leaders
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
              <GraduationCap className="w-7 h-7 text-accent mx-auto mb-2" />
              <p className="font-mono font-bold text-2xl md:text-3xl text-primary mb-1">
                {higherEducation.length}
              </p>
              <p className="text-xs text-muted-foreground font-body font-medium">
                Higher Studies Admitted
              </p>
              <p className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                UK & Premier National Univs
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
              <Award className="w-7 h-7 text-accent mx-auto mb-2" />
              <p className="font-mono font-bold text-2xl md:text-3xl text-primary mb-1">
                {totalMultipleOffers}
              </p>
              <p className="text-xs text-muted-foreground font-body font-medium">
                Multiple Offer Holders
              </p>
              <p className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                Students with 2+ job offers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-16">
          {/* Section 1: Placement Statistics Table */}
          <div>
            <div className="section-header">
              <p className="section-label">Track Record</p>
              <h2 className="section-title">Batch-Wise Placement and Higher Studies Statistics</h2>
              <p className="text-muted-foreground text-sm font-body mt-1">
                Comparative campus recruitment and postgraduate outcomes for the department.
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-secondary/60 border-b border-border text-left">
                    <th className="py-3.5 px-4 font-semibold text-foreground">
                      Batch
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-foreground text-center">
                      Total Students
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-foreground text-center">
                      Total Job Offers
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-foreground text-center">
                      Multiple Offers
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-foreground text-center">
                      Higher Studies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {placementStats.map((s) => (
                    <tr
                      key={s.batch}
                      className="hover:bg-secondary/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-foreground">
                        Batch {s.batch}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-center text-muted-foreground">
                        {s.totalStudents}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-semibold text-center text-foreground">
                        {s.totalOffers}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-center text-muted-foreground">
                        {s.multipleOffers}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-center text-muted-foreground">
                        {s.higherStudies}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 italic font-body">
              * Note: Batch 2022–2026 is the current graduating class with recruitment drives actively ongoing.
            </p>
          </div>

          {/* Section 2: Top Placed Students */}
          <div>
            <div className="section-header">
              <p className="section-label">Star Achievers</p>
              <h2 className="section-title">Top Placed Students</h2>
              <p className="text-muted-foreground text-sm font-body mt-1">
                Outstanding students securing marquee placement offers at leading global technology companies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumniData.map((student) => (
                <div
                  key={student.id}
                  className="bg-card border border-border rounded-lg p-5 card-hover text-center flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-display font-bold text-xl text-primary">
                        {student.name[0]}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      {student.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      {student.role}
                    </p>
                    <p className="text-sm text-primary font-body font-semibold mt-0.5">
                      {student.company}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono mt-1">
                      Batch of {student.batch}
                    </p>
                  </div>
                  {student.linkedin && (
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-light transition-colors font-body font-medium"
                      >
                        <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Pursuing Higher Education */}
          <div>
            <div className="section-header">
              <p className="section-label">Academic Excellence</p>
              <h2 className="section-title">Pursuing Higher Education</h2>
              <p className="text-muted-foreground text-sm font-body mt-1">
                Graduates and current students admitted to top-tier universities worldwide and premier national institutes.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button
                onClick={() => setHigherEdFilter("all")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  higherEdFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                All Batches ({higherEducation.length})
              </button>
              <button
                onClick={() => setHigherEdFilter("2022-2026")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  higherEdFilter === "2022-2026"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Batch 2022–2026 (10)
              </button>
              <button
                onClick={() => setHigherEdFilter("2021-2025")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  higherEdFilter === "2021-2025"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Batch 2021–2025 (10)
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-secondary/60 border-b border-border text-left">
                    <th className="py-3 px-4 font-semibold text-foreground w-12">
                      #
                    </th>
                    <th className="py-3 px-4 font-semibold text-foreground">
                      Student Name
                    </th>
                    <th className="py-3 px-4 font-semibold text-foreground">
                      Batch
                    </th>
                    <th className="py-3 px-4 font-semibold text-foreground">
                      Degree / Program
                    </th>
                    <th className="py-3 px-4 font-semibold text-foreground">
                      Admitted University / Institute
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredHigherEd.map((student, i) => (
                    <tr
                      key={`${student.name}-${student.batch}`}
                      className="hover:bg-secondary/40 transition-colors"
                    >
                      <td className="py-3 px-4 text-muted-foreground font-mono text-xs">
                        {i + 1}
                      </td>
                      <td className="py-3 px-4 font-medium text-foreground">
                        {student.name}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground font-mono text-xs whitespace-nowrap">
                        {student.batch}
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary">
                        {student.program}
                      </td>
                      <td className="py-3 px-4 text-foreground/90">
                        <div className="flex items-center gap-2">
                          <span>{student.institution}</span>
                          {student.category === "International" && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full shrink-0">
                              <Globe className="w-2.5 h-2.5" /> UK
                            </span>
                          )}
                          {student.category === "National Premier" && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full shrink-0">
                              <Award className="w-2.5 h-2.5" /> Premier
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Top Recruiters Grid */}
          <div>
            <div className="section-header">
              <p className="section-label">Industry Partners</p>
              <h2 className="section-title">Top Corporate Recruiters</h2>
              <p className="text-muted-foreground text-sm font-body mt-1">
                Leading multinational corporations and technology leaders recruiting from the department.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              {recruiters.map((r) => (
                <div
                  key={r}
                  className="bg-card border border-border rounded-lg p-3.5 text-center card-hover flex items-center justify-center min-h-[70px] shadow-sm"
                >
                  <span className="font-body font-semibold text-xs md:text-sm text-foreground">
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;

