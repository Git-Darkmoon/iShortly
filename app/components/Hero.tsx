import Image from "next/image"
import svgWorking from "../../public/assets/images/illustration-working.svg"

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:flex-row justify-center items-center mt-16">
      <Image
        src={svgWorking}
        alt="lorem"
        width={200}
        height={100}
        className="w-full bg-cover object-cover"
      />
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-center text-4xl font-extrabold text-slate-900">
          More than just shorter links
        </h1>
        <p className="text-lg text-slate-500/80 font-medium text-center">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <button className="text-xl text-slate-100 bg-primary-500 px-12 py-3 rounded-full font-semibold ">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
