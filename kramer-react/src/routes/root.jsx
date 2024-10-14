export default function Root(props) {
    return (

    <div className="w-screen h-screen flex flex-col">
        <div className="h-[60px]">
            <div className="h-full w-screen bg-kramer flex justify-between p-2 items-center">
                <div className="text-white text-2xl">
                    <span className="font-bold">LAB.</span><span className="font-light">line</span>
                </div>
        </div>
        </div>
        <div className="h-[30px]">
                <div className="h-full w-screen bg-kramer-light flex justify-between items-center px-2 text-gray-600">
                    <span>HOME</span>
                </div>
        </div>
        <div className="flex-1">
            {props.children}
        </div>
        <div className="h-[15px] bg-kramer w-screen"></div>
    </div>
    
    )
}