import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
const NavBar: React.FC = () =>{
    return (
        <div className="border-b-2 border-gray-100">
            <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6 ">
                <div className="flex flex-col-reverse md:flex-row min-w-full pt-3 space-y-8 justify-center md:space-x-10">
                    <Link className="flex-1 md:self-start" href="/">
                        <div className="flex justify-center ">
                            <div className="flex justify-center items-center">
                                <span className={styles.title}>JAVASCRIPT</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <nav id="bar" className="flex justify-center ">
                <div className=" flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
                   <Link href="/api/test"><a className="mx-8 hover:text-red-900"> Docs </a></Link>
                   <Link href="/#"><a className="mx-8 hover:text-red-900">About</a></Link>
                   <Link href="/#"><a className="mx-8 hover:text-red-900">Concepts</a></Link>
                   <Link href="/api/"><a className="mx-8 hover:text-red-900">Not Found</a></Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;