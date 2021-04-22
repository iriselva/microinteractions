import React, { useState } from 'react'
import { motion, useCycle } from "framer-motion";

const variants = {
    open: {
        opacity: 1, 
        x:0,
        transition: {
        }
    },
    closed: {opacity: 1, x: "-100"}
}

function Hamburger({toggle}){
    return (
        <motion.div 
        onClick={toggle}
        className="hamburger"
        variants={variants}
        whileHover= {{
            scale: 1.2,
            transition: { duration: 0.5 }
        }}
        >
            <motion.div className="line"
                variants={{open: {y:10}, closed:{y:1}}}
            />
            <div className="line"/>
            <motion.div className="line"
                variants={{open: {y:-10}, closed:{y:1}}}
            />
        </motion.div>
    )
}

export default function Menu() {
    const [isOpen, setIsOpen] = useCycle(false, true)
    console.log(isOpen);

    return (
        <motion.div className="container"         
            animate={isOpen ? "open" : "closed"}
        >
            <Hamburger toggle={() => setIsOpen()} />       
            <motion.div 
                initial={false}
                variants={
                    {open:{scale: 1, transition:{duration: 0.8}}, 
                    closed: {scale: 0, transition:{duration: 0.5}}}}
                >
                    <ul className="navbar">
                        <motion.li
                            whileHover={{backgroundColor: "#E7BB7A"}}
                        >One</motion.li>
                        <motion.li
                            whileHover={{backgroundColor: "#E7BB7A"}}
                        >Two</motion.li>
                        <motion.li
                            whileHover={{backgroundColor: "#E7BB7A"}}
                        >Three</motion.li>
    
                    </ul>
            </motion.div>
        </motion.div>
    )
}
