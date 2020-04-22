import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import "./Footer.css";

export default function Footer() {
	return (
		<Fade bottom duration={1000} distance="5px">
			<div className="footer-div">
				<p className="footer-text">{emoji("IcyTv ☘")}</p>
				{/* <div className="footer-text small">
					Some icons were made by{" "}
					<a
						href="https://www.flaticon.com/authors/freepik"
						title="Freepik"
					>
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div> */}
			</div>
		</Fade>
	);
}
