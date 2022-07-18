"use strict";
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 1725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6867);
/* harmony import */ var react_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5014);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6362);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6784);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2364);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2461);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const EPUBPreview = ({
  file
}) => {
  const {
    asPath
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_7__/* .getStoredToken */ .hV)(asPath);
  const {
    0: epubContainerWidth,
    1: setEpubContainerWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(400);
  const epubContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setEpubContainerWidth(epubContainer.current ? epubContainer.current.offsetWidth : 400);
  }, []);
  const {
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const onLocationChange = cfiStr => setLocation(cfiStr);

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(); // Fix for not valid epub files according to
  // https://github.com/gerhardsletten/react-reader/issues/33#issuecomment-673964947

  const fixEpub = rendition => {
    const spineGet = rendition.book.spine.get.bind(rendition.book.spine);

    rendition.book.spine.get = function (target) {
      const targetStr = target;
      let t = spineGet(target);

      while (t == null && targetStr.startsWith('../')) {
        target = targetStr.substring(3);
        t = spineGet(target);
      }

      return t;
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "no-scrollbar flex w-full flex-col overflow-scroll rounded bg-white dark:bg-gray-900 md:p-3",
      style: {
        maxHeight: '90vh'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "no-scrollbar w-full flex-1 overflow-scroll",
        ref: epubContainer,
        style: {
          minHeight: '70vh'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          style: {
            position: 'absolute',
            width: epubContainerWidth,
            height: '70vh'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_reader__WEBPACK_IMPORTED_MODULE_1__.ReactReader, {
            url: `/api/raw/?path=${asPath}${hashedToken ? '&token=' + hashedToken : ''}`,
            getRendition: rendition => fixEpub(rendition),
            loadingView: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              loadingText: t('Loading EPUB ...')
            }),
            location: location,
            locationChanged: onLocationChange,
            epubInitOptions: {
              openAs: 'epub'
            },
            epubOptions: {
              flow: 'scrolled'
            }
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_6__/* .DownloadBtnContainer */ .W, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EPUBPreview);

/***/ })

};
;