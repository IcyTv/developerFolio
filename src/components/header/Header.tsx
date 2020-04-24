//import Switch from "react-switch";
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { ReactComponent as Logo } from "../../logo.svg";
import DarkToggle from "../darkToggle/DarkToggle";
import "./Header.css";

export class Header extends Component {
	render() {
		return (
			<Fade top duration={1000} distance="20px">
				<div key="header">
					<header className="header">
						<a href="#top" className="logo">
							<Logo width="1rm" height="1rm" />
						</a>
						<input
							className="menu-btn"
							type="checkbox"
							id="menu-btn"
						/>
						<label className="menu-icon" htmlFor="menu-btn">
							<span className="navicon"></span>
						</label>
						<ul className="menu">
							<li>
								<a href="#skills">Skills</a>
							</li>
							<li>
								<a href="#opensource">Projects</a>
							</li>
							{/* <li>
												<a href="#opensource">Open Source</a>
											</li> */}
							{/* <li>
												<a href="#blogs">Blogs</a>
											</li>
											<li>
												<a href="#talks">Talks</a>
											</li>
											<li>
												<a href="#achievements">Achievements</a>
											</li> */}
							<li>
								<a href="#contact">Contact Me</a>
							</li>
							<li>
								<DarkToggle id="dark-toggle" />
							</li>
						</ul>
					</header>
				</div>
			</Fade>
		);
	}
}

export default Header;
