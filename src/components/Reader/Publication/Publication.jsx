import React, { useContext } from "react";
// import Reader from "../Reader";
import withReaderContext from "../../../hoc/withReaderContext";
import { ReaderContext } from "../Reader";

const Publication = ({ publication }) => {
  const context = useContext(ReaderContext);

  // <Reader.Consumer>
  //   {(context) => (
  //     <article>
  //       <h2>{context.publication.text.slice(0, 20)}...</h2>
  //     </article>
  //   )}
  // </Reader.Consumer>
  // ===============================
  // return (
  //   <article>
  //     <h2>{publication.text.slice(0, 20)}...</h2>
  //   </article>
  // );
  return (
    <article>
      <h2>{context.publication.text.slice(0, 20)}...</h2>
    </article>
  );
};

// export default withReaderContext(Publication);
export default Publication;
