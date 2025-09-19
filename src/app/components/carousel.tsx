"use client"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image"
import { useState, useEffect, useRef } from "react";



type Slide = {
    src : string,
    alt : string,
    title : string,
    subtitle: string,
    description: string

}

const slides : Slide[] = [
    {
        src : '/images/wan.jpg',
        alt : "Wan carousel background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 model.'
    },

    {
        src : '/images/flux.jpg',
        alt : "Flux carousel background",
        title : 'Open Source',
        subtitle: 'Flux.1 Krea',
        description: 'We are making the weight to our Flux.1 Krea model open source. Download and run our model weights. Read the technical report or generate it with krea model',
    },

        {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },

        {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },

        {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },

        {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },

        {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },
    {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },
    {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },
    {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },
    {
        src : '/images/wan.jpg',
        alt : "Wan image generation background",
        title : 'WAN 2.2',
        subtitle: 'WAN 2.2 Image generation',
        description: 'Generate highly detailed and realistic images from text prompts using the WAN 2.2 mo, and intricate details.'
    },
]


const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth + 24); 
    }

    const handleResize = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth + 24);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    console.log(current)
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };
  return (
    <div className="my-16">
        <div className="overflow-hidden">
               <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * slideWidth}px)` }}>
        {slides.map((slide, index)=> (
            <div key={index} ref={index === 0 ? slideRef : null} className='w-full md:w-7/12 min-h-[400px] relative flex-shrink-0 text-white p-3'>
              <Image src={slide.src} alt={slide.alt} fill className="object-cover rounded-3xl"/>
              <div className="absolute bottom-4">
                <h2 className="text-center text-6xl font-bold pb-12">{slide.title}</h2>
                <div className="flex">
                    <div className="w-3/4">
                        <h3 className="text-xl font-bold pb-2">{slide.subtitle}</h3>
                        <p className="text-xs">{slide.description}</p>
                    </div>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 text-xs">
                <button className="p-3 bg-white rounded-2xl text-black font-bold">Try WAN 2.2</button>
              </div>
            </div>
        ))}
    </div>
    </div>
    <div className="relative w-full mx-auto flex items-center mt-4">
            <div className="flex basis-full justify-center gap-2">
                {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition ${
                    current === index ? "bg-blue-950 scale-110" : "bg-gray-300"
                    }`}
                />
                ))}
            </div>
            <div className="basis-8 flex gap-2">
                <button onClick={prevSlide} className="border border-gray-700 rounded-full">
                    <MdKeyboardArrowLeft className="size-6 text-gray-700 font-extrabold"/>
                </button>
                <button onClick={nextSlide} className="border border-gray-700 rounded-full">
                    <MdKeyboardArrowRight className="size-6 text-gray-700"/>
                </button>
            </div>
            </div>
        
    </div>
  )
}

export default Carousel