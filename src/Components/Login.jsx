import Input from "./Input"

const Login = ()=>{
    return(
        <>
        <form>
          {/* <input placeholder='username'></input>
          <input placeholder='password'></input> */}
          <Input placename = {"Username"}/>
          <Input placename = {"Passwrod"}/>
          <div className='btn-submit flex'>Login</div>
        </form>
        </>
    )
}

export default Login;