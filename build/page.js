"use strict";

(function (GlossaryTest, GlossaryList, React) {
  GlossaryTest.Page = React.createClass({
    displayName: "Page",
    getInitialState: function getInitialState() {
      return {
        checkAnswers: false,
        finished: false
      };
    },
    handleCheckAnswers: function handleCheckAnswers() {
      this.setState({
        checkAnswers: true,
        finished: true
      });
    },
    handleFinish: function handleFinish() {
      this.setState(this.getInitialState());
      this.props.onFinish();
    },
    handleAnswers: function handleAnswers(scores) {
      console.log(scores);
    },
    render: function render() {
      // TODO: Split up into multiple pages/sheets

      var button;
      if (this.state.checkAnswers) {
        if (this.state.finished) {
          button = React.createElement(
            GlossaryTest.Button,
            { onPress: this.handleFinish },
            "Finish"
          );
        } else {
          button = React.createElement(
            GlossaryTest.Button,
            { onPress: this.handleContinue },
            "Continue"
          );
        }
      } else {
        button = React.createElement(
          GlossaryTest.Button,
          { onPress: this.handleCheckAnswers },
          "Check Answers"
        );
      }

      return React.createElement(
        "div",
        null,
        React.createElement(GlossaryList.List, { words: this.props.words, checkAnswers: this.state.checkAnswers, onAnswer: this.handleAnswers }),
        button
      );
    }
  });
})(H5P.GlossaryTest, H5P.GlossaryList, H5P.React);