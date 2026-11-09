<template>
  <section class="relative w-full  overflow-hidden bg-white flex items-center justify-center"
  style="min-height: calc(100vh - var(--header-height));"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img
        src="~/assets/image/index_banner_pc.png"
        alt="Banner Background PC"
        class="hidden lg:block w-full h-full object-cover object-[60%]"
      />
      <img
        src="~/assets/image/index_banner_m.png"
        alt="Banner Background Mobile"
        class="block lg:hidden w-full h-full object-cover"
      />
    </div>
    <!-- <div class="absolute inset-0 z-0 pointer-events-none">
        <video
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover opacity-90"
        >
            <source src="~/assets/video/index_banner.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-blue-950/20"></div>
    </div> -->

    <div class="relative z-10 w-full px-[15px] md:px-[32px] xl:px-[64px] max-w-site mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 ">
        
        <div 
          class="w-full md:w-[80%] pt-12 lg:w-[45%] xl:w-[54%] flex flex-col sm:items-center lg:items-start text-left"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring' } }"
        >
          <h1 class="text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] font-bold text-[#111218] leading-tight tracking-normal">
            AI-Powered.Expert-Led.<br /><span class="text-[#1D5FE0] tracking-normal">One-Stop Global Growth.</span>
          </h1>
          
          <p class="mt-2 lg:mt-4 text-[14px] lg:text-[16px] xl:text-[18px] text-[#627293]  leading-[150%]">
            We Combine AI, Technology, And Experienced Growth Teams To Help E-Commerce And App Businesses Scale Globally Through Data-Driven Insights, Strategic Planning, Expert-Led Execution, And Continuous Optimization.
          </p>

          <div class="mt-6 lg:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <NuxtLink 
                to="/customization" 
                class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[#1D5FE0] hover:bg-[#1441B8] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer"
              >
                Customize Your Growth Plan
            </NuxtLink>
            <button 
              @click="open()" 
              class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] rounded-[80px] bg-white hover:bg-[#CCE0FF] border border-[#1D5FE0] text-[#1D5FE0] font-bold  transition-all transform leading-none min-h-[40px] cursor-pointer"
            >
              Talk To A Growth Expert
            </button>
          </div>
        </div>

        <div 
          class="w-full sm:w-[80%] lg:w-[50%] xl:w-[45%] relative flex items-center justify-center"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 200 } }"
        >
          <div class="relative w-full lg:max-w-xl h-[480px] lg:h-[655px]">
            
            <div 
              class="absolute top-0 left-0 lg:left-8 lg:top-8 w-[160px] md:w-[256px] p-3 md:p-5 rounded-[20px] bg-[#FFFFFF66] backdrop-blur-md shadow-[2_3_6_rgba(169,136,152)]"
              :initial="{ y: -20, opacity: 0 }"
              :visible="{ y: 0, opacity: 1, transition: { delay: 300 } }"
            >
              <div class="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.6504 6.875L23.6846 7.02344C25.2071 13.7461 30.3505 19.0318 36.9844 20.7021L36.9512 22.6494L36.6064 22.7236C30.2198 24.1021 25.1793 29.0489 23.6484 35.4531H21.7031C20.1736 29.0542 15.1255 24.1177 8.73926 22.7637L8.19922 22.6494L8.16699 20.7012C12.8325 19.547 16.7966 16.6159 19.3018 12.6553L20.9922 13.7236C18.8017 17.1868 15.6018 19.9404 11.8047 21.5771C16.7083 23.3978 20.6433 27.1874 22.6748 32.0215C24.6885 27.2213 28.5721 23.4453 33.4189 21.5918C28.5131 19.4669 24.6395 15.4606 22.6631 10.4648C22.6258 10.5571 22.5894 10.6496 22.5508 10.7412L20.708 9.96387C21.1247 8.97581 21.4583 7.9433 21.7002 6.875H23.6504ZM8.23438 5L8.24414 5.04687C8.66985 6.92674 10.1079 8.40063 11.957 8.86621L11.9238 10.8135L11.8145 10.8369C10.0511 11.2175 8.65564 12.5849 8.23145 14.3594H6.28613C5.8626 12.5876 4.46611 11.2243 2.7041 10.8506L2.5332 10.8145L2.5 8.86523C4.37905 8.40042 5.85222 6.9029 6.2832 5H8.23438ZM7.24902 7.76758C6.73259 8.55967 6.06365 9.24117 5.28418 9.77344C6.06653 10.2665 6.73861 10.918 7.25781 11.6846C7.7709 10.9248 8.43295 10.2765 9.2041 9.7832C8.42548 9.24902 7.76036 8.56348 7.24902 7.76758Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <h3 class="font-bold text-[#111218] text-[14px] md:text-[16px] leading-tight">Creative Excellence</h3>
              <p class="text-[10px] md:text-[14px] leading-[150%] text-[#627293] mt-1">High-Impact Creatives Designed To Engage Audiences And Drive Conversions.</p>
            </div>

            <div 
              class="absolute top-8 right-0 md:top-6 lg:-right-8 lg:top-20 xl:right-0 2xl:right-12 w-[160px] md:w-[256px] p-3 md:p-5 rounded-[20px] bg-[#FFFFFF66] backdrop-blur-md shadow-[2_3_6_rgba(169,136,152)] z-[2]"
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visible="{ y: 0, opacity: 1, transition: { delay: 400 } }"
            >
              <div class="w-8 h-8 lg:w-10 lg:h-10  flex items-center justify-center mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.7875 34.2045V36.25H15.975V34.2045H23.7875ZM13.1818 29.9059C13.1818 28.2781 14.648 26.9577 16.4566 26.9576H23.1916C24.662 26.9576 25.9336 26.0347 26.2445 24.7413L26.422 24.0022C26.8062 22.4023 27.731 21.0008 28.5605 19.7825C29.6123 18.2374 30.2272 16.3875 30.2273 14.3932C30.2273 8.895 25.5841 4.54545 20 4.54545C17.7897 4.54545 15.7407 5.21995 14.0618 6.37518L12.6813 4.7502C14.7338 3.33789 17.2628 2.5 20 2.5C26.9678 2.5 32.5 7.88459 32.5 14.3932C32.4999 16.7691 31.7664 18.9882 30.498 20.8512C29.6547 22.0898 28.9348 23.2172 28.6426 24.4337L28.4661 25.1728C27.9294 27.4078 25.7323 29.003 23.1916 29.003H16.4566C15.9032 29.0032 15.4545 29.4077 15.4545 29.9059C15.4548 30.4038 15.9033 30.8076 16.4566 30.8078H25.4454V32.8532H16.4566C14.6481 32.8531 13.1821 31.5335 13.1818 29.9059ZM7.5 14.3932C7.5 12.3416 8.04642 10.406 9.01256 8.71626L11.0334 9.6521C10.2309 11.0556 9.77273 12.6707 9.77273 14.3932C9.77282 15.9209 10.3692 17.4086 11.2853 18.7797C12.5756 20.7109 13.9812 22.8588 14.488 25.3016L12.2541 25.6772C11.8333 23.6488 10.6518 21.8003 9.33771 19.8334C8.28198 18.2533 7.50009 16.4018 7.5 14.3932Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <h3 class="font-bold text-[#111218] text-[14px] md:text-[16px] leading-tight">Growth Expertise</h3>
              <p class="text-[10px] md:text-[14px] leading-[150%] text-[#627293] mt-1">Expert-Led Strategies And Execution Focused On Measurable Business Growth.</p>
            </div>

            <div 
              class="absolute top-[30%] right-[35%] md:top-36 md:left-56 lg:left-20  lg:top-72  xl:left-20 xl:top-72  w-[160px] md:w-[256px] p-3 md:p-5 rounded-[20px] bg-[#FFFFFF66] backdrop-blur-md shadow-[2_3_6_rgba(169,136,152)]"
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visible="{ y: 0, opacity: 1, transition: { delay: 500 } }"
            >
              <div class="w-8 h-8 lg:w-10 lg:h-10  flex items-center justify-center mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6227 5L13.2831 5.26934L17.2304 9.11007H31.741L32.6948 10.0778V13.9459H35.5207L36.25 15.5384C35.5105 16.4273 34.8613 17.725 34.3099 19.3035C33.7623 20.8711 33.3298 22.6583 32.9956 24.4805C32.3269 28.1271 32.0642 31.8369 32.0279 34.0483L31.0741 35H5.95377L5 34.0323C5 30.3458 5.68461 26.2663 6.5862 22.7256C7.48422 19.199 8.62126 16.1126 9.57233 14.4317L10.4004 13.9459H30.7872V11.0456H16.8467L16.1863 10.7762L12.2399 6.93548H10.8446V5H12.6227ZM10.9704 15.8814C10.1838 17.448 9.22484 20.1015 8.43321 23.2104C7.63703 26.3372 7.03038 29.8472 6.92524 33.0645H30.1474C30.2348 30.741 30.5178 27.4151 31.1207 24.1271C31.4664 22.2418 31.921 20.3496 32.5122 18.6571C32.8586 17.6654 33.2609 16.7229 33.7259 15.8814H10.9704ZM7.95446 5V6.93548H6.90754V17.0902H5V5.96774L5.95377 5H7.95446Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <h3 class="font-bold text-[#111218] text-[14px] md:text-[16px] leading-tight">AI-Powered Insights</h3>
              <p class="text-[10px] md:text-[14px] leading-[150%] text-[#627293] mt-1">AI-Assisted Analysis To Uncover Opportunities And Inform Smarter Decisions.</p>
            </div>

            <div 
              class="absolute left-0 bottom-[4%]  md:-bottom-10  lg:bottom-0  w-[160px] md:w-[256px] p-3 md:p-5 rounded-[20px] bg-[#FFFFFF66] backdrop-blur-md shadow-[2_3_6_rgba(169,136,152)]"
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visible="{ y: 0, opacity: 1, transition: { delay: 600 } }"
            >
              <div class="w-8 h-8 lg:w-10 lg:h-10  flex items-center justify-center mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.7875 34.2045V36.25H15.975V34.2045H23.7875ZM13.1818 29.9059C13.1818 28.2781 14.648 26.9577 16.4566 26.9576H23.1916C24.662 26.9576 25.9336 26.0347 26.2445 24.7413L26.422 24.0022C26.8062 22.4023 27.731 21.0008 28.5605 19.7825C29.6123 18.2374 30.2272 16.3875 30.2273 14.3932C30.2273 8.895 25.5841 4.54545 20 4.54545C17.7897 4.54545 15.7407 5.21995 14.0618 6.37518L12.6813 4.7502C14.7338 3.33789 17.2628 2.5 20 2.5C26.9678 2.5 32.5 7.88459 32.5 14.3932C32.4999 16.7691 31.7664 18.9882 30.498 20.8512C29.6547 22.0898 28.9348 23.2172 28.6426 24.4337L28.4661 25.1728C27.9294 27.4078 25.7323 29.003 23.1916 29.003H16.4566C15.9032 29.0032 15.4545 29.4077 15.4545 29.9059C15.4548 30.4038 15.9033 30.8076 16.4566 30.8078H25.4454V32.8532H16.4566C14.6481 32.8531 13.1821 31.5335 13.1818 29.9059ZM7.5 14.3932C7.5 12.3416 8.04642 10.406 9.01256 8.71626L11.0334 9.6521C10.2309 11.0556 9.77273 12.6707 9.77273 14.3932C9.77282 15.9209 10.3692 17.4086 11.2853 18.7797C12.5756 20.7109 13.9812 22.8588 14.488 25.3016L12.2541 25.6772C11.8333 23.6488 10.6518 21.8003 9.33771 19.8334C8.28198 18.2533 7.50009 16.4018 7.5 14.3932Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <h3 class="font-bold text-[#111218] text-[14px] md:text-[16px] leading-tight">End-To-End Growth</h3>
              <p class="text-[10px] md:text-[14px] leading-[150%] text-[#627293] mt-1">Integrated Solutions From Strategy And Creative To Execution And Optimization.</p>
            </div>

            <div 
              class="absolute bottom-[6%] right-[4%] md:-right-24 md:bottom-1 lg:-right-12 xl:right-0 lg:bottom-16  w-[160px] md:w-[256px] p-3 md:p-5 rounded-[20px] bg-[#FFFFFF66] backdrop-blur-md shadow-[2_3_6_rgba(169,136,152)]"
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :visible="{ y: 0, opacity: 1, transition: { delay: 700 } }"
            >
              <div class="w-8 h-8 lg:w-10 lg:h-10  flex items-center justify-center mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.6504 6.875L23.6846 7.02344C25.2071 13.7461 30.3505 19.0318 36.9844 20.7021L36.9512 22.6494L36.6064 22.7236C30.2198 24.1021 25.1793 29.0489 23.6484 35.4531H21.7031C20.1736 29.0542 15.1255 24.1177 8.73926 22.7637L8.19922 22.6494L8.16699 20.7012C12.8325 19.547 16.7966 16.6159 19.3018 12.6553L20.9922 13.7236C18.8017 17.1868 15.6018 19.9404 11.8047 21.5771C16.7083 23.3978 20.6433 27.1874 22.6748 32.0215C24.6885 27.2213 28.5721 23.4453 33.4189 21.5918C28.5131 19.4669 24.6395 15.4606 22.6631 10.4648C22.6258 10.5571 22.5894 10.6496 22.5508 10.7412L20.708 9.96387C21.1247 8.97581 21.4583 7.9433 21.7002 6.875H23.6504ZM8.23438 5L8.24414 5.04687C8.66985 6.92674 10.1079 8.40063 11.957 8.86621L11.9238 10.8135L11.8145 10.8369C10.0511 11.2175 8.65564 12.5849 8.23145 14.3594H6.28613C5.8626 12.5876 4.46611 11.2243 2.7041 10.8506L2.5332 10.8145L2.5 8.86523C4.37905 8.40042 5.85222 6.9029 6.2832 5H8.23438ZM7.24902 7.76758C6.73259 8.55967 6.06365 9.24117 5.28418 9.77344C6.06653 10.2665 6.73861 10.918 7.25781 11.6846C7.7709 10.9248 8.43295 10.2765 9.2041 9.7832C8.42548 9.24902 7.76036 8.56348 7.24902 7.76758Z" fill="#1D5FE0"/>
                </svg>
              </div>
              <h3 class="font-bold text-[#111218] text-[14px] md:text-[16px] leading-tight">Global Market Expertise</h3>
              <p class="text-[10px] md:text-[14px] leading-[150%] text-[#627293] mt-1">Local Market Insights And Tailored Strategies For International Expansion.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
const { open } = useContactModal()
</script>