<template>
  <header class="sticky top-0 z-50 bg-white text-[#627293] shadow-[0_1px_2px_0_#E9EBF1]">
    <div class="w-full px-[15px] md:px-[32px] xl:px-[64px] h-[64px] xl:h-[80px] flex items-center justify-between gap-4 max-w-site mx-auto">
      
      <NuxtLink to="/" class="flex items-center shrink-0">
        <img src="/logo.svg" alt="AdsMarch Logo" class="h-6 xl:h-9 w-auto" />
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
              class="absolute top-full left-0 w-52 bg-white border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl rounded-xl"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                class="flex items-center px-5 py-2.5 text-[14px] text-[#627293] hover:text-[#0043FF] hover:bg-[#E1EDFE] transition"
              >
                <span>{{ sub.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <div class="flex items-center space-x-3 xl:space-x-6 shrink-0 h-full">
          <button 
            @click="open()" 
            class="hidden sm:inline-flex items-center leading-none justify-center gap-2 px-4 py-2 text-[14px] font-bold bg-[#1D5FE0] text-white rounded-[80px] hover:bg-[#1441B8] transition whitespace-nowrap h-[36px] cursor-pointer"
          >
            Talk To A Growth Expert
          </button>
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
          class="sm:hidden inline-flex items-center justify-center p-2.5 bg-[#0043FF] text-white cursor-pointer w-[40px] h-[28px] rounded-[80px]"
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
        class="xl:hidden fixed inset-x-0 top-[64px] bottom-0 h-[calc(100vh-64px)] bg-white backdrop-blur-lg z-40 px-[20px] md:px-[40px] py-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
      >
        <div class="flex-1 space-y-6 pb-10">
          <div 
            v-for="(item, index) in navList" 
            :key="index"
            class="space-y-3 border-b border-[#E9EBF1] pb-4"
          >
            <NuxtLink 
              v-if="!item.children || item.children.length === 0"
              :to="item.path"
              @click="isMobileMenuOpen = false"
              class="flex items-center justify-between text-lg font-medium text-[#111218]"
            >
              <span :class="isItemActive(item) ? 'text-[#0043FF] font-semibold' : ''">{{ item.title }}</span>
            </NuxtLink>

            <div 
              v-else
              @click="toggleSubMenu(index)"
              class="flex items-center justify-between text-lg font-medium text-[#111218] cursor-pointer"
            >
              <span :class="isItemActive(item) ? 'text-[#0043FF] font-semibold' : ''">{{ item.title }}</span>
              <span>
                <svg v-if="openSubMenuIndices.includes(index)" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>

            <div 
              v-if="item.children && openSubMenuIndices.includes(index)" 
              class="ml-4 space-y-3 pt-2"
            >
              <NuxtLink 
                v-for="(sub, subIdx) in item.children" 
                :key="subIdx"
                :to="sub.path"
                @click="isMobileMenuOpen = false"
                class="block text-base text-[#627293] hover:text-[#0043FF]"
              >
                {{ sub.title }}
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <!-- <div class="pt-4">
            <NuxtLink 
              to="/contact"
              @click="isMobileMenuOpen = false"
              class="w-full py-3.5 bg-[#0043FF] text-white text-center font-semibold rounded-full block shadow-md"
            >
              Talk To A Growth Expert
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

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
      { title: 'App Promotion', path: '/services/app' },
      { title: 'E-commerce Marketing', path: '/services/ecommerce' },
      { title: 'Creative Design', path: '/services/design' },
      { title: 'KOL Marketing', path: '/services/kol' },
      { title: 'Enterprise Training', path: '/services/training' },
      { title: 'Integrated Marketing', path: '/services/marketing' },
      { title: 'SEO Optimization', path: '/services/seo' }
    ]
  },
  { title: 'CaseStudies', path: '/insights' },
  { title: 'OurApproach', path: '/about' },
  { title: 'Technology', path: '/awards' },
  {
    title: 'Resources',
    children: [
      { title: 'Careers', path: '/careers' },
      { title: 'Job Openings', path: '/jobs' }
    ]
  }
]
</script>