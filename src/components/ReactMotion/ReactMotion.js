import React, { useState } from "react";
import { Motion, spring } from "react-motion";

const ReactMotion = () => {
  // const [open, setOpen] = useState(false);

  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
      {(value) => <div>{value.x}</div>}
    </Motion>
  );
};

export default ReactMotion;
