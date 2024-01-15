const ShortenForm = () => {
  return (
    <form className="mt-8 p-6 flex flex-col gap-3.5 bg-gradient-to-tr from-darkViolet via-[hsl(256,26%,32%)] to-[hsl(256,26%,52%)] w-full rounded-lg">
      <input
        className="px-4 py-3 rounded-md"
        type="text"
        name=""
        id=""
        placeholder="Shorten a link here..."
      />
      <button
        className="px-2 py-3 rounded-md bg-primary-500 font-bold text-xl text-slate-100  "
        type="submit"
      >
        Shorten it!
      </button>
    </form>
  )
}

export default ShortenForm
