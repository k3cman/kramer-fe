import { Link } from "react-router-dom";
import { ActionCard } from "../components/action-card";
import MeasurementCard from "../components/measurement-card";
import Root from "./root";

export default function HomePage() {
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
                  <Link to="products">
                     <ActionCard />
                  </Link>
                  <Link to="products">
                     <ActionCard />
                  </Link><Link to="products">
                     <ActionCard />
                  </Link>
               </div>
         </div>
         
        </Root>
    )
}