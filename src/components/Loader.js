import { motion } from 'framer-motion';

const loaderVariants= {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                easing: 'easeOut'
            },
        }
    }
}

const Loader = () => {

    return(
        <> 
        <div className="container">
        <p>Loader</p> 
        <motion.div className="loader"
            variants={loaderVariants}
            animate="animationOne"
        >
        </motion.div>
        </div>
        </>
    )
}

export default Loader;