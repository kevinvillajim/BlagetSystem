import { useEffect, useState } from "react";

const ScrollProgress = ({ scrollContainerRef, unit }) => {
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
  }, [top, unit]);

  useEffect(() => {
    if (isQuizCompleted() && top >= 95) {
      setCompletion(100);
      setTop(100);
      localStorage.setItem(`Unidad${unit}`, "100");
    }
  }, [top, isQuizCompleted(), unit]);

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
