import Button from "../Button"
import InputGroup from "../form/InputGroup"
import InputError from "../form/InputError"
import useSignIn from "@/hooks/useSignIn"

const SignInForm = () => {
  const { handleSubmit, inputErrors } = useSignIn()

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <InputGroup
          label="Email"
          htmlFor="email"
          inputProps={{
            type: "text",
            id: "email",
            name: "email",
            autoComplete: "email",
            className:
              "text-black pl-2 dark:bg-tuna border border-gray-300 dark:border-raven rounded-md h-8 focus:outline-none focus:border-persian-green dark:text-white",
            required: true
          }}
        >
          {inputErrors?.email && (
            <InputError message={inputErrors?.email?.message} />
          )}
        </InputGroup>
        <InputGroup
          label="Contraseña"
          htmlFor="password"
          inputProps={{
            type: "password",
            id: "password",
            name: "password",
            autoComplete: "current-password",
            className:
              "text-black pl-2 dark:bg-tuna border border-gray-300 dark:border-raven rounded-md h-8 focus:outline-none focus:border-persian-green dark:text-white",
            required: true
          }}
        >
          {inputErrors?.password && (
            <InputError message={inputErrors?.password?.message} />
          )}
        </InputGroup>
        <Button
          type="submit"
          className="h-10 bg-persian-green rounded-md mt-4 hover:bg-monte-carlo hover:text-black text-white dark:text-white"
        >
          Ingresar
        </Button>
      </div>
    </form>
  )
}

export default SignInForm
