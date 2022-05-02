import { useState } from 'react'
import Link from 'next/link'
import { PrismicLink } from "@prismicio/react";

// const NavItem = ({ children }) => {
//   return (
//     <li className="font-semibold tracking-tight text-slate-800">{children}</li>
//   );
// };

const Header = () => {
	const [state, setState] = useState(false)

	const navigation = [
		{ name: 'Leiksvæði', path: '/leiksvaedi' },
		{ name: 'Sleðabrekkur', path: '/sledabrekkur' },
	]
    
  return (
    <header>
			<nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
				<div className="flex justify-between">
					<PrismicLink href="/">
						<a>Leikur</a>
					</PrismicLink>
					<button 
						className="text-gray-500 outline-none sm:hidden"
						onClick={() => setState(!state)}
					>
						{
							state ? (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)
						}
					</button>
				</div>
				<ul className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${state ? '' : 'hidden'}`}>
					<div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
						{
							navigation.map((item, idx) => (
								<li className="text-gray-500 hover:text-indigo-600" key={idx}>
									<Link href={item.path}>
										<a>{item.name}</a>
									</Link>
								</li>
							))
						}
					</div>
				</ul>
			</nav>
		</header>
  )
}

export default Header