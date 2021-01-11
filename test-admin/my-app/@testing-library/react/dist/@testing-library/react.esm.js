import _extends from '@babel/runtime/helpers/esm/extends';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, prettyDOM, getQueriesForElement, fireEvent as fireEvent$1 } from '@testing-library/dom';
export * from '@testing-library/dom';
import { act as act$1 } from 'react-dom/test-utils';

var reactAct = act$1;
var actSupported = reactAct !== undefined; // act is supported react-dom@16.8.0
// so for versions that don't have act from test utils
// we do this little polyfill. No warnings, but it's
// better than nothing.

function actPolyfill(cb) {
  ReactDOM.unstable_batchedUpdates(cb);
  ReactDOM.render(React.createElement("div", null), document.createElement('div'));
}

var act = reactAct || actPolyfill;
var youHaveBeenWarned = false;
var isAsyncActSupported = null;

function asyncAct(cb) {
  if (actSupported === true) {
    if (isAsyncActSupported === null) {
      return new Promise(function (resolve, reject) {
        // patch console.error here
        var originalConsoleError = console.error;

        console.error = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /* if console.error fired *with that specific message* */

          /* istanbul ignore next */
          if (args[0].indexOf('Warning: Do not await the result of calling ReactTestUtils.act') === 0) {
            // v16.8.6
            isAsyncActSupported = false;
          } else if (!(args[0].indexOf('Warning: The callback passed to ReactTestUtils.act(...) function must not return anything') === 0)) {
            originalConsoleError.call(console, args);
          }
        };

        var cbReturn, result;

        try {
          result = reactAct(function () {
            cbReturn = cb();
            return cbReturn;
          });
        } catch (err) {
          console.error = originalConsoleError;
          reject(err);
          return;
        }

        result.then(function () {
          console.error = originalConsoleError; // if it got here, it means async act is supported

          isAsyncActSupported = true;
          resolve();
        }, function (err) {
          console.error = originalConsoleError;
          isAsyncActSupported = true;
          reject(err);
        }); // 16.8.6's act().then() doesn't call a resolve handler, so we need to manually flush here, sigh

        if (isAsyncActSupported === false) {
          console.error = originalConsoleError;
          /* istanbul ignore next */

          if (!youHaveBeenWarned) {
            // if act is supported and async act isn't and they're trying to use async
            // act, then they need to upgrade from 16.8 to 16.9.
            // This is a seemless upgrade, so we'll add a warning
            console.error("It looks like you're using a version of react-dom that supports the \"act\" function, but not an awaitable version of \"act\" which you will need. Please upgrade to at least react-dom@16.9.0 to remove this warning.");
            youHaveBeenWarned = true;
          }

          cbReturn.then(function () {
            // a faux-version.
            // todo - copy https://github.com/facebook/react/blob/master/packages/shared/enqueueTask.js
            Promise.resolve().then(function () {
              // use sync act to flush effects
              act(function () {});
              resolve();
            });
          }, reject);
        }
      });
    } else if (isAsyncActSupported === false) {
      // use the polyfill directly
      var _result;

      act(function () {
        _result = cb();
      });
      return _result.then(function () {
        return Promise.resolve().then(function () {
          // use sync act to flush effects
          act(function () {});
        });
      });
    } // all good! regular act


    return act(cb);
  } // use the polyfill


  var result;
  act(function () {
    result = cb();
  });
  return result.then(function () {
    return Promise.resolve().then(function () {
      // use sync act to flush effects
      act(function () {});
    });
  });
}
/* eslint no-console:0 */

configure({
  asyncWrapper: function () {
    var _asyncWrapper = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(cb) {
      var result;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return asyncAct(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee() {
                return _regeneratorRuntime.wrap(function (_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return cb();

                      case 2:
                        result = _context.sent;

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

            case 2:
              return _context2.abrupt("return", result);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function asyncWrapper() {
      return _asyncWrapper.apply(this, arguments);
    };
  }()
});
var mountedContainers = new Set();

function render(ui, _temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
      container = _ref2.container,
      _ref2$baseElement = _ref2.baseElement,
      baseElement = _ref2$baseElement === void 0 ? container : _ref2$baseElement,
      queries = _ref2.queries,
      _ref2$hydrate = _ref2.hydrate,
      hydrate = _ref2$hydrate === void 0 ? false : _ref2$hydrate,
      WrapperComponent = _ref2.wrapper;

  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body;
  }

  if (!container) {
    container = baseElement.appendChild(document.createElement('div'));
  } // we'll add it to the mounted containers regardless of whether it's actually
  // added to document.body so the cleanup method works regardless of whether
  // they're passing us a custom container or not.


  mountedContainers.add(container);

  var wrapUiIfNeeded = function (innerElement) {
    return WrapperComponent ? React.createElement(WrapperComponent, null, innerElement) : innerElement;
  };

  act(function () {
    if (hydrate) {
      ReactDOM.hydrate(wrapUiIfNeeded(ui), container);
    } else {
      ReactDOM.render(wrapUiIfNeeded(ui), container);
    }
  });
  return _extends({
    container: container,
    baseElement: baseElement,
    // eslint-disable-next-line no-console
    debug: function debug(el) {
      if (el === void 0) {
        el = baseElement;
      }

      return console.log(prettyDOM(el));
    },
    unmount: function unmount() {
      return ReactDOM.unmountComponentAtNode(container);
    },
    rerender: function rerender(rerenderUi) {
      render(wrapUiIfNeeded(rerenderUi), {
        container: container,
        baseElement: baseElement
      }); // Intentionally do not return anything to avoid unnecessarily complicating the API.
      // folks can use all the same utilities we return in the first place that are bound to the container
    },
    asFragment: function asFragment() {
      /* istanbul ignore if (jsdom limitation) */
      if (typeof document.createRange === 'function') {
        return document.createRange().createContextualFragment(container.innerHTML);
      }

      var template = document.createElement('template');
      template.innerHTML = container.innerHTML;
      return template.content;
    }
  }, getQueriesForElement(baseElement, queries));
}

function cleanup() {
  mountedContainers.forEach(cleanupAtContainer);
} // maybe one day we'll expose this (perhaps even as a utility returned by render).
// but let's wait until someone asks for it.


function cleanupAtContainer(container) {
  ReactDOM.unmountComponentAtNode(container);

  if (container.parentNode === document.body) {
    document.body.removeChild(container);
  }

  mountedContainers.delete(container);
} // react-testing-library's version of fireEvent will call
// dom-testing-library's version of fireEvent wrapped inside
// an "act" call so that after all event callbacks have been
// been called, the resulting useEffect callbacks will also
// be called.


function fireEvent() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var returnValue;
  act(function () {
    returnValue = fireEvent$1.apply(void 0, args);
  });
  return returnValue;
}

Object.keys(fireEvent$1).forEach(function (key) {
  fireEvent[key] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var returnValue;
    act(function () {
      returnValue = fireEvent$1[key].apply(fireEvent$1, args);
    });
    return returnValue;
  };
}); // React event system tracks native mouseOver/mouseOut events for
// running onMouseEnter/onMouseLeave handlers
// @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/EnterLeaveEventPlugin.js#L24-L31

fireEvent.mouseEnter = fireEvent.mouseOver;
fireEvent.mouseLeave = fireEvent.mouseOut;

fireEvent.select = function (node, init) {
  // React tracks this event only on focused inputs
  node.focus(); // React creates this event when one of the following native events happens
  // - contextMenu
  // - mouseUp
  // - dragEnd
  // - keyUp
  // - keyDown
  // so we can use any here
  // @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/SelectEventPlugin.js#L203-L224

  fireEvent.keyUp(node, init);
}; // just re-export everything from dom-testing-library
// thing for people using react-dom@16.8.0. Anyone else doesn't need it and
// people should just upgrade anyway.

/* eslint func-name-matching:0 */

export { act, cleanup, fireEvent, render };
