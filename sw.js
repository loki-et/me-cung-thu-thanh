// Bump VERSION whenever any file changes so players get the update.
const VERSION='mctt-v105';
const FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','mqtt.min.js','fb/firebase-app-compat.js','fb/firebase-auth-compat.js','fb/firebase-firestore-compat.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  // Network first (skipping the browser's HTTP cache) so updates show up at once; cache fallback for offline play.
  const same=new URL(e.request.url).origin===location.origin;
  if(!same)return; // Firebase and other services talk to the network directly
  e.respondWith(fetch(new Request(e.request,{cache:'no-cache'})).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
