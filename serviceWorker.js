self.addEventListener('install', e=>{e.waitUntil(caches.open('portfolio-v1').then(cache=>cache.addAll(['./','./index.html','./style.css','./script.js','./chatbot.js'])));});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
