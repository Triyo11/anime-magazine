"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()

  return (
    <div className="text-color-primary flex justify-center items-center h-[85vh] max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-2">
        <FileSearch size={48} className="bg-color-accent text-color-secondary rounded-md" />
        <h2 className="text-color-accent text-3xl">not found</h2>
        <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent underline transition-all">kembali</button>
      </div>
    </div>
  );
};

export default Page;
