const Label =  (props) => {
     const { htmlFor, children } = props;

     return (
          <label htmlFor={htmlFor} className="block font-bold mb-1">
               {children}
          </label>
     )
}

export default Label;