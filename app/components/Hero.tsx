import Image from "next/image"
import svgBrowsing from "../../public/assets/images/illustrationBrowsing.svg"

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-6 md:flex-row-reverse justify-center items-center h-[calc(100vh-7.5rem)]">
      <Image
        src={svgBrowsing}
        alt="lorem"
        width={200}
        height={100}
        className="w-full max-w-72 md:max-w-96 xl:max-w-[500px]  bg-cover object-cover"
        priority
      />
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h1 className="text-center md:text-left text-4xl md:max-w-[15ch] md:text-7xl font-extrabold text-slate-900">
          More than just shorter links
        </h1>
        <p className="md:max-w-[35ch] text-lg text-slate-500/80 font-medium text-center md:text-left text-pretty">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <button className="text-xl text-white bg-primary-500 hover:bg-primary-700 px-12 py-3 rounded-xl font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
