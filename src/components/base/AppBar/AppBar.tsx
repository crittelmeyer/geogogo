import type { AppBarProps } from './AppBar.d'

const AppBar = ({ children }: AppBarProps) => (
  <header className="flex hidden w-full items-center bg-yellow-300 py-4 pl-8 text-2xl shadow-sm shadow-yellow-500 sm:block">
    <div className="md:container md:mx-auto">{children}</div>
  </header>
)

export default AppBar
