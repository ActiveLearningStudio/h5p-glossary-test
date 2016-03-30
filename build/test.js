"use strict";

(function (GlossaryTest, React) {
  GlossaryTest.Test = React.createClass({
    displayName: "Test",
    getInitialState: function getInitialState() {
      return {
        stage: GlossaryTest.STAGE_START
      };
    },
    handleStart: function handleStart() {
      this.setState({ stage: GlossaryTest.STAGE_PAGE });
    },
    handleFinish: function handleFinish() {
      this.setState({ stage: GlossaryTest.STAGE_SUMMARY });
    },
    handleReset: function handleReset() {
      this.setState({ stage: GlossaryTest.STAGE_START });
    },
    render: function render() {
      var stage;
      switch (this.state.stage) {
        default:
        case GlossaryTest.STAGE_START:
          stage = React.createElement(GlossaryTest.Start, { from: this.props.from, to: this.props.to, onStart: this.handleStart });
          break;

        case GlossaryTest.STAGE_PAGE:
          stage = React.createElement(GlossaryTest.Page, { words: this.props.words, onFinish: this.handleFinish });
          break;

        case GlossaryTest.STAGE_SUMMARY:
          stage = React.createElement(GlossaryTest.Summary, { onReset: this.handleReset });
          break;
      }

      return React.createElement(
        "div",
        { className: "h5p-glossary-test" },
        stage
      );
    }
  });

  GlossaryTest.Button = React.createClass({
    displayName: "Button",
    handleKeyPress: function handleKeyPress(event) {
      if (event.charCode === 32) {
        this.props.onPress();
        event.preventDefault();
      }
    },
    render: function render() {
      return React.createElement(
        "div",
        { className: "h5p-glossary-test-button", role: "button", tabIndex: "0", onKeyPress: this.handleKeyPress, onClick: this.props.onPress },
        this.props.children
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);