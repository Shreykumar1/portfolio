import Image from 'next/image'

import { useEffect, useState } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, github, descriptionTitle,description, stack, imageOptions, images } = content;

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

	const [windowWidth, setWindowWidth] = useState(0); 

    useEffect(() => {
        // Set the initial window width after the component mounts
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Update state on resize
        };

        window.addEventListener('resize', handleResize); // Add event listener
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, []);

	return (
		<m.section 	
			key={index}
			className={css.project} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls} >
			
			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3>
						<a href={github} target="_blank" rel="noopener noreferrer"><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span></a>	
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					<m.div variants={''} className={css.viewProject}>
						<a href={url} target="_blank" rel="noopener noreferrer"><Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} /></a>
					</m.div>
				</div>
			</div>

			<div className={css.imageContainer} style={{ overflow: 'hidden', maxHeight: '600px' }}>
                <span>
                    {/* Show only one image if the screen width is less than 500px */}
                    {windowWidth < 500 ? (
                        <m.div style={{ paddingTop: "30px" }} key={`0-${images[0].key}`} variants={item}>
                            <m.div variants={hoverLeft}>
                                <img src={images[0].url} alt="x" width={600} style={{ maxHeight: '100%', objectFit: 'contain' }} />
                            </m.div>
                        </m.div>
                    ) : (
                        images.map(({ key, url, hover, h, w }, index) => {
                            hover = (hover === 'left') ? hoverLeft : hoverRight;
                            return (
                                <m.div style={{ paddingTop: `${index === 0 ? "30px" : "0px"}` }} key={`${index}-${key}`} variants={item}>
                                    <m.div variants={hover}>
                                        <img src={url} alt="x" width={600} style={{ maxHeight: '100%', objectFit: 'contain' }} />
                                    </m.div>
                                </m.div>
                            );
                        })
                    )}
                </span>
            </div>
		</m.section>
	)
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}

