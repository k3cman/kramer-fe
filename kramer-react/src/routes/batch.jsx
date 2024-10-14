import { Link } from "react-router-dom";
import Root from "./root";

export default function BatchPage () {
    return(
        <Root>
            <div class="w-full h-full flex p-2">
      <div class="w-2/3 border-2 rounded border-gray-400">
        <div class="bg-kramer h-[30px] w-full">Enter batch number</div>
        <p>Product:</p>
        {/* <ng-container *ngIf="productTestStore.selectedProduct() as product">
          <p class="ml-2">{{ product.productNo }}</p>
          <p class="ml-4">{{ product.productName }}</p>
        </ng-container> */}

        <div class="border border-gray-400 m-1.5 flex flex-col">
          <div class="h-[40px] w-full border-b border-gray-400">[New Entry]</div>
          <div class="h-[40px] w-full border-b border-gray-400"
              >BatchName
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-1.5 flex-1 flex flex-col">
        
          <div class="border-gray-400 border-2 flex-1 mb-1 5 rounded">
            <div class="h-[30px] w-full bg-gray-400">Info</div>
            <p>Select batch</p>
          </div>
        
        <div class="flex h-[75px] w-full">
          <Link class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" to="/">
            X
          </Link>
          <Link to="/containers" class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white">OK
          </Link>
        </div>
      </div>
    </div>
    </Root>
    )
}