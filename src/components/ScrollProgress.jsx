import { useEffect, useState } from "react";

const ScrollProgress = ({ scrollContainerRef }) => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const scrollHeight =
          scrollContainerRef.current.scrollHeight -
          scrollContainerRef.current.clientHeight;
        const totalScroll = (scrollTop / scrollHeight) * 100;
        console.log(totalScroll);
        setCompletion(totalScroll);
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
  }, [scrollContainerRef]);

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
