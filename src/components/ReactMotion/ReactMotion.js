import React, { Fragment } from "react";
import SimpleTransition from "./SimpleTransition";
import Stepped from "./Stepped";

const renderExample = ({ title, component }, index) => {
  return (
    <Fragment key={index}>
      <p>{title}</p>
      {component()}
    </Fragment>
  );
};

const ReactMotion = () => {
  const examples = [
    {
      title: "Simple Transition",
      component: () => <SimpleTransition width={400} />,
    },
    { title: "Stepped Show", component: () => <Stepped /> },
  ];

  return <Fragment>{examples.map(renderExample)}</Fragment>;
};

export default ReactMotion;
