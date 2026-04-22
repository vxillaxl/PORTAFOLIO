import type { Metadata } from "next";
import { CvClient } from "@/app/cv/cv-client";

export const metadata: Metadata = {
  title: "CV · Bryan A. Ramírez",
  description: "CV — Bryan A. Ramírez · Ingeniería de Software, desarrollo web.",
};

export default function CvPage() {
  return <CvClient />;
}
