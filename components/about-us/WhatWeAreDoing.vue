<template>
  <section class="w-full bg-[#FAFCFE]">
    <div class="max-w-[1440px] mx-auto px-[15px] md:px-[32px] xl:px-[64px] py-12 md:py-24">
        <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring' } }"
        class="mb-8 md:mb-12"
        >
        <h2 class="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#111218]">
            What We Are <span class="text-[#1763F5]">Doing</span>
        </h2>
        </div>

        <div v-if="loading" class="animate-pulse">
          <div class="w-full h-[232px] sm:h-[300px] md:h-[400px] rounded-[12px] md:rounded-[20px] bg-[#E1EDFE]/60 mb-8 md:mb-12"></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="n in 6" :key="'sk-' + n" class="flex flex-col space-y-2 p-4 bg-white rounded-xl border border-[#E9EBF1]">
              <div class="h-6 bg-[#E1EDFE]/60 rounded w-1/2"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-4/5"></div>
            </div>
          </div>
        </div>

        <template v-else>
          <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', delay: 200 } }"
          class="w-full h-[232px] sm:h-[300px] md:h-[400px] rounded-[12px] md:rounded-[20px] overflow-hidden mb-8 md:mb-12 shadow-md bg-[#CCE0FF]"
          >
          <img 
              v-if="bannerRecord?.image"
              :src="getFileUrl(bannerRecord, bannerRecord.image)" 
              alt="What We Are Doing Banner" 
              class="hidden md:block w-full h-full object-cover object-center select-none"
          />
          <img 
              v-if="bannerRecord?.image_m"
              :src="getFileUrl(bannerRecord, bannerRecord.image_m)" 
              alt="What We Are Doing Banner Mobile" 
              class="block md:hidden w-full h-full object-cover object-center select-none"
          />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div 
              v-for="(item, index) in valuesList" 
              :key="item.id || item.title"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 800, type: 'spring', delay: 300 + index * 100 } 
              }"
              class="flex flex-col space-y-2"
          >
              <h3 class="text-[20px] md:text-[24px] font-bold text-[#1763F5]">
              {{ item.title }}
              </h3>
              <p class="text-[14px] md:text-[16px] text-[#627293] leading-[1.5]">
              {{ item.desc || item.description }}
              </p>
          </div>

          </div>
        </template>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $pb } = useNuxtApp()

const valuesList = ref([])
const bannerRecord = ref(null)
const loading = ref(true)

const getFileUrl = (record, filename) => {
  if (!record || !filename) return ''
  return $pb.files.getURL(record, filename)
}

const fetchData = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('we_are_doing').getFullList({
      sort: 'created',
      requestKey: null,
    })
    if (resultList && resultList.length > 0) {
      bannerRecord.value = resultList[0]
      valuesList.value = resultList
    }
  } catch (error) {
    console.error('Failed to fetch we_are_doing:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>