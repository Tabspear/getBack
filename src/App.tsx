import React from "react";
import Form from "./components/forms/Form";
import Header from "./components/header/Header";
import HeroSlide from "./components/heroslide/HeroSlide";
import { GlobalStyle } from "./styles/GlobalStyle";
import QuestionBoard from "./components/questionRe/QuestionSection";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HeroSlide />
      <Form />
      <QuestionBoard questions={[]} />
    </div>
  );
};

export default App;
