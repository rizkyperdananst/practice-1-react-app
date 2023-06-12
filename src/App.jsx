import InputForm from "./components/Elements/Input"

const App = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-sky-600 shadow">
      <div className="w-full max-w-sm rounded-md bg-white">
        <h1 className="text-blue-600 text-4xl text-center mt-3">Login</h1>
        <p className="text-center mt-2 mb-3">Input your credentials</p>
        <InputForm label={Email}  />
        <div className="mb-2 p-2">
          <label htmlFor="password" className="block font-bold mb-1">Password</label>
          <input type="password" name="password" id="password" placeholder="input your password" className="border border-solid border-sky-600 w-full rounded-md p-2 caret-blue-600 text-sky-600 focus:outline-none focus:border focus:border-blue-600" />
        </div>
        <div className="mb-2 p-2">
          <button className="bg-sky-500 p-2 rounded-md w-full font-bold">Login</button>
        </div>
      </div>
    </div>
    </>      
  )
}

export default App
