import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { imageAmount, getImageFolderPath } from "@/lib/api-utils";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/sprechblase/papaplatte-api"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Auf GitHub verfolgen
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Papaplatte API
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      Mit dieser herausragenden API erhältst du die besten jemals aufgenommenen Bilder von unserem Freund Papaplatte
      <img src="parasocialing.gif" className="ms-2 w-6 h-6 rounded-lg select-none inline-flex items-baseline" alt="123" />
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <div
          className={"cursor-default select-none " + buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          <span><span className="bg-zinc-800 p-1 rounded-lg font-bold">{imageAmount()}</span> Images</span>
        </div>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> GET https://papaplatte-api.skre.dev/api/random
      </span>
    </div>
  );
}
