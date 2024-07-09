/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

const ScrollProgress = ({scrollContainerRef, unit}) => {
	const [completion, setCompletion] = useState(0);
	const [top, setTop] = useState(() => {
		const savedTop = localStorage.getItem(`Unidad${unit}`);
		return savedTop ? parseInt(savedTop, 10) : 0;
	});

	const isQuizCompleted = () => {
		return localStorage.getItem(`Quiz${unit}`) === "true";
	};

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
						`Unidad${unit}`,
						Math.floor(totalScroll).toString()
					);
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
	}, [scrollContainerRef, top, unit, isQuizCompleted]);

	useEffect(() => {
		// Update top and localStorage to 100 when quiz is completed and scrolled beyond 95%
		if (
			isQuizCompleted() &&
			top < 100 &&
			parseInt(localStorage.getItem(`Unidad${unit}`), 10) >= 95
		) {
			setTop(100);
			localStorage.setItem(`Unidad${unit}`, "100");
		}
	}, [completion, isQuizCompleted, top, unit]);

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
