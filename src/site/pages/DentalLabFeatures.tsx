import Layout from "@/site/components/Layout";
import { ClinicalHero } from "@/site/components/heroes";
import heroPhoto from "@/assets/site/hero-dental-lab.jpg";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import shotCases from "@/assets/dashboard-shots/dlab-cases.png";
import shotCam from "@/assets/dashboard-shots/dlab-cam.png";
import shotQc from "@/assets/dashboard-shots/dlab-qc.png";
import shotCalendar from "@/assets/dashboard-shots/dlab-calendar.png";
import shotBilling from "@/assets/dashboard-shots/dlab-billing.png";
import { usePageMeta } from "@/site/components/usePageMeta";

const WHATSAPP = "https://wa.me/2349017758165?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Clinexus%20for%20dental%20labs";

const sections = [
  { t: "Production planning", d: "See every case on the bench, who owns it and when it must leave.", img: shotCalendar, points: ["Production calendar by due date", "Technician workload and bench assignment", "Rush and late cases flagged first", "Recurring clinic pickups scheduled"] },
  { t: "Case tracking", d: "From pickup to delivery, every case has a clear status clinics can follow.", img: shotCases, points: ["Case intake with prescription, shade and teeth", "Step-by-step workflow per restoration type", "Printable traveler with barcode", "Clinic-facing status updates"] },
  { t: "CAD/CAM", d: "Track design, milling and printing jobs alongside the rest of production.", img: shotCam, points: ["Design queue for CAD designers", "Milling and printing job tracking", "Scan file intake from clinics", "Outsourced work tracked with partner labs"] },
  { t: "Quality control & remakes", d: "Catch problems before they reach the chair, and learn from every remake.", img: shotQc, points: ["QC checklists before dispatch", "Remake log with reasons and responsibility", "Warranty tracking", "Certificates of conformity"] },
  { t: "Billing & statements", d: "Invoice each case and know exactly what every clinic owes.", img: shotBilling, points: ["Price lists per clinic and tier", "Invoices generated from cases", "Monthly clinic statements", "Aging of unpaid balances"] },
];

const DentalLabFeatures = () => {
  usePageMeta(
    "Dental Lab Features | Clinexus",
    "Production planning, case tracking, CAD/CAM, quality control and billing for dental laboratories.",
  );
  return (
    <Layout>
      <ClinicalHero
        kicker="Dental lab features"
        title="Everything your lab needs, from pickup to payment."
        description="Production, case tracking, CAD/CAM, QC and billing in one system built for dental labs."
        primary={{ label: "Talk to us on WhatsApp", href: WHATSAPP, external: true }}
        secondary={{ label: "See pricing", href: "/industries/dental-labs/pricing" }}
        photo={{ src: heroPhoto, alt: "Dental lab technician at work" }}
      />
      <div className="mx-auto max-w-5xl space-y-16 px-4 py-12 sm:px-6">
        {sections.map((s, i) => (
          <section key={s.t} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">{s.t}</h2>
              <p className="mb-4 text-sm text-muted-foreground">{s.d}</p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-background shadow-sm">
              <img src={s.img} alt={`${s.t} screen`} loading="lazy" className="block w-full" />
            </div>
          </section>
        ))}
        <section className="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
          <h2 className="mb-2 text-xl font-bold text-foreground">Ready to run your lab on Clinexus?</h2>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/industries/dental-labs/pricing" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">See pricing</Link>
            <Link to="/industries/dental-labs" className="inline-flex items-center justify-center rounded-xl border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10">Lab overview</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DentalLabFeatures;
