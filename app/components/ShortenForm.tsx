"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FormEvent } from "react"

const API_URL = "https://cleanuri.com/api/v1/shorten"

const ShortenForm = () => {
  //   const queryLink: any = useQuery({
  //     queryKey: ["shorten"],

  //     queryFn: async () => {
  //       const response: any = await axios.post(API_URL, {
  //         url: "https://tanstack.com/query/latest/docs/react/quick-start",
  //       })
  //       const data = await response.json()
  //       console.log(data)
  //     },

  //     staleTime: 1000 * 60 * 5,
  //   })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: "Bearer b5594b2eb2feed049c5513d8051ede35730ef4f0",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: "https://github.com/Git-Darkmoon",
        domain: "bit.ly",
        group_guid: "Ba1bc23dE4F",
      }),
    })

    const result = await response.json()
    console.log(result)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto md:max-w-[48rem] mt-8 p-6 flex flex-col md:flex-row gap-3.5 bg-gradient-to-bl from-gray-900 to-gray-600 w-full rounded-lg"
    >
      <input
        className="px-4 py-3 rounded-md w-full md:w-[80%]"
        type="text"
        name=""
        id=""
        placeholder="Shorten a link here..."
      />
      <button
        className="px-2 py-3 rounded-md bg-primary-500 hover:bg-primary-700 font-bold text-xl text-slate-100 transition-colors"
        type="submit"
      >
        Shorten it!
      </button>
    </form>
  )
}

export default ShortenForm
