"use client";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Page = () => {
  const handleImportCalendar = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );
    const baseUrl = window.location.origin;
    const downloadUrl = `${baseUrl}/Loveworld_Programs_Calendar.ics`;
    const webcalUrl = `${baseUrl.replace(
      /^https?/,
      "webcal"
    )}/Loveworld_Programs_Calendar.ics`;

    // Attempt to open calendar with webcal protocol first (mainly supported on iOS and macOS)
    window.open(webcalUrl, "_blank");

    // Fallback for non-supported `webcal` or desktop browsers
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Loveworld_Programs_Calendar.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center bg-muted p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] p-4 xs:p-6 lg:p-8 bg-background rounded-lg shadow-lg">
          <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 xs:mb-6">
            Loveworld Programs Calendar
          </h1>
          <p className="text-sm xs:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 xs:mb-6 lg:mb-8 text-center max-w-prose mx-auto">
            Import all upcoming Loveworld programs directly to your calendar
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleImportCalendar}
              className="w-full max-w-md py-2 xs:py-3 px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors text-sm xs:text-base md:text-lg"
            >
              Import Calendar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
