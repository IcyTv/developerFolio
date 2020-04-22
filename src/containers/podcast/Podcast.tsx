import React from "react";
import { Fade } from "react-reveal";
import { podcastSection } from "../../portfolio";
import "./Podcast.css";

export default function Podcast() {
	return (
		<Fade bottom duration={1000} distance="20px">
			<div className="main">
				<div className="podcast-header">
					<h1 className="podcast-header-title">
						{podcastSection.title}
					</h1>
					<p className="subTitle podcast-header-subtitle">
						{podcastSection.subtitle}
					</p>
				</div>
				<div className="podcast-main-div">
					{podcastSection.podcast.map((podcastLink) => {
						return (
							<div>
								<iframe
									className="podcast"
									title="podcast"
									src={podcastLink}
									//frameBorder="0"
									scrolling="no"
								></iframe>
							</div>
						);
					})}
				</div>
			</div>
		</Fade>
	);
}
