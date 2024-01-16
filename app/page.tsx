"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import ShortenContainer from "./components/ShortenContainer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Home = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="px-8 py-10 ">
        <Header />
        <Hero />
        <ShortenContainer />
      </main>
    </QueryClientProvider>
  )
}

export default Home
