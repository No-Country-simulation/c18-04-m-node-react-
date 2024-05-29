import styles from './Header.module.css'

export default function Header () {
  return (
    <header className="flex items-center bg-purple h-36">
      <img src="/public/images/logo.svg" alt="Legal builder Logo" width={39} height={39} />
      <h1 className='text-gold font-Marcellus text-2xl'>Legal Builder</h1>
    </header>
  )
}
