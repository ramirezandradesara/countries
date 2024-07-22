"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  const handleDark = () => {
    return setDark((prev) => !prev);
  };

  return (
    <main className="dark:bg-very-dark-blue min-h-screen">
      <Navbar handleDark={handleDark} dark={dark} />
    </main>
  );
}
