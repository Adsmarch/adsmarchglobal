<template>
  <div class="fixed right-4 top-[80%] -translate-y-1/2 z-50">
    <div class="group relative">
      <button 
        @click="scrollToTop"
        class="top-circle w-8 h-8 xl:w-10 xl:h-10 rounded-[80px] flex items-center justify-center text-white cursor-pointer text-center"
        aria-label="Top"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" class="w-6 h-6 md:w-auto md:h-auto">
          <path d="M21.0241 6V6.91888H14.9809L22 14.5465L21.6626 15.3071H17.1292V21.5406L16.682 22H11.318L10.8708 21.5406V15.3071H6.33736L6 14.5465L13.0191 6.91888H6.97591V6H21.0241ZM7.31889 14.3882H11.318L11.7651 14.8476V21.0811H16.2349V14.8476L16.682 14.3882H20.6811L14 7.15917L7.31889 14.3882Z" fill="white"/>
        </svg>
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
  background: linear-gradient(87.86deg, #3D5BF9 4.79%, #6253FC 100%);
  box-shadow: 1px 1px 2px 0px #6253FC52;
}
</style>