<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
    <ContactModal 
      :is-open="isOpen" 
      @close="close"
      @submit="handleFormSubmit"/>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'AdsMarch | AI-Powered. Expert-Led. One-Stop Global Growth',
  description: 'AdsMarch is an AI-powered, expert-led global growth partner that combines AI agents, SaaS technology, and experienced growth teams to help businesses analyze, strategize, execute, and continuously optimize their marketing efforts across international markets.',
  ogImage: 'https://adsmarch.com/logo-icon.svg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'AdsMarch | AI-Powered. Expert-Led. One-Stop Global Growth'
})

const { $pb } = useNuxtApp()

// 控制弹窗开闭的状态（全局共享）
const { isOpen, close } = useContactModal()

const handleFormSubmit = async (formData) => {
  try {
    const record = await $pb.collection('contact_us').create(formData)
    console.log('提交成功，服务器返回记录：', record)
    alert('Thank you! Your enquiry has been submitted successfully. Our expert will contact you soon.')
    close()
  } catch (error) {
    // 打印 PocketBase 返回的详细错误对象和错误信息
    //console.error('表单提交失败详情：', error)
    //console.error('错误响应数据：', error.response)
    
    // 把具体的错误原因弹窗提示出来（方便排查）
    alert(`Submission failed: ${error.message || 'Unknown error'}`)
  }
}
</script>
