import React from "react";
import { NavLink } from "react-router-dom";

const SidebarNav = ({ name, Icon }) => {
	return (
		<li className="flex w-[251px] items-center justify-center xl:items-start xl:justify-start">
			<NavLink
				to={name.toLowerCase()}
				className={`flex xl:pr-9 p-3 gap-3 rounded-full hover:bg-[#f5f8fa] transform transition-colors duration-200`}
			>
				<Icon />
				<span
					className={`hidden xl:block text-xl leading-5 my-auto
                `}
				>
					{name}
				</span>
			</NavLink>
		</li>
	);
};

export default SidebarNav;
