import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="flex items-center gap-2 text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            <Image
            className="dark:invert"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={40}
            priority
            />
            <span>LightHouse Sierra</span>
          </h1>
        </div>
    </div>
  );
}
