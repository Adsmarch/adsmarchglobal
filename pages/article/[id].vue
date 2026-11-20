<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <button 
      @click="router.back()" 
      class="mb-8 text-sm text-[#1763F5] hover:underline flex items-center gap-1 cursor-pointer"
    >
      &larr; Back
    </button>

    <div v-if="loading" class="text-center py-20 text-[#627293]">
      Loading...
    </div>

    <!-- 统一使用 article 变量进行渲染 -->
    <article v-else-if="article" class="bg-white rounded-[20px] p-8 border border-[#CCE0FF]/60 shadow-[2px_3px_6px_0px_#9BC2FF52]">
      <h1 class="text-3xl md:text-4xl font-bold text-[#111218] mb-6">
        {{ article.title }}
      </h1>

      <div v-if="article.cover_image" class="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6 bg-[#F0F5FF]">
        <img 
          :src="$pb.files.getURL(article, article.cover_image)"   
          :alt="article.title"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="text-[#627293] leading-[180%] text-base" v-html="article.shortdesc"></div>
    </article>

    <div v-else class="text-center py-20 text-[#627293]">
      Article not found.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $pb } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const article = ref(null) // 统一变量名
const loading = ref(true)

const fetchArticleDetail = async () => {
  try {
    const articleIdOrSlug = route.params.id
    // 明确指定从单数集合 'article' 中获取数据（支持 id 或 slug 查询）
    const record = await $pb.collection('article').getOne(articleIdOrSlug)
    article.value = record
  } catch (error) {
    console.error('Failed to fetch article detail:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchArticleDetail()
})
</script>