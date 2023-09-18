import React, {useState, useEffect} from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const ProgressBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once when the component comes into view
    threshold: 0.5, // Adjust this threshold as needed (0.5 means 50% of the component is visible)
  });

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let startValue = inView ? 0 : progressValue; // Adjust start value based on visibility
    const endValue = inView ? 40 : 0;
    const duration = 100; // Animation duration in milliseconds
    const increment = ((endValue - startValue) / duration) * 10; // Calculate the increment

    const interval = setInterval(() => {
      startValue = Math.min(startValue + increment, endValue);
      setProgressValue(startValue);

      if (
        (increment > 0 && startValue >= endValue) ||
        (increment < 0 && startValue <= endValue)
      ) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [inView]); // Run the effect whenever inView changes
  return (
    <div>
      <CircularProgress
        value={progressValue}
        size="120px"
        thickness="8px"
        className={inView ? "animate__animated animate__fadeInRight" : ""}
        ref={ref}
      >
        <CircularProgressLabel>
          {progressValue.toFixed(0)}%
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default ProgressBar;
