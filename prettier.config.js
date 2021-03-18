module.exports = {
  arrowParens: "always",
  overrides: [
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
    {
      files: ["*.xml", "*.xml.dist"],
      options: {
        parser: "html",
        printWidth: 178,
      },
    },
    {
      files: ["*.php", "*.php.dist"],
      options: { parser: "php", tabWidth: 4 },
    },
  ],
  printWidth: 88,
  quoteProps: "consistent",
  tabWidth: 2,
  trailingComma: "all",
};
