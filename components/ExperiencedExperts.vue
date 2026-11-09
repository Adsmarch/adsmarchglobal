<template>
  <section ref="sectionRef" class="w-full bg-[#F0F5FF] py-16 md:py-24 overflow-hidden relative">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px] relative w-full h-full">
      
      <div 
        class="max-w-[780px] mb-8 md:mb-10 lg:mb-12 xl:absolute xl:top-0 xl:left-[64px] z-20 xl:mb-0"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <h2 class="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#111218] leading-[1.2] mb-2 md:mb-3">
          Experienced Experts. <br />
          <span class="text-[#1D5FE0]">Trusted Expertise.</span>
        </h2>
        <p class="text-[15px] md:text-[16px] text-[#627293] leading-[1.6] mb-4 md:mb-6 lg:mb-8">
          AdsMarch's Advertising Experts Bring Over A Decade Of Experience In Digital Advertising. Our Core Experts Come From Fortune Global 500 Companies And Leading Brands, With Deep Expertise In Global Advertising Platforms, Extensive Hands-On Experience In Campaign Management, And Strong Capabilities In Precision Campaign Optimization.
        </p>

        <button 
          @click="handleMeetTeam"
          class="inline-block px-6 py-[15px] rounded-[80px] border border-[#1D5FE0] text-[#1D5FE0] font-bold text-[14px] md:text-[16px] hover:bg-[#CCE0FF] transition-colors duration-300 select-none leading-[100%]"
        >
          Meet Our Team
        </button>
      </div>

      <div class="hidden xl:flex items-start justify-between w-full pt-2">
        <template v-for="(col, colIndex) in pcColumns" :key="'pc-col-' + colIndex">
          <div class="flex flex-col gap-3" :style="{ paddingTop: col.pt }">
            <template v-if="loading">
              <div v-for="n in col.count" :key="'pc-sk-' + colIndex + '-' + n" class="expert-card skeleton-loader"></div>
            </template>
            <template v-else>
              <div 
                v-for="(exp, expIdx) in getCols(col.start, col.count)" 
                :key="exp.id" 
                class="expert-card"
                :class="{ 'animate-fade-in': hasAnimated }"
                :style="{ animationDelay: `${(colIndex * 2 + expIdx) * 40}ms` }"
              >
                <img :src="$pb.files.getURL(exp, exp.image)" :alt="exp.title" class="w-full h-full object-cover" />
              </div>
            </template>
          </div>
        </template>
      </div>

      <div class="hidden lg:flex xl:hidden items-start justify-between w-full mb-12">
        <template v-for="(col, colIndex) in lgColumns" :key="'lg-col-' + colIndex">
          <div class="flex flex-col gap-3.5" :style="{ paddingTop: col.pt }">
            <template v-if="loading">
              <div v-for="n in col.count" :key="'lg-sk-' + colIndex + '-' + n" class="expert-card-lg skeleton-loader"></div>
            </template>
            <template v-else>
              <div 
                v-for="(exp, expIdx) in getCols(col.start, col.count)" 
                :key="'lg-' + exp.id" 
                class="expert-card-lg"
                :class="{ 'animate-fade-in': hasAnimated }"
                :style="{ animationDelay: `${(colIndex * 2 + expIdx) * 40}ms` }"
              >
                <img :src="$pb.files.getURL(exp, exp.image)" :alt="exp.title" class="w-full h-full object-cover" />
              </div>
            </template>
          </div>
        </template>
      </div>

      <div class="hidden md:flex lg:hidden items-start justify-between w-full mb-12">
        <template v-for="(col, colIndex) in mdColumns" :key="'md-col-' + colIndex">
          <div class="flex flex-col gap-3.5" :style="{ paddingTop: col.pt }">
            <template v-if="loading">
              <div v-for="n in col.count" :key="'md-sk-' + colIndex + '-' + n" class="expert-card-md skeleton-loader"></div>
            </template>
            <template v-else>
              <div 
                v-for="(exp, expIdx) in getCols(col.start, col.count)" 
                :key="'md-' + exp.id" 
                class="expert-card-md"
                :class="{ 'animate-fade-in': hasAnimated }"
                :style="{ animationDelay: `${(colIndex * 2 + expIdx) * 40}ms` }"
              >
                <img :src="$pb.files.getURL(exp, exp.image)" :alt="exp.title" class="w-full h-full object-cover" />
              </div>
            </template>
          </div>
        </template>
      </div>

      <div class="flex md:hidden items-start justify-between w-full pt-4 mb-12 px-1">
        <template v-for="(col, colIndex) in mColumns" :key="'m-col-' + colIndex">
          <div class="flex flex-col gap-3" :style="{ paddingTop: col.pt }">
            <template v-if="loading">
              <div v-for="n in col.count" :key="'m-sk-' + colIndex + '-' + n" class="expert-card-m skeleton-loader"></div>
            </template>
            <template v-else>
              <div 
                v-for="(exp, expIdx) in getCols(col.start, col.count)" 
                :key="'m-' + exp.id" 
                class="expert-card-m"
                :class="{ 'animate-fade-in': hasAnimated }"
                :style="{ animationDelay: `${(colIndex * 2 + expIdx) * 30}ms` }"
              >
                <img :src="$pb.files.getURL(exp, exp.image)" :alt="exp.title" class="w-full h-full object-cover" />
              </div>
            </template>
          </div>
        </template>
      </div>

      <div class="xl:absolute xl:bottom-0 xl:right-[64px] grid grid-cols-2 gap-3 sm:gap-6 mt-8 xl:mt-0 z-20">
        <div class="bg-[#E1EDFE] p-5 rounded-[20px] border border-[#E9EBF1] shadow-[2px_3px_6px_#A9B3C652] w-full lg:w-[256px] transition-transform duration-300 hover:-translate-y-2">
          <div class="text-[36px] md:text-[64px] font-bold text-[#1D5FE0] leading-[125%] mb-2">
            {{ displayExpCount }}+
          </div>
          <div class="text-[14px] md:text-[18px] text-[#627293] leading-[150%]">
            Advertising Experts
          </div>
        </div>

        <div class="bg-[#E1EDFE] p-5 rounded-[20px] border border-[#E9EBF1] shadow-[2px_3px_6px_#A9B3C652] w-full lg:w-[256px] transition-transform duration-300 hover:-translate-y-2">
          <div class="text-[36px] md:text-[64px] font-bold text-[#1D5FE0] leading-[125%] mb-2">
            {{ displayBrandsCount.toLocaleString() }}+
          </div>
          <div class="text-[14px] md:text-[18px] text-[#627293] leading-[150%]">
            Brands Served
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $pb } = useNuxtApp()
const router = useRouter()

const expertList = ref([])
const loading = ref(true)

const sectionRef = ref(null)
const hasAnimated = ref(false) 
const displayExpCount = ref(0)
const displayBrandsCount = ref(0)

const pcColumns = [
  { start: 0, count: 3, pt: '32%' },
  { start: 3, count: 3, pt: '29%' },
  { start: 6, count: 2, pt: '36%' },
  { start: 8, count: 2, pt: '40%' },
  { start: 10, count: 1, pt: '35%' },
  { start: 11, count: 2, pt: '20%' },
  { start: 13, count: 2, pt: '15%' },
  { start: 15, count: 3, pt: '8%' },
  { start: 18, count: 3, pt: '13%' },
]

const lgColumns = [
  { start: 0, count: 3, pt: '15%' },
  { start: 3, count: 3, pt: '5%' },
  { start: 6, count: 3, pt: '25%' },
  { start: 9, count: 3, pt: '0%' },
  { start: 12, count: 3, pt: '18%' },
  { start: 15, count: 3, pt: '8%' },
  { start: 18, count: 3, pt: '22%' },
]

const mdColumns = [
  { start: 0, count: 4, pt: '10%' },
  { start: 4, count: 4, pt: '25%' },
  { start: 8, count: 4, pt: '0%' },
  { start: 12, count: 4, pt: '20%' },
  { start: 16, count: 4, pt: '10%' },
]

const mColumns = [
  { start: 0, count: 5, pt: '40px' },
  { start: 5, count: 5, pt: '0px' },
  { start: 10, count: 5, pt: '50px' },
  { start: 15, count: 6, pt: '0' },
]

const fetchExperts = async () => {
  try {
    loading.value = true
    const resultList = await $pb.collection('ads_expert').getList(1, 25, {
      sort: 'created',
    })
    expertList.value = resultList.items
  } catch (error) {
    console.error('Failed to fetch experts:', error)
  } finally {
    loading.value = false
  }
}

const getCols = (start, count) => {
  return expertList.value.slice(start, start + count)
}

const handleMeetTeam = () => {
  router.push('/team')
}

const startCountAnimation = () => {
  const duration = 1500 
  const steps = 40
  const stepTime = duration / steps

  let currentStep = 0
  const targetExp = 100
  const targetBrands = 1000

  const timer = setInterval(() => {
    currentStep++
    displayExpCount.value = Math.floor((targetExp / steps) * currentStep)
    displayBrandsCount.value = Math.floor((targetBrands / steps) * currentStep)

    if (currentStep >= steps) {
      displayExpCount.value = targetExp
      displayBrandsCount.value = targetBrands
      clearInterval(timer)
    }
  }, stepTime)
}

let observer = null
onMounted(() => {
  fetchExperts()

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimated.value = true
            startCountAnimation()
            if (observer && sectionRef.value) {
              observer.unobserve(sectionRef.value)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.value) {
      observer.observe(sectionRef.value)
    }
  } else {
    hasAnimated.value = true
    startCountAnimation()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.expert-card {
  width: 128px;
  height: 128px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
  box-shadow: 2px 2px 12px 0px #9BC2FF;
  opacity: 0;
}
.expert-card:hover {
  transform: translateY(-4px);
}

.expert-card-lg {
  width: 96px;
  height: 96px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
  box-shadow: 2px 2px 10px 0px #9BC2FF;
  opacity: 0;
}

.expert-card-md {
  width: 110px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
  box-shadow: 2px 2px 10px 0px #9BC2FF;
  opacity: 0;
}

.expert-card-m {
  width: 78px;
  height: 78px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 2px 2px 8px 0px #9BC2FF;
  opacity: 0;
}

.skeleton-loader {
  background: linear-gradient(90deg, rgba(225, 237, 254, 0.4) 25%, rgba(204, 224, 255, 0.8) 50%, rgba(225, 237, 254, 0.4) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  opacity: 1 !important;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(15px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>