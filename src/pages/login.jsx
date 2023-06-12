import InputForm from "../components/Elements/Input";

const LoginPage = () => {
     return (
          <div className="flex justify-center items-center min-h-screen bg-sky-600 shadow">
               <div className="w-full max-w-sm rounded-md bg-white">
                    <h1 className="text-blue-600 text-4xl text-center mt-3">Login</h1>
                    <p className="text-center mt-2 mb-3">Input your credentials</p>
                    <InputForm htmlFor="email" label="Email" name="email" placeholder="input your email"/>
                    <InputForm htmlFor="password" label="Password" name="password" placeholder="input your password"/>
                    <div className="mb-2 p-2">
                         <button className="bg-sky-600 p-2 rounded-md w-full font-bold hover:bg-sky-500">Login</button>
                    </div>
               </div>
          </div>
     )
}

export default LoginPage;