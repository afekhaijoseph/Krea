import { 
    MdOutlineImage, 
    MdVideocam, 
    MdOutlineDraw, 
    MdAutoFixHigh, 
    MdArchitecture, 
    MdMicExternalOn,
    MdAccessibilityNew,
    MdModelTraining,
    MdKeyboardArrowDown,
} from "react-icons/md"
import { IconType } from "react-icons";
type Tools = {
    icon: IconType;
    iconBg: string,
    title: string,
    isNew: boolean,
    description: string,
}

let tools : Tools[] = [
    {
        icon: MdOutlineImage,
        iconBg: 'bg-linear-to-b from-gray-800 to-gray-200',
        title: 'Image',
        isNew: true,
        description: 'Generate images with custom styles in Flux and Ideogram',
    },
    {
        icon: MdVideocam,
        iconBg: 'bg-yellow-500',
        title: 'Video',
        isNew: false,
        description: 'Generate vidoes with Halua, Pica, Ruthway and more',
    },
    {
        icon: MdOutlineDraw,
        iconBg: 'bg-linear-to-b from-sky-500 to-sky-200',
        title: 'Realtime',
        isNew: false,
        description: 'Realtime Ai renders on canvas, Instant feedback loop.',
    },
    {
        icon: MdAutoFixHigh,
        iconBg: 'bg-linear-to-b from-black to-gray-400',
        title: 'Enhancer',
        isNew: true,
        description: 'Upscale and enhance vidoes and images up to 22k.',
    },
    {
        icon: MdArchitecture,
        iconBg: 'bg-linear-to-b from-purple-900 to-purple-400',
        title: 'Edit',
        isNew: true,
        description: 'Add objects, change styles or expand photos and generations',
    },
    {
        icon: MdMicExternalOn,
        iconBg: 'bg-linear-to-b from-emerald-900 via-emerald-700 to-yellow-200',
        title: 'Video lip sync',
        isNew: true,
        description: 'Lip sync any video to any audio',
    },
    {
        icon: MdAccessibilityNew,
        iconBg: 'bg-black',
        title: 'Motion Transfer',
        isNew: true,
        description: 'Transfer motion to images and animate characters',
    },
    {
        icon: MdModelTraining,
        iconBg: 'bg-linear-to-b from-cyan-700 to-cyan-300',
        title: 'Train',
        isNew: false,
        description: 'Teach Kollage to replicate your style, products and characters',
    },
]

const Generate = () => {
  return (
    <div className="mb-8">
         <div className='flex items-center justify-between'>
            <h2 className="font-bold pb-2">Generate</h2>
            <div className="flex items-center text-blue-500">
                <p className="text-sm">Show all</p>
                <MdKeyboardArrowDown className="text-blue-500"/>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool, index)=> {
                const Icon = tool.icon;
                return (
                    <div key={index} className="flex items-center text-xs gap-3">
                    <div className={`${tool.iconBg} p-3 rounded-lg`}>
                        <Icon className="size-6 text-white"/>
                    </div>
                    <div className="basis-full">
                        <div className="flex">
                            <h3 className="font-bold pr-2">{tool.title}</h3>
                            {tool.isNew && <p className="py-0.5 px-1 bg-blue-500 rounded-lg text-white">New</p>}
                        </div>
                           <p className="text-gray-500">{tool.description}</p>
                    </div>
                    <div>
                        <button className="bg-gray-100 py-1 px-1.5 rounded-xl">Open</button>
                    </div>
                    
                </div>
                )
                
})}
        </div>
    </div>
  )
}

export default Generate