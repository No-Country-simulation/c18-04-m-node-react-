interface propsInterface extends React.InputHTMLAttributes<HTMLInputElement>{}

export function InputText(props:propsInterface) {
  return (
    <input {...props} className="w-48 h-8 border-b border-b-grey text-sm text-grey bg-darkPurple placeholder:text-lightPurple font-marce px-2 focus:outline-0 focus:bg-lightPurple transition-all ease-in-out duration-300
    sm:w-1/2 sm:text-base"></input>
  )
}
