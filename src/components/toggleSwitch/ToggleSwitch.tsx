import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import { isFunction, isString } from "lodash";
import React, { Component, MouseEvent } from "react";
import "./ToggleSwitch.scss";

export interface SwitchEvent extends MouseEvent {
	SWITCH_STATE: Readonly<any>;
}

export interface ToggleSwitchProps {
	theme?: "default" | "dark" | "dark-inverse" | "graphite-small";
	className?: string;
	enabled?: boolean | (() => boolean);
	onStateChanged?: (ev: SwitchEvent) => void;
	onClick?: (ev: SwitchEvent) => void;
	[restArgs: string]: any;
}

export default class ToggleSwitch extends Component<ToggleSwitchProps, any> {
	constructor(props: Readonly<ToggleSwitchProps>) {
		super(props);
		this.state = { enabled: this.enabledFromProps() };
	}

	enabledFromProps() {
		let { enabled } = this.props;
		return isFunction(enabled) ? enabled() : enabled;
	}

	toggleSwitch = (evt: MouseEvent) => {
		evt.persist();
		evt.preventDefault();

		const { onClick, onStateChanged } = this.props;

		this.setState({ enabled: !this.state.enabled }, () => {
			const state = this.state;
			const switchEvent = Object.assign(evt, {
				SWITCH_STATE: state,
			});

			isFunction(onClick) && onClick(switchEvent);
			isFunction(onStateChanged) && onStateChanged(switchEvent);
		});
	};

	render() {
		const { enabled } = this.state;

		const {
			enabled: _enabled,
			theme,
			onClick,
			className,
			onStateChanged,
			...restProps
		} = this.props;

		const switchTheme = theme && isString(theme) ? theme : "default";

		const switchClasses = classnames(
			`switch switch--${switchTheme}`,
			className
		);

		const togglerClasses = classnames(
			"switch-toggle",
			`switch-toggle--${enabled ? "on" : "off"}`
		);

		return (
			<div
				className={switchClasses}
				onClick={this.toggleSwitch}
				{...restProps}
			>
				<div className={togglerClasses}></div>
			</div>
		);
	}
}
