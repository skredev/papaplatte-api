"use client";

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { imageAmount, randomImage } from "@/lib/api-utils";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const id = useSearchParams().get('id')

  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <img src={`../../images/${id}.jpg`} alt="" />
    </div>
  );
}


