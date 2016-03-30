"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (GlossaryTest, React) {

  /**
   * start page component
   */

  var Start = function (_React$Component) {
    _inherits(Start, _React$Component);

    /**
     * constructor
     * @param {object} props
     */

    function Start(props) {
      _classCallCheck(this, Start);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Start).call(this, props));

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


    _createClass(Start, [{
      key: "handleStart",
      value: function handleStart(e) {
        this.props.onStart();
      }

      /**
       * render
       * @return {ReactElement} markup
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          null,
          React.createElement(
            "dl",
            null,
            React.createElement(
              "dt",
              null,
              "Translate from"
            ),
            React.createElement(
              "dd",
              null,
              this.props.from
            ),
            React.createElement(
              "dt",
              null,
              "Translate to"
            ),
            React.createElement(
              "dd",
              null,
              this.props.to
            )
          ),
          React.createElement(
            GlossaryTest.Button,
            { onPress: function onPress() {
                return _this2.handleStart();
              } },
            "Start"
          )
        );
      }
    }]);

    return Start;
  }(React.Component);

  // Add to namespace


  GlossaryTest.Start = Start;
})(H5P.GlossaryTest, H5P.React);