(function (GlossaryTest, React) {
  GlossaryTest.Summary = React.createClass({
    render() {
      return (
        <div>
          <p>TODO: SUMMARY...</p>
          <GlossaryTest.Button onPress={this.props.onReset}>Start over</GlossaryTest.Button>
        </div>
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);
