import { Linkedin, Quote } from "lucide-react";
import { alumniData, alumniTestimonials } from "@/data/departmentData";
import MoreSubNav from "@/components/more/MoreSubNav";

const Alumni = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Network</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Alumni</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Notable Alumni */}
        <div className="section-header">
          <p className="section-label">Our Pride</p>
          <h2 className="section-title">Notable Alumni</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {alumniData.map(a => (
            <div key={a.id} className="bg-card border border-border rounded-lg p-5 card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-xl text-primary">{a.name[0]}</span>
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">{a.name}</h3>
              <p className="text-xs text-muted-foreground font-body mt-1">{a.role}</p>
              <p className="text-xs text-primary font-body font-medium">{a.company}</p>
              <p className="text-[10px] text-muted-foreground font-body mt-1">Batch of {a.batch}</p>
              <a href={a.linkedin} className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:text-primary-light transition-colors font-body">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="section-header">
          <p className="section-label">Their Words</p>
          <h2 className="section-title">Alumni Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {alumniTestimonials.map(t => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6">
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-sm text-muted-foreground font-body italic leading-relaxed mb-4">"{t.quote}"</p>
              <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground font-body">Batch of {t.batch}</p>
            </div>
          ))}
        </div>

        {/* Network Info */}
        <div className="bg-primary rounded-lg p-8 text-center">
          <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">Join the Alumni Network</h3>
          <p className="text-sm text-primary-foreground/70 font-body mb-4 max-w-lg mx-auto">
            Stay connected with the department and fellow alumni. Register to get updates on alumni meets, mentorship programs, and networking events.
          </p>
          <a href="mailto:alumni.cseaiml@uem.edu.in" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-md text-sm font-semibold font-body hover:bg-accent-light transition-colors">
            Register as Alumni
          </a>
        </div>
      </div>
    </section>
    <MoreSubNav />
  </div>
);

export default Alumni;
