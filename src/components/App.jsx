import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import InnerComponent from "./InnerComponent/InnerComponent";
import Switch from "@material-ui/core/Switch";
import Publication from "./Reader/Publication/Publication";
import Controls from "./Reader/Controls/Controls";
import Counter from "./Reader/Counter/Counter";
import store from "../store/publications";
import Rader from "./Reader/Reader";
import styles from "./App.module.css";

class App extends Component {
  state = {
    isLight: true,
  };

  changeSelect = (e) => {
    const { i18n } = this.props;
    i18n.changeLanguage(e.target.value);
  };

  toggleThem = ({ target }) => {
    const { isLight } = this.state;
    // this.setState((state) => ({
    //   isLight: !state.isLight,
    // }));

    this.setState({
      [target.name]: target.checked,
    });
    console.log(isLight);
  };

  render() {
    const { t } = this.props;
    const { isLight } = this.state;

    return (
      <div>
        <select onChange={this.changeSelect}>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <h1>{t("title")}</h1>
        <InnerComponent />
        <Switch
          checked={isLight}
          onChange={this.toggleThem}
          name="isLight"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <div>
          <p
            className={
              isLight
                ? styles["text"] + " " + styles["boldText"]
                : styles["text"]
            }
          >
            some text
          </p>
        </div>
        <Rader items={store}>
          <Publication />
          <Controls />
          <Counter />
        </Rader>
      </div>
    );
  }
}

export default withTranslation()(App);
