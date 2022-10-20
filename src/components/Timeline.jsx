import React from "react";
import { SearchIcon } from "../Icons";
import { Timeline as TwitterTimeline } from "react-twitter-widgets";
const Timeline = () => {
	return (
		<aside className="hidden lg:flex lg:flex-col w-full max-w-[350px] shrink-1 ml-[40px] justify-start bg-white">
			<div className="bg-white sticky top-0 mb-5 h-[53px]">
				<div className="flex flex-row mb-3 h-[42px] bg-[#eff3f4] focus-within:bg-white focus-within:ring-1 focus-within:ring-brandBlue rounded-full items-center mt-1 focus-within:!text-brandBlue sticky top-1">
					<span className="flex w-[44px] items-center justify-items-start pl-3 ">
						<SearchIcon className="w-[18.43px] h-[18.75px] opacity-70" />
					</span>
					<span className="p-3 flex-1">
						<input
							type="text"
							placeholder="Twitter'da Ara"
							className=" bg-transparent placeholder-[#536174] text-[15px] outline-none text-defaultText w-full"
						/>
					</span>
				</div>
			</div>
			<div className="">
				<TwitterTimeline
					dataSource={{
						sourceType: "profile",
						screenName: "reactjs",
					}}
					options={{
						height: "800",
					}}
				/>
			</div>
		</aside>
	);
};

export default Timeline;
