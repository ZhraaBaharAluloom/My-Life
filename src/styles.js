import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
`;
const LifeImage = styled.img`
  display: block;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 55em;
  height: 500px;
  border: 10px solid ${(props) => props.theme.purple};
  margin-bottom: 10px;
`;
const LifeListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 4px solid ${(props) => props.theme.purple};
  width: 50%;
  padding: 50px;
  margin: auto;
  display: block;
`;
const ArowUpWrapper = styled.div`
    width: "3", 
    height: "3", 
    border-left: "20px solid transparent",
    border-right: "20px solid transparent",
    border-top: "20px solid ",
    `;
const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.mainColor};
      font-size: large;
    }
`;

const styles = {
  arrowBottom: {
    width: "0",
    height: "0",
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderTop: "20px solid black",
    alignContent: "center",
    alignItem: "center",
    margin: "10px auto",
  },
};
export default styles;
export { Title, LifeImage, LifeListWrapper, ArowUpWrapper, GlobalStyle };
