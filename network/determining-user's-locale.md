# Determining the User's Locale

When running internationalization code in the browser it is best if the locale used is the same as was used when the page was generated on the server. You can do this by having the server embed the chosen locale into the generate page. This ensures that the user gets a consistent experience and that the UI doesn't suddenly "switch languages" on them.

If this isn't possible or if you have an application which is served statically, the best practice is to provide the user an explicit way to choose one of the locales your app supports. If you wish to programmatically infer the user's locale you can match the following against the locales your app supports.

## References

* [Runtime Environments - FormatJS](https://formatjs.io/guides/runtime-environments/#user-locale-server)
