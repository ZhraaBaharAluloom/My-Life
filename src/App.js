import React from "react";
import  { ThemeProvider } from "styled-components";
import {
  Title,
  LifeImage,
  GlobalStyle,
} from "./styles";
import EventList from "./components/EventList";

const theme = {
  backgroundColor: "#f5f5f5",
  mainColor: "#07031a",
  purple: "#584153",
};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Title>Welcome to Zahraa's Life</Title>
        <LifeImage
          src="https://cdn.nohat.cc/thumb/f/720/fa02ee572cb548d287a2.jpg"
          alt=""
        />
        <div>
          <EventList />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
