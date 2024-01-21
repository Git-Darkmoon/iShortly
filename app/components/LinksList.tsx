import LinkElement from "./LinkElement"

const LinksList = ({ list }: any) => {
  return (
    <div className="flex items-center justify-between">
      {list.map((item: any) => (
        <LinkElement key={item} shorturl={item} />
      ))}
    </div>
  )
}

export default LinksList
