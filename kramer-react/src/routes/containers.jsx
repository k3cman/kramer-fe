import { Link } from "react-router-dom";
import Root from "./root";

export default function ContainersPage () {
    return (
        <Root>
            <div className="w-full h-full flex p-2">
      <div className="w-2/3 border-2 rounded border-gray-400">
        <div className="bg-kramer h-[30px] w-full">Enter container number</div>
        <p>Product:</p>
        {/* <ng-container *ngIf="productTestStore.selectedProduct() as product">
          <p className="ml-2">{{ product.productNo }}</p>
          <p className="ml-4">{{ product.productName }}</p>
        </ng-container> */}

        <div className="border border-gray-400 m-1.5 flex flex-col">
          <div className="h-[40px] w-full border-b border-gray-400" routerLink="../new-container">[New Entry]</div>
          {/* <div className="h-[40px] w-full border-b border-gray-400"
               *ngFor="let cn of productTestStore.availableContainerNumbers()"
               (click)="productTestStore.selectContainerNumber(cn)"
               [ngClass]="{'bg-kramer-light': productTestStore.selectedContainerNumber()?.id === cn.id}"
          >
            {{ cn.name }}
          </div> */}
        </div>
      </div>
      <div className="w-1/3 pl-1.5 flex-1 flex flex-col">
        <div className="border-gray-400 border-2 flex-1 mb-1 5 rounded">
          <div className="h-[30px] w-full bg-gray-400">Info</div>
          <p>Select container number</p>
        </div>
        <div className="flex h-[75px] w-full">
          <Link className="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" to="/">
            X
          </Link>
          <Link className="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               to="/number-of-tests">OK
          </Link>
        </div>
      </div>
    </div>
    </Root>
    )
}