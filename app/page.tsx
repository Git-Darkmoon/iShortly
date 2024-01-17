"use client"

import FormContainer from "./components/FormContainer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 -z-9 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary-500/40 opacity-50 blur-[80px]"></div>
      </div>
      <main className="px-8 py-10 ">
        <Header />
        <Hero />
        <FormContainer />
      </main>
    </>
  )
}

export default Home
