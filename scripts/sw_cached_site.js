const cacheName = 'v1';

    //call install event
self.addEventListener('install', e =>{
    console.log('serive worker: installed');

   
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
//Call Fetch event
self.addEventListener('fetch', e=> {
    console.log('service worker: fetching');
    e.respondWith(
        fetch(e.request)
        .then(res => {
        //make a copy/clone of response
        const resClone = res.clone();
        //Open cache
        caches.open(cacheName)
        .then(cache => {
        //Add response to cache 
        cache.put(e.request, resClone );
        });
        return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
} )