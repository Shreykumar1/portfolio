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
import about from '../../../styles/sections/index/about.module.scss';

import Experience from './Experience'; // Import the new Experience component

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Introduction"
					subTitle="I am an aspiring software developer, currently pursuing my Bachelor of Engineering in Artificial Intelligence and Machine Learning from the Bangalore College Of Engineering and Technology, graduating in 2025."
				/>
				<section className={about.content}>
					<Experience />
					<div className={about.copy} >
						<CopyBlock
							title="Technical Skills & Passion"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'code']}
							copy="With a strong foundation in software development, I am passionate about building scalable applications and continuously learning new technologies. My interests span across full-stack development, problem-solving, and crafting intuitive user experiences."
						/>
						<BadgesBlock
							title="Technical Skillset"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="tools"
							copy="I have hands-on experience with a range of technologies, including API development, database management, and frontend frameworks, allowing me to build complete and efficient applications."
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'server', name: 'Backend Development', type: 'fad' },
	{ key: 'database', name: 'Database Management', type: 'fad' },
	{ key: 'code', name: 'API Development', type: 'fad' },
	{ key: 'browser', name: 'Frontend Development', type: 'fad' },
	{ key: 'code-branch', name: 'Version Control (Git)', type: 'fad' },
	{ key: 'brain', name: 'Problem-Solving', type: 'fad' }
];