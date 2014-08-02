# Skishop Lélex website

## Build

Github Pages run Jekyll in safe mode, so there is no direct SASS support. Since Github for Windows doesn't support hooks, the only way to ensure the freshness of CSS resources is to constantly watch for SASS modifications.

```
sass --watch _sass:css
```

Auto-refresh Jekyll

```
bundle exec jekyll serve --watch
```

