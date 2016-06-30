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

    handleFinish(scores) {
      this.setState({stage: GlossaryTest.STAGE_SUMMARY, scores: scores});
    },

    handleReset() {
      this.setState({stage: GlossaryTest.STAGE_START, scores: []});
    },

    render() {
      var stage;
      switch (this.state.stage) {
        default:
        case GlossaryTest.STAGE_START:
          stage = (
            <GlossaryTest.Start from={this.props.from} to={this.props.to} l10n={this.props.l10n} onStart={this.handleStart} />
          );
          break;

        case GlossaryTest.STAGE_PAGE:
          stage = (
            <GlossaryTest.Page words={this.props.words} numPerList={2} l10n={this.props.l10n} onFinish={this.handleFinish} />
          );
          break;

        case GlossaryTest.STAGE_SUMMARY:
          stage = (
            <GlossaryTest.Summary scores={this.state.scores} l10n={this.props.l10n} onReset={this.handleReset} />
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

})(H5P.GlossaryTest, H5P.React);
