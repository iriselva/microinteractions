import React, { useState } from "react";
import styled from "styled-components";
import Blank from "../images/Blank.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../components/List"
import Book from "../components/Book"


const HomeContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const IntroText = styled.div`
  position: absolute;
  left: -50px;
  top: -50px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  right: -60px;
  bottom: -60px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
`;

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: 10,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  const [bookColorIndex, setBookColorIndex] = useState(0);
  const setNextColor = (change) => {
    let newIndex = bookColorIndex + change
    if (newIndex < 0) {
      setBookColorIndex(colors.length - 1)
    } else if (newIndex > colors.length -1) {
      setBookColorIndex(0)
    } else {
      setBookColorIndex(newIndex)
    }
  }

  return (
    <HomeContainer
      variants={containerVariants}
      initail="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={Blank} alt={Blank} />
      <IntroText>
        <h2>Notebooks</h2>
        <p>Discover your new favorite notebook in four different styles</p>
        <div>
          <Link to="/shop">
            <motion.button variants={buttonVariants} whileHover="hover">
              Order now!
            </motion.button>
          </Link>
        </div>
      </IntroText>

      <ImageContainer>
        <p
        onClick={() => setNextColor(-1)}
        >◀</p>
        <Book 
        height={300}
        color={colors[bookColorIndex]?.value}
        />
        <p onClick={() => setNextColor(1)}>▶</p>
      </ImageContainer>
    </HomeContainer>
  );
}
