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

        <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring', delay: 200 } }"
        class="w-full h-[232px] sm:h-[300px] md:h-[400px] rounded-[12px] md:rounded-[20px] overflow-hidden mb-8 md:mb-12 shadow-md"
        >
        <img 
            src="~/assets/image/about_01.png" 
            alt="What We Are Doing Banner" 
            class="hidden md:block w-full h-full object-cover object-center select-none"
        />
        <img 
            src="~/assets/image/about_m_01.png" 
            alt="What We Are Doing Banner Mobile" 
            class="block md:hidden w-full h-full object-cover object-center select-none"
        />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
            v-for="(item, index) in valuesList" 
            :key="item.title"
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
            {{ item.desc }}
            </p>
        </div>

        </div>
    </div>

  </section>
</template>

<script setup>
const valuesList = [
  {
    title: 'Our Mission',
    desc: 'Accelerate Measurable, Scalable Growth For Global Businesses Through Expert Insight, AI-Powered Efficiency, And Transparent, Systemized Execution.'
  },
  {
    title: 'Our Vision',
    desc: 'Redefine Global Growth Through AI, Technology, And Human Expertise. Our Culture.'
  },
  {
    title: 'Insight Before Action',
    desc: 'Understand What Truly Drives Growth Before Deciding What To Do Next.'
  },
  {
    title: 'Embrace Change',
    desc: 'Move Early, Adapt Fast, And Turn Change Into Opportunity.'
  },
  {
    title: 'End-To-End Growth',
    desc: 'Optimize The Entire Customer Journey, Not Just Individual Channels Or Metrics.'
  },
  {
    title: 'Systems Over Shortcuts',
    desc: 'Build Repeatable, Measurable Systems That Drive Continuous Improvement.'
  }
]
</script>