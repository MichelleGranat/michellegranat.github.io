import Links from "./Links"
import Logo from "./Logo"
import SelectLanguage from "./SelectLanguage"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  return (
    <div className="m-3 flex items-center justify-between">
      <Logo />
        <div className="flex gap-x-3">
            <ThemeToggle />
            <SelectLanguage />
            <Links />
        </div>
    </div>
  )
}

export default Navbar