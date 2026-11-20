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

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mx-auto">
        <div 
          v-for="n in 2" 
          :key="'skeleton-' + n"
          class="bg-white rounded-[12px] md:rounded-[20px] p-6 lg:p-6 lg:pb-8 border border-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52] lg:shadow-none lg:border-[#E9EBF1] flex flex-col animate-pulse min-h-[480px]"
        >
          <div class="w-full h-[175px] lg:h-[334px] rounded-[4px] md:rounded-[8px] bg-[#E1EDFE]/60 mb-8"></div>
          <div class="flex flex-col flex-1 justify-between space-y-3">
            <div class="h-6 lg:h-8 bg-[#E1EDFE]/60 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mx-auto">
        <div 
          v-for="(item, index) in serveList" 
          :key="item.id || index"
          class="bg-white rounded-[12px] md:rounded-[20px] p-6 lg:p-6 lg:pb-8 border border-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52] lg:shadow-none lg:border-[#E9EBF1] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-[#CCE0FF] lg:hover:shadow-[2px_3px_6px_0px_#6253FC52]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: (index + 1) * 200 } }"
        >
          <div class="w-full h-[175px] lg:h-[334px] rounded-[4px] md:rounded-[8px] overflow-hidden mb-8 bg-slate-100">
            <img
              v-if="item.image"
              :src="getFileUrl(item, item.image)"
              :alt="item.title"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="flex flex-col flex-1 justify-between">
            <h3 class="text-[20px] lg:text-[32px] font-bold text-[#111218] mb-1">
              {{ item.title }}
            </h3>
            <p class="text-[14px] lg:text-base text-[#627293] leading-[150%]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $pb } = useNuxtApp()

const serveList = ref([])
const loading = ref(true)

const getFileUrl = (record, filename) => {
  if (!record || !filename) return ''
  return $pb.files.getURL(record, filename)
}

const fetchWhoWeServe = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('who_we_serve').getFullList({
      sort: 'created',
      requestKey: null,
    })
    serveList.value = resultList || []
  } catch (error) {
    console.error('Failed to fetch who_we_serve:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchWhoWeServe()
})
</script>