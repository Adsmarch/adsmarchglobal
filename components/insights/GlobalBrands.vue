<template>
  <section class="w-full bg-[#F0F5FF] py-12 md:py-24 overflow-hidden">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px] w-full">      
      <div 
        class="max-w-[720px] mb-8 md:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, type: 'spring' } }"
      >
        <h2 class="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#111218] leading-[1.25] mb-4">
          Global Brands. <span class="text-[#1763F5]">Real Growth.</span>
        </h2>
        <p class="text-[16px] md:text-[18px] text-[#627293] leading-[1.5]">
          Explore How Our Teams Address Growth Challenges With Data-Informed Strategies, Creative Iteration And Accountable Execution.
        </p>
      </div>

      <div 
        class="hidden lg:grid grid-cols-12 gap-12 items-center"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', delay: 200 } }"
      >
        <div class="col-span-8 max-w-[800px] h-[440px] rounded-[24px] overflow-hidden shadow-lg bg-[#0A0E17] relative">
            <img 
                v-for="(item, index) in brandItems"
                :key="index"
                :src="item.image" 
                alt="Global Brands Feature" 
                class="w-full h-full object-cover object-center select-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                :class="currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
            />
        </div>

        <div class="col-span-4 flex flex-col divide-y divide-[#A9B3C6] h-full justify-center border-t  border-b border-[#A9B3C6]  ">
          <div 
            v-for="(item, index) in brandItems" 
            :key="index"
            @mouseenter="currentIndex = index"
            class="py-6 cursor-pointer group transition-all duration-300 first:pt-0 last:pb-0"
          >
            <h3 
              class="text-[20px] md:text-[24px] font-bold leading-[1.25] transition-colors duration-200"
              :class="currentIndex === index ? 'text-[#1763F5]' : 'text-[#111218] group-hover:text-[#1763F5]'"
            >
              {{ item.title }}
            </h3>
            
            <div 
              class="grid transition-all duration-300 ease-in-out"
              :class="currentIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'"
            >
              <div class="overflow-hidden">
                <p class="text-[14px] md:text-[16px] text-[#627293] leading-[1.5]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        class="block lg:hidden"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', delay: 200 } }"
      >
        <ClientOnly>
          <Swiper
            :modules="[Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="20"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            class="global-brands-swiper !pb-8"
          >
            <SwiperSlide v-for="(item, index) in brandItems" :key="index">
              <div class="flex flex-col space-y-4">
                <div class="w-full h-[240px] rounded-[16px] overflow-hidden">
                  <img :src="item.image" alt="Brand Mobile Banner" class="w-full h-full object-cover" />
                </div>
                <div class="px-2 pb-2">
                  <h3 class="text-[18px] font-bold text-[#1763F5] leading-[1.4] mb-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-[14px] text-[#627293] leading-[1.6]">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import img1 from '~/assets/image/insights_brand_01.png'
import img2 from '~/assets/image/insights_brand_02.png'
import img3 from '~/assets/image/insights_brand_03.png'

const currentIndex = ref(0)

const brandItems = [
  {
    title: "Accompanying Vidu's Full-Link Campaign Upgrade.",
    description: "By Optimizing Budgets In Testing Regions And Landing Pages, And Leveraging Multi-Dimensional Touchpoints For Precise Audience Targeting...",
    image: img1
  },
  {
    title: "Accelerating Global Expansion For Tech Innovators.",
    description: "Scaling User Acquisition Through Data-Driven Creative Iteration And Cross-Channel Funnel Optimization.",
    image: img2
  },
  {
    title: "Maximizing ROI Through Precision E-Commerce Strategies.",
    description: "Transforming Traffic Into Sustainable Growth With Comprehensive Market Insight And Lifecycle Management.",
    image: img3
  }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.global-brands-swiper :deep(.swiper-pagination) {
  bottom: 0px !important;
}
.global-brands-swiper :deep(.swiper-pagination-bullet) {
  background: #CCE0FF;
  opacity: 1;
  width: 6px;
  height: 6px;
  transition: all 0.3s ease;
  border-radius: 50%;
}
.global-brands-swiper :deep(.swiper-pagination-bullet-active) {
  background: #1763F5;
}
</style>