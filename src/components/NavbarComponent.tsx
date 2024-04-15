import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../assets/profile.png";
export const NavbarComponent = () => {
	return (
		<div>
			<ul className="flex flex-col md:flex-row lg:flex-row justify-around items-start md:items-center lg:items-center bg-red-100  p-3">
				<h1 className="text-3xl font-bold pb-2">E-Commerce</h1>
				<div className="dropdown hidden md:block lg:block">
					<button className="dropbtn hidden md:block lg:block">Make Up</button>
					<div className="dropdown-content">
						<a href="#">Lipsticks</a>
						<a href="#">Eyeshadows</a>
						<a href="#">Foundation</a>
					</div>
				</div>

				<div className="dropdown hidden md:block lg:block">
					<button className="dropbtn hidden md:block lg:block">
						Accessories
					</button>
					<div className="dropdown-content dropdown-content2">
						<a href="#">Hairbrush</a>
						<a href="#">Make up brushes</a>
						<a href="#">Hair clips</a>
					</div>
				</div>
				<li className="hidden md:block lg:block">Profumi</li>
				<li className="hidden md:block lg:block">Novita</li>
				<li className="hidden md:block lg:block">Promozioni</li>
				<div className="flex items-end">
					<div>
						<GiHamburgerMenu className="block md:hidden lg:hidden me-10 text-3xl" />
					</div>
					<label className="mt-10 md:mt-0 lg:mt-0" htmlFor="search">
						{" "}
						Cerca:{" "}
						<input
							className="w-50 bg-red-200"
							type="text"
							name="search"
							id="search"
						/>
					</label>
				</div>

				<div className="flex relative md:static lg:static z-20 cordinateIconsNav">
					<div className="w-10 h-10 rounded-full profile me-3">
						<img src={profile} />
					</div>
					<div className="bg-red-400 w-10 h-10 rounded-full text-center pt-2.5 ps-3">
						<BsCart2 />
					</div>
				</div>
			</ul>
		</div>
	);
};
