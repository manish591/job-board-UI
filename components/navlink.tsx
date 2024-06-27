"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  id: string,
  href: string,
  name: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function Navlink({ href, Icon, name }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div 
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-[49px] border-[3px] border-transparent",
          {"bg-brand border-border300": isActive }
        )}>
        <div className={cn({"relative after:absolute after:content-[''] after:rounded-full after:top-0 after:right-[0%] after:w-[6px] after:h-[6px] after:bg-brand": name === "messages"})}>
          <Icon 
            width={24} 
            height={24} 
            className={cn("text-textBlack300", {"text-white": isActive})} 
          />
        </div>
        <p className={`text-lg text-textBlack300 font-medium capitalize ${isActive && "text-white"}`}>{name}</p>  
      </div>
    </Link>
  )
}