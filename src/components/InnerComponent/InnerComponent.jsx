import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class InnerComponent extends Component {
  state = {};

  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t("text")}</h1>
      </div>
    );
  }
}

export default withTranslation()(InnerComponent);
