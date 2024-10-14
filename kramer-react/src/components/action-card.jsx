import { PlayIcon } from "@heroicons/react/24/solid"

export function ActionCard() {
    return (
        <div className="w-[260px] h-[120px] border-2 rounded border-gray-300 m-[2px] flex flex-col">
            <div className="w-full h-[30px] pt-0.5 bg-kramer text-white uppercase text-center text-sm">
            TEST
            </div>
            <div className="flex items-center justify-center h-full">
                <PlayIcon class="h-20 w-20 text-kramer" />
            </div>
        </div>
    )
}