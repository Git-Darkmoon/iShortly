import { useState } from "react"

const LinkElement = ({ shortUrl }: any) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className="w-full flex justify-between">
      <div className="mt-4">{`${window.location.href}api/${shortUrl}`}</div>
      <button
        onClick={() => console.log(shortUrl)}
        className="bg-primary-500 hover:bg-primary-700 text-slate-50 px-3 py-0.5 capitalize rounded-md transition-colors"
      >
        {isCopied ? "Copied !" : "Copy"}
      </button>
    </div>
  )
}

export default LinkElement
