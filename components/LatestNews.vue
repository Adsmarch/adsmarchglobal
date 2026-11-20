<template>
  <section ref="sectionRef" class="w-full bg-[#FAFCFE] pt-12 pb-16 md:py-24 overflow-hidden">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px]">
      <div 
        class="mb-8 md:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <h2 class="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#111218] leading-[1.25] mb-3 md:mb-4">
          The Latest News From <span class="text-[#1763F5]">AdsMarch</span>
        </h2>
        <p class="text-[16px] md:text-[18px] text-[#627293] leading-[1.5] max-w-[720px]">
          Explore How Our Teams Address Growth Challenges With Data-Informed Strategies, Creative Iteration And Accountable Execution.
        </p>
      </div>

      <div 
        class="flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-8 md:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        <span class="text-[20px] font-bold text-[#111218] shrink-0">Filter:</span>
        
        <div class="flex items-center gap-1 md:gap-5 overflow-x-auto no-scrollbar -mx-[15px] px-[15px] md:mx-0 md:px-0 py-1">
          <button 
            v-for="cat in dynamicCategories" 
            :key="cat.value"
            @click="handleCategoryChange(cat.value)"
            class="md:px-6 md:py-2 px-5 py-0 pb-0.5 rounded-[80px] text-[14px] md:text-[16px] transition-all duration-300 cursor-pointer capitalize shrink-0 whitespace-nowrap h-[32px]  md:h-[40px]"
            :class="currentCategory === cat.value 
              ? 'bg-[#6253FC] text-white' 
              : 'bg-transparent text-[#627293] hover:text-[#1763F5]'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div v-if="loading">
        <div class="grid grid-cols-1 gap-5 md:hidden mb-8">
          <div v-for="n in 6" :key="'m-sk-' + n" class="bg-white rounded-[16px] p-4 border border-[#CCE0FF]/40 animate-pulse min-h-[340px]">
            <div class="w-full h-[180px] rounded-[12px] bg-[#E1EDFE]/60 mb-4"></div>
            <div class="h-4 bg-[#E1EDFE]/60 rounded w-16 mb-2"></div>
            <div class="h-5 bg-[#E1EDFE]/60 rounded-md w-3/4 mb-3"></div>
            <div class="space-y-2 mb-4">
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <div class="hidden md:flex flex-col gap-6 mb-14">
          <div v-for="n in 6" :key="'pc-sk-' + n" class="bg-white rounded-[24px] p-5 border border-[#CCE0FF]/40 animate-pulse flex items-center gap-8 min-h-[240px]">
            <div class="w-[360px] lg:w-[400px] h-[210px] rounded-[16px] bg-[#E1EDFE]/60 shrink-0"></div>
            <div class="flex-1 space-y-3">
              <div class="h-4 bg-[#E1EDFE]/60 rounded w-20"></div>
              <div class="h-7 bg-[#E1EDFE]/60 rounded-md w-4/5"></div>
              <div class="space-y-2 pt-2">
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-3/4"></div>
              </div>
              <div class="h-3 bg-[#E1EDFE]/50 rounded w-24 pt-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        
        <div class="hidden md:block">
          <template v-if="pcList.length > 0">
            <div class="flex flex-col gap-6 mb-14">
              <NuxtLink 
                v-for="(item, index) in pcList" 
                :key="'pc-' + (item.id || index)"
                :to="`/article/${item.slug || item.id}`"
                class="bg-white rounded-[20px] p-5 border border-[#E9EBF1] hover:border-[#6253FC] hover:bg-[#EDF3FF] hover:shadow-[2px_3px_6px_0px_#6253FC52] transition-all duration-300 flex items-center gap-4 md:gap-[60px] group"
              >
                <div class="w-[33%] rounded-[8px] overflow-hidden bg-[#EDF3FF] shrink-0">
                  <img 
                    v-if="item.cover_image"
                    :src="getFileUrl(item, item.cover_image)" 
                    :alt="item.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div class="flex-1 flex flex-col justify-between py-2 pr-4">
                  <div>
                    <span class="text-[14px] md:text-[20px] font-bold text-[#1763F5] group-hover:text-[#6253FC] capitalize block mb-3 md:mb-6">
                      {{ item.category ? item.category.replace(/-/g, ' ') : 'News' }}
                    </span>
                    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111218] line-clamp-2 mb-2 md:mb-3 leading-[1.25] transition-colors">
                      {{ item.title }}
                    </h3>
                    <p class="text-[14px] md:text-[16px] text-[#627293] leading-[1.5] line-clamp-2 mb-3 md:mb-6" v-html="item.shortdesc"></p>
                  </div>
                  <div class="text-[12px] md:text-[14px] text-[#A9B3C6]">
                    {{ item.publish_date || item.created?.split(' ')[0] }}
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- PC端数字翻页器 -->
            <div v-if="pcTotalPages > 1" class="flex items-center justify-center gap-6 pt-2">
              <button 
                v-if="pcPage > 1"
                @click="handlePcPageChange(pcPage - 1)"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-[#A9B3C6] hover:text-[#1763F5] cursor-pointer"
              >
                &lt;
              </button>
              <template v-for="(page, idx) in paginationItems" :key="'page-' + idx">
                <span v-if="page === '...'" class="w-9 h-9 flex items-center justify-center text-[#A9B3C6]">...</span>
                <button 
                  v-else
                  @click="handlePcPageChange(page)"
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-[16px] cursor-pointer font-bold"
                  :class="pcPage === page ? 'text-[#1763F5]' : 'text-[#A9B3C6]'"
                >
                  {{ page }}
                </button>
              </template>
              <button 
                v-if="pcPage < pcTotalPages"
                @click="handlePcPageChange(pcPage + 1)"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-[#A9B3C6] hover:text-[#1763F5] cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </template>

          <div v-else class="text-center py-16 text-[#A9B3C6] bg-white rounded-[20px] border border-[#E9EBF1]">
            No articles found in this category.
          </div>
        </div>

        <div class="block md:hidden">
          <div class="grid grid-cols-1 gap-5 mb-10">
            <NuxtLink 
              v-for="(item, index) in mobileList" 
              :key="'m-' + (item.id || index)"
              :to="`/article/${item.slug || item.id}`"
              class="w-full bg-white rounded-[16px] p-4 border border-[#E9EBF1] active:border-[#6253FC] transition-colors flex flex-col justify-between block"
            >
              <div>
                <div class="w-full h-[174px] rounded-[4px] overflow-hidden mb-6 bg-white">
                  <img v-if="item.cover_image" :src="getFileUrl(item, item.cover_image)" :alt="item.title" class="w-full h-full object-cover" />
                </div>
                <span class="text-[14px] font-bold text-[#1763F5] capitalize block mb-3">
                  {{ item.category ? item.category.replace(/-/g, ' ') : 'News' }}
                </span>
                <h3 class="text-[20px] font-bold text-[#111218] line-clamp-2 mb-2 leading-[1.25]">{{ item.title }}</h3>
                <p class="text-[14px] text-[#627293] leading-[1.5] line-clamp-3 mb-3" v-html="item.shortdesc"></p>
              </div>
              <div class="text-[12px] text-[#627293]">
                {{ item.publish_date || item.created?.split(' ')[0] }}
              </div>
            </NuxtLink>
          </div>

          <div v-if="hasMoreMobile" class="text-center pb-4">
            <button @click="handleLoadMoreMobile" :disabled="loadingMore" class="text-[#6253FC] font-bold text-[14px] py-2 px-4 cursor-pointer flex items-center justify-center gap-1.5 m-auto">
              <span>{{ loadingMore ? 'Loading...' : 'Explore More' }}</span>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="mt-0.5">
                <path d="M-0.000312805 1.192L1.19169 0L3.83969 2.728L6.48769 0L7.67969 1.192L3.83969 5.04L-0.000312805 1.192Z" fill="#6253FC"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { $pb } = useNuxtApp()

const sectionRef = ref(null)
const loading = ref(true)

const dynamicCategories = ref([{ label: 'All', value: 'all' }])
const currentCategory = ref('all')

const pcList = ref([])
const pcPage = ref(1)
const pcPerPage = 9
const pcTotalPages = ref(1)

const mobileList = ref([])
const mobilePage = ref(1)
const mobilePerPage = 6
const mobileTotalPages = ref(1)
const loadingMore = ref(false)

const hasMoreMobile = computed(() => mobilePage.value < mobileTotalPages.value)

const getFileUrl = (record, filename) => {
  if (!record || !filename) return ''
  return $pb.files.getURL(record, filename)
}

const getQueryFilter = () => {
  let filterStr = 'select = "published"'
  if (currentCategory.value !== 'all') {
    filterStr += ` && category = "${currentCategory.value}"`
  }
  return filterStr
}

const fetchCategoriesAndPc = async () => {
  try {
    const allPublished = await $pb.collection('article').getFullList({
      filter: 'select = "published"',
      sort: '-created',
      requestKey: null,
    })

    const categoriesSet = new Set()
    allPublished.forEach(item => {
      if (item.category) categoriesSet.add(item.category)
    })

    dynamicCategories.value = [
      { label: 'All', value: 'all' },
      ...Array.from(categoriesSet).map(cat => ({
        label: cat.replace(/-/g, ' '),
        value: cat
      }))
    ]

    const resultList = await $pb.collection('article').getList(pcPage.value, pcPerPage, {
      sort: '-created',
      filter: getQueryFilter(),
      requestKey: null,
    })
    
    pcList.value = resultList.items || []
    pcPage.value = resultList.page || 1
    pcTotalPages.value = resultList.totalPages || 1
  } catch (error) {
    if (!error.isAbort) {
      console.error('Failed to fetch PC articles:', error)
    }
  }
}

const fetchMobileArticles = async (page = 1, append = false) => {
  try {
    if (append) loadingMore.value = true
    const resultList = await $pb.collection('article').getList(page, mobilePerPage, {
      sort: '-created',
      filter: getQueryFilter(),
      requestKey: null,
    })
    if (append) {
      mobileList.value = [...mobileList.value, ...(resultList.items || [])]
    } else {
      mobileList.value = resultList.items || []
    }
    mobilePage.value = resultList.page || 1
    mobileTotalPages.value = resultList.totalPages || 1
  } catch (error) {
    if (!error.isAbort) {
      console.error('Failed to fetch Mobile articles:', error)
    }
  } finally {
    loadingMore.value = false
  }
}

const handleCategoryChange = async (catValue) => {
  if (currentCategory.value === catValue) return
  currentCategory.value = catValue
  loading.value = true
  pcPage.value = 1
  mobilePage.value = 1
  
  await Promise.all([
    fetchCategoriesAndPc(),
    fetchMobileArticles(1, false)
  ])
  loading.value = false
}

const handlePcPageChange = async (targetPage) => {
  if (targetPage === pcPage.value || targetPage < 1 || targetPage > pcTotalPages.value) return
  pcPage.value = targetPage
  const resultList = await $pb.collection('article').getList(pcPage.value, pcPerPage, {
    sort: '-created',
    filter: getQueryFilter(),
    requestKey: null,
  })
  pcList.value = resultList.items || []
  
  if (sectionRef.value && import.meta.client) {
    const top = sectionRef.value.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleLoadMoreMobile = async () => {
  if (loadingMore.value || !hasMoreMobile.value) return
  await fetchMobileArticles(mobilePage.value + 1, true)
}

const paginationItems = computed(() => {
  const total = pcTotalPages.value
  const current = pcPage.value
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 3) return [1, 2, 3, '...', total]
  if (current >= total - 2) return [1, '...', total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
})

onMounted(async () => {
  loading.value = true
  await Promise.all([
    fetchCategoriesAndPc(),
    fetchMobileArticles(1, false)
  ])
  loading.value = false
})
</script>

<style scoped>
/* 隐藏移动端筛选栏横向滚动条 */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
</style>