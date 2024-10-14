
import { ProductsFilter } from "../components/products-filter";
import { ProductsTable } from "../components/products-table";
import Root from "./root";

export const products = [
    {
      productNo: 'PrNum1',
      productName: 'PrName1',
      id: '1'
    },
    {
      productNo: 'PrNum2',
      productName: 'PrName2',
      id: '2'
    },
    {
      productNo: 'PrNum3',
      productName: 'PrName3',
      id: '3'
    },
    {
      productNo: 'PrNum4',
      productName: 'PrName4',
      id: '4'
    },
    {
      productNo: 'PrNum5',
      productName: 'PrName5',
      id: '5'
    },
    {
      productNo: 'PrNum6',
      productName: 'PrName6',
      id: '6'
    }
  ]
  

export function ProductsPage() {
    return (
        <Root>
            <div className="flex w-full h-full pb-2">
                <div className="w-2/3">
                    <ProductsTable products={products} />
                </div>
                <div className="w-1/3">
                    <ProductsFilter />
                </div>
            </div>
        </Root>
    )
}