"use client";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Page = () => {
  const handleImportCalendar = () => {
    // Convert http(s) to webcal protocol for direct calendar import
    const baseUrl = window.location.origin.replace(/^https?:/, 'webcal:');
    const calendarUrl = `${baseUrl}/Loveworld_Programs_Calendar.ics`;

    // Open the URL which will trigger calendar import in supported applications
    window.location.href = calendarUrl;
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center bg-muted px-4">
        <div className="w-full max-w-[320px] xs:max-w-[400px] md:max-w-[600px] p-4 xs:p-6 bg-background rounded-lg shadow-lg">
          <h1 className="text-xl xs:text-2xl md:text-3xl font-bold text-center mb-4 xs:mb-6">
            Loveworld Programs Calendar
          </h1>
          <p className="text-sm xs:text-base md:text-lg text-muted-foreground mb-4 xs:mb-6 text-center">
            Import all upcoming Loveworld programs directly to your calendar
          </p>
          <button
            onClick={handleImportCalendar}
            className="w-full py-2 xs:py-3 px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors text-sm xs:text-base md:text-lg"
          >
            Import Calendar
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
