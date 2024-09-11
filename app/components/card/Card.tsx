import Tag from "../tag/Tag";
import { getAverageScoreColor } from "./helper";

export default function Card({
  name,
  categories,
  averageScore
}: {
  name: string;
  categories: string[];
  averageScore: number;
}
) {
  return (
    <div className="w-full rounded-lg p-6 border boder-grayLight min-h-[270px] bg-black gap-2 flex flex-col">
      <div className="text-white text-2xl font-bold leading-[30px]">{name}</div>
      <div className="flex gap-3 text-xs">{categories.map((c) => <Tag key={c} text={c} classNames="bg-primaryLight" />)}</div>
      <div className="flex-1 content-end self-end text-2xl leading-[30px]"><Tag text={`${averageScore}%`} classNames={getAverageScoreColor(averageScore)} /></div>
    </div>
  )
}