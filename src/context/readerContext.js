import React, { Component, createContext } from "react";

export const ReaderContext = createContext();

export default class Reader extends Component {
  static Consumer = ReaderContext.Consumer;
  state = {
    currentIdx: 0,
    publication: this.props.items[0],
    totalPublications: this.props.items.length,
  };

  handleChangeDirection = ({ target }) => {
    this.setState((state) => ({
      currentIdx:
        target.name === "next" ? state.currentIdx + 1 : state.currentIdx - 1,
      publication: this.props.items[
        target.name === "next" ? state.currentIdx + 1 : state.currentIdx - 1
      ],
    }));
  };

  render() {
    return (
      <ReaderContext.Provider
        value={{
          ...this.state,
          onChange: this.handleChangeDirection,
        }}
      >
        <div>{this.props.children}</div>
      </ReaderContext.Provider>
    );
  }
}
