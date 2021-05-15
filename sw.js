// variablen
const staticCacheName = 'MediCache'
const assets = [
    './',
    './index.html',
    './medi_time.html',
    './app.js',
    './medi.js',
    './style.js',
    './sounds/GONG.wav'
]



// install sw

self.addEventListener( 'install', () => {
    console.log('sw ist insalled')
    // caches
    evt.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            console.log('all in cache!')
            cache.addAll(assets)
        })
    )
})

// active 

self.addEventListener('activate', evt => {
    console.log('sw is active', evt)
})

// fetch
self.addEventListener('fetch', evt => {
    console.log(evt)
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRe => {
            return cacheRe || fetch(evt.request)
        })
    )

})