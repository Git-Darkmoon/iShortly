"use client"

import { FormEvent, useRef, useState } from "react"

const FormContainer = () => {
  const [shortUrl, setShortUrl] = useState()
  const inputRef = useRef<HTMLInputElement>(null)

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
    setShortUrl(data.shortUrl)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-12 max-w-[460px] items-center justify-center text-xl mx-auto px-6 py-4 bg-slate-200 shadow-lg rounded-md"
      >
        <div className="flex gap-x-3">
          <input
            className="bg-white px-5 py-2.5 rounded-md"
            type="text"
            ref={inputRef}
            placeholder="Place your link here..."
          />
          <button
            type="submit"
            className="bg-darkViolet hover:bg-darkViolet/85 text-slate-50 px-5 py-2.5 rounded-md transition-colors"
          >
            short!
          </button>
        </div>
        <div className="mt-4">{shortUrl}</div>
      </form>
    </>
  )
}

export default FormContainer
