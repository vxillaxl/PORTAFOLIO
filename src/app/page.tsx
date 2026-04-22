import { HomeClient } from "@/app/home-client";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <ThemeToggle />
      <HomeClient />
    </>
  );
}
