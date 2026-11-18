<template>
  <section class="bg-[#F0F5FF] w-full">
    <div class="max-w-[1440px] mx-auto px-[15px] md:px-[32px] xl:px-[64px] py-12 md:py-24 space-y-16 md:space-y-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        <div 
            v-motion="img1Motion"
            class="lg:col-span-6 w-full h-[260px] sm:h-[350px] md:h-[480px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-lg"
        >
            <img 
            src="~/assets/image/about_02.png" 
            alt="Who We Are Image 1" 
            class="w-full h-full object-cover object-center select-none"
            />
        </div>

        <div 
            v-motion="text1Motion"
            class="lg:col-span-6 flex flex-col justify-center space-y-4 md:space-y-6"
        >
            <h2 class="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#111218]">
            Who We Are
            </h2>
            <p class="text-[14px] md:text-[18px] text-[#627293] leading-[1.5]">
            Founded In 2018, AdsMarch Is A Service Provider Offering An AI- And Expert-Driven, Full-Funnel Marketing Growth System For Global Enterprises. By Integrating Artificial Intelligence With A Team Of Growth Specialists, We Enable Businesses To Achieve End-To-End Growth—From Analysis And Decision-Making To Execution And Continuous Optimization. As A Premier Google Partner, AdsMarch Was Honored With The "Best Breakthrough Award" For The Greater China Region In 2024. Our Core Services Encompass App Operations, E-Commerce Management, Ad Creative Design, Overseas KOL (Influencer) Marketing, And SEO/GEO. We Are Dedicated To Providing One-Stop, Full-Funnel Digital Marketing Solutions That Help Brands Stand Out In The Global Marketplace And Achieve Sustainable Growth.
            </p>
        </div>

        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

        <div 
            v-motion="text2Motion"
            class="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center space-y-4 md:space-y-6"
        >
            <p class="text-[14px] md:text-[18px] text-[#627293] leading-[1.5]">
            Headquartered In Beijing, With Branch Offices In Shanghai, Jinan, And Nantong, AdsMarch Was Established By A Founding Team Of Seasoned Marketing Experts From Fortune 500 Companies And Leading Chinese Internet Firms. Guided By A Philosophy Of Innovation And Data-Driven Empowerment, We Have Become A Trusted Partner To Our Clients, Backed By Our Professional Expertise And Profound Market Insights. To Date, We Have Served Over 1,000 Clients Across Three Primary Sectors—Mobile Applications, E-Commerce, And Gaming—While Also Expanding Into Specialized Fields Such As AI Applications, Short-Form Drama Distribution, Travel, And Technology, Helping Our Clients Attain Exceptional Growth In The Global Market.
            </p>
        </div>

        <div 
            v-motion="img2Motion"
            class="lg:col-span-6 order-1 lg:order-2 w-full h-[260px] sm:h-[350px] md:h-[480px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-lg"
        >
            <img 
            src="~/assets/image/about_03.png" 
            alt="Who We Are Image 2" 
            class="w-full h-full object-cover object-center select-none"
            />
        </div>

        </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isDesktop = computed(() => width.value >= 1024)

const img1Motion = computed(() => ({
  initial: { opacity: 0, x: isDesktop.value ? -50 : 0, y: isDesktop.value ? 0 : 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring' } }
}))

const text1Motion = computed(() => ({
  initial: { opacity: 0, x: isDesktop.value ? 50 : 0, y: isDesktop.value ? 0 : 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring', delay: 200 } }
}))

const text2Motion = computed(() => ({
  initial: { opacity: 0, x: isDesktop.value ? -50 : 0, y: isDesktop.value ? 0 : 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring', delay: 300 } }
}))

const img2Motion = computed(() => ({
  initial: { opacity: 0, x: isDesktop.value ? 50 : 0, y: isDesktop.value ? 0 : 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring', delay: 400 } }
}))
</script>