import { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import cursos from "./cursos";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#00ff00", // Color verde para botones y radios
    },
  },
});

const Quiz = ({ questions }) => {
  const initialAnswers = questions.map(() => null);
  const [answers, setAnswers] = useState(initialAnswers);
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer - 1) {
        score += 1;
      }
    });
    setScore(score);
    if (score === questions.length) {
      localStorage.setItem("unit1", "true");
    } //Cambiar por algo mas
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        p={4}
        sx={{ color: "white" }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Cuestionario sobre Protección de Datos Personales
        </Typography>
        {questions.map((question, index) => (
          <Box
            key={index}
            mb={4}
          >
            <Typography variant="h6">{question.question}</Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name={`question-${index}`}
                value={answers[index]}
                onChange={(e) =>
                  handleAnswerChange(index, parseInt(e.target.value))
                }
              >
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={<Radio sx={{ color: "white" }} />}
                    label={
                      <Typography sx={{ color: "white" }}>{option}</Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
        {score !== null && (
          <Typography
            variant="h6"
            mt={4}
          >
            Tu puntuación: {score} / {questions.length}
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Quiz;
