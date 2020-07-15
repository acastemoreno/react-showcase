import React, { Fragment } from "react";
import { StaggeredMotion, spring } from "react-motion";

const Stepped = () => {
  const elements = [
    { h: 0, c: "red" },
    { h: 0, c: "blue" },
    { h: 0, c: "green" },
  ];

  return (
    <Fragment>
      <StaggeredMotion
        defaultStyles={elements.map(({ h, c }) => {
          return {
            h: h,
          };
        })}
        styles={(prevInterpolatedStyles) =>
          prevInterpolatedStyles.map((el, i) => {
            return i === 0
              ? { h: spring(100) }
              : { h: spring(prevInterpolatedStyles[i - 1].h) };
          })
        }
      >
        {(interpolatingStyles) => (
          <div>
            {interpolatingStyles.map((style, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${elements[i].c}`,
                  height: style.h,
                  backgroundColor: elements[i].c,
                }}
              />
            ))}
          </div>
        )}
      </StaggeredMotion>
    </Fragment>
  );
};

export default Stepped;
