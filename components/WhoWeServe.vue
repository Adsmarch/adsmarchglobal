<template>
  <section class="w-full bg-[#E9EBF1] py-12 md:py-24 overflow-hidden shadow-[0px_1px_2px_0px_#E9EBF1]">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px]">
      <div 
        class="text-center mb-8 lg:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-[28px] lg:text-[48px] font-bold text-[#111218] leading-tight">
          Who We Serve
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mx-auto">
        <div 
          class="bg-white rounded-[12px] md:rounded-[20px] p-6 lg:p-6 lg:pb-8 border border-[#CCE0FF] shadow-[2px_3px_6px_0px_#9BC2FF52] lg:shadow-none lg:border-[#E9EBF1] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-[#CCE0FF] lg:hover:shadow-[2px_3px_6px_0px_#9BC2FF52]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div class="w-full h-[175px] lg:h-[334px] rounded-[4px] md:rounded-[8px] overflow-hidden mb-8 bg-slate-100">
            <img
              src="~/assets/image/serve_01.png"
              alt="Apps & Digital Products"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="flex flex-col flex-1 justify-between">
            <h3 class="text-[20px] lg:text-[32px] font-bold text-[#111218] mb-1">
              Apps & Digital Products
            </h3>
            <p class="text-[14px] lg:text-base text-[#627293] leading-[150%]">
              For Mobile, Desktop, And Web Apps Across AI, Tools, Social, Fintech, And More—Focused On User Acquisition, Global Expansion, And Sustainable Growth.
            </p>
          </div>
        </div>

        <div 
          class="bg-white rounded-[12px] md:rounded-[20px] p-6 lg:p-6 lg:pb-8 border border-[#CCE0FF] shadow-[2px_3px_6px_0px_#9BC2FF52] lg:shadow-none lg:border-[#E9EBF1] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-[#CCE0FF] lg:hover:shadow-[2px_3px_6px_0px_#9BC2FF52]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          <div class="w-full h-[175px] lg:h-[334px] rounded-[4px] md:rounded-[8px] overflow-hidden mb-8 bg-slate-100">
            <img
              src="~/assets/image/serve_02.png"
              alt="DTC & E-Commerce"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="flex flex-col flex-1 justify-between">
            <h3 class="text-[20px] lg:text-[32px] font-bold text-[#111218] mb-1">
              DTC & E-Commerce
            </h3>
            <p class="text-[14px] lg:text-base text-[#627293] leading-[150%]">
              For DTC Brands, Online Retailers, And E-Commerce Businesses Looking To Expand Globally, Acquire Customers, And Scale Online Sales.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>