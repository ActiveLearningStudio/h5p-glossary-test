(function (GlossaryTest, GlossaryList, React) {
  GlossaryTest.Page = React.createClass({
    getInitialState() {
      return {
        checkAnswers: false,
        finished: false
      };
    },

    handleCheckAnswers() {
      this.setState({
        checkAnswers: true,
        finished: true
      });
    },

    handleFinish() {
      this.setState(this.getInitialState());
      this.props.onFinish();
    },

    handleAnswers(scores) {
      console.log(scores);
    },

    render() {
      // TODO: Split up into multiple pages/sheets

      var button;
      if (this.state.checkAnswers) {
        if (this.state.finished) {
          button = (
            <GlossaryTest.Button onPress={this.handleFinish}>Finish</GlossaryTest.Button>
          );
        }
        else {
          button = (
            <GlossaryTest.Button onPress={this.handleContinue}>Continue</GlossaryTest.Button>
          );
        }
      }
      else {
        button = (
          <GlossaryTest.Button onPress={this.handleCheckAnswers}>Check Answers</GlossaryTest.Button>
        );
      }

      return (
        <div>
          <GlossaryList.List words={this.props.words} checkAnswers={this.state.checkAnswers} onAnswer={this.handleAnswers} />
          {button}
        </div>
      );
    }
  });
})(H5P.GlossaryTest, H5P.GlossaryList, H5P.React);
