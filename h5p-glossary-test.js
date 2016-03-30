H5P.GlossaryTest = (function (EventDispatcher, React, ReactDOM, GlossaryList) {

  /**
   * Glossary Test Constructor
   *
   * @class
   * @param {Object} params Describes task behavior
   * @param {number} id Content identifier
   * @param {Object} data User specific data to adapt behavior
   */
  function GlossaryTest(params, id, data) {
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    /**
     * Attach the glossary test to the given container
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      self.triggerXAPI('attempted');

      ReactDOM.render(
        React.createElement(GlossaryTest.Test, params),
        $container.get(0)
      );
    };
  }

  // Extends the event dispatcher
  GlossaryTest.prototype = Object.create(EventDispatcher.prototype);
  GlossaryTest.prototype.constructor = GlossaryTest;

  GlossaryTest.STAGE_START = 0;
  GlossaryTest.STAGE_PAGE = 1;
  GlossaryTest.STAGE_SUMMARY = 2;

  return GlossaryTest;
})(H5P.EventDispatcher, H5P.React, H5P.ReactDOM, H5P.GlossaryList);
