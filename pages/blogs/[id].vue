<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <button 
      @click="router.back()" 
      class="mb-8 text-sm text-[#1D5FE0] hover:underline flex items-center gap-1"
    >
      &larr; Back
    </button>

    <div v-if="loading" class="text-center py-20 text-[#627293]">
      Loading...
    </div>

    <article v-else-if="blog" class="bg-white rounded-[20px] p-8 border border-[#CCE0FF]/60 shadow-[2px_3px_6px_0px_#9BC2FF52]">
      <h1 class="text-3xl md:text-4xl font-bold text-[#111218] mb-6">
        {{ blog.title }}
      </h1>

      <div v-if="blog.cover_image" class="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6 bg-[#F0F5FF]">
        <img 
          :src="$pb.files.getUrl(blog, blog.cover_image)" 
          :alt="blog.title"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="text-[#627293] leading-[180%] text-base">
        <p>{{ blog.shortdesc }}</p>
      </div>
    </article>

    <div v-else class="text-center py-20 text-[#627293]">
      Blog not found.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $pb } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const blog = ref(null)
const loading = ref(true)

const fetchBlogDetail = async () => {
  try {
    const blogIdOrSlug = route.params.id
    const record = await $pb.collection('blogs').getOne(blogIdOrSlug)
    blog.value = record
  } catch (error) {
    console.error('Failed to fetch blog detail:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBlogDetail()
})
</script>