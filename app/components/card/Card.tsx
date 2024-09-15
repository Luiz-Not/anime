import Tag from "../tag/Tag";
import { getAverageScoreColor } from "./helper";

export default function Card({
  title,
  coverImage,
  genres,
  averageScore
}: {
  title: { english: string, romaji: string }
  averageScore: number
  genres: string[]
  coverImage: {
    extraLarge: string
  }
}
) {
  return (
    <div style={{ backgroundImage: `url("${coverImage.extraLarge}")` }} className="anime-card relative w-full rounded-lg p-6 border boder-grayLight min-h-[270px] gap-2 flex flex-col bg-cover">
      <div className="text-white text-2xl font-bold leading-[30px] z-10">
        {title.romaji || title.english}
      </div>
      <div className="flex gap-3 text-xs flex-wrap z-10">
        {genres.map((c) => <Tag key={c} text={c} classNames="bg-primaryLight" />)}
      </div>
      {averageScore && (
        <div className="flex-1 content-end self-end text-2xl leading-[30px] z-10">
          <Tag text={`${averageScore}%`} classNames={getAverageScoreColor(averageScore)} />
        </div>
      )}
    </div>
  )
}