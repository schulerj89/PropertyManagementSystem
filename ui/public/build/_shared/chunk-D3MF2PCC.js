import {
  Box_default,
  Container_default,
  Grid_default,
  Typography_default
} from "/build/_shared/chunk-66G6UGIB.js";
import {
  createHotContext
} from "/build/_shared/chunk-KDR53U7S.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Feature.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Feature.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Feature.jsx"
  );
  import.meta.hot.lastModified = "1720487849737.825";
}
var Feature = ({
  title,
  description
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h6", component: "h3", gutterBottom: true, children: title }, void 0, false, {
      fileName: "app/components/Feature.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", component: "p", children: description }, void 0, false, {
      fileName: "app/components/Feature.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Feature.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Feature.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = Feature;
var _c;
$RefreshReg$(_c, "Feature");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FeaturesSection.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FeaturesSection.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FeaturesSection.jsx"
  );
  import.meta.hot.lastModified = "1720487828754.749";
}
var features = [{
  title: "Feature One",
  description: "Description for feature one."
}, {
  title: "Feature Two",
  description: "Description for feature two."
}, {
  title: "Feature Three",
  description: "Description for feature three."
}];
var FeaturesSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box_default, { sx: {
    py: 8
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { maxWidth: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "h4", component: "h2", gutterBottom: true, align: "center", children: "Key Features" }, void 0, false, {
      fileName: "app/components/FeaturesSection.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid_default, { container: true, spacing: 4, children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Feature, { title: feature.title, description: feature.description }, index, false, {
      fileName: "app/components/FeaturesSection.jsx",
      lineNumber: 44,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/FeaturesSection.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FeaturesSection.jsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FeaturesSection.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c2 = FeaturesSection;
var FeaturesSection_default = FeaturesSection;
var _c2;
$RefreshReg$(_c2, "FeaturesSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FeaturesSection_default
};
//# sourceMappingURL=/build/_shared/chunk-D3MF2PCC.js.map
