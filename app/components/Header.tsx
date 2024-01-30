import AuthBtn from "./AuthBtn"

const Header = () => {
  return (
    <div className="flex w-full justify-between px-8 text-slate-100">
      <h1 className="text-4xl font-bold">iShortly</h1>
      <AuthBtn />
    </div>
  )
}

export default Header
