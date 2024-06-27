import { TABS } from "@/constants/tabs";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Tabs() {
  return (
    <div className="border border-border100">
      <div className="px-8 pl-[6vw] flex gap-10 md:gap-16 items-center">
        {
          TABS.map(tab => {
            return (
              <Link href="#" key={tab.id}>
                <div className={cn(
                    "py-5", 
                    { "relative before:content-[''] before:absolute before:h-[2px] before:w-[60%] before:bottom-0 before:bg-brand before:translate-x-[-50%] before:left-[50%]": tab.name === "Job preview" 
                  })}>
                    <p className={cn(
                      "text-lg text-textBlack500 font-medium",
                      {"text-brand font-bold": tab.name === "Job preview"}
                    )}>
                      {tab.name}
                    </p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
};
