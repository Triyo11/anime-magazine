"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const searchAnime = (event) => {
    const keyword = searchRef.current.value
    if (keyword.length === 0 || keyword.trim().length === 0) return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative">
      <input placeholder="Cari anime..." className="rounded-lg p-2 md:w-[30vw] w-full" ref={searchRef} onKeyDown={searchAnime}/>
      <button className="absolute top-2 end-2" onClick={searchAnime}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
