import React from "react";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

export default function socialMedia() {
	let ret = (
		<div className="social-media-div">
			{socialMediaLinks.github !== undefined ? (
				<a
					href={socialMediaLinks.github}
					className="icon-button github"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github"></i>
					<span></span>
				</a>
			) : null}
			{socialMediaLinks.linkedin !== undefined ? (
				<a
					href={socialMediaLinks.linkedin}
					className="icon-button linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin"></i>
					<span></span>
				</a>
			) : null}
			{socialMediaLinks.gmail !== undefined ? (
				<a
					href={socialMediaLinks.gmail}
					className="icon-button gmail"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-gmail"></i>
					<span></span>
				</a>
			) : null}
			{socialMediaLinks.gitlab !== undefined ? (
				<a
					href={socialMediaLinks.gitlab}
					className="icon-button gitlab"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-gitlab"></i>
					<span></span>
				</a>
			) : null}
			{socialMediaLinks.facebook !== undefined ? (
				<a
					href={socialMediaLinks.facebook}
					className="icon-button facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-facebook"></i>
					<span></span>
				</a>
			) : null}
		</div>
	);
	return ret;
}
