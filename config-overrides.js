const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {
  config.entry.unshift(
    path.resolve(__dirname, './src/en-US.ts'),
    path.resolve(__dirname, './src/zh-CN.ts'),
  );

  const rewireLess = require('react-app-rewire-less-modules')
  config = rewireLess(config, env)

  config.module.rules.push({ 
    test: /\.md$/,
    use: [
      'html-loader',
      'markdown-loader',
    ],
  });

  const fileLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('file-loader')
  );

  fileLoader.exclude.push(/\.md$/);

  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }) ]
    })
  }

  return config
}
