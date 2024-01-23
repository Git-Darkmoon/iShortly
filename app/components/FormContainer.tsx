"use client"

import { FormEvent, useRef, useState } from "react"
import LinkElement from "./LinkElement"

const FormContainer = () => {
  const [elements, setElements] = useState<React.ReactElement[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function addElement(shortCode: String) {
    setElements([
      ...elements,
      <LinkElement key={crypto.randomUUID()} shortUrl={shortCode} />,
    ])
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const url = inputRef.current?.value

    // TODO Request to REST service.

    const res = await fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
    const data = await res.json()
    addElement(data.shortUrlId)

    // Reset the form
    const form = document.getElementById("myForm") as HTMLFormElement
    form.reset()
  }

  return (
    <>
      <form
        id="myForm"
        onSubmit={handleSubmit}
        className="flex flex-col  w-full mt-6 max-w-[760px] justify-center text-xl mx-auto px-6 py-5 bg-gray-700/60 shadow-xl rounded-md"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="w-full bg-white text-gray-900 text-base sm:text-lg 2xl:text-xl  px-5 py-2.5 rounded-md outline-none focus:outline-2 focus:outline-primary-500 transition-all"
            type="url"
            ref={inputRef}
            placeholder="Place your link here..."
            required
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-700 text-slate-950 px-5 py-2.5 capitalize rounded-md transition-colors"
          >
            short!
          </button>
        </div>

        <div className="flex flex-col items-center justify-between">
          {elements}
        </div>
      </form>
    </>
  )
}

export default FormContainer
