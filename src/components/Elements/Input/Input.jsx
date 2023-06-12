const Input = (props) => {
     const { type, name, id, placeholder } = props;

     return (
          <input type={type} name={name} id={id} placeholder={placeholder} className="border border-solid border-sky-600 w-full rounded-md p-2 caret-blue-600 text-sky-600 focus:outline-none focus:border focus:border-blue-600" />
     )
}

export default Input;