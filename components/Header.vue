<template>
  <header class="sticky top-0 z-[60] bg-white text-[#627293] shadow-[0_1px_2px_0_#E9EBF1]">
    <div class="w-full px-[15px] md:px-[32px] xl:px-[64px] h-[64px] xl:h-[80px] flex items-center justify-between gap-4 max-w-site mx-auto">
      
      <NuxtLink to="/" class="flex items-center shrink-0">
        <img src="/logo.png" alt="AdsMarch Logo" class="h-6 xl:h-[28px] w-auto" />
      </NuxtLink>

      <div class="flex items-center space-x-4 xl:space-x-8 2xl:gap-[64px] xl:gap-[32px] h-full">
        
        <nav class="hidden lg:flex items-center space-x-1 h-full">
          <div 
            v-for="(item, index) in navList" 
            :key="index" 
            class="relative group h-full flex items-center cursor-pointer"
          >
            <NuxtLink 
              v-if="!item.children || item.children.length === 0" 
              :to="item.path" 
              class="flex items-center px-4 py-2 rounded-full text-[13px] 2xl:text-[14px] transition-all duration-200"
              :class="isItemActive(item) ? 'bg-[#E1EDFE] text-[#0043FF] font-bold' : 'text-[#627293] hover:text-[#0043FF] hover:bg-[#E1EDFE] hover:[text-shadow:_0.6px_0_0_currentColor]'"
            >
              {{ item.title }}
            </NuxtLink>

            <div 
              v-else 
              class="flex items-center px-4 py-2 rounded-full text-[13px] 2xl:text-[14px] transition-all duration-200"
              :class="isItemActive(item) ? 'bg-[#EAF1FC] text-[#0043FF] font-bold' : 'text-[#627293] hover:text-[#0043FF] hover:bg-[#E1EDFE] hover:[text-shadow:_0.6px_0_0_currentColor]'"
            >
              {{ item.title }}
            </div>

            <div 
              v-if="item.children && item.children.length > 0"
              class="absolute top-[88px] left-0 w-max whitespace-nowrap bg-[#FFFFFF8F] p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-[2px_3px_6px_0_#A9B3C652] backdrop-blur-[16px] rounded-[20px] space-y-3"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                class="flex items-center gap-3 px-3.5 py-3 bg-white rounded-[12px] text-[16px] text-[#627293] hover:text-[#FFFFFF] hover:font-bold hover:bg-[#1763F5] transition group/sub"
              >
                <span v-if="sub.svg" class="w-8 h-8 rounded-[8px] bg-[#E1EDFE] border border-[#E9EBF1] group-hover/sub:bg-white flex items-center justify-center shrink-0">
                  <img :src="sub.svg" alt="" class="w-5 h-5 object-contain" />
                </span>
                <span>{{ sub.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <div class="flex items-center space-x-3 xl:space-x-2 shrink-0 h-full">
          <button 
            @click="open()" 
            class="hidden md:flex items-center px-4 py-2 rounded-full text-[13px] 2xl:text-[14px] transition-all duration-200 text-[#627293] hover:text-[#0043FF] hover:bg-[#E1EDFE] hover:[text-shadow:_0.6px_0_0_currentColor]">
            connect
          </button>
          <NuxtLink 
              to="/customization" 
              class="hidden sm:inline-flex items-center leading-none justify-center gap-2 px-4 py-2 text-[14px] font-bold bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] text-white rounded-[80px] hover:bg-[linear-gradient(#0A2C85_100%)] transition whitespace-nowrap h-[36px] cursor-pointer"
            >
            Build your Growth Plan
          </NuxtLink>
        </div>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="xl:hidden text-[#627293] hover:text-[#0043FF] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg  v-if="!isMobileMenuOpen"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18.6338V20H3V18.6338H15ZM21 11.3169V12.6831H3V11.3169H21ZM21 4V5.3662H3V4H21Z" fill="#627293"/>
          </svg>

          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3.92847L12.9285 12L21 20.0715L20.0715 21L12 12.9285L3.92847 21L3 20.0715L11.0715 12L3 3.92847L3.92847 3L12 11.0715L20.0715 3L21 3.92847Z" fill="#111218"/>
          </svg>      
        </button>

        <button 
          @click="open()" 
          class="sm:hidden inline-flex items-center justify-center p-2.5 bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] text-white cursor-pointer w-[40px] h-[28px] rounded-[80px]"
          aria-label="Contact"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03569 0.844823C6.20064 -0.183159 9.08084 -0.296883 11.4702 0.63523C13.8867 1.57793 15.8323 3.60942 15.9902 6.84827C16.1497 10.1193 14.3338 12.2907 12.1875 13.6832C10.0538 15.0675 7.53892 15.7251 6.11381 16L5.92485 15.018C7.29814 14.7531 9.66719 14.1257 11.6436 12.8434C13.6073 11.5693 15.128 9.69231 14.9917 6.89712C14.8561 4.11539 13.2186 2.39121 11.107 1.5674C8.96829 0.733121 6.37489 0.841961 4.4644 1.74915L4.03569 0.844823ZM2.63482 3.07511C1.32118 4.4405 0.775499 6.21169 1.08453 7.84151C1.39116 9.45839 2.55344 11.0079 4.80376 11.9142L4.43022 12.8424C1.90381 11.825 0.479886 10.0202 0.102117 8.02814C-0.273173 6.04915 0.398221 3.95705 1.91412 2.38135L2.63482 3.07511Z" fill="white"/>
            <path d="M6.05375 7.77897V6.25359H4.80376V7.77897H6.05375Z" fill="white"/>
            <path d="M8.58053 7.77897V6.25359H7.33053V7.77897H8.58053Z" fill="white"/>
            <path d="M11.0805 7.84151V6.31612H9.83052V7.84151H11.0805Z" fill="white"/>
          </svg>
        </button>
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
        class="xl:hidden fixed inset-x-0 top-[64px] bottom-0 h-[calc(100vh-64px)] bg-[#EDF3FF] backdrop-blur-lg z-[60] px-[20px] md:px-[40px] py-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
      >
        <!-- 导航列表区域 -->
        <div class="flex-1 space-y-4 pb-10">
          <div 
            v-for="(item, index) in navList" 
            :key="index"
          >
            <!-- 没有子级的导航项：默认显示右箭头 -->
            <NuxtLink 
              v-if="!item.children || item.children.length === 0"
              :to="item.path"
              @click="isMobileMenuOpen = false"
              class="flex items-center justify-between text-[16px] space-y-6 py-2"
              :class="isItemActive(item) ? 'text-[#1763F5]' : 'text-[#627293]'"
            >
              <span>{{ item.title }}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="!m-0">
                <path d="M14 9.47888V10.5211L6.95211 17L6 15.9578L12.4801 10L6 4.04224L6.95211 3L14 9.47888Z" fill="#627293"/>
              </svg>
            </NuxtLink>

            <!-- 有子级的导航项：折叠显示 +，展开显示蓝色减号 - 且标题变蓝 -->
            <div 
              v-else
              @click="toggleSubMenu(index)"
              class="flex items-center justify-between text-[16px] font-medium cursor-pointer py-2"
              :class="openSubMenuIndices.includes(index) || isItemActive(item) ? 'text-[#1763F5]' : 'text-[#627293]'"
            >
              <span>{{ item.title }}</span>
              <span :class="openSubMenuIndices.includes(index) ? 'text-[#1763F5]' : 'text-[#627293]'">
                <svg v-if="openSubMenuIndices.includes(index)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9V10.3H3V9H17Z" fill="#1763F5"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5833 3V9.56535H17V10.732H10.5833V17H9.41667V10.732H3V9.56535H9.41667V3H10.5833Z" fill="#627293"/>
                </svg>
              </span>
            </div>

            <!-- 子菜单 -->
            <div 
              v-if="item.children && openSubMenuIndices.includes(index)" 
              class="space-y-2 pt-2"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 p-2 h-10 rounded-[8px] bg-white border border-[#E9EBF1]  text-[14px] text-[#627293]"
              >
                <span v-if="sub.svg" class="w-6 h-6 rounded-[4px] bg-[#E1EDFE] flex items-center justify-center shrink-0">
                  <img :src="sub.svg" alt="" class="w-[15px] h-[15px] object-contain" />
                </span>
                <span>{{ sub.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="pt-4 space-y-3 shrink-0">
          <button 
            @click="open(); isMobileMenuOpen = false" 
            class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] rounded-[80px] bg-transparent hover:bg-[#CCE0FF] border border-[#1763F5] text-[#1763F5] font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-full"
          >
            Connect
          </button>
          <NuxtLink 
            to="/customization"
            @click="isMobileMenuOpen = false"
            class="w-full text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] text-white text-center font-bold rounded-[80px] block"
          >
            Build Your Growth Plan
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

import appSvg from '../assets/image/menu/app.svg'
import ecommerceSvg from '../assets/image/menu/ecommerce.svg'
import creativeSvg from '../assets/image/menu/creative.svg'
import influencerSvg from '../assets/image/menu/marketing.svg'
import seoGeoSvg from '../assets/image/menu/seo-geo.svg'

const route = useRoute()

const { open } = useContactModal()

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

const navList = [
  {
    title: 'Solutions',
    children: [
      { title: 'APP Growth',svg:appSvg, path: '/services/app-growth' },
      { title: 'E-commerce Growth',svg:ecommerceSvg,  path: '/services/ecommerce-growth' }
    ]
  },
  { title: 'Capabilities',
    children: [
      { title: 'App Growth & User Acquisition',svg:appSvg, path: '/services/app-growth-acquisition' },
      { title: 'E-commerce Management & Growth',svg:ecommerceSvg, path: '/services/ecommerce-management-growth' },
      { title: 'Creative Strategy & Production',svg:creativeSvg, path: '/services/creative-strategy-production' },
      { title: 'Influencer & Creator Marketing',svg:influencerSvg, path: '/services/influencer-creator-marketing' },
      { title: 'SEO / GEO',svg:seoGeoSvg, path: '/services/seo-geo' }
    ]
  },
  { title: 'Case', path: '/case' },
  { title: 'Resource', path: '/article' },
  { title: 'About', path: '/about-us' }
]
</script>