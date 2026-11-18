<template>
  <div class="fixed right-4 top-[80%] -translate-y-1/2 z-50 flex flex-col gap-3">
    <div class="group relative">
      <button 
        @click="scrollToTop"
        class="top-circle w-14 h-14 xl:w-16 xl:h-16 rounded-[80px] flex flex-col items-center justify-center text-white cursor-pointer md:group-hover:scale-105 transition-transform duration-300"
        aria-label="Top"
      >
        <span class="text-[14px] md:text-[16px] text-center leading-tight">Top</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeKey = ref(null)
const consultRef = ref(null)
const followRef = ref(null)

const toggleQr = (key) => {
  if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1024) {
    activeKey.value = activeKey.value === key ? null : key
  }
}

const handleClickOutside = (event) => {
  if (
    consultRef.value && !consultRef.value.contains(event.target) &&
    followRef.value && !followRef.value.contains(event.target)
  ) {
    activeKey.value = null
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.top-circle{
  background: url('../assets/image/bg_color.png') no-repeat 100% 100%;
  background-size: cover;
}
</style>