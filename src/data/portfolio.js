import profileImage from "../assets/profile.png";
import metacxImage from "../assets/metacx.webp";
import learnImage from "../assets/learn.png";
import greenlightGuruImage from "../assets/gg.png";

export const profile = {
	name: "Jason Eggert",
	title: "Product Engineer",
	intro:
		"I turn product strategy, design, and engineering into software people actually use.",
	location: "Indiana, USA",
	email: "jeggert@jeggert.com",
	linkedin: "https://www.linkedin.com/in/jasoneggert/",
	github: "https://github.com/jasoneggert",
	image: profileImage,
};

export const about = [
	"I've worn a few different hats in my career: designer, software engineer, and product manager, and earned a Master's in Human-Computer Interaction along the way.",
	"I've been fortunate to work with talented teams, build meaningful software, and lead products that connect strategy, execution, and user needs.",
	"Outside of work I like reading, rebuilding 90s mountain bikes, and playing Minecraft with my sons Milo and Levi.",
];

export const highlights = [
	{
		label: "Focus",
		value: "Architecture, engineering, product, and UX",
	},
	{
		label: "Current",
		value: "Principal Full Stack Engineer @ spokenote",
	},
];

export const experience = [
	{
		company: "Spokenote",
		role: "Principal Software Engineer",
		period: "Sep 2025 - Present",
		summary:
			"Owns end-to-end product development for dynamic video applications, covering product definition, UX, architecture, implementation, launch, and iteration. Builds AI-powered workflows, retrieval-driven features, and AWS-based customer experiences with Next.js, React, and Node.js.",
		link: "",
		image: null,
		accent: "from-ink-1",
	},
	{
		company: "Everon",
		role: "Senior Full Stack Software Engineer",
		period: "Oct 2024 - Sep 2025",
		summary:
			"Designed and delivered a real-time video surveillance platform for secure multi-camera monitoring at scale, including streaming, storage, and analytics systems for high-throughput concurrent sessions on Microsoft Azure.",
		link: "",
		image: null,
		accent: "from-slate-1",
	},
	{
		company: "Veeva Systems",
		role: "Senior Product Manager",
		period: "Jun 2023 - Oct 2024",
		summary:
			"Led the evolution of an internal UI platform used across dozens of life sciences applications, introducing reusable UI business logic, improving accessibility and platform consistency, and increasing delivery speed in an AWS-oriented environment.",
		link: "",
		image: null,
		accent: "from-rose-1",
	},
	{
		company: "MetaCX",
		role: "Lead Frontend Engineer, Principal Product Manager",
		period: "Mar 2022 - Jun 2023",
		summary:
			"Introduced a rolling six-week release cadence, established more structured prioritization, and helped shape data storytelling and product direction for a GraphQL-based platform running on Google Cloud Platform.",
		link: "https://metacx.com/",
		image: metacxImage,
		accent: "from-orange-1",
	},
	{
		company: "MetaCX",
		role: "Senior Product Manager",
		period: "Dec 2021 - Mar 2022",
		summary:
			"Designed and delivered global app commenting with Loom integration and advanced data and network capabilities supporting enterprise and social-impact initiatives on a GraphQL product platform in GCP.",
		link: "https://metacx.com/",
		image: null,
		accent: "from-orange-2",
	},
	{
		company: "MetaCX",
		role: "Lead Front End Engineer",
		period: "Apr 2018 - Dec 2021",
		summary:
			"Led development of a complex event-driven application from inception through scale, defined UX strategy, built a design system with React, GraphQL, and Storybook, and drove broad GraphQL adoption for frontend development.",
		link: "https://metacx.com/",
		image: null,
		accent: "from-orange-3",
	},
	{
		company: "Blackboard",
		role: "Lead Designer / UI Developer",
		period: "Aug 2016 - Apr 2018",
		summary:
			"Improved the UX and mobile responsiveness of Blackboard Learn and contributed to a more cohesive experience across the broader product suite in AWS-based environments.",
		link: "https://www.anthology.com/en-emea/products/teaching-and-learning/learning-effectiveness/blackboard-learn",
		image: learnImage,
		accent: "from-blue-1",
	},
	{
		company: "Greenlight Guru",
		role: "Senior UX Developer",
		period: "Mar 2015 - Aug 2016",
		summary:
			"Designed and built complex UIs for products in the FDA medical device regulation space, supporting delivery in AWS-based environments.",
		link: "https://www.greenlight.guru/",
		image: greenlightGuruImage,
		accent: "from-green-1",
	},
	{
		company: "Fusion Alliance",
		role: "UX Consultant",
		period: "Apr 2014 - Mar 2015",
		summary:
			"Delivered UX and engineering solutions across insurance and life sciences clients, helping teams ship clearer experiences and stronger systems in AWS-oriented environments.",
		link: "",
		image: null,
		accent: "from-gold-1",
	},
	{
		company: "DiscountFilters.com",
		role: "User Interface / Conversion Rate Optimization Manager",
		period: "Dec 2012 - Apr 2014",
		summary:
			"Founded and led a UX and conversion optimization function, running experiments and product improvements that drove double-digit conversion gains in an AWS-based ecommerce environment.",
		link: "",
		image: null,
		accent: "from-aqua-1",
	},
];

export const personalProjects = [
	{
		name: "WalkthruIRL",
		summary:
			"A location-aware app that sends notifications when users are near specific coordinates, turning physical places into triggers for guided experiences and contextual prompts.",
		link: "",
		cta: "",
		accent: "from-aqua-1",
	},
	{
		name: "Gigscription",
		summary:
			"A subscription product for service providers on retainer or who just want to streamline revenue and chase fewer invoices.",
		link: "",
		cta: "",
		accent: "from-rose-1",
	},
	{
		name: "Handyman Now",
		summary:
			"A subscription-focused handyman services app and site built to make recurring home maintenance faster and easier, with direct customer relationships and simpler booking flows.",
		link: "https://www.handymannow.com/",
		cta: "Visit site",
		accent: "from-gold-1",
	},
	{
		name: "Superposition",
		summary:
			"A quantum computing simulator with interactive visualizations of quantum phenomena, listed on your GitHub portfolio site.",
		link: "https://jasoneggert.github.io/superposition/",
		cta: "View example",
		accent: "from-blue-1",
	},
	{
		name: "Dewarp",
		summary:
			"A WebGL tool that transforms fisheye lens images into standard rectilinear projections, listed on your GitHub portfolio site.",
		link: "https://jasoneggert.github.io/dewarp/",
		cta: "View example",
		accent: "from-orange-2",
	},
	{
		name: "Floorplan",
		summary:
			"A computer vision and WebGL project that transforms 2D floorplan drawings into 3D virtual spaces, listed on your GitHub portfolio site.",
		link: "https://jasoneggert.github.io/floorplan/",
		cta: "View example",
		accent: "from-green-1",
	},
];
