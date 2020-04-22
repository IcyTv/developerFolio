import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contact from "./contact/Contact";
import Greeting from "./greeting/Greeting";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import Top from "./topbutton/Top";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Skills />
				<StackProgress />
				<Projects />
				{/* <StartupProject /> */}
				{/* <Achievement /> */}
				{/* <Blogs /> */}
				{/* <Talks /> */}
				{/* <Twitter /> */}
				{/* <Podcast /> */}
				<Contact />
				<Footer />
				<Top />
			</div>
		);
	}
}
