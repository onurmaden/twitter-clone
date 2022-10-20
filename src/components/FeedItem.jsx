import React from "react";
import {
	CommentIcon,
	LikeIcon,
	MoreIcon,
	RetweetIcon,
	ShareIcon,
} from "../Icons";

const FeedItem = ({ avatar, content, name, timestamp, username }) => {
	return (
		<article className="py-3 px-4">
			<div className="flex flex-row">
				<div className="mr-3 cursor-pointer shrink-0">
					{<img src={avatar} alt="" className="h-12 w-12 rounded-full" />}
				</div>
				<div className="w-full">
					<div className="flex flex-row items-center justify-between text-lighter w-full">
						<div className=" cursor-pointer">
							<span className=" text-defaultText text-[15px] font-bold hover:underline">
								{name}
							</span>
							<span className="text-[15px] ml-1">{username}</span>
							<span className="px-1">·</span>
							<span className="text-[15px] hover:underline">
								{timestamp?.toDate().toLocaleTimeString("tr")}
							</span>
						</div>
						<MoreIcon classname="w-[18.75px] cursor-pointer" />
					</div>
					<div className="text-[15px]">{content}</div>
					<div className="flex flex-row text-lighter space-x-20 cursor-pointer -mx-2 mt-2">
						<div className="w-[34.75px] h-[34.75px] flex items-center justify-center rounded-full hover:bg-blue-300 hover:text-brandDarkBlue hover:bg-opacity-20">
							<CommentIcon classname="w-[18.75px] h-[18.75px]" />
						</div>
						<div className="w-[34.75px] h-[34.75px] flex items-center justify-center rounded-full hover:bg-green-400 hover:text-green-400 hover:bg-opacity-20">
							<RetweetIcon classname="w-[18.75px] h-[18.75px]" />
						</div>
						<div className="w-[34.75px] h-[34.75px] flex items-center justify-center rounded-full hover:bg-red-400 hover:text-red-400 hover:bg-opacity-20">
							<LikeIcon classname="w-[18.75px] h-[18.75px]" />
						</div>
						<div className="w-[34.75px] h-[34.75px] flex items-center justify-center rounded-full hover:bg-blue-300 hover:text-brandDarkBlue hover:bg-opacity-20">
							<ShareIcon classname="w-[18.75px] h-[18.75px]" />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default FeedItem;
