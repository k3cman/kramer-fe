import { Outlet } from "react-router-dom";

export default function Root() {
    return (

    <div className="w-screen h-screen flex flex-col">
        <div className="h-[60px]">
            <div className="h-full w-screen bg-kramer flex justify-between p-2 items-center">
                <div className="text-white text-2xl">
                    <span className="font-bold">LAB.</span><span class="font-light">line</span>
                </div>
        </div>
        </div>
        <div class="h-[30px]">
                <div class="h-full w-screen bg-kramer-light flex justify-between items-center px-2 text-gray-600">
                    <span>HOME</span>
                </div>
        </div>
        <div class="flex-1">
            <Outlet />
        </div>
        <div class="h-[15px] bg-kramer w-screen"></div>
    </div>
    
    )
}