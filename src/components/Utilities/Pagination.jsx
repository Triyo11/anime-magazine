import Link from "next/link"

const Pagination = ({ page, lastPage, setCurrentPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => +prevPage + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => +prevPage - 1)
    scrollTop()
  }

  return (
    <>
      <div className="flex justify-center text-lg text-color-primary gap-4 py-3">
        {page <= 1 ? null : 
        <Link href={`/populer/${+page-1}`} onClick={handlePrevPage} className="hover:text-color-accent transition-all">Prev</Link>
        }
        <h2>{page} dari {lastPage}</h2>
        {page >= lastPage ? null :
        <Link href={`/populer/${+page+1}`} onClick={handleNextPage} className="hover:text-color-accent transition-all">Next</Link>
        }
      </div>
    </>
  )
}

export default Pagination