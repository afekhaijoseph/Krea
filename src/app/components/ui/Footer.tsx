import Image from "next/image"
const Footer = () => {
  return (
    <div className="bg-zinc-700 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
            <div className="mr-1">
                <Image src="/kollage-logo.svg" alt="Krea Ai logo" width="35" height="35"/>
                <img  />
            </div>
            <h3 className="text-xl">Krea Ai</h3>
        </div>
        <div className="flex gap-3 items-center">
            <p className="text-xl">Curated By</p>
            <div className="flex gap-1">
                <Image src="/mobbin-logo.svg" alt="Krea Ai logo" width="35" height="35"/>
                <p className="text-3xl">Mobbin</p>
            </div>
        </div>
    </div>
  )
}

export default Footer