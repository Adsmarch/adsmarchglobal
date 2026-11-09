<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
    
    <div class="relative w-full max-w-[1040px] bg-white md:rounded-[20px] rounded-[12px] my-8 max-h-[82vh] flex flex-col shadow-2xl">
      
      <button 
        @click="$emit('close')" 
        class="md:hidden absolute -top-8 right-0 z-50cursor-pointer"
        aria-label="Close"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E1EDFE"/>
            <path d="M12 12L16 16M16 16L20 20M16 16L20 12M16 16L12 20" stroke-width="2" stroke="#627293"/>
        </svg>
      </button>

      <div class="p-5 md:p-10 overflow-y-auto w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        
        <div class="flex justify-between items-start pb-6 md:pb-10 border-b border-[#E9EBF1]">
          <h2 class="text-[20px] md:text-[32px] font-bold text-[#1D5FE0] w-full md:w-[70%] leading-[1.25]">
            Tell Us The Details, So We Can Make The First Conversation More Productive.
          </h2>
          <button 
            @click="$emit('close')" 
            class="hidden md:flex items-center justify-center cursor-pointer shrink-0"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#E1EDFE"/>
              <path d="M14 14L20 20M20 20L26 26M20 20L26 14M20 20L14 26" stroke-width="2" stroke="#627293"/>
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-3 md:pt-10 pt-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2 ">Name <span class="text-[#1D5FE0]">*</span></label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Your Full Name" 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>

            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Company Name <span class="text-[#1D5FE0]">*</span></label>
              <input 
                v-model="form.company" 
                type="text" 
                required 
                placeholder="Full Company Name" 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Work Email <span class="text-[#1D5FE0]">*</span></label>
              <input 
                v-model="form.email" 
                type="email" 
                required 
                placeholder="Name@Company.Com" 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Phone Number <span class="text-[#1D5FE0]">*</span></label>
              <input 
                v-model="form.phone" 
                type="tel" 
                required 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Company Website</label>
              <input 
                v-model="form.website" 
                type="text" 
                placeholder="Https://" 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>

            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Country / Region <span class="text-[#1D5FE0]">*</span></label>
              <input 
                v-model="form.country" 
                type="text" 
                required 
                placeholder="Country / Region" 
                class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px] text-[#111218]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Industries</label>
              <div class="relative">
                <select 
                  v-model="form.industry" 
                  class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white md:text-[14px] text-[12px] text-[#111218] appearance-none cursor-pointer"
                  :class="{ 'text-[#A9B3C6]': !form.industry }"
                >
                  <option value="" disabled>Please Select</option>
                  <option value="电商 / DTC">eCommerce / DTC</option>
                  <option value="APP / 移动应用">APP / Mobile Applications</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#627293]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-[12px] md:text-[16px] text-[#627293] leading-[1.5] mb-2 mt-2 md:mt-0">Primary Challenge</label>
              <div class="relative">
                <select 
                  v-model="form.objective" 
                  class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white md:text-[14px] text-[12px] text-[#111218] appearance-none cursor-pointer"
                  :class="{ 'text-[#A9B3C6]': !form.objective }"
                >
                  <option value="" disabled>Please Select</option>
                  <option value="进入新市场">Enter a new market</option>
                  <option value="获取全球用户">Acquire global users</option>
                  <option value="提升获客效率">Increase conversion efficiency</option>
                  <option value="建立本地化内容">Create localized content</option>
                  <option value="扩大社交影响力">Expand social influence</option>
                  <option value="提升搜索与 AI 可见度">Increase search and AI visibility</option>
                  <option value="推动电商转化">Drive eCommerce conversion</option>
                  <option value="建立品牌认知">Build brand awareness</option>
                  <option value="其他 / 尚未确定">Other / Undecided</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#627293]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
            <div>
              <label class="block text-[12px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Monthly Marketing Budget</label>
              <div class="relative">
                <select 
                  v-model="form.budget"
                  class="w-full px-4 md:py-[11px] py-[7px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white md:text-[14px] text-[12px] text-[#111218] appearance-none cursor-pointer"
                  :class="{ 'text-[#A9B3C6]': !form.budget }"
                >
                  <option value="" disabled>Please Select</option>
                  <option value="低于 $5,000 / 月">Less than $5,000 per month</option>
                  <option value="$5,000 - $20,000 / 月">$5,000 - $20,000 per month</option>
                  <option value="$20,000 - $50,000 / 月">$20,000 - $50,000 per month</option>
                  <option value="$50,000 / 月以上">$50,000 per month and above</option>
                  <option value="尚未确定">Undecided Budget</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#627293]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-[12px] md:text-[16px] text-[#627293] leading-[1.5] mb-2">Additional Requirements</label>
            <textarea 
              v-model="form.other_content" 
              rows="3" 
              placeholder="Your Current Stage, The Channels You Already Run, The Problem You Most Want To Solve, And So On" 
              class="w-full px-[15px] md:py-[11px] py-[15px] bg-[#FAFCFE] border border-[#E9EBF1] md:rounded-[8px] rounded-[4px] focus:outline-none focus:border-[#1D5FE0] focus:bg-white placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]  text-[#111218] resize-none"
            ></textarea>
          </div>

          <p class="md:text-[14px] text-[12px] text-[#A9B3C6] leading-[1.5] md:!mt-[32px] !mt-[24px]">
            By Submitting Your Information, You Agree That Wę Will Process Your Information In Accordance With Our <a href="#" class="underline text-[#627293]">Privacy Policy</a> And Use It Solely For This Service Consultation And Subsequent Pricing Follow-Up.
          </p>

          <div class="!mt-[32px] w-full">
            <button 
              type="submit" 
              class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-3 lg:py-[15px] rounded-[80px] bg-white hover:bg-[#CCE0FF] border border-[#1D5FE0] text-[#1D5FE0] font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-full md:w-auto"
            >
              <span class="md:inline-block block">Send My Enquiry And</span> Have A Consultant Contact Me
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'submit'])

watch(() => props.isOpen, (newVal) => {
  if (typeof window !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  website: '',
  country: '',
  industry: '',
  objective: '',
  market: '',
  budget: '',
  other_content: ''
})

const resetForm = () => {
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
}

const handleSubmit = () => {
  emit('submit', { ...form })
  resetForm()
}
</script>