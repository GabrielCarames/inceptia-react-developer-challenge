import SignInForm from "@/components/login/SignInForm"

export default function SignIn() {
  return (
    <main className="h-full min-h-screen flex justify-center items-center bg-dark text-white px-3">
      <div className="w-full max-w-lg flex min-h-full flex-1 flex-col justify-center">
        <div className="w-full flex flex-col gap-5">
          <div className="sm:mx-auto sm:w-full sm:max-wlg">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Inceptia - React Developer Challenge
            </h1>
            <h2 className="text-center text-xl mt-5">Iniciar sesión</h2>
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full bg-shark rounded-lg border border-tuna shadow-md px-6 py-12 lg:px-8">
          <SignInForm />
        </div>
      </div>
    </main>
  )
}
