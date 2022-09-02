# webfonts-loader sass reproducer

## Issue to reproduce

I am unable to get webfonts-loader to work with the SASS. I created a minimal reproducer for the issue and I'm hoping for insights.

## Check that webfonts-loader works with CSS

```bash
yarn && yarn webpack
$BROWSER index.html
```

You should see an X sign that is rendered via a webfont generated using webfonts-loader.

## Switch to SASS

1. in `webpack.config.js`, change the cssTemplate

2. in `src/styles.scss`, remove the comments from the import and include line

3. run `yarn webpack` again. For me, it fails with:

    > SassError: Can't find stylesheet to import.

    I haven't found a valid `import` statement that removes this error... Without the import, the `webfont-icon` mixin is undefined.
