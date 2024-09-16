// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} overflow-hidden bg-gray-100 relative w-full rounded-lg p-6 border boder-grayLight min-h-[270px] gap-2 flex flex-col`}>
      <div className="text-2xl font-bold leading-[30px] z-10 bg-gray-200 w-full text-gray-200">
        Lorem ipsum dolor sit amet
      </div>
      <div className="flex gap-3 text-xs flex-wrap z-10">
        <div className="rounded px-2 py-1 bg-gray-200 w-[50px] h-[25px]" />
        <div className="rounded px-2 py-1 bg-gray-200 w-[50px] h-[25px]" />
        <div className="rounded px-2 py-1 bg-gray-200 w-[50px] h-[25px]" />
      </div>
      <div className="flex-1 content-end self-end text-2xl leading-[30px] z-10">
        <div className="rounded px-2 py-1 bg-gray-200 text-gray-200">00%</div>
      </div>
    </div>
  )
}

export function CardsSkeleton() {
  return (
    <div className="flex flex-col gap-4 max-w-[1318px] m-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}