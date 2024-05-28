interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export function Button({children, ...props}: propsInterface) {
  return (
    <button {...props}>{children}</button>
  )
}
