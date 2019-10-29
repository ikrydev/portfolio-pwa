const CACHE_NAME = 'portfolio-pwa-v1'
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

//Register Cache to Application
self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    )
})

//Using Cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(response => {
                if(response){
                    console.log(`Service Worker: Gunakan aset dari cache: ${response.url}`)
                    return response
                }
                console.log(`ServiceWorker: Memuat aset dari server: ${event.request.url}`)
                return fetch(event.request)
            })
    )
})

//Delete old Cache
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
                .then(cacheNames => Promise.all(
                    cacheNames.map(cacheName => {
                        if(cacheName != CACHE_NAME) {
                            console.log(`ServiceWorker: cache ${cacheName} dihapus`)
                            return caches.delete(cacheName)
                        }
                    })
                ))
    )
})

