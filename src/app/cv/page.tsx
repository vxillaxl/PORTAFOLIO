import type { Metadata } from "next";
import { CvClient } from "@/app/cv/cv-client";

export const metadata: Metadata = {
  title: "Hoja de vida · Bryan A. Ramírez",
  description: "Currículum — Bryan A. Ramírez · Ingeniería de Software, desarrollo web.",
};

export default function CvPage() {
  return <CvClient />;
}
