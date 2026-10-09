import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, AlertCircle } from "lucide-react";
import { academicCalendar } from "@/data/departmentData";
import AcademicsSubNav from "@/components/academics/AcademicsSubNav";

const filterTypes = [
  { label: "All", value: "all" },
  { label: "Exams", value: "exam" },
  { label: "Semester Dates", value: "semester" },
  { label: "Holidays & Breaks", value: "holiday" },
];

const AcademicsCalendar = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all"
      ? academicCalendar
      : academicCalendar.filter((e) => e.type === filter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container">
          <Link
            to="/academics"
            className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm font-body mb-3 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Academics
          </Link>
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">
            Academics
          </p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">
            Academic Calendar
          </h1>
          <p className="text-primary-foreground/80 font-body text-sm mt-2 max-w-2xl">
            Key semester milestones, examinations, instructional dates, and holiday schedules for the academic year.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex gap-1.5 flex-wrap">
              {filterTypes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setFilter(t.value)}
                  className={`px-3.5 py-2 rounded-md text-xs font-semibold font-body transition-colors ${
                    filter === t.value
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground font-body">
              Showing {filteredEvents.length} events
            </div>
          </div>

          {/* Calendar List */}
          <div className="space-y-3 mb-10">
            {filteredEvents.map((item, idx) => (
              <div
                key={item.event + idx}
                className="bg-card border border-border rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      item.type === "exam"
                        ? "bg-red-100 text-red-700"
                        : item.type === "semester"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground leading-snug">
                      {item.event}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-body ${
                      item.type === "exam"
                        ? "bg-red-100 text-red-800"
                        : item.type === "semester"
                        ? "bg-primary/10 text-primary"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Notice box */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="text-xs text-foreground/80 font-body leading-relaxed">
              <p className="font-semibold text-foreground mb-1">Important Notice regarding Schedules</p>
              Dates are subject to institutional modifications per University guidelines. Students are advised to periodically consult departmental circulars and the notice board for real-time exam notifications.
            </div>
          </div>
        </div>
      </section>

      {/* Academic Subsections Cross Navigation */}
      <AcademicsSubNav />
    </div>
  );
};

export default AcademicsCalendar;
