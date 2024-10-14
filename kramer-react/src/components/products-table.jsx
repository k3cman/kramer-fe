export function ProductsTable({products}){
    return (
        <div className="m-1.5 border-2 rounded border-gray-400 h-full">
      <div className="w-full bg-kramer h-[30px]">Product section</div>
      <div className="p-1.5">
        <div className="flex flex-col w-full">
          <div className="flex w-full h-[40px]">
            <div className="w-1/2 border-2 border-kramer">Product number</div>
            <div className="w-1/2 border-2 border-kramer">Product name</div>
          </div>
        </div>
        <div className="flex flex-col w-full" >
          {
            products.map((product) => (
                <div className="flex w-full h-[40px]" >
                    <div className="w-1/2 border-[0.5px] border-t-0 border-kramer">{ product.productNo}</div>
                    <div className="w-1/2 border-[0.5px] border-t-0 border-kramer">{ product.productName }</div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
    )
}