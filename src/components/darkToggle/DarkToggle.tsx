import "bootstrap/dist/css/bootstrap.min.css";
import kebabCase from "lodash/kebabCase";
import React, { Component, CSSProperties } from "react";
import emoji from "react-easy-emoji";
import { Helmet } from "react-helmet";
import { default as TextTransition, presets } from "react-text-transition";
import {
	default as ToggleSwitch,
	SwitchEvent,
} from "../toggleSwitch/ToggleSwitch";
import "./DarkToggle.scss";

const getHelmetBodyStyleAttributeValue = (style) => {
	if (typeof window === "undefined") {
		return style;
	}
	return Object.keys(style)
		.map((key) => `${kebabCase(key)}: ${style[key]}`)
		.join(";");
};

interface DarkToggleProps {
	[prop: string]: string;
}

interface DarkToggleState {
	enabled: boolean;
}

export default class DarkToggle extends Component<
	DarkToggleProps,
	DarkToggleState
> {
	constructor(props: Readonly<DarkToggleProps>) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { enabled: true };
	}

	render() {
		let css: CSSProperties = {
			backgroundColor:
				(this.state.enabled ? "#2c2f31" : "#ffffff") + " !important",
			transition: "all 0.4s 0.3s ease-out",
			color: this.state.enabled ? "#ffffff" : "#2c2f31",
		};
		return [
			<Helmet>
				<body style={getHelmetBodyStyleAttributeValue(css)}></body>
			</Helmet>,
			<div className="dark-group">
				<label htmlFor="#dark-toggle" id="dark-label">
					<TextTransition
						text={this.state.enabled ? "Light Mode" : "Dark Mode"}
						springConfig={presets.wobbly}
						inline={true}
						style={{ width: "6em" }}
					/>
					{emoji(" ➡")}
				</label>
				<ToggleSwitch
					theme="dark-inverse"
					enabled={this.state.enabled}
					onStateChanged={this.handleChange}
					role="switch"
					aria-checked="true"
					aria-labelledby="#dark-label"
					{...this.props}
				/>
			</div>,
		];
	}

	handleChange(ev: SwitchEvent) {
		console.log(ev.SWITCH_STATE);
		this.setState({ enabled: ev.SWITCH_STATE.enabled });
	}
}
