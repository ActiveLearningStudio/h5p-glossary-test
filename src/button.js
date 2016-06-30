(function (GlossaryTest, React) {

  /**
   * Button Component
   */
  class Button extends React.Component {

    /**
     * Handle Glossary Button Click Event.
     */
    handleClick() {
      if (!this.props.disabled) {
        this.props.onPress();
      }
    },

    /**
     * Handle Glossary Button Key Press Event.
     */
    handleKeyPress(event) {
      if (event.charCode === 32) {
        this.handleClick()
        event.preventDefault();
      }
    },

    /**
     * Render
     *
     * @return {ReactElement} markup
     */
    render() {
      return (
        <div className="h5p-glossary-test-button" role="button" tabIndex="0" onKeyPress={this.handleKeyPress} onClick={this.handleClick}>
          {this.props.children}
        </div>
      );
    }

  }

  // Add to namespace
  GlossaryTest.Button = Button;

})(H5P.GlossaryTest, H5P.React);
