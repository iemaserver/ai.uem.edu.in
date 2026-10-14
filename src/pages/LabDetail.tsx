import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { labs } from "@/data/departmentData";

const LabDetail = () => {
  const { id } = useParams();
  const lab = labs.find(l => l.id === id);

  if (!lab) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground font-body">Lab not found.</p>
        <Link to="/labs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 font-body">
          <ArrowLeft className="w-4 h-4" /> Back to Labs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <Link to="/labs" className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm font-body mb-3 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Labs
          </Link>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">{lab.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-primary-foreground/70 font-body">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {lab.location}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="section-header">
            <p className="section-label">About</p>
            <h2 className="section-title">Description</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-body leading-relaxed mb-12">{lab.description}</p>

          <div className="section-header">
            <p className="section-label">Infrastructure</p>
            <h2 className="section-title">Equipment</h2>
          </div>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 font-semibold text-foreground">Equipment</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Make / Model</th>
                  <th className="py-3 font-semibold text-foreground">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {lab.equipment.map((eq, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground font-medium">{eq.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{eq.model}</td>
                    <td className="py-3 text-muted-foreground">{eq.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-header">
            <p className="section-label">Academic</p>
            <h2 className="section-title">Courses Supported</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.coursesSupported.map(c => (
              <span key={c} className="text-sm bg-primary/5 text-primary px-3 py-1.5 rounded-full font-body font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabDetail;
