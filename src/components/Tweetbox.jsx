import React, { useState } from "react";
import pp from "../assets/pp.jpg";
import {
	EmojiIcon,
	EventIcon,
	GIFIcon,
	ImageIcon,
	LocationIcon,
	PollIcon,
} from "../Icons";
import database from "../firebase";
import {
	serverTimestamp,
	doc,
	setDoc,
	addDoc,
	collection,
	Firestore,
	getDocs,
} from "firebase/firestore";
const Tweetbox = () => {
	const [content, setContent] = useState("");

	const sendTweet = () => {
		if (content !== "") {
			// setDoc(doc(database, "feed", add()), {
			// 	name: "ananza",
			// 	timestamp: serverTimestamp(),
			// 	yas: "31",
			// 	content,
			// });
			const colRef = collection(database, "feed");
			const data = {
				name: "Onur MADEN",
				username: "@ronurmaden",
				timestamp: serverTimestamp(),
				domain: document.domain,
				content,
				avatar: pp,
			};
			addDoc(colRef, data);
			// collection(database, "feed").doc().add({
			// 	name: "ananza",
			// 	timestamp: serverTimestamp(),
			// 	yas: "31",
			// });
			// setDoc(doc(database, "feed", 3), {
			// 	name: "ananza",
			// 	timestamp: serverTimestamp(),
			// 	yas: "31",
			// });

			// collection(database, "feed").setDoc("asfesf").set({
			// 	displayName: "onurmaden",
			// 	username: "aewspraer",
			// 	content,
			// 	timestamp: serverTimestamp(),
			// });
			setContent("");
		}
		// if (content !== "") {
		// 	collection(db, "feed").add({
		// 		displayName: "Onur MADENasdf",
		// 		username: "@ronur.madadsfen",
		// 		content,
		// 		timestamp: serverTimestamp(Firestore),
		// 	});
		// 	setContent("");
		// }
	};

	return (
		<div className="flex flex-row px-4 py-1">
			<div className="mr-3 pt-1 shrink-0">
				<img src={pp} alt="" className="w-12 h-12 rounded-full cursor-pointer" />
			</div>
			<div className="flex flex-col w-full">
				<div className="py-3 w-full">
					<textarea
						placeholder="Neler oluyor?"
						className="w-full outline-none placeholder-lighter text-xl overflow-hidden resize-none bg-transparent"
						onChange={(e) => setContent(e.target.value)}
						value={content}
						maxLength="120"
					/>
				</div>
				<div className="flex flex-row flex-wrap items-center justify-between relative border-t border-border pt-2 cursor-pointer">
					<ul className="flex flex-row items-center relative -left-2">
						<li className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200">
							<ImageIcon classname="w-5 h-5 text-brandBlue" />
						</li>
						<li className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200">
							<GIFIcon classname="w-5 h-5 text-brandBlue" />
						</li>
						<li className="sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200 hidden">
							<PollIcon classname="w-5 h-5 text-brandBlue" />
						</li>
						<li className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200">
							<EmojiIcon classname="w-5 h-5 text-brandBlue" />
						</li>
						<li className="sm:flex hidden items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200">
							<EventIcon classname="w-5 h-5 text-brandBlue" />
						</li>
						<li className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-brandBlue hover:bg-opacity-10 transform transition-colors duration-200">
							<LocationIcon classname="w-5 h-5 text-brandBlue opacity-60" />
						</li>
					</ul>
					<button
						className="bg-brandBlue hover:bg-brandDarkBlue active:bg-blue-500 text-white rounded-full px-4 py-2 font-medium text-[15px]"
						onClick={sendTweet}
					>
						Tweetle
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tweetbox;
