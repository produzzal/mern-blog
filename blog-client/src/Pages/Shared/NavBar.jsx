import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa"


export default function NavBar() {
    const location = useLocation().pathname;
    return (
        <Navbar className="border-b-2">
            <Link className="self-center whitespace-nowrap text-sm lg:text-xl font-semibold dark:text-white" to="/"><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Uzzal's</span>Blog</Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className="hidden md:inline"
                />
            </form>
            <Button className="w-12 h-10 md:hidden" color="gray" pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 " color="gray" pill><FaMoon /></Button>
                <Link to="/sign-in">
                    <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
                </Link>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active={location === "/"} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={location === "/about"} as={'div'}>
                    <Link to="/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={location === "/projects"} as={'div'}>
                    <Link to="/projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
