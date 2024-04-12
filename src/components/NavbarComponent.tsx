import { BsCart2 } from "react-icons/bs";
import profile from "../assets/profile.png";
export const NavbarComponent = () => {
	return (
		<div>
			<ul className="flex justify-around items-center bg-white opacity-50">
				<h1 className="text-3xl font-bold">E-Commerce</h1>
				<li className="hidden md:block lg:block">Make Up</li>
				<li className="hidden md:block lg:block">Accesssori</li>
				<li className="hidden md:block lg:block">Profumi</li>
				<li className="hidden md:block lg:block">Novita</li>
				<li className="hidden md:block lg:block">Promozioni</li>
				<label htmlFor="search">
					{" "}
					Cerca:{" "}
					<input
						className="w-50 bg-red-200"
						type="text"
						name="search"
						id="search"
					/>
				</label>

				<div className="flex">
					<div className="bg-red-400 w-10 h-10 rounded-full ">
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
