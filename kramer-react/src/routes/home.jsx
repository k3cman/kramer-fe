import { ActionCard } from "../components/action-card";
import MeasurementCard from "../components/measurement-card";

export default function HomePage() {
    return (
        <>
         <div className="flex w-screen h-full justify-center">
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
               <div class="flex flex-col">
                  <ActionCard />
                  <ActionCard />
                  <ActionCard />
               </div>
         </div>
         
        </>
    )
}