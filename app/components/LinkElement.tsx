import { useState } from "react"

const LinkElement = ({ shorturl }: any) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <>
      <div className="mt-4">{`${window.location.href}api/${shorturl}`}</div>
      <button
        onClick={() => console.log(shorturl)}
        className="bg-primary-500 hover:bg-primary-700 text-slate-50 px-3 py-1.5 capitalize rounded-md transition-colors"
      >
        {isCopied ? "Copied !" : "Copy"}
      </button>
    </>
  )
}

export default LinkElement
