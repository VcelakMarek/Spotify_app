import { Form } from "react-final-form"
import Button from "components/Button"
import FormInput from "components/FormInput"

const LoginForm = () => {
  const onSubmit = () => {
    // login verification
  }

  return (
    <>
      <Form
        id="Login"
        className="w-[504px]"
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, values, form }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormInput id="mail" inputName="Email or username" />
            <FormInput
              id="password"
              inputName="Password"
              inputType="password"
            />
            {/* <input checkbox></input> */}
            <Button submit>Log In</Button>
          </form>
        )}
      />
    </>
  )
}
export default LoginForm
