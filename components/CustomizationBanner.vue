<template>
  <section class="w-full h-[518px] md:h-[800px] flex items-center relative overflow-hidden box-border bg-white">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img
        src="~/assets/image/custon_banner.png"
        alt="Customization Banner PC"
        class="hidden lg:block w-full h-full object-cover"
      />
      <img
        src="~/assets/image/custon_banner_m.png"
        alt="Customization Banner Mobile"
        class="block lg:hidden w-full h-full object-cover"
      />
    </div>

    <div class="relative z-10 w-full max-w-site mx-auto px-[15px] md:px-[48px] xl:px-[64px]">
      
      <div 
        class="max-w-[640px] flex flex-col text-left"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring' } }"
      >
        <span class="text-[14px] md:text-[20px] font-bold text-[#1D5FE0] md:mb-5 mb-3 leading-[1.25]">
          AI + Expert + Global Growth.
        </span>
        <h2 class="text-[28px] md:text-[48px] leading-[1.25] font-bold text-[#111218] md:mb-5 mb-3">
          Growth Plan Builder<br />
          <span class="text-[#1D5FE0]">Available Now</span>
        </h2>

        <p class="text-[16px] md:text-[18px] leading-[1.5] md:text-[#111218] text-[#627293] md:mb-5 mb-3 max-w-[640px]">
          Not Buying A Service, But Building Your Overseas Growth Plan. Together, AI + Expert + Global Growth. Tell Us Where You Want To Grow And What To Solve. The System Flags Relevant Capabilities;
        </p>

        <p class="text-[14px] font-[400] text-[#627293] mb-2">
          AI Helps Structure The Opportunity. Experts Shape The Strategy.
        </p>

        <ul class="flex flex-wrap flex-col md:flex-row gap-1 md:gap-6 list-none p-0 m-0 mb-8 md:mb-10 text-[12px] text-[#627293]">
          <li>• No Online Payment</li>
          <li>• No Fixed Pricing Shown</li>
          <li>• A Consultant Confirms The Scope Item By Item</li>
        </ul>

        <div>
          <NuxtLink 
            to="/" 
            class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[#1D5FE0] hover:bg-[#1441B8] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[65%] md:w-auto"
          >
            <span>← Back to home</span>
          </NuxtLink>
        </div>

      </div>

    </div>
  </section>
</template>