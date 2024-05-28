interface propsInterface extends React.InputHTMLAttributes<HTMLInputElement>{}

export function InputText(props:propsInterface) {
  return (
    <input {...props}></input>
  )
}
