import Link from "next/link";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/jobs">
        <Button>View Layout</Button>
      </Link>
    </main>
  );
}