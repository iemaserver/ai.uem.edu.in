import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { messageFromHoD } from "@/data/departmentData";

const HodMessage = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">
          Message from HoD
        </h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl">
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-body text-justify">
          {messageFromHoD.message}
        </p>

        <div className="mt-8 font-body text-[15px] leading-relaxed text-foreground">
          <p className="font-semibold">Head of the Department,</p>
          <p className="font-semibold">{messageFromHoD.dept},</p>
          <p className="font-semibold">{messageFromHoD.institute},</p>
          <p className="font-semibold">{messageFromHoD.university}</p>
        </div>
        <div className="flex gap-4 mt-12">
          <Link
            to="/about/vision-mission"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            <ArrowRight className="w-4 h-4" />
            Vision & Mission
          </Link>
        </div>
      </div>
    </section>
  </div>
);
export default HodMessage;
