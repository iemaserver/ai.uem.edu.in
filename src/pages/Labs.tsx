import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { labs } from "@/data/departmentData";

const Labs = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Infrastructure</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Laboratories</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <Link key={lab.id} to={`/labs/${lab.id}`} className="bg-card border border-border rounded-lg overflow-hidden card-hover group">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-muted-foreground/30">{lab.name}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{lab.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {lab.location}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">{lab.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body opacity-0 group-hover:opacity-100">
                  View Lab <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Labs;
