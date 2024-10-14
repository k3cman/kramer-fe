import Root from "./root";
import MeasurementCard from "../components/measurement-card";
import { Link } from "react-router-dom";

export function CalibrationPage(){
    return(
        <Root>
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
               <div className="flex flex-col w-1/3 mb-2">
        <div className="flex-1 w-full border-2 border-red-500 mb-2 rounded mt-2">
          <div className="bg-red-500 text-white w-full h-[30px]">Calibration incomplete</div>
          <p>
            The following calibration presets are defined but either never performed or already expired


          </p>
          <p>
            Preset: <strong>HardCal</strong>
          </p>
          <p> Do you want to continue anyway?</p>
        </div>
        <div className="flex h-[75px] w-full">
          <Link className="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" to="/">
            X
          </Link>
          <Link className="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               to="/batch">OK
          </Link>
        </div>
      </div>
         </div>
        </Root>
    )
}