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

If command shows encoding error on Windows, these before launching Jekyll:

```
set LC_ALL=en_US.UTF-8
set LANG=en_US.UTF-8
```

## Redirections

### Former site URIs and replacements

* http://skishop-lelex.com/ => OK
* http://skishop-lelex.com/fr => /
* http://skishop-lelex.com/fr/public => /
* http://skishop-lelex.com/fr/public/rent => /fr/prices
* http://skishop-lelex.com/fr/public/snowscoot => /fr/equipment#snowscoot
* http://skishop-lelex.com/fr/public/vtt => /fr/summer
* http://skishop-lelex.com/fr/public/find => /fr/contact
* http://skishop-lelex.com/en => OK
* http://skishop-lelex.com/en/public => /en/index#index
* http://skishop-lelex.com/en/public/rent => /en/index#prices
* http://skishop-lelex.com/en/public/snowscoot => /en/index#equipment
* http://skishop-lelex.com/en/public/vtt => /en/index#summer
* http://skishop-lelex.com/en/public/find => /en/index#contact

### NginX configuration

```
# Match HTML files without extension

try_files  $uri $uri.html $uri/index.html index.html;

# Permanent redirections from previous site version (exact URI matching)

location = /fr {
    rewrite ^ http://skishop-lelex.com permanent;
}

location = /fr/public {
    rewrite ^ http://skishop-lelex.com permanent;
}

location = /fr/public/rent {
    rewrite ^ http://skishop-lelex.com/fr/tarifs permanent;
}

location = /fr/public/snowscoot {
    rewrite ^ http://skishop-lelex.com/fr/equipement#snowscoot permanent;
}

location = /fr/public/vtt {
    rewrite ^ http://skishop-lelex.com/fr/ete permanent;
}

location = /fr/public/find {
    rewrite ^ http://skishop-lelex.com/fr/contact permanent;
}

location = /en/public {
    rewrite ^ http://skishop-lelex.com/en/#index permanent;
}

location = /en/public/rent {
    rewrite ^ http://skishop-lelex.com/en/#prices permanent;
}

location = /en/public/snowscoot {
    rewrite ^ http://skishop-lelex.com/en/#equipment permanent;
}

location = /en/public/vtt {
    rewrite ^ http://skishop-lelex.com/en/#summer permanent;
}

location = /en/public/find {
    rewrite ^ http://skishop-lelex.com/en/#contact permanent;
}
```
