# @itplusx/nuxt-thumbor

> [Thumbor](http://thumbor.org/) module for [NuxtJS](https://nuxtjs.org/).  
> Based on [Thumbor TS](https://github.com/brettm12345/thumbor-ts).  


## Setup

1. Add `@itplusx/nuxt-thumbor` dependency to your project:

```shell script
yarn add @itplusx/nuxt-thumbor
# or
npm i @itplusx/nuxt-thumbor
```

2. Add `@itplusx/nuxt-thumbor` to the modules section of `nuxt.config.js`:

```js
export default {
  modules: [
    [ 
      '@itplusx/nuxt-thumbor', 
      { 
        // Options 
      }
    ]
  ]
}
```

Or using top level options
```js
export default {
  modules: [
    '@itplusx/nuxt-thumbor'
  ],
  thumbor: {
    // Options
  }
}
```


### Options

#### `serverUrl`

- Type: `String`
- Default: `http://localhost:8888`

Url to the Thumbor server.

The `serverUrl` can also simply be overwritten with the ENV variable `THUMBOR_SERVER_URL`. 


#### `securityKey` (CURRENTLY NOT IN USE)

- Type: `String`

Security Key to prevent [URL Tempering](https://thumbor.readthedocs.io/en/latest/security.html).
If no `securityKey` is set, the urls will be created with `/unsure/` instead.

The `securityKey` can also simply be overwritten with the ENV variable `THUMBOR_SECURITY_KEY`. 

:warning: At the moment there is no real secure way to generate secure urls, because the security key is being exposed 
to the frontend. Help is appreciated. We have decided not to use it to prevent someone to expose the key.


### Setting up a proxy

If you want to hide the thumbor server you could use `@nuxtjs/proxy`.

`.env`
```
THUMBOR_SERVER_URL=/_image
```

`nuxt.config.js`
```js
{
  proxy: {
    '/_image/': {
      target: 'https://thumbor-server.tld',
      pathRewrite: {'^/_image/': ''}
    }   
  }
}
```


## Usage

### `$thumbor`

This module globally injects `$thumbor` instance, meaning that you can access it anywhere using `this.$thumbor`.
For plugins, asyncData, fetch, nuxtServerInit and Middleware, you can access it from `context.$thumbor`.

Under the hood [Thumbor TS](https://github.com/brettm12345/thumbor-ts) is being used. Check the API to get an overview
of the provided functionalities. `$thumbor` directly provides the same methods.

```vue
<template>
  <img 
    :src="$thumbor.setPath('https://domain.tld/path/to/image.jpg').resize(300, 0).grayscale().buildUrl()"
  />
</template>
```
