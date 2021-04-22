
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import React from 'react'

export default function List() {
    const [selected, setSelected] = useState(colors[0])

    return (
        <div className="container">
            <AnimateSharedLayout>
                <ul>
                    {colors.map(color => (
                        <Item 
                            key={color}
                            color={color}
                            isSelected={selected === color}
                            onClick={() => setSelected(color)}
                            />
                    ))}
                </ul>
            </AnimateSharedLayout>
            
        </div>
    )
}

function Item({ color, isSelected, onClick }) {
    return (
        <li
        className="item"
        onClick={onClick}
        style={{ backgroundColor: color}}
        >
            {isSelected && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{ borderColor: color}}
                    transition={{spring}}
                />
            )}
        </li>
    )
}

const colors = ['#E7BB7A', '#C2D1CE', '#BFAEA9', '#373737'];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};
