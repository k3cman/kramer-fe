import { ActionCard } from "../components/action-card";
import MeasurementCard from "../components/measurement-card";
import Root from "./root";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
   const navigate = useNavigate()

  const goToProducts = () => {
   navigate('/products')
  }
    return (
        <Root>
         <div className="flex w-full h-full justify-center">
               <div className="flex flex-col">
                  <div className="flex">
                     <MeasurementCard measurement={{name: 'Weight', unit: 'g'}} />
                     <MeasurementCard measurement={{name: 'Thickness', unit: 'mm'}} />
                  </div>
                  <div className="flex">
                     <MeasurementCard measurement={{name: 'Width', unit: 'mm'}} />
                     <MeasurementCard measurement={{name: 'Height', unit: 'mm'}} />
                  </div>
                  <div className="flex">
                     <MeasurementCard measurement={{name: 'Hardness', unit: 'N'}} />
                     <MeasurementCard />
                  </div>
               </div>
               <div className="flex flex-col">
                  <div onClick={goToProducts} onTouchStart={goToProducts}>
                     <ActionCard />
                  </div>
                  <div onClick={goToProducts} onTouchStart={goToProducts}>
                     <ActionCard />
                  </div><div onClick={goToProducts} onTouchStart={goToProducts}>
                     <ActionCard />
                  </div>
               </div>
         </div>
         
        </Root>
    )
}