import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, ExternalLink, BookOpen } from "lucide-react";
import { faculty, publications, annexures, fundedProjects } from "@/data/departmentData";

const cleanName = (name: string) =>
  name
    .replace(/Prof\.?/gi, "")
    .replace(/\(Dr\.\)/gi, "")
    .replace(/Dr\.?/gi, "")
    .replace(/Mr\.?/gi, "")
    .replace(/Ms\.?/gi, "")
    .trim()
    .toLowerCase();

const isAuthorMatch = (authorStr: string, facultyName: string) => {
  const cleanedAuthor = cleanName(authorStr);
  const cleanedFaculty = cleanName(facultyName);
  if (!cleanedAuthor || !cleanedFaculty) return false;

  if (cleanedAuthor.includes(cleanedFaculty) || cleanedFaculty.includes(cleanedAuthor)) {
    return true;
  }

  const facultyTokens = cleanedFaculty.split(/\s+/).filter(Boolean);
  if (facultyTokens.length >= 2) {
    const firstName = facultyTokens[0];
    const lastName = facultyTokens[facultyTokens.length - 1];
    if (cleanedAuthor.includes(lastName) && cleanedAuthor.includes(firstName)) {
      return true;
    }
  }
  return false;
};

const FacultyProfile = () => {
  const { id } = useParams();
  const member = faculty.find(
    (f) =>
      f.id.trim() === id?.trim() ||
      cleanName(f.id) === cleanName(id || "") ||
      cleanName(f.name) === cleanName(id || "")
  );

  if (!member) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground font-body">Faculty member not found.</p>
        <Link to="/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 font-body">
          <ArrowLeft className="w-4 h-4" /> Back to Faculty
        </Link>
      </div>
    );
  }

  const allPubs = [
    ...publications.map(p => ({ ...p, uniqueId: `pub-${p.id}` })),
    ...annexures.map(a => ({ ...a, uniqueId: `annex-${a.id}` })),
  ];
  const memberPubs = allPubs.filter(p => p.authors.some(a => isAuthorMatch(a, member.name)));
  const memberProjects = fundedProjects.filter(
    (p) => isAuthorMatch(p.pi, member.name) || (p.coPi ? isAuthorMatch(p.coPi, member.name) : false)
  );

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <Link to="/faculty" className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm font-body mb-3 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Faculty
          </Link>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">{member.name}</h1>
          <p className="text-primary-foreground/70 font-body mt-1">{member.designation}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-40 h-40 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-display font-bold text-5xl text-primary">{member.name.split(" ").slice(-1)[0][0]}</span>
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-display font-bold text-2xl text-foreground mb-2">{member.name}</h2>
              <p className="text-muted-foreground font-body mb-4">{member.designation} · {member.experience} years experience</p>
              <div className="grid grid-cols-2 gap-3 text-sm font-body">
                <div>
                  <span className="text-muted-foreground">Qualification:</span>
                  <p className="text-foreground font-medium">{member.qualification}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <a href={`mailto:${member.email}`} className="block text-primary font-medium">{member.email}</a>
                </div>
                <div>
                  <span className="text-muted-foreground">Publications:</span>
                  <p className="text-foreground font-medium">{member.publications}</p>
                </div>
                <div className="flex gap-3 items-end">
                  <a href={member.googleScholar} className="text-primary hover:text-primary-light transition-colors text-xs font-medium flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> Google Scholar
                  </a>
                  <a href={member.scopus} className="text-primary hover:text-primary-light transition-colors text-xs font-medium flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> Scopus
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="section-header">
            <p className="section-label">Expertise</p>
            <h2 className="section-title">Research Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-12">
            {member.specialization.split(", ").map(s => (
              <span key={s} className="text-sm bg-primary/5 text-primary px-4 py-1.5 rounded-full font-body font-medium">{s}</span>
            ))}
          </div>

          {/* Publications */}
          {memberPubs.length > 0 && (
            <>
              <div className="section-header">
                <p className="section-label">Scholarly Work</p>
                <h2 className="section-title">Selected Publications</h2>
              </div>
              <div className="space-y-3 mb-12">
                {memberPubs.map(p => (
                  <div key={p.uniqueId} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground font-body italic">{p.title}</p>
                      <p className="text-xs text-muted-foreground font-body">{p.journal} · {p.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Projects */}
          {memberProjects.length > 0 && (
            <>
              <div className="section-header">
                <p className="section-label">Funded Research</p>
                <h2 className="section-title">Projects</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-3 pr-4 font-semibold text-foreground">Project</th>
                      <th className="py-3 pr-4 font-semibold text-foreground">Agency</th>
                      <th className="py-3 pr-4 font-semibold text-foreground">Amount</th>
                      <th className="py-3 font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberProjects.map(p => (
                      <tr key={p.id} className="border-b border-border/50">
                        <td className="py-3 pr-4 text-foreground font-medium">{p.title}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{p.agency}</td>
                        <td className="py-3 pr-4 font-mono text-foreground">{p.amount}</td>
                        <td className="py-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            p.status === "ongoing" ? "bg-green-100 text-green-800" : "bg-secondary text-muted-foreground"
                          }`}>{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default FacultyProfile;
