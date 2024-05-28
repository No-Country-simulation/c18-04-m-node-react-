interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export function LinkMenu({children, ...props}: propsInterface) {
  return (
    <button {...props}>{children}</button>
  )
}
