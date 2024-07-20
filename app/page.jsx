import Image from "next/image";
import HomePage from "./home/page";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <HomePage />;
        </div>
      </Suspense>
    </>
  );
}
