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
        className="flex flex-col gap-y-3 w-full  mt-12 max-w-[760px] justify-center text-xl mx-auto px-6 py-4 bg-slate-200 shadow-lg rounded-md"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="w-full bg-white px-5 py-2.5 rounded-md"
            type="url"
            ref={inputRef}
            placeholder="Place your link here..."
          />
          <button
            type="submit"
            className="bg-darkViolet hover:bg-darkViolet/85 text-slate-50 px-5 py-2.5 capitalize rounded-md transition-colors"
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
