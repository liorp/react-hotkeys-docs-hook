module.exports = {
  // ...
  plugins: [
    // ... other plugins
    [
      'babel-plugin-module-resolver',
      {
        root: './',
        alias: require('./tsconfig.json').compilerOptions.paths,
      },
    ],
  ],
};
