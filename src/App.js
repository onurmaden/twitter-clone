import Container from "./components/Container";
import Timeline from "./components/Timeline";
import React from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<Container>
			<Sidebar />
			<Content />
			<Timeline />
		</Container>
		
	);
};

export default App;
