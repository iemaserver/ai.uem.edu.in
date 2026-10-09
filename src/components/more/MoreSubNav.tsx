import { Link, useLocation } from "react-router-dom";
import {
  Trophy,
  Users,
  Image,
  Bell,
  Mail,
  ArrowRight,
} from "lucide-react";

export const moreSubSections = [
  {
    title: "Achievements",
    desc: "Student accolades, competition wins, and excellence awards",
    href: "/achievements",
    icon: Trophy,
  },
  {
    title: "Alumni Network",
    desc: "Connect with graduates working at top global companies",
    href: "/alumni",
    icon: Users,
  },
  {
    title: "Gallery",
    desc: "Photos from department events, labs, campus, and life",
    href: "/gallery",
    icon: Image,
  },
  {
    title: "Notices",
    desc: "Official announcements, academic circulars, and updates",
    href: "/notices",
    icon: Bell,
  },
  {
    title: "Contact Us",
    desc: "Get in touch with department faculty, leadership, and office",
    href: "/contact",
    icon: Mail,
  },
];

const MoreSubNav = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/$/, "");

  // Exclude current active subsection so users navigate to the others
  const otherSections = moreSubSections.filter(
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
              Explore More Sections
            </h3>
          </div>
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

export default MoreSubNav;
