<template>
  <section ref="sectionRef" class="w-full bg-[#FAFCFE] pt-2 pb-12 md:pb-24 overflow-hidden">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px]">

      <div v-if="loading">
        <div class="grid grid-cols-1 gap-5 md:hidden mb-8">
          <div v-for="n in 6" :key="'m-sk-' + n" class="bg-white rounded-[12px] p-4 pb-6 border border-[#CCE0FF]/40 animate-pulse min-h-[340px]">
            <div class="w-full h-[180px] rounded-[8px] bg-[#E1EDFE]/60 mb-5"></div>
            <div class="h-5 bg-[#E1EDFE]/60 rounded-md w-3/4 mb-3"></div>
            <div class="space-y-2 mb-6">
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          <div v-for="n in 12" :key="'pc-sk-' + n" class="bg-white rounded-[20px] p-4 pb-6 border border-[#CCE0FF]/40 animate-pulse min-h-[420px]">
            <div class="w-full h-[218px] rounded-[8px] bg-[#E1EDFE]/60 mb-6"></div>
            <div class="h-6 bg-[#E1EDFE]/60 rounded-md w-3/4 mb-3"></div>
            <div class="space-y-2 mb-6">
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
              <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        
        <div class="hidden md:block">
          <template v-if="pcList.length > 0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              <div 
                v-for="(item, index) in pcList" 
                :key="'pc-' + (item.id || index)"
                class="bg-white rounded-[20px] p-4 pb-6 border border-[#E9EBF1] shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-[#CCE0FF] hover:shadow-[2px_3px_6px_0px_#6253FC52] group"
                @click="handleCardClick(item)"
              >
                <div>
                  <div class="w-full h-[218px] rounded-[8px] overflow-hidden mb-6 bg-[#CCE0FF]">
                    <img 
                      v-if="item.cover_image"
                      :src="getFileUrl(item, item.cover_image)" 
                      :alt="item.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 class="text-[24px] font-bold text-[#111218] line-clamp-2 mb-3 group-hover:text-[#1763F5] leading-[125%] transition-colors">
                    {{ item.title }}
                  </h3>
                  <p class="text-[16px] text-[#627293] leading-[150%] line-clamp-3 mb-6" v-html="item.shortdesc"></p>
                </div>
                <div class="flex items-center pt-2">
                  <img 
                    v-if="item.expand?.partner_logo?.logo"
                    :src="getFileUrl(item.expand.partner_logo, item.expand.partner_logo.logo)" 
                    alt="Partner Logo" 
                    class="h-6 object-contain"
                  />
                </div>
              </div>
            </div>

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
                  :class="pcPage === page ? ' text-[#1763F5]' : 'text-[#A9B3C6]'"
                >
                  {{ page }}
                </button>
              </template>
              <button 
                v-if="pcPage < pcTotalPages"
                @click="handlePcPageChange(pcPage + 1)"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-[#A9B3C6] hover:text-[#1763F5]  cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </template>

          <div v-else class="text-center py-12 text-[#A9B3C6]">
            No PC blogs returned. (Check console for error logs)
          </div>
        </div>

        <div class="block md:hidden">
          <div class="grid grid-cols-1 gap-5 mb-10">
            <div 
              v-for="(item, index) in mobileList" 
              :key="'m-' + (item.id || index)"
              class="w-full bg-white rounded-[12px] p-4 pb-6 border border-[#E9EBF1] shadow-none flex flex-col justify-between cursor-pointer"
              @click="handleCardClick(item)"
            >
              <div>
                <div class="w-full h-[180px] rounded-[8px] overflow-hidden mb-5 bg-[#CCE0FF]">
                  <img v-if="item.cover_image" :src="getFileUrl(item, item.cover_image)" :alt="item.title" class="w-full h-full object-cover" />
                </div>
                <h3 class="text-[20px] font-bold text-[#111218] line-clamp-2 mb-3 leading-[125%]">{{ item.title }}</h3>
                <p class="text-[14px] text-[#627293] leading-[150%] line-clamp-3 mb-6" v-html="item.shortdesc"></p>
              </div>
              <div class="flex items-center pt-2">
                <img v-if="item.expand?.partner_logo?.logo" :src="getFileUrl(item.expand.partner_logo, item.expand.partner_logo.logo)" alt="Logo" class="h-6 object-contain" />
              </div>
            </div>
          </div>
          <div v-if="hasMoreMobile" class="text-center pb-4">
            <button @click="handleLoadMoreMobile" :disabled="loadingMore" class="text-[#6253FC] font-bold text-[14px] py-2 px-4 cursor-pointer flex items-center justify-end gap-1 m-auto">
                <span>{{ loadingMore ? 'Loading...' : 'Explore More' }}</span>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" class="mt-1">
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
const router = useRouter()

const sectionRef = ref(null)
const loading = ref(true)

const pcList = ref([])
const pcPage = ref(1)
const pcPerPage = 12
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

const fetchPcBlogs = async (page = 1) => {
  try {
    const resultList = await $pb.collection('blogs').getList(page, pcPerPage, {
      sort: '-created',
      expand: 'partner_logo',
      filter: 'status = "published"',
    })
    console.log('PC Blogs result:', resultList) // 调试日志
    pcList.value = resultList.items || []
    pcPage.value = resultList.page || 1
    pcTotalPages.value = resultList.totalPages || 1
  } catch (error) {
    console.error('Failed to fetch PC blogs:', error)
  }
}

const fetchMobileBlogs = async (page = 1, append = false) => {
  try {
    if (append) loadingMore.value = true
    const resultList = await $pb.collection('blogs').getList(page, mobilePerPage, {
      sort: '-created',
      expand: 'partner_logo',
      filter: 'status = "published"',
    })
    console.log('Mobile Blogs result:', resultList) // 调试日志
    if (append) {
      mobileList.value = [...mobileList.value, ...(resultList.items || [])]
    } else {
      mobileList.value = resultList.items || []
    }
    mobilePage.value = resultList.page || 1
    mobileTotalPages.value = resultList.totalPages || 1
  } catch (error) {
    console.error('Failed to fetch Mobile blogs:', error)
  } finally {
    loadingMore.value = false
  }
}

const handlePcPageChange = async (targetPage) => {
  if (targetPage === pcPage.value || targetPage < 1 || targetPage > pcTotalPages.value) return
  await fetchPcBlogs(targetPage)
  if (sectionRef.value && import.meta.client) {
    const top = sectionRef.value.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleLoadMoreMobile = async () => {
  if (loadingMore.value || !hasMoreMobile.value) return
  await fetchMobileBlogs(mobilePage.value + 1, true)
}

const paginationItems = computed(() => {
  const total = pcTotalPages.value
  const current = pcPage.value
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 3) return [1, 2, 3, '...', total]
  if (current >= total - 2) return [1, '...', total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
})

const handleCardClick = (item) => {
  const target = item.slug || item.id
  router.push(`/blogs/${target}`)
}

onMounted(async () => {
  loading.value = true
  // 分别独立调用，避免一个报错影响另一个
  await fetchPcBlogs(1)
  await fetchMobileBlogs(1, false)
  loading.value = false
})
</script>