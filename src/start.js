(function (GlossaryTest, React) {

  /**
   * start page component
   */
  class Start extends React.Component {

    /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
      super(props);

      /**
       * @type {object}
       * @property {string} inputArtist search artist
       */
      /*this.state = {
          inputArtist: 'radiohead'
      };*/
    }

    /**
     * handle start event
     * @param {SytheticEvent} e
     */
    handleStart(e) {
      this.props.onStart();
    }

    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
      return (
        <div>
          <dl>
            <dt>Translate from</dt>
            <dd>{this.props.from}</dd>
            <dt>Translate to</dt>
            <dd>{this.props.to}</dd>
          </dl>
          <GlossaryTest.Button onPress={() => this.handleStart()}>Start</GlossaryTest.Button>
        </div>
      );
    }
  }

  // Add to namespace
  GlossaryTest.Start = Start;

})(H5P.GlossaryTest, H5P.React);
