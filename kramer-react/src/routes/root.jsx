import { Bars3Icon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LabContext from "../store/lab-context";

export default function Root(props) {
    const store = {
        availableProducts: [],
        selectedProduct: null,
        availableBatches: [],
        selectedBatch: null,
        availableContainers: [],
        selectedContainer: null,
      };
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date().toLocaleString())
        },1000)
    },[])

    const toggleSidebar =() =>{
        setShowSidebar(!showSidebar)
    }

    return (<LabContext.Provider value={store}>
    <div className="w-screen h-screen flex flex-col">
        <div className="h-[60px]">
            <div className="h-full w-screen bg-kramer flex justify-between p-2 items-center">
                <Link className="text-white text-2xl flex items-center" to="/">
                    <ComputerDesktopIcon className="w-8 h-8" />
                    <span className="font-bold">LAB.</span><span className="font-light">line</span>
                </Link>
                <div onClick={() => toggleSidebar()}>
                    <Bars3Icon className="w-8 h-8 text-white"></Bars3Icon>
                </div>
        </div>
        </div>
        <div className="h-[30px]">
                <div className="h-full w-screen bg-kramer-light flex justify-between items-center px-2 text-gray-600">
                    <span>HOME</span>
                    <span>{currentDate}</span>
                </div>
        </div>
        <div className="flex-1">
            {props.children}
            {showSidebar ? (<div class="w-[270px] h-[375px] bg-kramer absolute right-0 top-[90px]">
                SIDEBAR
            </div>) : null}
        </div>
        <div className="h-[15px] bg-kramer w-screen"></div>
    </div>
    </LabContext.Provider>
    )
}