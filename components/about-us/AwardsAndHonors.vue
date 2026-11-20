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

      <!-- ==================== 骨架屏 Loading 状态 ==================== -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6 animate-pulse">
        <div 
          v-for="n in 4" 
          :key="'skeleton-' + n"
          class="relative bg-white md:px-6 px-4 py-5 md:py-8 rounded-[12px] shadow-[2px_3px_6px_#A9B3C652] flex items-center justify-between min-h-[140px]"
        >
          <div class="w-[48px] md:w-[65px] h-12 bg-[#E1EDFE]/60 rounded"></div>
          <div class="flex-1 text-center px-4 space-y-3">
            <div class="h-6 bg-[#E1EDFE]/60 rounded w-3/4 mx-auto"></div>
            <div class="h-5 bg-[#E1EDFE]/40 rounded w-1/2 mx-auto"></div>
          </div>
          <div class="w-[48px] md:w-[65px] h-12 bg-[#E1EDFE]/60 rounded"></div>
        </div>
      </div>

      <!-- ==================== 真实动态数据展示区 ==================== -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6">
        
        <div 
          v-for="(award, index) in awardsList" 
          :key="award.id || award.title"
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
            <p class="text-[16px] md:text-[20px] text-[#627293] font-bold leading-[1.25]" v-html="award.description"></p>
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
import { ref, onMounted } from 'vue'

const { $pb } = useNuxtApp()

const awardsList = ref([])
const loading = ref(true)

const fetchAwards = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('awards_and_honors').getFullList({
      sort: 'created',
      requestKey: null,
    })
    awardsList.value = resultList || []
  } catch (error) {
    console.error('Failed to fetch awards_and_honors:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAwards()
})
</script>