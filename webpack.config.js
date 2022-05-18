const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cancy-project",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
    standaloneOptions: {
      appOrParcelName: "navbar",
      importMapUrl: new URL("https://storage.googleapis.com/cancy-website-2-bucket/import/map.json"),
    },
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
