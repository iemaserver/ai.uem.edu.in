import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Award,
  Layers,
  Clock,
  CheckCircle2,
  FileSpreadsheet,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import {
  curriculumBatches,
  batch2025_2029,
  BatchCurriculum,
  CourseItem,
} from "@/data/curriculumData";
import AcademicsSubNav from "@/components/academics/AcademicsSubNav";

const categoryOrder = [
  "Theory Papers",
  "Practical Papers",
  "Sessional Papers",
  "Mandatory Requirements",
] as const;

const AcademicsCurriculum = () => {
  const [selectedBatchId, setSelectedBatchId] = useState<string>("2025-2029");
  const [selectedSem, setSelectedSem] = useState<number>(3);
  const [activeTab, setActiveTab] = useState<"semester" | "electives">("semester");

  const currentBatch: BatchCurriculum =
    curriculumBatches.find((b) => b.batch === selectedBatchId) || batch2025_2029;

  const semData =
    currentBatch.semesters.find((s) => s.semester === selectedSem) ||
    currentBatch.semesters[0];

  // Helper to parse numeric credits safely
  const parseNum = (val: string | number | undefined): number => {
    if (typeof val === "number") return val;
    if (!val || val === "-") return 0;
    const n = parseFloat(val);
    return isNaN(n) ? 0 : n;
  };

  // Group courses by category
  const groupedCourses = categoryOrder.map((cat) => {
    const list = semData.courses.filter((c) => c.category === cat);
    const subtotal = list.reduce(
      (acc, c) => ({
        lecture: acc.lecture + parseNum(c.lecture),
        tutorial: acc.tutorial + parseNum(c.tutorial),
        practical: acc.practical + parseNum(c.practical),
        sessional: acc.sessional + parseNum(c.sessional),
        credits: acc.credits + parseNum(c.credits),
      }),
      { lecture: 0, tutorial: 0, practical: 0, sessional: 0, credits: 0 }
    );
    return { category: cat, courses: list, subtotal };
  }).filter((g) => g.courses.length > 0);

  // Overall semester total
  const semesterTotals = semData.courses.reduce(
    (acc, c) => ({
      lecture: acc.lecture + parseNum(c.lecture),
      tutorial: acc.tutorial + parseNum(c.tutorial),
      practical: acc.practical + parseNum(c.practical),
      sessional: acc.sessional + parseNum(c.sessional),
      credits: acc.credits + parseNum(c.credits),
    }),
    { lecture: 0, tutorial: 0, practical: 0, sessional: 0, credits: 0 }
  );

  // Total program credits across all semesters of active batch
  const totalProgramCredits = currentBatch.semesters.reduce(
    (acc, s) =>
      acc + s.courses.reduce((sum, c) => sum + parseNum(c.credits), 0),
    0
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container">
          <Link
            to="/academics"
            className="inline-flex items-center gap-1.5 text-primary-foreground/75 text-sm font-body mb-3 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Academics Overview
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-accent text-[11px] font-bold uppercase tracking-[2px] font-body">
              Academics
            </span>
            <span className="text-primary-foreground/40">•</span>
            <span className="text-primary-foreground/80 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-foreground/10 font-body">
              {currentBatch.branch}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">
            Curriculum & Course Structure
          </h1>
          <p className="text-primary-foreground/85 font-body text-sm mt-2 max-w-3xl leading-relaxed">
            Official semester-wise academic syllabus and course structure for B.Tech in Computer Science & Engineering (Artificial Intelligence).
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-6xl">
          {/* Batch Selector & Top Controls */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <label htmlFor="batch-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-body block mb-1.5">
                Select Curriculum Batch
              </label>
              <div className="flex items-center gap-3">
                <select
                  id="batch-select"
                  value={selectedBatchId}
                  onChange={(e) => {
                    setSelectedBatchId(e.target.value);
                    setActiveTab("semester");
                  }}
                  className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm font-semibold font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {curriculumBatches.map((b) => (
                    <option key={b.batch} value={b.batch}>
                      {b.label}
                    </option>
                  ))}
                </select>
                {selectedBatchId === "2025-2029" && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-1 rounded-full font-body">
                    <Sparkles className="w-3 h-3" /> Current Batch (1st Year)
                  </span>
                )}
                {selectedBatchId === "2024-2028" && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-100 dark:bg-blue-950 dark:text-blue-300 px-2.5 py-1 rounded-full font-body">
                    2nd Year Batch
                  </span>
                )}
                {selectedBatchId === "2023-2027" && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-100 dark:bg-purple-950 dark:text-purple-300 px-2.5 py-1 rounded-full font-body">
                    3rd Year Batch
                  </span>
                )}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 text-sm font-body">
              <div>
                <p className="text-xs text-muted-foreground">Total Semesters</p>
                <p className="font-bold text-foreground font-display text-base">8 Semesters</p>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <p className="text-xs text-muted-foreground">Program Credits</p>
                <p className="font-bold text-primary font-display text-base">{totalProgramCredits} Credits</p>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <p className="text-xs text-muted-foreground">Institution</p>
                <p className="font-bold text-foreground font-display text-base">IEM / UEM Kolkata</p>
              </div>
            </div>
          </div>

          {/* Navigation Bar: Semesters & Electives */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-border pb-4">
            <div className="flex flex-wrap gap-2">
              {currentBatch.semesters.map((s) => (
                <button
                  key={s.semester}
                  onClick={() => {
                    setSelectedSem(s.semester);
                    setActiveTab("semester");
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold font-body transition-all ${
                    activeTab === "semester" && selectedSem === s.semester
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/70 text-foreground hover:bg-secondary"
                  }`}
                >
                  Sem {s.semester}
                </button>
              ))}
            </div>

            {currentBatch.professionalElectives && currentBatch.professionalElectives.length > 0 && (
              <button
                onClick={() => setActiveTab("electives")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold font-body transition-all ${
                  activeTab === "electives"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-accent/15 text-accent hover:bg-accent/25"
                }`}
              >
                <GraduationCap className="w-4 h-4" /> Recommended Electives (Tracks)
              </button>
            )}
          </div>

          {/* TAB 1: SEMESTER COURSE STRUCTURE */}
          {activeTab === "semester" && (
            <div>
              {/* Semester Header Card */}
              <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent font-body">
                      {currentBatch.batch} Batch Curriculum
                    </span>
                    <h2 className="font-display font-bold text-2xl text-foreground mt-0.5">
                      {semData.title}
                    </h2>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      Total Courses: {semData.courses.length} Papers • Lecture Hours: {semesterTotals.lecture}h • Practical/Lab: {semesterTotals.practical}h • Sessional: {semesterTotals.sessional}h
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-primary/10 rounded-lg text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground font-body">Total Credits</p>
                      <p className="font-mono font-bold text-2xl text-primary">{semesterTotals.credits}</p>
                    </div>
                  </div>
                </div>

                {/* Stat pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border/60">
                  <div className="bg-secondary/40 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground font-body">Lecture (L)</p>
                    <p className="text-base font-bold font-mono text-foreground">{semesterTotals.lecture} hrs/wk</p>
                  </div>
                  <div className="bg-secondary/40 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground font-body">Practical (P)</p>
                    <p className="text-base font-bold font-mono text-foreground">{semesterTotals.practical} hrs/wk</p>
                  </div>
                  <div className="bg-secondary/40 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground font-body">Sessional (S)</p>
                    <p className="text-base font-bold font-mono text-foreground">{semesterTotals.sessional} hrs/wk</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-xs text-accent font-body font-semibold">Semester Credits</p>
                    <p className="text-base font-bold font-mono text-accent">{semesterTotals.credits} Credits</p>
                  </div>
                </div>
              </div>

              {/* Grouped Category Tables */}
              <div className="space-y-8">
                {groupedCourses.map((group) => (
                  <div
                    key={group.category}
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
                  >
                    <div className="px-6 py-3.5 bg-secondary/50 border-b border-border flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            group.category === "Theory Papers"
                              ? "bg-blue-600"
                              : group.category === "Practical Papers"
                              ? "bg-emerald-600"
                              : group.category === "Sessional Papers"
                              ? "bg-purple-600"
                              : "bg-amber-600"
                          }`}
                        />
                        <h3 className="font-display font-bold text-base text-foreground">
                          {group.category}
                        </h3>
                        <span className="text-xs text-muted-foreground font-body">
                          ({group.courses.length} {group.courses.length === 1 ? "course" : "courses"})
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {group.subtotal.credits} Credits
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-body">
                        <thead>
                          <tr className="border-b border-border bg-secondary/20 text-xs uppercase tracking-wider text-muted-foreground">
                            <th className="py-3 px-4 text-left font-semibold w-12">#</th>
                            <th className="py-3 px-4 text-left font-semibold">Type of Course</th>
                            <th className="py-3 px-4 text-left font-semibold">Code</th>
                            <th className="py-3 px-4 text-left font-semibold">Course Title</th>
                            <th className="py-3 px-3 text-center font-semibold" title="Lecture Hours">L</th>
                            <th className="py-3 px-3 text-center font-semibold" title="Tutorial Hours">T</th>
                            <th className="py-3 px-3 text-center font-semibold" title="Practical Hours">P</th>
                            <th className="py-3 px-3 text-center font-semibold" title="Sessional Hours">S</th>
                            <th className="py-3 px-4 text-center font-semibold text-foreground">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.courses.map((course, idx) => (
                            <tr
                              key={course.code + "-" + idx}
                              className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                            >
                              <td className="py-3.5 px-4 text-muted-foreground font-mono text-xs">
                                {course.slNo || idx + 1}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="text-[11px] font-medium text-muted-foreground font-body">
                                  {course.courseType}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono font-bold text-primary text-xs whitespace-nowrap">
                                {course.code}
                              </td>
                              <td className="py-3.5 px-4 font-medium text-foreground">
                                {course.name}
                              </td>
                              <td className="py-3.5 px-3 text-center font-mono text-xs text-muted-foreground">
                                {course.lecture}
                              </td>
                              <td className="py-3.5 px-3 text-center font-mono text-xs text-muted-foreground">
                                {course.tutorial}
                              </td>
                              <td className="py-3.5 px-3 text-center font-mono text-xs text-muted-foreground">
                                {course.practical}
                              </td>
                              <td className="py-3.5 px-3 text-center font-mono text-xs text-muted-foreground">
                                {course.sessional}
                              </td>
                              <td className="py-3.5 px-4 text-center font-mono font-bold text-foreground">
                                {course.credits}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="bg-secondary/40 font-semibold border-t border-border text-xs">
                            <td colSpan={4} className="py-2.5 px-4 text-foreground font-bold">
                              Subtotal ({group.category})
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono">{group.subtotal.lecture}</td>
                            <td className="py-2.5 px-3 text-center font-mono">{group.subtotal.tutorial}</td>
                            <td className="py-2.5 px-3 text-center font-mono">{group.subtotal.practical}</td>
                            <td className="py-2.5 px-3 text-center font-mono">{group.subtotal.sessional}</td>
                            <td className="py-2.5 px-4 text-center font-mono font-bold text-primary">
                              {group.subtotal.credits}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                ))}

                {/* Grand Total Bar */}
                <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-body">
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">
                      Semester {selectedSem} Grand Total
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Cumulative contact hours and credit distribution for the entire semester.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="px-3 py-1.5 bg-card border border-border rounded-lg">
                      Hours: <strong className="text-foreground">{semesterTotals.lecture + semesterTotals.practical + semesterTotals.sessional} hrs/wk</strong>
                    </span>
                    <span className="px-3 py-1.5 bg-primary text-primary-foreground font-bold rounded-lg text-sm">
                      Total Credits: {semesterTotals.credits}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RECOMMENDED ELECTIVES (TRACKS) */}
          {activeTab === "electives" && (
            <div className="space-y-10">
              {/* Professional Electives */}
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 bg-secondary/40 border-b border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-xs font-bold font-body">
                      Professional Electives
                    </span>
                    <span className="text-xs text-muted-foreground font-body">
                      Specialized Career Tracks
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Recommended Professional Elective Courses
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mt-1 max-w-2xl">
                    Students can choose between two dedicated domain tracks: <strong>Artificial Intelligence</strong> or <strong>Data Science</strong> to align with their career specialization.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="border-b border-border bg-secondary/20 text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="py-3.5 px-4 text-left font-semibold w-20">Sl. No.</th>
                        <th className="py-3.5 px-4 text-left font-semibold w-28">Semester</th>
                        <th className="py-3.5 px-6 text-left font-semibold text-primary">
                          Choice-1 (Track: Artificial Intelligence)
                        </th>
                        <th className="py-3.5 px-6 text-left font-semibold text-purple-700 dark:text-purple-400">
                          Choice-2 (Track: Data Science)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBatch.professionalElectives?.map((pe) => (
                        <tr
                          key={pe.id}
                          className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                        >
                          <td className="py-4 px-4 font-mono font-bold text-xs text-muted-foreground">
                            {pe.id}
                          </td>
                          <td className="py-4 px-4 font-semibold text-xs text-foreground whitespace-nowrap">
                            {pe.semester}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                              <span className="font-medium text-foreground">{pe.trackAI}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                              <span className="font-medium text-foreground">{pe.trackDS}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Open Electives */}
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 bg-secondary/40 border-b border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-xs font-bold font-body">
                      Open Electives
                    </span>
                    <span className="text-xs text-muted-foreground font-body">
                      Interdisciplinary Exploration
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Recommended Open Elective Courses
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mt-1 max-w-2xl">
                    Broaden horizons across management, cyber laws, philosophy, economics, and humanities.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="border-b border-border bg-secondary/20 text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="py-3.5 px-4 text-left font-semibold w-20">Sl. No.</th>
                        <th className="py-3.5 px-4 text-left font-semibold w-28">Semester</th>
                        <th className="py-3.5 px-6 text-left font-semibold text-foreground">Option-1</th>
                        <th className="py-3.5 px-6 text-left font-semibold text-foreground">Option-2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBatch.openElectives?.map((oe) => (
                        <tr
                          key={oe.id}
                          className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                        >
                          <td className="py-4 px-4 font-mono font-bold text-xs text-muted-foreground">
                            {oe.id}
                          </td>
                          <td className="py-4 px-4 font-semibold text-xs text-foreground whitespace-nowrap">
                            {oe.semester}
                          </td>
                          <td className="py-4 px-6 font-medium text-foreground">
                            {oe.option1}
                          </td>
                          <td className="py-4 px-6 font-medium text-foreground">
                            {oe.option2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Academic Regulations & Mandatory Requirements Legend */}
          <div className="mt-12 bg-secondary/30 border border-border rounded-xl p-6">
            <h4 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Key Academic Guidelines & Mandatory Modules
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground font-body leading-relaxed">
              <div className="bg-card p-4 rounded-lg border border-border/60">
                <strong className="text-foreground block mb-1">MAR (Mandatory Additional Requirements):</strong>
                Mandatory co-curricular and extracurricular activity score (100 points required) covering technical clubs, community service, hackathons, and sports for B.Tech degree eligibility.
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/60">
                <strong className="text-foreground block mb-1">MOOCs (Massive Open Online Courses):</strong>
                Online certification credits via Swayam / NPTEL required to qualify for the prestigious B.Tech (Honours) degree designation.
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/60">
                <strong className="text-foreground block mb-1">IFC (Industry & Foreign Certification):</strong>
                Industry standard certifications (e.g. AWS, Microsoft Azure, Google Cloud, ServiceNow) to demonstrate market-ready competencies.
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/60">
                <strong className="text-foreground block mb-1">Internships & Capstone Projects:</strong>
                Industry Internship I & II alongside 3 stages of Capstone Projects (Project I, II, III) ensuring real-world deployment experience.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Subsections Cross Navigation */}
      <AcademicsSubNav />
    </div>
  );
};

export default AcademicsCurriculum;
