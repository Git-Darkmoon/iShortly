import Image from "next/image"
import render from "../../public/assets/3D_Foodies.webp"
import FormContainer from "./FormContainer"

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-6 lg:flex-row-reverse justify-center items-center h-[calc(100vh-7.5rem)]">
      <Image
        src={render}
        alt="lorem"
        width={1500}
        height={750}
        className="w-full max-w-96 md:max-w-[450px] xl:max-w-[600px]  bg-cover object-cover"
        priority
      />

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
