"use strict";

(function (GlossaryTest, React) {
  GlossaryTest.Summary = React.createClass({
    displayName: "Summary",
    render: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "TODO: SUMMARY..."
        ),
        React.createElement(
          GlossaryTest.Button,
          { onPress: this.props.onReset },
          "Start over"
        )
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);