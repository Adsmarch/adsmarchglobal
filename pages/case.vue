<template>
  <div>
    <GlobalBrands />
    <PartnerMarquee :items="brandList" :speed="40"/>
    <Blogs />
  </div>
</template>

<script setup>
    import GlobalBrands from '~/components/insights/GlobalBrands.vue'
    import Blogs from '~/components/insights/Blogs.vue'


    const brandImages = import.meta.glob('~/assets/image/partner-icon/brand_*.svg', {
    eager: true,
    import: 'default'
    })

    const brandList = Array.from({ length: 6 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    return {
        src: brandImages[`/assets/image/partner-icon/brand_${num}.svg`] || '',
        alt: `Brand Logo ${num}`
    }
    })
</script>