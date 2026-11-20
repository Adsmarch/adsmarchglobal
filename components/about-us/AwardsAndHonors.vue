<template>
  <section class="w-full bg-[#F0F5FF] py-12 md:py-24 overflow-hidden">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px] w-full">
      <div 
        class="text-center mb-12 md:mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, type: 'spring' } }"
      >
        <h2 class="text-[28px] sm:text-[32px] md:text-[48px] font-bold text-[#111218]">
          <span class="text-[#1763F5]">Awards</span> And <span class="text-[#1763F5]">Honors</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6">
        
        <div 
          v-for="(award, index) in awardsList" 
          :key="award.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ 
            opacity: 1, 
            y: 0, 
            transition: { duration: 800, type: 'spring', delay: index * 150 } 
          }"
          class="relative bg-[#FFFFFF] md:px-6 px-4 py-5 md:py-8 rounded-[12px] shadow-[2px_3px_6px_#A9B3C652] flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[2px_3px_6px_0px_#6253FC52]"
        >
          <div class="shrink-0 w-[48px] md:w-[65px] flex items-center justify-center select-none pointer-events-none">
            <img 
              src="~/assets/image/icon_left.svg" 
              alt="Left Icon" 
              class="w-full h-full object-contain"
            />
          </div>

          <div class="flex-1 text-center px-1 md:px-4">
            <h3 class="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0A2C85] leading-[1.25] mb-3">
              {{ award.title }}
            </h3>
            <p class="text-[16px] md:text-[20px] text-[#627293] font-bold leading-[1.25]">
              {{ award.subtitle }}
            </p>
          </div>

          <div class="shrink-0 w-[48px] md:w-[65px] flex items-center justify-center select-none pointer-events-none">
            <img 
              src="~/assets/image/icon_right.svg" 
              alt="Right Icon" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const awardsList = [
  {
    title: '2024 Google Agency Excellence Awards',
    subtitle: 'Excellence Breakthrough'
  },
  {
    title: '2023 Beluga Pioneer Awards',
    subtitle: 'Outstanding Cross-Border E-Commerce Service'
  },
  {
    title: '2025 TBI Awards',
    subtitle: 'AI Global Growth Service Provider Recognition'
  },
  {
    title: '2026 Tiger Roar Awards',
    subtitle: 'Excellence In E-Commerce Operations (GRAND PATIO)'
  }
]
</script>