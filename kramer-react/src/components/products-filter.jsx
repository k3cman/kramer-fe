import { Link } from "react-router-dom";

export function ProductsFilter () {
    return (
    <div className="w-full h-full flex flex-col pt-1.5 pr-1.5 pl-1.5">
      <div className="border-2 border-kramer rounded flex-1 mb-2">
        <div className="text-white bg-kramer w-full">Product filter</div>
        Use the filter to find a product
        <form className="flex flex-col mx-1.5">
          <div className="flex flex-col">
            <label>Product number:</label>
            <input className="border border-gray-400 rounded" type="text"/>
          </div>
          <div className="flex flex-col">
            <label>Product name:</label>
            <input className="border border-gray-400 rounded" type="text"/>
          </div>
        </form>
      </div>
      <div className="flex h-[75px] w-full">
    
        <Link to="/" className="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white">
          X
        </Link>
        <Link className="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white" to="/calibration">
        OK
        </Link>
      </div>
    </div>
    )
}