import Link from "next/link";
import { useState } from "react";

export default function NavbarTest() {
    const [hidden, setHidden] = useState(true);
    return (
        <nav className="flex flex-wrap p-10  justify-between">
            {/* Icon Main  */}
            <div className="p-2">
                <Link href="/">
                    <span>The Profile</span>
                </Link>
            </div>
            {/* Togggle Button */}

            <button
                onClick={() => {
                    setHidden((currenct) => !currenct);
                }}
                type="button"
                className="inline-flex items-center p-2 ml-3 md:hidden"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>

            {/* Nav-Content */}
            <div
                className={`${
                    hidden && "hidden"
                } w-full md:block md:w-auto`}
            >
                {/* Nav-items */}
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:bg-transparent bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li className="py-2">
                        <Link href="/" className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/blog" className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
                            Blog
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
                            Contact
                        </Link>
                    </li>

                    <li className="lg:pl-48 pl-24">
                        {/* Nav-Button */}
                        <button className=" p-2 px-10 bg-sky-950 text-white rounded-3xl">
                            Signin
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
