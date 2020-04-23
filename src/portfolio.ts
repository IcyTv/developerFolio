/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import css3Icon from "@iconify/icons-fa-brands/css3";
import html5 from "@iconify/icons-fa/html5";
import databaseIcon from "@iconify/icons-feather/database";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import javaicon from "@iconify/icons-logos/java";
import javascriptIcon from "@iconify/icons-logos/javascript";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import pythonIcon from "@iconify/icons-logos/python";
import emoji from "react-easy-emoji";
import { Greeting, Skills, SocialMediaLinks } from "./assets/types/interfaces";

const greeting: Greeting = {
	/* Your Summary And Greeting Section */
	title: "Hi, I'm Michael",
	subTitle:
		"A passionate Full Stack Software Developer 🚀\n with experience in Java, JavaScript, Python, C++",
	resumeLink: "https://icytv.de/resume",
};

// Your Social Media Link

const socialMediaLinks: SocialMediaLinks = {
	github: "https://github.com/IcyTv",
	gmail: "michael.finger@icytv.de",
	gitlab: "https://git.icytv.de",
};

// Your Skills Section

const skillsSection: Skills = {
	title: "What i do",
	subTitle: "A bit of everything",
	skills: [
		// emoji(
		// 	"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		// ),
		// emoji(
		// 	"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		// ),
		// emoji(
		// 	"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		// ),
	],

	/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "Java",
			icon: javaicon,
		},
		{
			skillName: "Html5",
			icon: html5,
			color: "#F16529",
		},
		{
			skillName: "Css3",
			icon: css3Icon,
			color: "#264de4",
		},
		{
			skillName: "JavaScript",
			icon: javascriptIcon,
		},
		{
			skillName: "NodeJs",
			icon: nodejsIcon,
		},
		{
			skillName: "SQL",
			icon: databaseIcon,
			color: "purple",
		},
		{
			skillName: "Python",
			icon: pythonIcon,
		},
		{
			skillName: "Docker",
			icon: dockerIcon,
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend/Design", //Insert stack or technology you have experience in
			progressPercentage: "50%", //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "80%",
		},
		{
			Stack: "Programming",
			progressPercentage: "90%",
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: "IcyTv",
};

// Some Big Projects You have worked with your company

const bigProjects = {
	title: "Big Projects",
	subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
	projects: [
		{
			image:
				"https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
			link: "http://saayahealth.com/",
		},
		{
			image:
				"https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
			link: "http://nextu.se/",
		},
	],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

	achivementsCards: [
		{
			title: "Google Code-In Finalist",
			description:
				"First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
			image:
				"https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
			footerLink: [
				{
					name: "Certification",
					url:
						"https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
				},
				{
					name: "Award Letter",
					url:
						"https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
				},
				{
					name: "Google Code-in Blog",
					url:
						"https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
				},
			],
		},
		{
			title: "Google Assistant Action",
			description:
				"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
			footerLink: [
				{
					name: "View Google Assistant Action",
					url:
						"https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
				},
			],
		},

		{
			title: "PWA Web App Developer",
			description:
				"Completed Certifcation from SMIT for PWA Web App Development",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
			footerLink: [
				{ name: "Certification", url: "" },
				{
					name: "Final Project",
					url: "https://pakistan-olx-1.firebaseapp.com/",
				},
			],
		},
	],
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff. i love to write and teach others what i have learned",

	blogs: [
		{
			url:
				"https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title:
				"Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min.",
			image: "",
		},
		{
			url:
				"https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT Is The Best?",
			description:
				"React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies.",
			image: "",
		},
	],
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [
		{
			title: "Build Actions For Google Assistant",
			subtitle: "Codelab at GDG DevFest Karachi 2019",
			slides_url: "https://bit.ly/saadpasta-slides",
			event_url: "https://www.facebook.com/events/2339906106275053/",
			image:
				"https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C",
		},
	],
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
	],
};

const contactInfo = {
	title: emoji("Contact Me 📧"),
	subtitle: "",
	number: undefined,
	email_address: "michael.finger@icytv.de",
};

//Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
	greeting,
	socialMediaLinks,
	skillsSection,
	techStack,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
};
