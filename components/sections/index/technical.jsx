// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical Expertise"
					preTitle="Skills & Technologies"
					subTitle="I specialize in frontend development, backend engineering, and working with generative AI models (LLM & RAG) to build intelligent applications."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Passionate about Frontend Development"
							icon={['fat', 'browser']}
							copy="I love crafting responsive, user-friendly, and high-performance interfaces using modern frontend technologies like React, Next.js, and Tailwind CSS. My focus is on writing clean and maintainable code while ensuring an intuitive user experience."
							iconClass={about.icon}
							containerClass={about.container}
						/>

						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>

						<BadgesBlock 
							title="Backend & AI Engineering" 
							copy="I also have strong expertise in backend development, working with databases, APIs, and AI-driven applications using LLMs and RAG."
							list={backendAndAI} 
							block="backend-ai"
							fullContainer="fullContainer" 
							icon="database"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
		</Section>
	);
}

const tech = [
	{ key: 'react', name: 'React.js', type: 'devicon' },
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'nextjs', name: 'Next.js', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'tailwindcss', name: 'Tailwind CSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'palette', name: 'Shadcn UI', type: 'fas' },
	{ key: 'redux', name: 'Redux', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' }
];

const backendAndAI = [
	{ key: 'nodejs', name: 'Node.js', type: 'devicon' },
	{ key: 'server', name: 'Express.js', type: 'fas' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'cloud', name: 'REST APIs', type: 'fas' }, 
	{ key: 'socketio', name: 'WebSockets', type: 'devicon' }, 
	{ key: 'network-wired', name: 'Postman', type: 'fas' }, 
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'github', name: 'GitHub', type: 'devicon' },
	{ key: 'flask', name: 'Cypress', type: 'fas' }, 
	{ key: 'brain', name: 'Generative AI', type: 'fad' },
	{ key: 'robot', name: 'LLMs (Large Language Models)', type: 'fad' },
	{ key: 'database', name: 'Vector Databases (Pinecone)', type: 'fad' },
	{ key: 'brain-circuit', name: 'Retrieval-Augmented Generation (RAG)', type: 'fad' },
];


