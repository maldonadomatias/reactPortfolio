import React from "react";
import "./Background.css";

const Background = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 599;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <div className="background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        {/* <div className="stars4"></div>
        <div className="stars5"></div>
        <div className="stars6"></div> */}
        <div className="title"></div>
      </div>
    );
  }

  return (
    <div className="background">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="stars4"></div>
      <div className="stars5"></div>
      <div className="stars6"></div>
      <div className="title"></div>
    </div>
  );
};

export default Background;
