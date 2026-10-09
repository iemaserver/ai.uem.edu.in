import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export const academicsSubSections = [
  {
    title: "Programs Offered",
    desc: "Undergraduate (B.Tech) and doctoral (Ph.D.) degree programs",
    href: "/academics/programs",
    icon: GraduationCap,
  },
  {
    title: "Curriculum & Syllabus",
    desc: "Detailed semester-wise course structure, credits, and elective tracks",
    href: "/academics/curriculum",
    icon: BookOpen,
  },
  {
    title: "Academic Calendar",
    desc: "Key semester milestones, examinations, instructional dates, and holiday schedules",
    href: "/academics/calendar",
    icon: Calendar,
  },
];

const AcademicsSubNav = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/$/, "");

  // Exclude current active subsection so users navigate to the others
  const otherSections = academicsSubSections.filter(
    (sec) => sec.href.replace(/\/$/, "") !== normalizedPath
  );

  return (
    <section className="py-12 bg-secondary/30 border-t border-border mt-12">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-accent font-body">
              Continue Exploring
            </p>
            <h3 className="font-display font-bold text-xl text-foreground">
              Other Academic Subsections
            </h3>
          </div>
          <Link
            to="/academics"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Academics Overview
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {otherSections.map((sec) => (
            <Link
              key={sec.href}
              to={sec.href}
              className="bg-card border border-border rounded-lg p-5 card-hover flex items-start gap-4 group transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary flex items-center justify-center shrink-0 transition-colors">
                <sec.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                    {sec.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5 font-body leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSubNav;
