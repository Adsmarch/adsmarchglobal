import PocketBase from 'pocketbase'

export default defineNuxtPlugin((nuxtApp) => {
  const pb = new PocketBase('https://apis.adsmarchglobal.com')
  
  return {
    provide: {
      pb
    }
  }
})