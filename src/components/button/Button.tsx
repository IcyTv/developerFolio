import React from "react";
import "./Button.css";

export default function Button({
	text,
	className,
	href,
	newTab,
}: {
	text: string;
	className: string;
	href: string;
	newTab?: string;
}) {
	return (
		<div className={className}>
			<a className="main-button" href={href} target={newTab || "_blank"}>
				{text}
			</a>
		</div>
	);
}
