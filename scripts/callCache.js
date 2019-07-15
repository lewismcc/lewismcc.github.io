$(document).ready(function(){
if('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker
        .register('./scripts/sw_cached_site.js')
        .then(reg => console.log('service worked registered'))
        .catch(err => console.log('service worker: Error:  ${err}'))

    })
}
})