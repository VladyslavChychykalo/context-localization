import React from "react";
// import Reader from "../Reader";
import withReaderContext from "../../../hoc/withReaderContext";
const Counter = ({ currentIdx, totalPublications }) => (
  //   <Reader.Consumer>
  //     {(context) => (
  //       <p>
  //         {context.currentIdx + 1}/{context.totalPublications}
  //       </p>
  //     )}
  //   </Reader.Consumer>
  <p>
    {currentIdx + 1}/{totalPublications}
  </p>
);

export default withReaderContext(Counter);
