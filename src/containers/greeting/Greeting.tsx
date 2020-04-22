﻿import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import "./Greeting.css";

export default function Greeting() {
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<div>
							<h1 className="greeting-text">
								{" "}
								{greeting.title}{" "}
								<span className="wave-emoji">
									{emoji("👋")}
								</span>
							</h1>
							<p className="greeting-text-p subTitle">
								{(() => {
									let n = [];
									for (let i of greeting.subTitle.split(
										"\n"
									)) {
										console.log(i);
										n = n.concat([emoji(i), "<br />"]);
									}
									return n;
								})()}
							</p>
							<SocialMedia />
							<div className="button-greeting-div">
								<Button
									text="Contact me"
									href="#contact"
									className=""
									newTab={false}
								/>
								<Button
									text="See my resume"
									newTab={true}
									href={greeting.resumeLink}
									className=""
								/>
							</div>
						</div>
					</div>
					<div className="greeting-image-div">
						<img
							alt="saad sitting on table"
							src={require("../../assets/images/manOnTable.svg")}
						></img>
					</div>
				</div>
			</div>
		</Fade>
	);
}
