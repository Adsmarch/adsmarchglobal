export default defineNuxtPlugin(() => {
  if (process.client) {
    if (document.getElementById('wati-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'wati-widget-script'; 
    script.src = 'https://unpkg.com/@aimer2024/wati-widget@latest/wati-widget.umd.js';
    script.async = true;

    const options = {
      brandSetting: {
        brandName: "AdsmarchGlobal",
        brandSubTitle: "",
        brandImg: "https://www.adsmarchglobal.com/footer-icon.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello,\n I have a question about {{page_link}}",
        backgroundColor: "#00E785",
        ctaText: "Chat With Us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "8619821218067"
      }
    };
    script.onload = () => {
      if (typeof window.WatiWidget !== 'undefined') {
        window.WatiWidget.CreateWhatsappChatWidget(options);
      }
    };
    document.body.appendChild(script);
  }
});
