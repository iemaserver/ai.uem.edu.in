import { Link, useLocation } from "react-router-dom";
import {
  FlaskConical,
  BookOpen,
  FileText,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export const researchSubSections = [
  {
    title: "Funded Projects",
    desc: "Sponsored and collaborative external research grants",
    href: "/research/projects",
    icon: FlaskConical,
  },
  {
    title: "Publications",
    desc: "Refereed journals, conferences, and book chapters",
    href: "/research/publications",
    icon: BookOpen,
  },
  {
    title: "Patents",
    desc: "Published and granted intellectual property & inventions",
    href: "/research/patents",
    icon: FileText,
  },
  {
    title: "Final Year Projects",
    desc: "Notable capstone innovations and student projects",
    href: "/research/final-year-projects",
    icon: Lightbulb,
  },
  {
    title: "Ph.D. Scholars",
    desc: "Doctoral research scholars, supervisors, and domains",
    href: "/research/phd-scholars",
    icon: GraduationCap,
  },
];

const ResearchSubNav = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/$/, "");

  // Exclude current active subsection so users navigate to the others
  const otherSections = researchSubSections.filter(
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
              Other Research Subsections
            </h3>
          </div>
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Research Overview
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherSections.map((sec) => (
            <Link
              key={sec.href}
              to={sec.href}
              className="bg-card border border-border rounded-lg p-4 card-hover flex items-start gap-3 group transition-all"
            >
              <div className="w-9 h-9 rounded-md bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary flex items-center justify-center shrink-0 transition-colors">
                <sec.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {sec.title}
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1 font-body">
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

export default ResearchSubNav;
