import { useRef, useState } from "react"

const FormContainer = () => {
  const [shortUrl, setShortUrl] = useState()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <form className="w-full mt-12 max-w-[460px] items-center justify-center text-xl mx-auto px-6 py-4 bg-slate-200 shadow-lg rounded-md">
        <div className="flex gap-x-3">
          <input
            className="bg-white px-5 py-2.5 rounded-md"
            type="text"
            ref={inputRef}
            placeholder="Place your link here..."
          />
          <button
            type="button"
            className="bg-darkViolet hover:bg-darkViolet/85 text-slate-50 px-5 py-2.5 rounded-md transition-colors"
          >
            short!
          </button>
        </div>
        {/* <div className="mt-4">algo</div> */}
      </form>
    </>
  )
}

export default FormContainer
