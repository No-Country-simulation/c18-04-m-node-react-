
interface propsInterface extends React.SelectHTMLAttributes<HTMLSelectElement>{}

export function Select(props:propsInterface) {
  return (
    <select {...props} className="bg-grey w-16 h-8 text-xs font-marce text-center text-darkPurple transition-all ease-in-out duration-300 sm:w-24 sm:text-base"></select>
  )
}
