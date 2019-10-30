const CACHE_NAME = 'portfolio-pwa-v1.2'
let urlsToCache = [
    '/manifest.json',
    '/',
    '/favicon.ico',
    '/icon.png',
    '/index.html',
    '/src/components/nav.html',
    '/src/pages/about.html',
    '/src/pages/contact.html',
    '/src/pages/home.html',
    '/src/pages/project.html',
    '/assets/css/main.css',
    '/assets/css/materialize.min.css',
    '/assets/js/main.js',
    '/assets/js/materialize.min.js',
    '/assets/js/modules/nav.js',
    '/assets/js/modules/page.js',
    '/assets/js/modules/project.js',
    '/assets/img/expo.png',
    '/assets/img/fikri.png',
    '/assets/img/kutai.png',
    '/assets/img/marcomm.png',
    '/assets/img/qiklan.png',
]

//Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    )
})

//Fetch Service Worker
self.addEventListener('fetch', event => {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(response => {
                if(response) return response
                return fetch(event.request)
            })
    )
})

//Delete Old Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
                .then(cacheNames => Promise.all(
                    cacheNames.map(cacheName => {
                        if(cacheName != CACHE_NAME) return caches.delete(cacheName)
                    })
                ))
    )
})

