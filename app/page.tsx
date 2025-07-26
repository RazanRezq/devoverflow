import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">
        Welcome to Next.js! Welcome to Next.js! Welcome to Next.js! Welcome to
        Next.js! Welcome to Next.js! Welcome to Next.js! Welcome to Next.js!
      </h1>
      <Image
        src="/nextjs-logo.png"
        alt="Next.js Logo"
        width={500}
        height={500}
      />
    </main>
  );
}
