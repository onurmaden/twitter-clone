import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
	CommunityIcon,
	HashtagIcon,
	HomeIcon,
	MessageIcon,
	NotificationIcon,
	ProfileIcon,
	SavedIcon,
	TwitterIcon,
	PenIcon,
	ThreeDotIcon,
	MoreIcon,
} from "../Icons";
import SidebarNav from "./SidebarNav";
import pp from "../assets/pp.jpg";
const SideNavs = [
	{
		name: "Anasayfa",
		icon: HomeIcon,
	},
	{
		name: "Keşfet",
		icon: HashtagIcon,
	},
	{
		name: "Topluluklar",
		icon: CommunityIcon,
	},
	{
		name: "Bildirimler",
		icon: NotificationIcon,
	},
	{
		name: "Mesajlar",
		icon: MessageIcon,
	},
	{
		name: "Yer İşaretleri",
		icon: SavedIcon,
	},
	{
		name: "Profil",
		icon: ProfileIcon,
	},
	{
		name: "Daha Fazla",
		icon: ThreeDotIcon,
	},
];

const Sidebar = () => {
	return (
		<nav className="flex flex-none flex-col shrink-0 justify-between items-center xl:w-[275px] px-[12px] w-[90px]">
			<div className="sticky top-0">
				<ul className="flex flex-col px-3 gap-y-1">
					<li className="flex items-center justify-center xl:items-start xl:justify-start">
						<a
							href="/"
							className="flex justify-center w-[50px] h-[50px] rounded-full hover:bg-[#f5f8fa] transform transition-colors duration-200"
						>
							<TwitterIcon />
						</a>
					</li>
					<BrowserRouter>
						{SideNavs.map(({ name, icon }) => (
							<SidebarNav key={name} name={name} Icon={icon} />
						))}
					</BrowserRouter>
				</ul>
				<div className="flex items-center justify-center xl:h-[52px] xl:w-[225.891px] my-4 xl:border-solid xl:border-[1px] xl:border-white xl:bg-brandBlue xl:hover:bg-brandDarkBlue xl:cursor-pointer xl:transform xl:transition-colors xl:duration-200 xl:rounded-full px-3 xl:px-[32px] xl:mx-3">
					<a
						href="/"
						className="hidden xl:block text-[17px] text-white font-bold leading-5"
					>
						Tweetle
					</a>
					<a
						href="/"
						className="xl:hidden flex items-center justify-center rounded-full bg-brandBlue hover:bg-brandDarkBlue w-[50px] h-[50px] transform transition-colors duration-200"
					>
						<PenIcon className=" text-white rounded-full w-[24px] h-[30px]" />
					</a>
				</div>
			</div>
			<div className="flex flex-row p-3 items-center justify-between w-full cursor-pointer rounded-full hover:bg-[#f5f8fa] transform transition-colors duration-200 sticky bottom-0">
				<span className="w-[40px] h-[40px]">
					<img src={pp} alt="" className="rounded-full w-[40px] h-[40px]" />
				</span>
				<div className="xl:flex hidden flex-col w-[168.08px] items-start pl-2">
					<span className=" text-defaultText text-[15px] font-bold text-center align-middle inline-block leading-5 h-[18px]">
						Onur MADEN
					</span>
					<span className="text-lighter text-[15px] h-[18px] align-middle text-center inline-block leading-5">
						@ronur.maden
					</span>
				</div>
				<span className="xl:flex hidden text-lighter w-[18.75px]">
					<MoreIcon />
				</span>
			</div>
		</nav>
	);
};

export default Sidebar;
