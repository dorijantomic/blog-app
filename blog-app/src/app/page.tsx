import { LandingPage } from "@/features/landing-page";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function home() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8 ">
        <Navbar />
      </div>
      <div className="content-center">
        <LandingPage />
      </div>
    </>
  );
}
