import {
  Link,
  Outlet,
  init_dist
} from "/build/_shared/chunk-7IKKYEMR.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  AppBar_default,
  Box_default,
  Button_default,
  Container_default,
  CssBaseline_default,
  GlobalStyles_default,
  ThemeProvider,
  Toolbar_default,
  Typography_default,
  createTheme_default
} from "/build/_shared/chunk-66G6UGIB.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  createHotContext
} from "/build/_shared/chunk-KDR53U7S.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// theme.js
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    }
  }
});
var theme_default = theme;

// globalStyles.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var globalStyles = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  GlobalStyles_default,
  {
    styles: {
      body: { margin: 0, padding: 0, fontFamily: "Roboto, Arial, sans-serif" }
    }
  },
  void 0,
  false,
  {
    fileName: "globalStyles.js",
    lineNumber: 5,
    columnNumber: 3
  },
  this
);
var globalStyles_default = globalStyles;

// app/components/Layout.jsx
init_dist();

// app/components/Header.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Header.jsx"
  );
  import.meta.hot.lastModified = "1720490108345.6396";
}
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppBar_default, { position: "static", color: "transparent", elevation: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { maxWidth: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toolbar_default, { disableGutters: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "h6", component: "div", sx: {
      flexGrow: 1
    }, children: "Property Management System" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", component: Link, to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", component: Link, to: "/features", children: "Features" }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", component: Link, to: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", component: Link, to: "/contact", children: "Contact" }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.jsx"
  );
  import.meta.hot.lastModified = "1720487878159.8726";
}
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { sx: {
    backgroundColor: "#222",
    color: "#fff",
    py: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { maxWidth: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Typography_default, { variant: "body1", component: "p", align: "center", children: [
    "\xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Property Management System. All rights reserved."
  ] }, void 0, true, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = Footer;
var Footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Layout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.jsx"
  );
  import.meta.hot.lastModified = "1720493403165.9617";
}
var Layout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c3 = Layout;
var Layout_default = Layout;
var _c3;
$RefreshReg$(_c3, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
  import.meta.hot.lastModified = "1720493261316.653";
}
var meta = () => {
  return {
    title: "Property Management System",
    description: "Welcome to your Property Management System!"
  };
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeProvider, { theme: theme_default, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CssBaseline_default, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    globalStyles_default,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout_default, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c4 = App;
var _c4;
$RefreshReg$(_c4, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-C7MKW2VI.js.map
