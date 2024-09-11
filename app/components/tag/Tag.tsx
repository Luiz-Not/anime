export default function Tag({ text, classNames = '' }: { text: string; classNames?: string }) {
  return <div className={`${classNames} text-white rounded px-2 py-1`}>{text}</div>
}