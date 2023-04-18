'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "76fdaf1f1d193ed830a45df2dee3ed76",
"assets/assets/audio/dropoff.mp3": "06de1d44707a0a60470f574aae4f9e39",
"assets/assets/audio/pickup.mp3": "04291a1f6fa01203011bd67b9727e82b",
"assets/assets/fonts/BungeeInline/BungeeInline-Regular.ttf": "4152729d3cc033542060221b7449bd42",
"assets/assets/images/bg_complete.png": "2564cb75f756af1b06fbc817fca02db9",
"assets/assets/images/bg_ending.png": "4fac2a9521a8c35e27098c876124c9c1",
"assets/assets/images/bg_fashion1.png": "7d1053051eca49288fc64f2cc6d51d79",
"assets/assets/images/bg_fashion2.png": "ea5fa5c99c7e0dde7a610e99c94daa38",
"assets/assets/images/bg_fashion3.png": "59c569c4878dcf3629bd682e48cdad6e",
"assets/assets/images/bg_fashion4.png": "538941f4ac2eecd8015bf6292d56d59c",
"assets/assets/images/bg_fashions.png": "01bff09efa492028ea960cb41f8407ca",
"assets/assets/images/bg_info.png": "bc0d710fb675397f63329c714acd8046",
"assets/assets/images/bg_option.png": "ac9baf1d74edeb693b9845a33938ec2c",
"assets/assets/images/bg_thanks.png": "f2e2a00586f03a218e2a37f27998a8e4",
"assets/assets/images/bg_top.png": "97291c9c24d95976ae28f664ef76382f",
"assets/assets/images/char_audrey.png": "899c4cc2a65e79f4e405af21ef5e9f85",
"assets/assets/images/char_iq300.png": "43f2683f7680b6aca2017b034f3e3b6b",
"assets/assets/images/char_mama.png": "b81620b3217fa12044f001a41c0aaa1b",
"assets/assets/images/char_queen.png": "4d31cd237bc0d04d7594abc766d0f2cb",
"assets/assets/images/img.png": "4f5c3dd3ed91669fd639fbbe549a8cc7",
"assets/assets/images/logo_red.png": "c3ff5a2f3dadfa1b7c0e4166e9a5f6d3",
"assets/assets/images/logo_white.png": "72646ee304018a59bd90903be019b14e",
"assets/assets/images/play_button.png": "6a3d4de4243284425524b7032c7f498a",
"assets/assets/images/property_audrey.jpg": "3ae46804c2a6c64d319ec1bcb059fc7f",
"assets/assets/images/property_iq300.jpg": "75ecd7e40740e52d9c486f64ee7f2152",
"assets/assets/images/property_mama.jpg": "9ad4ba69385a44a987e22e6c07f668c1",
"assets/assets/images/property_queen.jpg": "708e00ec2677fb5d7a458d2a552867fe",
"assets/assets/json/translations.json": "2fa647b624972e57d888f7a97c1d0c5f",
"assets/assets/videos/audrey_video1.mp4": "c9c9b8d6bd9f6d33fc00ef001608605e",
"assets/assets/videos/audrey_video2.mp4": "324f46975b7b2dd5ac85811b0d96fe24",
"assets/assets/videos/audrey_video3.mp4": "db48880598555a799fe6869ff8d2a0bf",
"assets/assets/videos/audrey_video4.mp4": "47ec81a821fae714ad7c2bd986ad4cb2",
"assets/assets/videos/butterfly.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/assets/videos/test_video.mp4": "bd506b0d27ba8463c5845e8df7283d95",
"assets/FontManifest.json": "66decfe0364b843cd039e0e780828fb8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "92330c14175e80e7c128734f6447a00b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5c3a2e0bd9a1b7e974597dc6ccf3637",
"/": "a5c3a2e0bd9a1b7e974597dc6ccf3637",
"main.dart.js": "6ace557a1119f6d3d472e723a8542a59",
"manifest.json": "c95146b47ed79efca72edf2dba078390",
"version.json": "35a4df3de8e123efa436bc8c745735e8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
