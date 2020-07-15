import React, { useState, Fragment } from "react";
import { Motion, spring } from "react-motion";

const SimpleTransition = ({ width }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <div
        style={{
          height: 30,
          width: width,
          position: "relative",
          backgroundColor: "rgb(240, 240, 232)",
        }}
      >
        <Motion style={{ x: spring(open ? width - 30 : 0) }}>
          {({ x }) => (
            // children is a callback which should accept the current value of
            // `style`
            <div
              style={{
                left: `${x}px`,
                position: "absolute",
                height: 30,
                width: 30,
                backgroundColor: "yellow",
              }}
            />
          )}
        </Motion>
      </div>
    </Fragment>
  );
};

export default SimpleTransition;
