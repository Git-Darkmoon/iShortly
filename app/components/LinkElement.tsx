import Image from "next/image"
import { toast } from "sonner"
import copyIcon from "../../public/assets/copyIcon.svg"

function handleClick(shortUrl: any) {
  navigator.clipboard.writeText(`${window.location.host}/api/${shortUrl}`)
  toast.success("Link copied!")
}

const LinkElement = ({ shortUrl }: any) => {
  return (
    <div className="mt-3 w-full flex items-center justify-between">
      <div className="text-sm sm:text-base text-slate-100">{`${window.location.host}/api/${shortUrl}`}</div>
      <button
        type="button"
        onClick={() => handleClick(shortUrl)}
        className="bg-primary-500/75 hover:bg-primary-700 p-2 capitalize rounded-md transition-colors"
      >
        <Image src={copyIcon} alt="copy to clipboard icon" className="size-5" />
      </button>
    </div>
  )
}

export default LinkElement
