import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import "./Footer.css";

export default function Footer() {
	return (
		<Fade bottom duration={1000} distance="5px">
			<div className="footer-div">
				<p className="footer-text">{emoji("IcyTv ☘")}</p>
			</div>
		</Fade>
	);
}
