(function (GlossaryTest, React) {

  /**
   * start page component
   */
  class Start extends React.Component {

    /**
     * Handle Glossary Test Start Event
     *
     * Triggered when the Start button is pressed
     */
    handleStart() {
      this.props.onStart();
    }

    /**
     * Render
     *
     * @return {ReactElement} markup
     */
    render() {
      return (
        <div>
          <dl>
            <dt>{this.props.l10n.translateFrom}</dt>
            <dd>{this.props.from}</dd>
            <dt>{this.props.l10n.translateTo}</dt>
            <dd>{this.props.to}</dd>
          </dl>
          <GlossaryTest.Button onPress={() => this.handleStart()}>{this.props.l10n.start}</GlossaryTest.Button>
        </div>
      );
    }
  }

  // Add to namespace
  GlossaryTest.Start = Start;

})(H5P.GlossaryTest, H5P.React);
