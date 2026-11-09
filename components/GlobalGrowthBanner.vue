<template>
  <section class="w-full bg-[#FFFFFF] py-12 md:py-24 overflow-hidden shadow-[0px_1px_2px_0px_#E9EBF1]">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px]">
      
      <div 
        class="relative w-full rounded-[12px] md:rounded-[20px] overflow-hidden shadow-[2px_3px_6px_0px_#A9B3C652]"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
      >
        <div class="absolute inset-0 w-full h-full z-0">
          <picture>
            <source media="(max-width: 768px)" :srcset="bgM" />
            <img :src="bgPc" alt="Background" class="w-full h-full object-cover object-center" />
          </picture>
          <div class="absolute inset-0 bg-[#00000066]"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center justify-center text-center py-12 px-4 md:px-4 lg:p-16">
          
          <h2 
            class="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold text-white leading-[1.25] max-w-[313px] md:max-w-[960px] mb-3 md:mb-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
          >
            Redefine Global Growth Through AI, Technology, And Human Expertise.
          </h2>

          <p 
            class="text-[14px] sm:text-[16px] md:text-[18px] text-[#A9B3C6] leading-[1.5] max-w-[313px] md:max-w-[960px] mb-8"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
          >
            Accelerate Measurable, Scalable Growth For Global Businesses Through Expert Insight, AI-Powered Efficiency, And Transparent, Systemized Execution.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450, ease: 'easeOut' } }"
          >
            <button 
              @click="handleConsultation"
              class="text-[14px] xl:text-[16px] px-8 lg:px-9 py-3 lg:py-4 rounded-[80px] bg-[#1D5FE0] hover:bg-[#1441B8] text-white font-bold transition-all transform leading-none min-h-[40px]"
            >
              Book A Growth Consultation
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import bgPc from '@/assets/image/bg_pc.png'
import bgM from '@/assets/image/bg_m.png'

const router = useRouter()

const handleConsultation = () => {
  router.push('/consultation')
}
</script>