import { InlineIcon } from "@iconify/react";
import React from "react";
import Tooltip from "react-simple-tooltip";
import { skillsSection } from "../../portfolio";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
	return (
		<div key="skills">
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{skillsSection.softwareSkills.map((skills) => {
						return (
							<li className="software-skill-inline">
								<Tooltip
									content={skills.skillName}
									fontSize="15px"
									placement="bottom"
									padding={3}
									fadeDuration={2}
								>
									<a href={skills.href}>
										<InlineIcon
											icon={skills.icon}
											color={skills.color}
										/>
									</a>
								</Tooltip>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
