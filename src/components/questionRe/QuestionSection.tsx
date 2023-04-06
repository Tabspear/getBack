import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Question {
  id: number;
  text: string;
  answered: boolean;
  adminResponse?: string;
  adminAnswer?: string;
}

interface Props {
  questions: Question[];
}

const QuestionBoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 500px;
  overflow-y: scroll;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  margin: 0 0 10px;
`;

const AnswerForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AnswerInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-right: 10px;
`;

const AnswerButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2c3e50;
  }
`;

const QuestionForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const QuestionInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin-right: 10px;
`;

const QuestionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2c3e50;
  }
`;

const QuestionBoard: React.FC<Props> = ({ questions }) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [adminResponse, setAdminResponse] = useState<string>("");
  const [questionList, setQuestionList] = useState<Question[]>(questions);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestionList(JSON.parse(storedQuestions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questionList));
  }, [questionList]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newId =
      questionList.length > 0
        ? questionList[questionList.length - 1].id + 1
        : 1;

    const newQuestionObject: Question = {
      id: newId,
      text: newQuestion,
      answered: false,
    };

    setNewQuestion("");
    setQuestionList([...questionList, newQuestionObject]);
  };

  const handleAnswer = (
    event: React.FormEvent<HTMLFormElement>,
    questionId: number
  ) => {
    event.preventDefault();

    const questionIndex = questionList.findIndex((q) => q.id === questionId);

    if (questionIndex !== -1) {
      questionList[questionIndex].answered = true;
      questionList[questionIndex].adminResponse = adminResponse;
    }

    setAdminResponse("");
    setQuestionList([...questionList]);
  };

  return (
    <QuestionBoardContainer>
      <h2>Questions</h2>
      <QuestionList>
        {questionList.map((question) => (
          <li key={question.id}>
            <QuestionText>{question.text}</QuestionText>
            {question.answered ? (
              <div>
                <p>Answer: {question.adminResponse}</p>
              </div>
            ) : (
              <AnswerForm
                onSubmit={(event) => handleAnswer(event, question.id)}
              >
                <AnswerInput
                  type="text"
                  placeholder="Admin response"
                  value={adminResponse}
                  onChange={(event) => setAdminResponse(event.target.value)}
                />
                <AnswerButton type="submit">Submit</AnswerButton>
              </AnswerForm>
            )}
          </li>
        ))}
      </QuestionList>
      <QuestionForm onSubmit={handleSubmit}>
        <QuestionInput
          type="text"
          placeholder="Ask a question"
          value={newQuestion}
          onChange={(event) => setNewQuestion(event.target.value)}
        />
        <QuestionButton type="submit">Ask</QuestionButton>
      </QuestionForm>
    </QuestionBoardContainer>
  );
};

export default QuestionBoard;
