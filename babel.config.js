module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};

module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        liibraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
