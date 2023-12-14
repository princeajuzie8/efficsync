"use client";
import Image from "next/image";
import { Input, Button } from "@material-tailwind/react";
declare module "@material-tailwind/react" {
  interface ButtonProps {
    placeholder?: string;
  }
}
export default function Home() {
  return(
    <>
    <h1>hello efficsync 👋</h1>
    <Button size="md" className="rounded-lg text-[#E8E8E8] hidden bg-black" >
                    Search
                  </Button>
    </>

  )
}
