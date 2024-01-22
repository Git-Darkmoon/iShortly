import { useState } from "react"

const LinkElement = ({ shortUrl }: any) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className="mt-3 w-full flex justify-between">
      <div className="mt-4 text-slate-100">{`${window.location.href}api/${shortUrl}`}</div>
      <button
        type="button"
        onClick={() => setIsCopied(!isCopied)}
        className="bg-primary-500 hover:bg-primary-700 text-gray-950 px-3 py-0.5 capitalize rounded-md transition-colors"
      >
        {isCopied ? "Copied !" : "Copy"}
      </button>
    </div>
  )
}

export default LinkElement
