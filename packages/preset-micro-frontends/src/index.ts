export default () => {
  return {
    plugins: [
      require.resolve('@walrus/plugin-release'),
      require.resolve('@sensoro/walrus-plugin-build')
    ]
  };
};
