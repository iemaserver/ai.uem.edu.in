import { Trophy } from "lucide-react";
import { achievements } from "@/data/departmentData";

const highlightAchievements = [
  `Ranked ${achievements.rankings[0].rank} in ${achievements.rankings[0].metric}`,
  `${achievements.facultyAwards[0].award} at ${achievements.facultyAwards[0].body} — ${achievements.facultyAwards[0].recipient}`,
  `${achievements.studentAchievements[0].achievement} (${achievements.studentAchievements[0].event}) — ${achievements.studentAchievements[0].rank}`,
];

const AchievementsBanner = () => (
  <section className="bg-primary py-14">
    <div className="container">
      <div className="text-center mb-8">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-1 font-body">
          Excellence & Recognition
        </p>
        <h2 className="font-display text-2xl font-bold text-primary-foreground">
          Recent Achievements
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlightAchievements.map((a, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5"
          >
            <Trophy className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-primary-foreground font-body font-medium leading-relaxed">
              {a}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsBanner;
