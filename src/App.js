import { useEffect, useState } from "react";
import "@fontsource/roboto";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "./App.css";
import Slide from "./components/Slide";
import Thumblins from "./components/Thumblins";
import { data } from "./components/catalouge";
import TextDescription from "./components/TextDescription";
import { PauseCircleFilled, PlayCircleFilled } from "@material-ui/icons";
import Card from "./components/UI/Card";

const catalouge = data;

function App() {
  const [index, setIndex] = useState(0);
  const [mainDisplay, setMainDisplay] = useState(catalouge[index]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setMainDisplay(catalouge[index]);
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setIndex((prev) => {
          console.log(prev);
          if (prev === catalouge.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, index]);

  // useEffect(() => {
  //   setMainDisplay(catalouge[index]);
  //   const interval = setInterval(() => {
  //     onRightClick();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [index]);

  const onPlay = () => {
    console.log("play clicked");
    setIsActive((prev) => !prev);
    setIsActive(true);
  };

  const onPause = () => {
    console.log("pause clicked");
    setIsActive((prev) => !prev);
    setIsActive(false);
  };

  const onRightClick = () => {
    setIsActive(false);
    setIndex((prev) => {
      console.log(prev);
      if (prev === catalouge.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const onLeftClick = () => {
    setIsActive(false);
    setIndex((prev) => {
      console.log(prev);
      if (prev === 0) {
        return catalouge.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <Card className="App">
      <div className="item item1">
        <Slide mainDisplay={mainDisplay} />
      </div>
      <div className="item item2">
        <TextDescription mainDisplay={mainDisplay} />
      </div>
      <div className="item item3 Thumlin">
        <ArrowLeftIcon onClick={onLeftClick} className="arrow" />
        <Thumblins catalouge={catalouge} mainDisplay={mainDisplay} />
        <ArrowRightIcon onClick={onRightClick} className="arrow" />
      </div>
      <div className="item item4">
        {isActive ? (
          <PauseCircleFilled onClick={onPause} />
        ) : (
          <PlayCircleFilled onClick={onPlay} />
        )}
      </div>
    </Card>
  );
}

export default App;
