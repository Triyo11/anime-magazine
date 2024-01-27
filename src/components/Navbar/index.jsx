import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
  return(
    <header>
      <div className="bg-color-accent flex md:flex-row flex-col justify-between md:items-center p-4 gap-3">
        <Link href='/' className="font-bold italic text-2xl text-white font-asap">Anime Magazine</Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  )
}

export default Navbar