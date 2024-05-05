import Button from "components/Button"
import LoginForm from "components/LoginForm"

const Login = () => {
  return (
    <div className="gap flex h-[893px] w-[734px] flex-col items-center ">
      <h1 className="m-12">Log in to Spotify</h1>
      <div className="flex flex-col gap-2">
        <Button variant="secondary">Continue with Google</Button>
        <Button variant="secondary">Continue with Facebook</Button>
        <Button variant="secondary">Continue with Apple</Button>
      </div>

      <div className="mx-[100px] my-8 h-px w-[534px] bg-[#292929]"></div>

      <LoginForm />

      <div className="mx-[100px] my-8 h-px w-[534px] bg-[#292929]"></div>
    </div>
  )
}

export default Login
