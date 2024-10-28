import TimelineOne from "./TimelineOne";
import TimelineTwo from "./TimelineTwo";
import TimelineThree from "./TimelineThree";
import Heading from "@/components/Heading";

const TimelinePage = () => { 
    
  return (
    <>
        <Heading text={"TIMELINE"} />
        <TimelineOne />
        <TimelineTwo />
        <TimelineThree />
    </>
  );
};

export default TimelinePage;
