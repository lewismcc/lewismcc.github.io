const cacheName = 'v1';
const cacheAssets = [
    'index.html',
    'carCatalogue.html',
    'nearbyDealers.html',
    'lookToThePast.html',
    'about.html',
    '/styles/main.css',
    '/styles/normalize.css',
    '/scripts/CataloguePage.js',
    '/LookToThePastScript.js'
];
//call install event
self.addEventListener('install', e =>{
    console.log('serive worker: installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('service worker: caching files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});
// call activate event
self.addEventListener('activate', e => {
    console.log('serive worker: activated');
    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('service worker: clearing old cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});