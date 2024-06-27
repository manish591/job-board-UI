"use client";
import { NAV_LINKS } from "@/constants/navlinks";
import Navlink from "./navlink";

export default function NavlinksRenderer() {
  return (
    <div className="border-[0.5px] border-border200 p-2 rounded-full">
      <div className="flex items-center gap-12">
        {
          NAV_LINKS.map(link => {
            return (
              <Navlink key={link.id} {...link} />
            )
          })
        }
      </div>
    </div>
  )
}
