import Link from "next/link";

export default function Logo({ 
  children 
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Link href="/">
      {children}
    </Link>
  )
}