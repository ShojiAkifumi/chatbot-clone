import "./assets/styles/App.css";
import "./assets/styles/style.css";
import React, { useState, useEffect, useCallback } from "react";
import defaultDataset from "./dataset";
import { AnswersList, Chats, FormDialog } from "./components/index";

const App = () => {
	const [answers, setAnswers] = useState([]);
	const [chats, setChats] = useState([]);
	const [currentId, setCurrentId] = useState("init");
	const [dataset] = useState(defaultDataset);
	const [open, setOpen] = useState(false);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const addChats = (chat) => {
		setChats((prevChats) => {
			return [...prevChats, chat];
		});
	};

	const displayNextQuestion = (nextQuestionId, nextDataset) => {
		addChats({
			text: nextDataset.question,
			type: "question",
		});
		setAnswers(nextDataset.answers);
		setCurrentId(nextQuestionId);
	};
	const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
		switch (true) {
			case nextQuestionId === "contact":
				setOpen(true);
				break;

			case /^https:*/.test(nextQuestionId):
				const a = document.createElement("a");
				a.href = nextQuestionId;
				a.target = "_blank";
				a.click();
				break;
			default:
				addChats({
					text: selectedAnswer,
					type: "answer",
				});
				setTimeout(
					() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
					750
				);
				break;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		displayNextQuestion(currentId, dataset[currentId]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const scrollArea = document.getElementById("scroll-area");
		if (scrollArea) {
			scrollArea.scrollTop = scrollArea.scrollHeight;
		}
	});
	return (
		<section className="c-section">
			<div className="c-box">
				<Chats chats={chats} />
				<AnswersList answers={answers} select={selectAnswer} />
				<FormDialog isOpen={open} handleClose={handleClose} />
			</div>
		</section>
	);
};

export default App;
