/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const ScrollProgress = ({scrollContainerRef, unit, course}) => {
	const [completion, setCompletion] = useState(0);
	const [top, setTop] = useState(() => {
		const savedTop = localStorage.getItem(`Course${course}Unidad${unit}`);
		return savedTop ? parseInt(savedTop, 10) : 0;
	});

	const isQuizCompleted = () => {
		return localStorage.getItem(`Course${course}Quiz${unit}`) === "true";
	};

	const userId = JSON.parse(localStorage.getItem("user")).id;
	const token = localStorage.getItem("token");

	const saveProgress = async (progress) => {
		try {
			await axios.post(
				"http://127.0.0.1:8000/api/progress/upsert",
				{
					user_id: userId,
					course_id: course,
					unit_id: unit,
					progress: progress / 100,
					completed: isQuizCompleted(),
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		} catch (error) {
			console.error("Error saving progress:", error);
		}
	};

	const debouncedSaveProgress = debounce(saveProgress, 1000);

	useEffect(() => {
		const updateScrollCompletion = () => {
			if (scrollContainerRef.current) {
				const scrollTop = scrollContainerRef.current.scrollTop;
				const scrollHeight =
					scrollContainerRef.current.scrollHeight -
					scrollContainerRef.current.clientHeight;
				let totalScroll = (scrollTop / scrollHeight) * 100;

				// Adjust to 100% if quiz is completed
				if (isQuizCompleted()) {
					totalScroll = 100;
				} else if (totalScroll >= 95) {
					totalScroll = 95;
				}

				setCompletion(totalScroll);

				// Update top and localStorage if scrolled beyond current top
				if (totalScroll > top) {
					setTop(totalScroll);
					localStorage.setItem(
						`Course${course}Unidad${unit}`,
						Math.floor(totalScroll).toString()
					);
					// Send progress to server only if it hits 25, 50, 75, or 95
					if ([25, 50, 75, 95].includes(Math.floor(totalScroll))) {
						debouncedSaveProgress(totalScroll);
					}
				}
			}
		};

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("scroll", updateScrollCompletion);
		}

		return () => {
			if (container) {
				container.removeEventListener("scroll", updateScrollCompletion);
			}
		};
	}, [scrollContainerRef, top, unit, course]);

	useEffect(() => {
		// Update top and localStorage to 100 when quiz is completed and scrolled beyond 95%
		if (
			isQuizCompleted() &&
			top < 100 &&
			parseInt(localStorage.getItem(`Course${course}Unidad${unit}`), 10) >= 95
		) {
			setTop(100);
			localStorage.setItem(`Course${course}Unidad${unit}`, "100");
		}
	}, [completion, isQuizCompleted, top, course, unit]);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: `${completion}%`,
				height: "5px",
				backgroundColor: "green",
			}}
		/>
	);
};

export default ScrollProgress;
