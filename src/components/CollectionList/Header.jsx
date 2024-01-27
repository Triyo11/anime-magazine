"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const HeaderCollectionList = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex items-center justify-between">
      <button onClick={handleBack} className="text-color-primary">
        <ArrowSquareLeft size={32} />
      </button>
      <h2 className="text-color-primary">Halaman koleksi</h2>
    </div>
  );
};

export default HeaderCollectionList;
