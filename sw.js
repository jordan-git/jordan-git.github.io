/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-0a8a5e519e7acdeaa27d.js"
  },
  {
    "url": "framework-724b333f1d8feb679020.js"
  },
  {
    "url": "app-519b1cdd4381420e89db.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9f31b3c169d02026a10f379988b34f0a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0097d26fbd474b34ff9b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "54a7237be8c27850fe91e09435b7f47e"
  },
  {
    "url": "polyfill-3370241ddb89d1467de6.js"
  },
  {
    "url": "styles.6c2a74b70b545addd473.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "aa9e765a4864eb59db3d448c1f68d9786c4adfb5-36b6415f2b155dadbdb6.js"
  },
  {
    "url": "component---src-pages-index-tsx-4d6667c5431e93fecd1a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "60721bf394a6ada4edb9e425b9a10055"
  },
  {
    "url": "page-data/sq/d/1216879795.json",
    "revision": "6e404f6cfa9225a325df672f958a05da"
  },
  {
    "url": "page-data/sq/d/1552777743.json",
    "revision": "531c3244e9cbea69c27b75cfd2dcf032"
  },
  {
    "url": "component---src-pages-projects-tsx-ecce7ae11306fd0a76e8.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "017eef73994d0b0d03310ec9557d8535"
  },
  {
    "url": "component---src-pages-about-tsx-9088b7f861f0c0653d59.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "70127ba322e4646dc1bc40db9c52a5da"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "cc8a7214196adaa3098f5a20de2e3ef5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-519b1cdd4381420e89db.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
