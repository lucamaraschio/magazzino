// Service worker minimo per abilitare l'installazione PWA su Android Chrome.
// Non fa caching aggressivo: lascia passare tutto alla rete, così gli update
// dell'app si vedono subito al reload senza doversi ricordare di bustare la cache.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {
  // Handler vuoto: Chrome lo richiede per considerare il sito installabile.
  // Le richieste proseguono normalmente verso la rete.
});
