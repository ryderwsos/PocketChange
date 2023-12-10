import Link from "next/link";
import { logo, body } from "../ui/fonts";

export default function NavMenu() {
  return (
    <nav
        className="sticky top-0 flex flex-row items-center justify-between mt-6 bg-primary rounded-md w-full"
    >
        <Link 
            href='/'
            className={`${logo.className} text-2xl flex justify-center text-text hover:bg-secondary rounded-md p-4 w-full h-full transition-all duration-500 ease-out`}
        >
            pocketchange
        </Link>
        <Link 
            href='/discover'
            className={`${body.className} text-xl flex justify-center text-text hover:bg-secondary rounded-md p-4 w-1/2 h-full transition-all duration-500 ease-out`}
        >
            Discover
        </Link>
        <Link 
            href='/connections'
            className={`${body.className} text-xl flex justify-center text-text hover:bg-secondary rounded-md p-4 w-1/2 h-full transition-all duration-500 ease-out`}
        >
            Connections
        </Link>
        <Link 
            href='/inbox'
            className={`${body.className} text-xl flex justify-center text-text hover:bg-secondary rounded-md p-4 w-1/2 h-full transition-all duration-500 ease-out`}    
        >
            Messages
        </Link>
    </nav>
  )
}
