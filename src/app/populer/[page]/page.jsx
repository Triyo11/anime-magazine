"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/services/api-services";

const Page = ({params: {page}}) => {
  const [currentPage, setCurrentPage] = useState(page) 
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${currentPage}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  return (
    <>
      <HeaderMenu page={currentPage} />
      <AnimeList api={topAnime}/>
      <Pagination page={currentPage} lastPage={topAnime.pagination?.last_visible_page} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default Page