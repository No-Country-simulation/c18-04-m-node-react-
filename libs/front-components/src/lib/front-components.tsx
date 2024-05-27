interface FrontComponentsProps {
  title: string
}

export function FrontComponents(props: FrontComponentsProps) {
  
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )

}