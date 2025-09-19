import Image from "next/image"
import Logo from "./Logo"
const Footer = () => {
  return (
    <div className="bg-zinc-700 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
            <div className="mr-1">
                <Logo/>
            </div>
            <h3 className="text-base md:text-xl">Krea Ai</h3>
        </div>
        <div className="flex gap-3 items-center">
            <p className="text-base md:text-xl">Curated By</p>
            <div className="flex gap-1">
                <Image src="/mobbin-logo.svg" alt="Krea Ai logo" width="35" height="35"/>
                <p className="text-xl md:text-3xl">Mobbin</p>
            </div>
        </div>
    </div>
  )
}

export default Footer