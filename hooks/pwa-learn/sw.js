// 每次修改 sw.js 都会触发重新安装，但是新的代码将会在下次打开页面才有效
self.addEventListener('install', e => {
  console.log('instal>>>', e)

  // waitUntil 异步完成后激活
  // e.waitUntil(new Promise(resolve => {
  //   setTimeout(resolve, 5000)
  // }))

  // skipWaiting, 直接激活
  e.waitUntil(self.skipWaiting())

})

self.addEventListener('activate', e => {
  // e.waitUntil()
  // e.waitUntil(self.clients.claim())
})

// 网络资源请求会触发
self.addEventListener('fetch', e => {
  console.log('fetch', e)
})
