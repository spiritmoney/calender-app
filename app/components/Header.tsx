"use client";

import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/app/components/ModeToggle";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          {/* <Image src="/debug.png" alt="Logo" width={48} height={48} /> */}
          <span className="text-lg sm:text-xl font-bold text-foreground">Loveworld Programs Calendar</span>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
