import Card from "@/app/components/card/Card"
import IconPlus from "@/app/components/icons/IconPlus"

const cards = [{
  name: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
  categories: ['action', 'comedy', 'horror'],
  averageScore: 80
}, {
  name: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
  categories: ['action', 'comedy', 'horror'],
  averageScore: 60
}, {
  name: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
  categories: ['action', 'comedy', 'horror'],
  averageScore: 50
}, {
  name: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
  categories: ['action', 'comedy', 'horror'],
  averageScore: 44
}, {
  name: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
  categories: ['action', 'comedy', 'horror'],
  averageScore: 22
}]

export default function Cards() {
  return (
    <div className="flex flex-col gap-4 max-w-[1318px] m-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card) => <Card key={card.name} {...card} />)}
      </div>

      <button className="bg-yellow text-white w-full rounded-lg p-2.5 text-xl flex items-center justify-center">
        <IconPlus />
        Ver mais
      </button>
    </div>
  )
}
