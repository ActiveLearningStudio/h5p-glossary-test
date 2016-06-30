(function (GlossaryTest, React) {
  GlossaryTest.Summary = React.createClass({
    render() {

      var score = 0;
      var max = 0;

      // Calculate score and max score
      for (var i = 0; i < this.props.scores.length; i++) {
        var listScores = this.props.scores[i];

        for (var j = 0; j < listScores.length; j++) {
          score += listScores[j];
          max += 1;
        }
      }

      return (
        <div>
          <p>{this.props.l10n.summary.replace(':num', score).replace(':total', max)}</p>
          <GlossaryTest.Button onPress={this.props.onReset}>{this.props.l10n.startOver}</GlossaryTest.Button>
        </div>
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);
