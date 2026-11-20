<template>
  <section class="bg-[#F0F5FF] w-full">
    <div class="max-w-[1440px] mx-auto px-[15px] md:px-[32px] xl:px-[64px] py-12 md:py-24 space-y-16 md:space-y-24">
        
        <template v-if="loading">
          <div v-for="n in 2" :key="'skeleton-' + n" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center animate-pulse">
            <div class="lg:col-span-6 w-full h-[260px] sm:h-[350px] md:h-[480px] rounded-[12px] md:rounded-[20px] bg-[#E1EDFE]/60"></div>
            <div class="lg:col-span-6 flex flex-col justify-center space-y-4 md:space-y-6">
              <div class="h-8 bg-[#E1EDFE]/60 rounded w-1/3"></div>
              <div class="space-y-2">
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div 
            v-for="(item, index) in listData" 
            :key="item.id || index"
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            <div 
              v-motion="getImageMotion(index)"
              class="lg:col-span-6 w-full h-[260px] sm:h-[350px] md:h-[480px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-lg bg-[#CCE0FF]"
              :class="item.right ? 'order-1 lg:order-2' : 'order-1 lg:order-1'"
            >
              <img 
                v-if="item.image"
                :src="getFileUrl(item, item.image)" 
                :alt="item.title || 'Who We Are Image'" 
                class="w-full h-full object-cover object-center select-none"
              />
          </div>

          <div 
              v-motion="getTextMotion(index)"
              class="lg:col-span-6 flex flex-col justify-center space-y-4 md:space-y-6"
              :class="item.right ? 'order-2 lg:order-1' : 'order-2 lg:order-2'"
          >
              <h2 v-if="item.title" class="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#111218]">
                {{ item.title }}
              </h2>
              <p class="text-[14px] md:text-[18px] text-[#627293] leading-[1.5]">
                {{ item.description }}
              </p>
          </div>

          </div>
        </template>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { $pb } = useNuxtApp()
const listData = ref([])
const loading = ref(true)

const getFileUrl = (record, filename) => {
  if (!record || !filename) return ''
  return $pb.files.getURL(record, filename)
}

const fetchWhoWeAre = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('who_we_are').getFullList({
      sort: 'created',
      requestKey: null,
    })
    listData.value = resultList || []
  } catch (error) {
    console.error('Failed to fetch who_we_are:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchWhoWeAre()
})

const { width } = useWindowSize()
const isDesktop = computed(() => width.value >= 1024)

const getImageMotion = (index) => {
  const isRight = listData.value[index]?.right
  const xVal = isDesktop.value ? (isRight ? 50 : -50) : 0
  const yVal = isDesktop.value ? 0 : 50
  const delayVal = index === 0 ? 0 : 300

  return {
    initial: { opacity: 0, x: xVal, y: yVal },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring', delay: delayVal } }
  }
}

const getTextMotion = (index) => {
  const isRight = listData.value[index]?.right
  const xVal = isDesktop.value ? (isRight ? -50 : 50) : 0
  const yVal = isDesktop.value ? 0 : 50
  const delayVal = index === 0 ? 200 : 400

  return {
    initial: { opacity: 0, x: xVal, y: yVal },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 800, type: 'spring', delay: delayVal } }
  }
}
</script>