<template>
  <section class="w-full bg-[#FAFCFE] py-12 md:py-24 overflow-hidden shadow-[0px_1px_2px_0px_#E9EBF1]">
    <div class="max-w-site mx-auto md:px-[32px] lg:px-[64px]">
      
      <div 
        class="text-left mb-8 lg:mb-12 max-w-[720px] px-[15px] md:px-0"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#111218] leading-[1.25]">
          One-Stop Growth Solutions.<br />
          <span class="text-[#1D5FE0]">Built Around Your Goals.</span>
        </h2>
      </div>

      <div class="block lg:hidden w-full mb-6 px-[15px] md:px-0">
        <swiper
          :slides-per-view="'auto'"
          :space-between="12"
          class="w-full pb-2 plans-swiper"
        >
          <swiper-slide 
            v-for="(item, index) in planData" 
            key="'m-tab-' + index"
            class="!w-auto"
          >
            <button
              @click="currentIndex = index"
              class="flex items-center gap-3 px-4 py-2 rounded-[8px] border transition-all text-[14px] font-bold select-none bg-white"
              :class="currentIndex === index 
                ? ' border-[#CCE0FF] text-[#1D5FE0] shadow-[2px_3px_6px_0px_#9BC2FF52]' 
                : ' border-[#E9EBF1] text-[#111218]'"
            >
              <span class="flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#E1EDFE"/>
                  <path d="M19.03 27.3636V29H12.78V27.3636H19.03ZM10.5455 23.9247C10.5455 22.6224 11.7184 21.5662 13.1653 21.5661H18.5533C19.7296 21.5661 20.7469 20.8278 20.9956 19.7931L21.1376 19.2018C21.445 17.9218 22.1848 16.8006 22.8484 15.826C23.6898 14.5899 24.1818 13.11 24.1818 11.5146C24.1818 7.116 20.4673 3.63636 16 3.63636C14.2318 3.63636 12.5926 4.17596 11.2495 5.10014L10.1451 3.80016C11.7871 2.67031 13.8103 2 16 2C21.5743 2 26 6.30767 26 11.5146C25.9999 13.4153 25.4131 15.1905 24.3984 16.6809C23.7238 17.6718 23.1478 18.5738 22.9141 19.547L22.7729 20.1382C22.3435 21.9262 20.5858 23.2024 18.5533 23.2024H13.1653C12.7225 23.2025 12.3636 23.5262 12.3636 23.9247C12.3639 24.3231 12.7227 24.6461 13.1653 24.6462H20.3564V26.2826H13.1653C11.7185 26.2824 10.5457 25.2268 10.5455 23.9247ZM6 11.5146C6 9.87324 6.43714 8.32483 7.21005 6.97301L8.8267 7.72168C8.18474 8.84445 7.81818 10.1365 7.81818 11.5146C7.81825 12.7367 8.29536 13.9269 9.02823 15.0238C10.0605 16.5687 11.1849 18.287 11.5904 20.2413L9.80327 20.5417C9.46664 18.9191 8.52145 17.4402 7.47017 15.8667C6.62559 14.6026 6.00007 13.1215 6 11.5146Z" fill="#1D5FE0"/>
                </svg>
              </span>
              <span class="whitespace-nowrap">{{ item.title }}</span>
            </button>
          </swiper-slide>
        </swiper>
      </div>

      <div class="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 px-[15px] md:px-0">
        
        <div 
          class="w-full lg:w-[54.9%] flex flex-col"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <div class="relative w-full h-[248px] sm:h-[480px] lg:h-[540px] rounded-[12px] md:rounded-[20px] overflow-hidden bg-[#CCE0FF]">
            <img
              :src="currentPlan.image"
              :alt="currentPlan.title"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-opacity duration-500"
            />
           
            <div 
              class="hidden lg:block absolute bottom-0 left-0 right-0 p-8 text-z-10"
              style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.64) 100%);"
            >
              <h3 class="relative z-10 text-[32px] font-bold mb-3 text-white">
                {{ currentPlan.title }}
              </h3>
              <p class="relative z-10 text-base text-[#E9EBF1] leading-[150%] max-w-xl">
                {{ currentPlan.description }}
              </p>
            </div>
          </div>

          <div class="block lg:hidden mt-6">
            <h3 class="text-[20px] font-bold mb-1 text-[#111218]">
              {{ currentPlan.title }}
            </h3>
            <p class="text-[14px] text-[#627293] leading-[150%]">
              {{ currentPlan.description }}
            </p>
          </div>

          <div class="mt-6 text-[12px] md:text-[14px] text-[#A9B3C6] leading-[150%] font-[400]">
            Acquire, Convert And Retain More Customers Through Performance Marketing, Creative Strategy, E-Commerce Optimization And Lifecycle Insights.
          </div>
        </div>

        <div class="hidden lg:flex lg:w-[36.6%] flex-col gap-4">
          <div
            v-for="(item, index) in planData"
            :key="'pc-tab-' + index"
            @mouseenter="currentIndex = index"
            class="group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer bg-white lg:min-h-[95px]"
            :class="currentIndex === index 
              ? ' border-[#CCE0FF] text-[#1D5FE0] shadow-[2px_3px_6px_0px_#9BC2FF52]' 
              : ' border-[#E9EBF1] shadow-none hover:border-[#CCE0FF] hover:shadow-[2px_3px_6px_0px_#9BC2FF52]'"
          >
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#E1EDFE"/>
                  <path d="M28.545 41.0455V43.5H19.17V41.0455H28.545ZM15.8182 35.8871C15.8182 33.9337 17.5776 32.3493 19.748 32.3491H27.8299C29.5944 32.3491 31.1204 31.2417 31.4933 29.6896L31.7064 28.8027C32.1675 26.8827 33.2772 25.2009 34.2726 23.739C35.5348 21.8849 36.2726 19.665 36.2727 17.2718C36.2727 10.674 30.7009 5.45455 24 5.45455C21.3477 5.45455 18.8889 6.26395 16.8742 7.65021L15.2176 5.70024C17.6806 4.00547 20.7154 3 24 3C32.3614 3 39 9.4615 39 17.2718C38.9999 20.123 38.1196 22.7858 36.5977 25.0214C35.5857 26.5077 34.7217 27.8607 34.3711 29.3204L34.1594 30.2073C33.5153 32.8893 30.8787 34.8036 27.8299 34.8036H19.748C19.0838 34.8038 18.5455 35.2893 18.5455 35.8871C18.5458 36.4846 19.084 36.9691 19.748 36.9693H30.5345V39.4239H19.748C17.5778 39.4237 15.8185 37.8402 15.8182 35.8871ZM9 17.2718C9 14.8099 9.65571 12.4872 10.8151 10.4595L13.2401 11.5825C12.2771 13.2667 11.7273 15.2048 11.7273 17.2718C11.7274 19.1051 12.443 20.8903 13.5423 22.5357C15.0907 24.8531 16.7774 27.4305 17.3856 30.3619L14.7049 30.8126C14.2 28.3786 12.7822 26.1603 11.2053 23.8001C9.93838 21.9039 9.00011 19.6822 9 17.2718Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <span 
                class="font-bold lg:text-[16px] xl:text-[18px] 2xl:text-[20px] transition-colors"
                :class="currentIndex === index ? 'text-[#1D5FE0]' : 'text-[#111218]'"
              >
                {{ item.title }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

const currentIndex = ref(0)

import plan01 from '~/assets/image/plan_01.png'
import plan02 from '~/assets/image/plan_02.png'
import plan03 from '~/assets/image/plan_03.png'
import plan04 from '~/assets/image/plan_04.png'
import plan05 from '~/assets/image/plan_05.png'

const planData = [
  {
    title: 'App Growth & User Acquisition',
    description: 'Specialized mobile app scaling strategies combining performance ad networks, deep-funnel analytics, and high-retention lifecycle campaigns.',
    image: plan01
  },
  {
    title: 'E-Commerce Management & Growth',
    description: 'End-to-end online store optimization, marketplace scaling, and revenue acceleration tailored for high-growth digital merchants.',
    image: plan02
  },
  {
    title: 'Creative Strategy & Production',
    description: 'By Combining Data Insights With Creative Expertise, We Help Brands Develop More Effective, Localized Content And Continuously Improve Creative Performance.',
    image: plan03
  },
  {
    title: 'Influencer & Creator Marketing',
    description: 'Build high-impact creator partnerships that drive authentic engagement, viral brand awareness, and measurable direct response conversions.',
    image: plan04
  },
  {
    title: 'SEO & GEO',
    description: 'Comprehensive search engine optimization and global market visibility frameworks designed to compound organic traffic and authority.',
    image: plan05
  }
]

const currentPlan = computed(() => planData[currentIndex.value])
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.plans-swiper :deep(.swiper-wrapper) {
  display: flex !important;
  box-sizing: border-box;
}
</style>