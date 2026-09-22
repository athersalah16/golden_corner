'use client'
import Logo from "../components/Logo";

function Header() {

  return (
    <div className="absolute inset-x-0 top-0 z-10 bg-transparent px-4 py-5">
      <Logo />
      
    </div>
  )
}

export default Header
