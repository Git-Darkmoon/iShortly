import { signIn, signOut, useSession } from "next-auth/react"

const AuthBtn = () => {
  const { data: session } = useSession()
  const btnStyles: string =
    "rounded-sm bg-gray-700/60 hover:text-primary-500 px-4 py-1.5 transition"

  if (session) {
    return (
      <div className="flex justify-center items-center gap-x-4 group">
        <h3 className="">
          Hi, {session?.user?.name} <br />
        </h3>
        <button className={btnStyles} onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <span className="relative">
      <button onClick={() => signIn()} className={btnStyles}>
        Sign in
      </button>
    </span>
  )
}

export default AuthBtn
