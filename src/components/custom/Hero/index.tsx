import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Skills from "./Skills"
import Memoji from "./Memoji"
import Socials from "./Socials"

function Hero() {
    let titleAnimation = {
        start: {
            opacity: 0,
            y: -100
        },
        end: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 1,
        }
    }

    let copyAnimation = {
        start: {
            x: -1000
        },
        end: {
            x: 0
        },
        transition: {
            //type: "spring",
            duration: 0.5,
        }
    }

    let buttonsAnimation = {
        start: {
            scale: 0
        },
        end: {
            scale: 1
        },
        transition: {
            type: "spring",
            duration: 1,
        }
    }

    return (
        <div className="flex w-full justify-center py-16">
            <div className="flex gap-36">
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-5 max-w-lg">
                        <motion.h1 
                            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
                            animate={titleAnimation.end}
                            initial={titleAnimation.start}
                            transition={titleAnimation.transition}
                        >
                            Multi-Platform 
                            <br />
                            Mobile Developer
                        </motion.h1>
                        <motion.ul 
                            className="ml-6 list-disc [&>li]:mt-2"
                            animate={copyAnimation.end}
                            initial={copyAnimation.start}
                            transition={copyAnimation.transition}
                        >
                            <li>8-year development journey</li>
                            <li>1st level of puns: 5 gold coins</li>
                            <li>2nd level of jokes: 10 gold coins</li>
                            <li>3rd level of one-liners : 20 gold coins</li>
                        </motion.ul>
                    </div>
                    <div className="flex flex-col max-w-xs items-center gap-8">
                        <Skills />
                        <div className="flex flex-col gap-y-4 max-w-xs w-full">
                            <motion.div
                                animate={buttonsAnimation.end}
                                initial={buttonsAnimation.start}
                                transition={buttonsAnimation.transition}
                            >
                                <Button variant="outline" className="w-full">
                                    Contact Me
                                </Button>
                            </motion.div>
                            
                            <motion.div
                                animate={buttonsAnimation.end}
                                initial={buttonsAnimation.start}
                                transition={buttonsAnimation.transition}
                            >
                                <Button className="w-full">
                                    See My Work
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    
                </div>
                <div className="flex flex-col justify-between items-center w-fit">
                    <Memoji />
                    <Socials />
                </div>
                </div>
        </div>
        
    )
}

export default Hero