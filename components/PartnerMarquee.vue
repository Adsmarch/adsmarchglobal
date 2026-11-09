<template>
  <section class="w-full bg-[#FAFCFE] py-10 md:py-20 overflow-hidden h-[120px] md:h-[auto]">
    <div class="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
      
      <div 
        class="relative w-full overflow-hidden flex mask-gradient marquee-container"
        :style="{ '--marquee-speed': `${speed}s` }"
      >
        
        <div class="flex items-center gap-2 sm:gap-4 shrink-0 animate-marquee">
          <div 
            v-for="(item, index) in displayedItems" 
            :key="'group1-' + index"
            class="flex items-center justify-center shrink-0"
          >
            <div class="w-[93px] h-[48px] md:w-auto md:h-auto overflow-hidden flex items-center justify-center">
              <img
                :src="item.src"
                :alt="item.alt"
                loading="lazy"
                decoding="async"
                class="w-full h-full md:w-auto md:h-auto object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-4 shrink-0 animate-marquee aria-hidden ml-2 sm:ml-4">
          <div 
            v-for="(item, index) in displayedItems" 
            :key="'group2-' + index"
            class="flex items-center justify-center shrink-0"
          >
            <div class="w-[93px] h-[48px] md:w-auto md:h-auto overflow-hidden flex items-center justify-center">
              <img
                :src="item.src"
                :alt="item.alt"
                loading="lazy"
                decoding="async"
                class="w-full h-full md:w-auto md:h-auto object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  speed: {
    type: Number,
    default: 40
  }
})

const displayedItems = computed(() => {
  if (!props.items || props.items.length === 0) return []
  
  let result = [...props.items]
  while (result.length < 12) {
    result = [...result, ...props.items]
  }
  return result
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee var(--marquee-speed, 40s) linear infinite;
}

.marquee-container:hover .animate-marquee {
  animation-play-state: paused;
}

.mask-gradient {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>