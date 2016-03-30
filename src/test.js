(function (GlossaryTest, React) {
  GlossaryTest.Test = React.createClass({
    getInitialState() {
      return {
        stage: GlossaryTest.STAGE_START
      };
    },

    handleStart() {
      this.setState({stage: GlossaryTest.STAGE_PAGE});
    },

    handleFinish() {
      this.setState({stage: GlossaryTest.STAGE_SUMMARY});
    },

    handleReset() {
      this.setState({stage: GlossaryTest.STAGE_START});
    },

    render() {
      var stage;
      switch (this.state.stage) {
        default:
        case GlossaryTest.STAGE_START:
          stage = (
            <GlossaryTest.Start from={this.props.from} to={this.props.to} onStart={this.handleStart} />
          );
          break;

        case GlossaryTest.STAGE_PAGE:
          stage = (
            <GlossaryTest.Page words={this.props.words} onFinish={this.handleFinish} />
          );
          break;

        case GlossaryTest.STAGE_SUMMARY:
          stage = (
            <GlossaryTest.Summary onReset={this.handleReset} />
          );
          break;
      }

      return (
        <div className="h5p-glossary-test">
          {stage}
        </div>
      );
    }
  });



  GlossaryTest.Button = React.createClass({
    handleKeyPress(event) {
      if (event.charCode === 32) {
        this.props.onPress();
        event.preventDefault();
      }
    },

    render() {
      return (
        <div className="h5p-glossary-test-button" role="button" tabIndex="0" onKeyPress={this.handleKeyPress} onClick={this.props.onPress}>
          {this.props.children}
        </div>
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);
