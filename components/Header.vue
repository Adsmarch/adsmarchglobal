<template>
  <header class="sticky top-0 z-50 bg-black text-white shadow-[0_2px_8px_0_#5258701F]">
    <div class="w-full px-[15px] md:px-[40px] xl:px-[120px] h-[72px] xl:h-[96px] flex items-center justify-between gap-4">
      
      <!-- 替换 NuxtLinkLocale 为标准的 NuxtLink -->
      <NuxtLink to="/" class="flex items-center shrink-0">
        <img src="/logo.svg" alt="AdsMarch Logo" class="h-6 xl:h-10 w-auto" />
      </NuxtLink>

      <div class="flex items-center space-x-4 xl:space-x-8 2xl:gap-[120px] xl:gap-[40px] h-full">
        
        <nav class="hidden xl:flex items-center space-x-6 2xl:space-x-10 h-full">
          <div 
            v-for="(item, index) in navList" 
            :key="index" 
            class="relative group h-full flex items-center cursor-pointer"
          >
            <NuxtLink 
              v-if="!item.children || item.children.length === 0" 
              :to="item.path" 
              class="group/nav flex items-center space-x-1.5 cursor-pointer transition"
            >
              <span class="w-[5px] h-[12px] -skew-x-[15deg] transition-colors duration-200"
                :class="isItemActive(item) ? 'bg-[#0043FF]' : 'bg-[#454C5F] group-hover/nav:bg-[#0043FF]'"></span>
              <span class="text-[16px] 2xl:text-[20px] whitespace-nowrap font-[400] transition-colors duration-200"
                :class="isItemActive(item) ? 'text-[#0043FF]' : 'text-white group-hover/nav:text-[#0043FF]'">
                {{ item.title }}
              </span>
            </NuxtLink>

            <div 
              v-else 
              class="group/nav flex items-center space-x-1.5 cursor-pointer transition"
            >
              <span class="w-[5px] h-[12px] -skew-x-[15deg] transition-colors duration-200"
                :class="isItemActive(item) ? 'bg-[#0043FF]' : 'bg-[#454C5F] group-hover/nav:bg-[#0043FF]'"></span>
              <span class="text-[16px] 2xl:text-[20px] whitespace-nowrap font-[400] transition-colors duration-200"
                :class="isItemActive(item) ? 'text-[#0043FF]' : 'text-white group-hover/nav:text-[#0043FF]'">
                {{ item.title }}
              </span>
            </div>

            <div 
              v-if="item.children && item.children.length > 0"
              class="absolute top-full left-0 -ml-6 w-60 bg-[#131416] backdrop-blur-md py-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                class="flex items-center px-6 py-2.5 text-sm xl:text-base 2xl:text-[18px] text-white hover:text-[#0043FF] transition group/sub gap-2.5"
              >
                <span class="w-[5px] h-[12px] bg-[#454C5F] -skew-x-[15deg] group-hover/sub:bg-[#0043FF] transition-colors duration-200"></span>
                <span>{{ sub.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <div class="flex items-center space-x-3 xl:space-x-6 shrink-0 h-full">
          <NuxtLink 
            to="/contact" 
            class="hidden sm:inline-flex items-center leading-none justify-center gap-2 px-4 py-2 xl:px-6 xl:py-3 text-sm xl:text-base 2xl:text-[20px] font-semibold bg-[#0043FF] text-white rounded hover:bg-[#103C93] transition whitespace-nowrap h-[40px]"
          >
            联系我们
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" class="w-1.5 h-3">
              <path d="M5.99207 6.0069L2.54386 12L0 12L3.45219 6L0 -2.62268e-07L2.54386 -1.51073e-07L5.99207 5.9931L6 5.9931L5.99605 6L6 6.0069L5.99207 6.0069Z" fill="white"/>
            </svg>
          </NuxtLink>
        </div>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="xl:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5H21M3 12H21M3 19.5H15" stroke="white" stroke-width="2"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3.92847L12.9285 12L21 20.0715L20.0715 21L12 12.9285L3.92847 21L3 20.0715L11.0715 12L3 3.92847L3.92847 3L12 11.0715L20.0715 3L21 3.92847Z" fill="white"/>
          </svg>      
        </button>

        <NuxtLink 
          to="/contact" 
          class="sm:hidden inline-flex items-center leading-none justify-center gap-1 px-2 text-sm font-semibold bg-[#0043FF] text-white hover:opacity-80 transition active:scale-95 whitespace-nowrap h-[24px] rounded-[2px]"
        >
          联系我们
          <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99471 4.0046L1.6959 8L2.38419e-07 8L2.30146 4L2.38419e-07 -1.74846e-07L1.6959 -1.00715e-07L3.99471 3.9954L4 3.9954L3.99737 4L4 4.0046L3.99471 4.0046Z" fill="white"/>
          </svg>
        </NuxtLink>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="xl:hidden fixed inset-x-0 top-[72px] bottom-0 h-[calc(100vh-72px)] bg-[#131416] backdrop-blur-lg z-40 px-[15px] md:px-[40px] py-8 flex flex-col justify-between"
      >
        <div class="flex-1 overflow-y-auto min-h-0 pr-1 space-y-8 pb-10">
          <div 
            v-for="(item, index) in navList" 
            :key="index"
            class="space-y-8"
          >
            <NuxtLink 
              v-if="!item.children || item.children.length === 0"
              :to="item.path"
              @click="isMobileMenuOpen = false"
              class="flex items-center justify-between text-base font-medium group cursor-pointer"
            >
              <div class="flex items-center gap-[6px] text-[20px]">
                <span class="w-[5px] h-[12px] -skew-x-[15deg] transition-colors duration-200"
                  :class="isItemActive(item) ? 'bg-[#0043FF]' : 'bg-[#454C5F] group-hover:bg-[#0043FF]'"></span>
                <span class="transition-colors duration-200"
                  :class="isItemActive(item) ? 'text-[#0043FF]' : 'text-white group-hover:text-[#0043FF]'">{{ item.title }}</span>
              </div>
            </NuxtLink>
            <div 
              v-else
              @click="toggleSubMenu(index)"
              class="flex items-center justify-between text-base font-medium cursor-pointer"
            >
              <div class="flex items-center gap-[6px] text-[20px]">
                <span 
                  class="w-[5px] h-[12px] -skew-x-[15deg] transition-colors duration-200"
                  :class="openSubMenuIndices.includes(index) ? 'bg-[#0043FF]' : 'bg-[#454C5F]'"
                ></span>
                <span 
                  class="transition-colors duration-200"
                  :class="openSubMenuIndices.includes(index) ? 'text-[#0043FF]' : 'text-white'"
                >
                  {{ item.title }}
                </span>
              </div>

              <span>
                <svg v-if="openSubMenuIndices.includes(index)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.25V12.75H3V11.25H21Z" fill="white"/>
                </svg>
                
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4815 11.2264H3L3.01991 12.7513H18.5L14.7943 17H16.505L21 12.0109L16.4851 7H14.8142L18.4815 11.2264Z" fill="white"/>
                </svg>
              </span>
            </div>

            <div 
              v-if="item.children && openSubMenuIndices.includes(index)" 
              class="ml-4 space-y-6"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-2 text-base text-white hover:text-[#0043FF] transition-colors"
              >
                <span class="w-[5px] h-[8px] bg-[#454C5F] -skew-x-[15deg] transition-colors duration-200"></span>
                <span>{{ sub.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const route = useRoute()

const isItemActive = (item) => {
  const match = (path) => {
    if (path === '/insights') {
      return route.path === path || route.path.startsWith('/insight/')
    }
    return route.path === path || route.path.startsWith(path + '/')
  }
  if (item.children && item.children.length > 0) {
    return item.children.some(sub => match(sub.path))
  }
  return match(item.path)
}

const isMobileMenuOpen = ref(false)

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

watch(isMobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

const openSubMenuIndices = ref([])

const toggleSubMenu = (index) => {
  const position = openSubMenuIndices.value.indexOf(index)
  if (position > -1) {
    openSubMenuIndices.value.splice(position, 1)
  } else {
    openSubMenuIndices.value.push(index)
  }
}

// 导航数据，文案已直接写死为中文
const navList = [
  {
    title: '服务中心',
    children: [
      { title: 'App 推广', path: '/services/app' },
      { title: '电商营销', path: '/services/ecommerce' },
      { title: '创意设计', path: '/services/design' },
      { title: 'KOL 营销', path: '/services/kol' },
      { title: '企业培训', path: '/services/training' },
      { title: '整合营销', path: '/services/marketing' },
      { title: 'SEO 优化', path: '/services/seo' }
    ]
  },
  { title: '洞察方案', path: '/insights' },
  { title: '关于我们', path: '/about' },
  { title: '荣誉奖项', path: '/awards' },
  {
    title: '加入我们',
    children: [
      { title: '招贤纳士', path: '/careers' },
      { title: '热招岗位', path: '/jobs' }
    ]
  }
]
</script>