export default function MeasurementCard({measurement}) {
    return (
        <div
            className="w-[260px] h-[120px] border-2 rounded border-gray-300 m-[2px] flex flex-col"
        >
            <div className="h-full flex items-center px-2">
                <div className="mr-8 mt-6">
                    {measurement? (
                        <>
                        <span className="block w-[22px] h-[22px] bg-gray-300 rounded-full"></span>
                        <span>0/0</span>
                        </>
                    ) : ''}
                </div>
            </div>
            <div className=" w-full h-[40px] flex items-center justify-center bg-gray-300">
            <span
        className="uppercase mr-1">{measurement ? measurement.name : ''}</span>
        {measurement ? `[${measurement.unit}]` : ''}
            </div>
        </div>
    )
}