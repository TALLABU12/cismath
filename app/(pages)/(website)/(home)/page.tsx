import Image from "next/image";
import * as React from "react";
export default function Home() {
  return (
    <main className="">
      <h1>home</h1>
      hello
      <Image
        src="/assets/images/Untitled-removebg-preview.png"
        width="200"
        height="200"
        alt="logo"
      />
    </main>
  );
}
