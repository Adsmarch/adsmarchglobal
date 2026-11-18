<template>
  <section ref="sectionRef" class="w-full bg-[#FAFCFE] py-16 md:py-24 overflow-hidden relative">
    <div class="max-w-site mx-auto px-[15px] md:px-[32px] lg:px-[64px] relative w-full">
      
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-end mb-8 md:mb-6">
  
  <div 
    class="md:col-span-2 mb-12"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  >
    <div class="max-w-[720px]">
        <span class="text-[28px] md:text-[48px] font-bold text-[#1763F5] leading-[1.25] block mb-4">
        For Global Growth
        </span>
        <h2 class="text-[28px] md:text-[48px] font-bold text-[#111218] leading-[1.25] mb-4">
        AdsMarch Is The Professional
        </h2>
        <p class="text-[14px] md:text-[18px] text-[#627293] leading-[1.5]">
        As A Service Provider Offering An AI-Plus-Expert-Driven, Full-Funnel Marketing Growth System For Global Enterprises, AdsMarch's Robust Professional Expertise Serves As The Bedrock Of Its Ability To Fuel Global Expansion.
        </p>
    </div>
  </div>

  <div 
    class="lg:col-start-3 lg:col-span-1 w-full"
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0, transition: { duration: 700, type: 'spring', delay: 100 } }"
  >
    <div class="bg-[#FFFFFF] p-6 md:p-8 rounded-[12px]  shadow-[2px_3px_6px_#A9B3C652] w-full transition-all duration-300  hover:shadow-[2px_3px_6px_0px_#6253FC52] text-center h-[128px] md:h-[180px] group">
      <div class="text-[36px] xl:text-[64px] font-bold leading-[1.25] text-[#6253FC] transition-all duration-300 group-hover:text-[37px] xl:group-hover:text-[65px]">
        {{ displayTeam }}+
      </div>
      <div class="text-[16px] xl:text-[18px] text-[#627293] font-bold leading-[1.25]">
        Team Members
      </div>
    </div>
  </div>

</div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-12 mb-8">
        
        <div 
          v-for="(stat, index) in bottomStats" 
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ 
            opacity: 1, 
            y: 0, 
            transition: { duration: 700, type: 'spring', delay: 200 + index * 120 } 
          }"
          class="bg-[#FFFFFF] p-6 md:p-8 rounded-[12px] shadow-[2px_3px_6px_#A9B3C652] w-full transition-all duration-300  hover:shadow-[2px_3px_6px_0px_#6253FC52] text-center h-[128px] md:h-[180px] group"
        >
          <div>
            <div class="text-[36px] xl:text-[64px] font-bold leading-[1.25] text-[#6253FC] transition-all duration-300 group-hover:text-[37px] xl:group-hover:text-[65px]">
              <template v-if="stat.type === 'decimal'">
                {{ displayDecimal.toFixed(1) }} Billion+
              </template>
              <template v-else-if="stat.type === 'years'">
                {{ displayYears }}+Years
              </template>
              <template v-else-if="stat.type === 'brands'">
                {{ displayBrands }}+
              </template>
            </div>
          </div>
          <div class="text-[16px] xl:text-[18px] text-[#627293] font-bold leading-[1.25]">
            {{ stat.label }}
          </div>
        </div>

      </div>
      <div 
        class="w-full md:pt-6 text-left"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
      >
        <p class="text-[16px] md:text-[20px] text-[#A9B3C6] leading-[1.5] font-bold tracking-[5%]">
          In Addition, As A Google Greater China Tier 1 Agent, Shopify Plus Official Partner, And Impact Official Partner, MaiChi Technology Has Accompanied Many Companies To Achieve Global Growth.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const hasAnimated = ref(false)

const displayTeam = ref(0)
const displayBrands = ref(0)
const displayDecimal = ref(0.0)
const displayYears = ref(0)

const bottomStats = [
  { label: 'Brands Served', type: 'brands' },
  { label: 'USD Overseas Advertising Expenditure', type: 'decimal' },
  { label: 'Of Overseas Marketing Experience', type: 'years' }
]

const startCountAnimation = () => {
  const duration = 1500 
  const steps = 40
  const stepTime = duration / steps

  let currentStep = 0
  const targetTeam = 200
  const targetBrands = 1000
  const targetDecimal = 2.1
  const targetYears = 10

  const timer = setInterval(() => {
    currentStep++
    displayTeam.value = Math.floor((targetTeam / steps) * currentStep)
    displayBrands.value = Math.floor((targetBrands / steps) * currentStep)
    displayDecimal.value = Number(((targetDecimal / steps) * currentStep).toFixed(1))
    displayYears.value = Math.floor((targetYears / steps) * currentStep)

    if (currentStep >= steps) {
      displayTeam.value = targetTeam
      displayBrands.value = targetBrands
      displayDecimal.value = targetDecimal
      displayYears.value = targetYears
      clearInterval(timer)
    }
  }, stepTime)
}

let observer = null
onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            hasAnimated.value = true
            startCountAnimation()
            if (observer && sectionRef.value) {
              observer.unobserve(sectionRef.value)
            }
          }
        })
      },
      { threshold: 0.3 }
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