/* eslint-disable react/prop-types */
import {useState} from "react";
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
	Modal,
} from "@mui/material";
import cursos from "./cursos.js";
import ConfettiComponent from "./Confetti";

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

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const Quiz = ({questions, unit, course}) => {
	const initialAnswers = questions.map(() => null);
	const [answers, setAnswers] = useState(initialAnswers);
	const [score, setScore] = useState(null);
	const [open, setOpen] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleAnswerChange = (questionIndex, optionIndex) => {
		setAnswers({...answers, [questionIndex]: optionIndex});
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
			localStorage.setItem(`Course${course}Quiz${unit}`, "true");
			setShowConfetti(true);
		}
	};

	const getNextLink = () => {
		if (unit === cursos[0].units.length) {
			return "/estudiante/dashboard";
		} else {
			return cursos[0].units[unit]?.url || "/";
		}
	};

	const handleComplete = (unit) => {
		localStorage.setItem(`Course${course}Unidad${unit}`, "100");
	};

	return (
		<div className="my-[5rem] bg-gray-800 px-[5rem]">
			{showConfetti && <ConfettiComponent />}
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box p={4} sx={{color: "white"}}>
					<Typography variant="h4" gutterBottom>
						Cuestionario sobre Protección de Datos Personales
					</Typography>
					{questions.map((question, index) => (
						<Box key={index} mb={4}>
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
											control={<Radio sx={{color: "white"}} />}
											label={
												<Typography sx={{color: "white"}}>{option}</Typography>
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
						onClick={() => {
							handleSubmit();
							handleOpen();
						}}
					>
						Enviar
					</Button>
					{score !== null && score == questions.length && (
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={style}>
								<Typography id="modal-modal-title" variant="h6" component="h2">
									Felicidades tu puntuación es: {score} / {questions.length}
									{unit === cursos[0].units.length &&
										localStorage.getItem("isFinished") === "true" && (
											<>{" Has completado el curso con éxito"}</>
										)}
								</Typography>
								<div className="flex justify-center mt-[2rem]">
									<Button
										variant="contained"
										color="primary"
										onClick={() => {
											handleComplete(unit);
											handleSubmit();
											setShowConfetti(false);
										}}
										href={getNextLink()}
									>
										{unit == cursos[0].units.length
											? "Regresar al Dashboard"
											: "Continuar"}
									</Button>
								</div>
							</Box>
						</Modal>
					)}
					{score !== null && (
						<Typography variant="h6" mt={4}>
							Tu puntuación: {score} / {questions.length}
						</Typography>
					)}
				</Box>
			</ThemeProvider>
		</div>
	);
};

export default Quiz;
