<template>
  <section class="w-full bg-[#FAFCFE] py-16 pb-0 md:py-24 md:pb-0 overflow-hidden shadow-[0px_1px_2px_0px_#E9EBF1]">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px]">
      <div 
        class="text-center md:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <h2 class="text-[28px] md:text-[32px] lg:text-[48px] font-bold text-[#111218] leading-[1.25]">
          Trusted By Brands. <span class="text-[#1D5FE0] block md:inline-block">Driven By Growth.</span>
        </h2>
      </div>

      <div v-if="loading">
        <div class="block md:hidden mb-8 pb-6">
          <div class="flex gap-4 overflow-hidden -mx-[15px] px-[15px]">
            <div 
              v-for="n in 3" 
              :key="'m-skeleton-' + n"
              class="min-w-[82%] sm:min-w-[320px] bg-white rounded-[12px] p-4 pb-6 border border-[#CCE0FF]/40 shadow-[2px_3px_6px_0px_#9BC2FF26] flex flex-col justify-between animate-pulse shrink-0 min-h-[380px]"
            >
              <div>
                <div class="w-full h-[156px] rounded-[8px] bg-[#E1EDFE]/60 mb-6"></div>
                <div class="h-5 bg-[#E1EDFE]/60 rounded-md w-3/4 mb-3"></div>
                <div class="space-y-2 mb-6">
                  <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
                  <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
                </div>
              </div>
              <div class="h-6 w-16 bg-[#E1EDFE]/50 rounded"></div>
            </div>
          </div>
        </div>

        <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div 
            v-for="n in 6" 
            :key="'pc-skeleton-' + n"
            class="bg-white rounded-[20px] p-4 pb-6 border border-[#CCE0FF]/40 shadow-[2px_3px_6px_0px_#9BC2FF26] flex flex-col justify-between animate-pulse min-h-[420px]"
          >
            <div>
              <div class="w-full h-[218px] rounded-[8px] bg-[#E1EDFE]/60 mb-6"></div>
              <div class="h-6 bg-[#E1EDFE]/60 rounded-md w-3/4 mb-3"></div>
              <div class="space-y-2 mb-6">
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-full"></div>
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-5/6"></div>
                <div class="h-4 bg-[#E1EDFE]/40 rounded w-2/3"></div>
              </div>
            </div>
            <div class="h-6 w-20 bg-[#E1EDFE]/50 rounded"></div>
          </div>
        </div>
      </div>

      <div v-else>

        <div class="block md:hidden mb-8">
          <Swiper
            :modules="[Pagination]"
            :slides-per-view="1.2"
            :space-between="16"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            class="trusted-swiper !py-12"
          >
            <SwiperSlide 
              v-for="(item, index) in blogList" 
              :key="item.id || index"
              class="h-auto flex"
            >
              <div 
                class="w-full bg-white rounded-[12px] p-4 pb-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                :class="activeIndex === index ? 'border-[#CCE0FF] shadow-[2px_3px_6px_0px_#9BC2FF52]' : 'border-[#E9EBF1] shadow-none'"
                @click="handleCardClick(item)"
              >
                <div>
                  <div class="w-full h-[156px] md:h-[180px] rounded-[8px] overflow-hidden mb-6 bg-[#CCE0FF]">
                    <img 
                      v-if="item.cover_image"
                      :src="getFileUrl(item, item.cover_image)" 
                      :alt="item.title"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 class="text-[18px] md:text-[22px] font-bold text-[#111218] line-clamp-2 mb-3 group-hover:text-[#1D5FE0] leading-[125%]">
                    {{ item.title }}
                  </h3>
                  <p class="text-[14px] md:text-[16px] text-[#627293] leading-[150%] line-clamp-3 mb-6" v-html="item.shortdesc"></p>
                </div>

                <div class="flex items-center pt-2">
                  <img 
                    v-if="item.expand?.partner_logo?.logo"
                    :src="getFileUrl(item.expand.partner_logo, item.expand.partner_logo.logo)" 
                    alt="Partner Logo" 
                    loading="lazy"
                    decoding="async"
                    class="h-6 object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div 
            v-for="(item, index) in blogList" 
            :key="item.id || index"
            class="bg-white rounded-[20px] p-4 pb-6 border border-[#E9EBF1] shadow-none flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 cursor-pointer hover:border-[#CCE0FF] hover:shadow-[2px_3px_6px_0px_#9BC2FF52] group"
            @click="handleCardClick(item)"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          >
            <div>
              <div class="w-full h-[218px] rounded-[8px] overflow-hidden mb-6 bg-[#CCE0FF]">
                <img 
                  v-if="item.cover_image"
                  :src="getFileUrl(item, item.cover_image)" 
                  :alt="item.title"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 class="text-[24px] font-bold text-[#111218] line-clamp-2 mb-3 group-hover:text-[#1D5FE0] leading-[125%]">
                {{ item.title }}
              </h3>
              <p class="text-[16px] text-[#627293] leading-[150%] line-clamp-3 mb-6" v-html="item.shortdesc"></p>
            </div>

            <div class="flex items-center pt-2">
              <img 
                v-if="item.expand?.partner_logo?.logo"
                :src="getFileUrl(item.expand.partner_logo, item.expand.partner_logo.logo)" 
                alt="Partner Logo" 
                loading="lazy"
                decoding="async"
                class="h-6 object-contain"
              />
            </div>
          </div>
        </div>

      </div>

      <div class="text-center">
        <button 
          @click="handleExploreMore"
          class="inline-block px-6 py-[15px] rounded-[80px] border border-[#1D5FE0] text-[#1D5FE0] font-bold text-[14px] md:text-[16px] hover:bg-[#CCE0FF] transition-colors duration-300 select-none leading-[100%]"
        >
          Explore More
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const { $pb } = useNuxtApp()
const router = useRouter()

const blogList = ref([])
const loading = ref(true)
const activeIndex = ref(0)

const getFileUrl = (record, filename) => {
  if (!record || !filename) return ''
  return $pb.files.getURL(record, filename)
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

const fetchBlogs = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('blogs').getList(1, 6, {
      sort: '-created',
      expand: 'partner_logo',
    })
    blogList.value = resultList.items
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
  } finally {
    loading.value = false
  }
}

const handleCardClick = (item) => {
  const target = item.slug || item.id
  router.push(`/blogs/${target}`)
}

const handleExploreMore = () => {
  router.push('/blogs')
}

onMounted(() => {
  fetchBlogs()
})
</script>

<style>
.trusted-swiper .swiper-pagination {
  bottom: 0px !important;
}
.trusted-swiper .swiper-pagination-bullet {
  background: #CCE0FF;
  opacity: 1;
  width: 6px;
  height: 6px;
  transition: all 0.3s ease;
  border-radius: 50%;
}
.trusted-swiper .swiper-pagination-bullet-active {
  background: #1D5FE0;
}
</style>