import Image from "next/image"
import svgBrowsing from "../../public/assets/images/illustrationBrowsing.svg"
import FormContainer from "./FormContainer"
import React, { Suspense } from "react"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-6 md:flex-row-reverse justify-center items-center h-[calc(100vh-7.5rem)]">
      {/* <Image
        src={svgBrowsing}
        alt="lorem"
        width={200}
        height={100}
        className="w-full max-w-72 md:max-w-96 xl:max-w-[500px]  bg-cover object-cover"
        priority
      /> */}
      <div className="w-full h-full max-w-72 md:max-w-96 xl:max-w-[500px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/WbK2pL0Jox494Mkf/scene.splinecode" />
        </Suspense>
      </div>
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h1 className="text-center md:text-left text-4xl md:max-w-[15ch] md:text-7xl font font-extrabold text-slate-200">
          More than just shorter links
        </h1>
        <FormContainer />
      </div>
    </div>
  )
}

export default Hero
