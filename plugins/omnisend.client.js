export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    window.omnisend = window.omnisend || [];
    window.omnisend.push(["brandID", "6af191aa714bb4bfe9142baf"]);
    window.omnisend.push(["track", "$pageViewed"]);
    
    const e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "https://omnisnippet1.com/inshop/launcher-v2.js";
    
    const t = document.getElementsByTagName("script")[0];
    if (t && t.parentNode) {
      t.parentNode.insertBefore(e, t);
    } else {
      document.head.appendChild(e);
    }
  }
})