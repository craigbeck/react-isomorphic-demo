Isomorphic React.js app demo that shows how to handle components that use browser-only API calls.

## Build

```
> webpack --config webpack.shell.js     # renders static react markup to 200.html
> webpack                               # builds client code
```

The `webpack.shell.js` configuration builds the app code in a node.js compatible format to be executed by the `ReactToHtmlPlugin` that generates the rendered React code.

The standard `webpack.config.js` produces the client code bundle that is requested by the browser.

## Serve

```
> serve dist                            # for static web server
```

or

```
> webpack-dev-server
```
