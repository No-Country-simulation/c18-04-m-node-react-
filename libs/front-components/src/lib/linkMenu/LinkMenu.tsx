interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export function LinkMenu({children, ...props}: propsInterface) {
  return (
    <button {...props} className="bg-transparent w-24 h-8 font-marce text-yellow transition-all ease-in-out duration-300 hover:bg-lightPurple sm:w-36 sm:h-12 sm:text-xl">{children}</button>
  )
}
