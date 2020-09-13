import React from "react";
// import Reader from "../Reader";
import withReaderContext from "../../../hoc/withReaderContext";

const Controls = ({ currentIdx, onChange, totalPublications }) => (
  //   <Reader.Consumer>
  //     {({ currentIdx, onChange, totalPublications }) => (
  //       <section>
  //         <button disabled={!currentIdx} name="prev" onClick={onChange}>
  //           Назад
  //         </button>
  //         <button
  //           disabled={currentIdx === totalPublications - 1}
  //           name="next"
  //           onClick={onChange}
  //         >
  //           Вперед
  //         </button>
  //       </section>
  //     )}
  //   </Reader.Consumer>
  <section>
    <button disabled={!currentIdx} name="prev" onClick={onChange}>
      Назад
    </button>
    <button
      disabled={currentIdx === totalPublications - 1}
      name="next"
      onClick={onChange}
    >
      Вперед
    </button>
  </section>
);

export default withReaderContext(Controls);
