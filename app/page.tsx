"use client"

import FormContainer from "./components/FormContainer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <main className="px-8 py-10 ">
      <Header />
      <Hero />
      <FormContainer />
    </main>
  )
}

export default Home
