import React, { useEffect, useState } from "react";
import { LatestIcon } from "../Icons.jsx";
import Divider from "./Divider.jsx";
import database from "../firebase.js";
import Tweetbox from "./Tweetbox.jsx";
import {
	collection,
	Firestore,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	doc,
	getFirestore,
	QuerySnapshot,
} from "firebase/firestore";
import FeedList from "./FeedList.jsx";
const Content = () => {
	// const [tweets, setTweets] = useState([]);
	// useEffect(() => {
	// 	const q = query(collection(database, "feed"), orderBy("timestamp", "desc"));
	// 	onSnapshot(q, (snapshot) => {
	// 		setTweets(snapshot.forEach((doc) => doc.data()));
	// 		console.log(tweets);
	// 	});
	// 	console.log(tweets);
	// }, [tweets, setTweets]);
	// console.log(tweets);

	// const tweets = [];
	// const q = query(collection(database, "feed"), orderBy("timestamp", "desc"));
	// onSnapshot(q, (snapshot) => {
	// 	snapshot.forEach((doc) => tweets.push(doc.data()));
	// });
	const [tweets, setTweets] = useState([]);
	const q = query(collection(database, "feed"), orderBy("timestamp", "desc"));
	useEffect(() => {
		const getTweets = async () => {
			let tweetsArray = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				tweetsArray.push(doc.data());
			});
			setTweets(tweetsArray);
		};
		getTweets();
	}, []);
	console.log(tweets);

	return (
		<div className="flex flex-col lg:shrink-0 flex-1 md:min-w-[630px] md:max-w-[650px] border-l border-r border-solid border-border">
			<header className="flex justify-between items-center pt-4 pb-3 sticky top-0 px-4 backdrop-blur-xl h-[53px] z-10">
				<span className="text-xl font-bold ">Anasayfa</span>
				<span className=" cursor-pointer">
					<LatestIcon classname={"w-6 h-6"} />
				</span>
			</header>
			<Tweetbox />
			<Divider />
			<div>
				<FeedList tweets={tweets} />
			</div>
		</div>
	);
};

export default Content;
