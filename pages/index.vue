<template>
  <div>
    <HomeBanner />
    <PartnerMarquee :items="partnerList" :speed="60"/>
    
    <WhoWeServe />
    <GrowthPlans />
    <GrowthEngine />
    <TrustedByBrands />
    
    <PartnerMarquee :items="brandList" :speed="40"/>
    <ExperiencedExperts />
    <GlobalGrowthBanner />
  </div>
</template>

<script setup>
const partnerImages = import.meta.glob('~/assets/image/partner-icon/partner_*.svg', {
  eager: true,
  import: 'default'
})

const partnerList = Array.from({ length: 18 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0')
  return {
    src: partnerImages[`/assets/image/partner-icon/partner_${num}.svg`] || '',
    alt: `Partner Logo ${num}`
  }
})

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