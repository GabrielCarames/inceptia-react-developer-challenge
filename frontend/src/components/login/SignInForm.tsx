import Button from "../Button"
import InputGroup from "../form/InputGroup"

const SignInForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <InputGroup
          label="Email"
          htmlFor="email"
          id={"email"}
          inputProps={{
            type: "text",
            name: "email",
            autoComplete: "email",
            className: "h-5"
          }}
          required
          inputClassName="text-black pl-2 bg-rock-blue rounded-sm h-8"
        ></InputGroup>
        <InputGroup
          label="Contraseña"
          htmlFor="password"
          id={"password"}
          inputProps={{
            type: "password",
            name: "password",
            autoComplete: "current-password",
            className: "h-5"
          }}
          required
          inputClassName="text-black pl-2 bg-rock-blue rounded-sm h-8"
        ></InputGroup>
        <Button
          type="submit"
          className="h-10 bg-crimson rounded-sm mt-4 hover:bg-dark-crimson"
        >
          Ingresar
        </Button>
      </div>
    </form>
  )
}

export default SignInForm
