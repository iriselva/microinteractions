import React, { useState } from "react";
import List from "../components/List";
import Book from "../components/Book";
import styled from "styled-components";
import PaperStyle from "../components/PaperStyle";
import Dropdown from "../components/Dropdown";
import Notification from "../components/Notification";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const RightContainer = styled.div`
  border-left: 1px solid #373737;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FrameItem = styled.div`
  border-bottom: 1px solid #373737;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default function Shop({ addToCart }) {
  const [notebook, setNotebook] = useState({ color: null, paper: null });
  const addColor = (color) => {
    setNotebook((current) => ({ ...current, color }));
  };

  const addPaper = (paper) => {
    setNotebook((current) => ({ ...current, paper }));
  };

  return (
    <ShopContainer>
      <LeftContainer>
        <Book color={notebook?.color?.value} />
        <Dropdown />
      </LeftContainer>
      <RightContainer>
        <FrameItem>
          <h3>Classic Notebook | 29$</h3>
        </FrameItem>
        <FrameItem>
          <h4>Choose color</h4>
          <div>
            <List addColor={addColor} notebook={notebook} />
          </div>
        </FrameItem>
        <FrameItem>
          <h4>Choose Paper style</h4>
          <div>
            <PaperStyle addPaper={addPaper} notebook={notebook} />
          </div>
        </FrameItem>
        <ButtonFrame>
          <Notification onClick={() => addToCart(notebook)} />
        </ButtonFrame>
      </RightContainer>
    </ShopContainer>
  );
}
