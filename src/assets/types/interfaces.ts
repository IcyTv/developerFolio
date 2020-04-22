import { IconifyIcon } from "@iconify/types";

export interface Greeting {
	title: string;
	subTitle: string;
	resumeLink: string;
}

export interface SocialMediaLinks {
	github?: string;
	linkedin?: string;
	gmail?: string;
	gitlab?: string;
	facebook?: string;
}

export interface Skills {
	title: string;
	subTitle: string;
	skills: string[];
	softwareSkills: {
		skillName: string;
		icon: IconifyIcon;
		color?: string;
		href?: string;
	}[];
}
