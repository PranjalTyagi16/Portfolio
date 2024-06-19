import logo from "../assets/PranjalLogo.jpeg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/pranjal-tyagi-" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ margin: '0 10px', color: 'via-slate-500' }} />
      </a>
      <a href="https://github.com/PranjalTyagi16" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{ margin: '0 10px', color: 'via-slate-500' }} />
      </a>
      </div>
    </nav>
  )
}

export default Navbar