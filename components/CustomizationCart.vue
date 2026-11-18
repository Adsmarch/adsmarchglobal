<template>
  <div class="min-h-screen bg-[#F0F5FF] pb-[64px] md:pb-[120px]">
    <div ref="sentinelRef" class="w-full bg-[#FFFFFF]">
      <div 
        ref="headerBarRef"
        :class="[
          'w-full bg-[#FFFFFF] mb-12 transition-all duration-300',
          isSticky 
            ? 'fixed top-[63px] left-0 right-0  lg:left-1/2 lg:-translate-x-1/2 bg-white md:shadow-lg z-50 border border-[#E9EBF1]' 
            : ''
        ]"
      >
        <div class="max-w-[1440px] mx-auto flex overflow-x-auto items-center md:justify-between px-[15px] md:px-[32px] xl:px-[64px] py-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          <div @click="scrollToSection('engine-section')" class="flex items-center space-x-3 cursor-pointer group shrink-0">
            <div :class="[
              'md:w-[28px] md:h-[28px] w-5 h-5 text-[12px] md:text-[14px] rounded-full flex items-center justify-center text-[#1763F5]',
              selectedEngine ? 'border-[#1763F5] border' : 'border border-[#A9B3C6] text-[#A9B3C6]'
            ]">
              {{ selectedEngine ? '✓' : '1' }}
            </div>
            <span :class="['group-hover:underline text-[13px] md:text-[16px]', selectedEngine ? 'text-[#1763F5] font-bold' : 'text-[#A9B3C6]']">Choose Your Growth Plan</span>
          </div>
          <div :class="['h-[2px] w-8 md:w-auto md:flex-1 mx-3 md:mx-4 shrink-0', selectedEngine ? 'bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)]' : 'bg-[#A9B3C6]']"></div>
          
          <div @click="scrollToSection('market-section')" class="flex items-center space-x-3 cursor-pointer group shrink-0">
            <div :class="[
              'md:w-[28px] md:h-[28px] w-5 h-5 text-[12px] md:text-[14px] rounded-full flex items-center justify-center text-[#FFFFFF]',
              selectedGrowthPlan ? 'border-[#1763F5] border !text-[#1763F5]' : (growthDirection ? 'bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)]' : '!bg-[#ffffff] !text-[#A9B3C6] border border-[#A9B3C6]')
            ]">
              {{ selectedGrowthPlan ? '✓' : '2' }}
            </div>
            <span :class="['group-hover:underline text-[13px] md:text-[16px]', (growthDirection || selectedGrowthPlan) ? 'text-[#1763F5] font-bold' : 'text-[#A9B3C6]']">Select Your Market</span>
          </div>
          <div :class="['h-[2px] w-8 md:w-auto md:flex-1 mx-3 md:mx-4 shrink-0', selectedGrowthPlan ? 'border-[#1763F5] border' : 'border-[#A9B3C6] border']"></div>
          
          <div @click="scrollToSection('plan-section')" class="flex items-center space-x-3 cursor-pointer group shrink-0">
            <div :class="[
              'md:w-[28px] md:h-[28px] w-5 h-5 text-[12px] md:text-[14px] rounded-full flex items-center justify-center',
              selectedGrowthPlan ? 'border-[#1763F5] border !text-[#1763F5]' : 'border-[#A9B3C6] border text-[#A9B3C6]'
            ]">
              {{ selectedGrowthPlan ? '✓' : '3' }}
            </div>
            <span :class="['group-hover:underline text-[13px] md:text-[16px]', selectedGrowthPlan ? 'text-[#1763F5] font-bold' : 'text-[#A9B3C6]']">Choose Your Growth Plan</span>
          </div>
          <div :class="['h-[2px] w-8 md:w-auto md:flex-1 mx-3 md:mx-4 shrink-0', totalCapabilitiesCount > 0 ? 'border-[#1763F5] border' : 'border-[#A9B3C6] border']"></div>
          
          <div @click="scrollToSection('capabilities-section')" class="flex items-center space-x-3 cursor-pointer group shrink-0">
            <div :class="[
              'md:w-[28px] md:h-[28px] w-5 h-5 text-[12px] md:text-[14px] rounded-full flex items-center justify-center',
              totalCapabilitiesCount > 0 ? 'border-[#1763F5] border !text-[#1763F5]' : 'border-[#A9B3C6] border text-[#A9B3C6]'
            ]">
              {{ totalCapabilitiesCount > 0 ? '✓' : '4' }}
            </div>
            <span :class="['group-hover:underline text-[13px] md:text-[16px]', totalCapabilitiesCount > 0 ? 'text-[#1763F5] font-bold' : 'text-[#A9B3C6]']">Select Your Capabilities</span>
          </div>

        </div>
      </div>
    </div>
    <div v-if="isSticky" class="block h-[72px] mb-8"></div>

    <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-[15px] md:px-[32px] xl:px-[64px]">
      
      <div class="lg:col-span-8 flex flex-col space-y-8 md:space-y-12">
        <section id="engine-section" class="border-b border-[#CCE0FF] pb-8 md:pb-[64px] scroll-mt-44">
          <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] mb-1 md:mb-3">01</span>
          <h2 class="text-[20px] md:text-[32px] font-bold text-[#111218] mb-1 md:mb-3">Choose Your Growth Engine</h2>
          <p class="text-[14px] md:text-[16px] text-[#627293] mb-6 md:mb-8">Select your business and growth direction. Both paths share the same AI + Expert system; growth stages and recommendations differ.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              @click="selectedEngine = (selectedEngine === 'App Growth' ? '' : 'App Growth')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                selectedEngine === 'App Growth' ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <div class="w-10 h-10 flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="#E1EDFE"/>
                    <path d="M11.7246 30.1613L9.1709 35L7.21191 34.0323L9.76465 29.1935L11.7246 30.1613ZM28.3809 24.9842H35V27.1125H29.4746L32.7959 33.5748L30.8252 34.5227L21.1689 15.7359L23.1387 14.787L28.3809 24.9842ZM24.4902 5.96774L14.4561 24.9842H23.5107V27.1125H5V24.9842H11.9863L19.0449 11.605L16.1436 5.95829L18.1133 5.00945L20.29 9.24521L22.5312 5L24.4902 5.96774Z" fill="#1441B8"/>
                  </svg>

                </div>
                <h3 :class="['font-bold text-[16px] md:text-[20px] text-[#111218] mb-1', selectedEngine === 'App Growth' ? 'text-[#1763F5]' : '']">APP GROWTH</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5]">From User Acquisition To Sustainable Growth: Store Page, Activation, Retention And Payback.</p>
              </div>
            </div>

            <div 
              @click="selectedEngine = (selectedEngine === 'E-Commerce Growth' ? '' : 'E-Commerce Growth')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                selectedEngine === 'E-Commerce Growth' ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <div class="w-10 h-10 flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="#E1EDFE"/>
                    <path d="M10.1584 32.369C10.1584 31.932 9.81368 31.6089 9.4272 31.6089C9.04089 31.6091 8.69697 31.9322 8.69697 32.369C8.69697 32.8057 9.04089 33.1288 9.4272 33.129C9.81368 33.129 10.1584 32.8059 10.1584 32.369ZM33.1212 32.369C33.1212 31.9322 32.7773 31.6091 32.391 31.6089C32.0045 31.6089 31.6598 31.932 31.6598 32.369C31.6598 32.8059 32.0045 33.129 32.391 33.129C32.7773 33.1288 33.1212 32.8057 33.1212 32.369ZM32.391 9.17918L33.3074 10.3166L30.3856 23.4572L29.4682 24.1908H17.0735C20.3965 26.1249 24.69 26.9826 29.4682 26.9826H33.8514V28.8536H29.4682C23.7243 28.8536 18.3752 27.6692 14.4425 24.6887C10.4656 21.6745 8.0704 16.9257 8.0704 10.1147V7.87097H4V6H9.0098L9.94919 6.93548V10.1147C9.94919 15.7744 11.7074 19.693 14.5342 22.3198H28.7141L31.2204 11.0502H12.5591V9.17918H32.391ZM12.0371 32.369C12.0371 33.8049 10.8854 35 9.4272 35C7.9692 34.9998 6.81818 33.8048 6.81818 32.369C6.81818 30.9331 7.9692 29.7381 9.4272 29.7379C10.8854 29.7379 12.0371 30.933 12.0371 32.369ZM35 32.369C35 33.8048 33.849 34.9998 32.391 35C30.9328 35 29.781 33.8049 29.781 32.369C29.781 30.933 30.9328 29.7379 32.391 29.7379C33.849 29.7381 35 30.9331 35 32.369Z" fill="#1763F5"/>
                  </svg>
                </div>
                <h3 class="font-bold text-[16px] md:text-[20px] text-[#111218] mb-1">E-COMMERCE GROWTH</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5]">From Market Entry To Repeat Purchase At Scale: Traffic, Conversion, Revenue And Retention.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="market-section" class="border-b border-[#CCE0FF] pb-8 md:pb-[64px] scroll-mt-44">
          <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] mb-1 md:mb-3">02</span>
          <h2 class="text-[20px] md:text-[32px] font-bold text-[#111218] mb-6 md:mb-8">Select Your Market</h2>
          <p class="text-[20px] font-bold text-[#111218] mb-4 md:mb-5">Growth Direction</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div 
              @click="growthDirection = 'Domestic Growth'"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer',
                growthDirection === 'Domestic Growth' ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <h4 class="font-bold text-[16px] text-[#111218]">Domestic Growth</h4>
              <p class="text-[14px] md:text-[12px] text-[#627293] leading-[1.5]">From User Acquisition To Sustainable Growth: Store Page, Activation, Retention And Payback.</p>
            </div>
            
            <div 
              @click="growthDirection = 'International Expansion'"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer',
                growthDirection === 'International Expansion' ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <h4 class="font-bold text-[16px] text-[#111218]">International Expansion</h4>
              <p class="text-[14px] md:text-[12px] text-[#627293] leading-[1.5]">International Expansion</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-[14px] md:text-[16px] text-[#627293]">Confirm Your Business Base, Then Choose Target Markets By Region Or Country.</p>
            
            <div>
              <label class="block text-[14px] md:text-[16px] text-[#627293] mb-2">Your Business Base</label>
              <input 
                type="text" 
                v-model="businessBaseSearch"
                placeholder="Search And Select A Country/Region" 
                :class="[
                  'w-full px-4 py-3 rounded-[8px] border text-sm outline-none transition-all bg-[#FAFCFE] placeholder:text-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]',
                  showBaseError ? 'border-red-500 bg-red-50/30 focus:border-red-500' : 'border-[#E9EBF1] focus:border-[#1763F5]'
                ]"
              />
              <p v-if="showBaseError" class="text-xs text-red-500 mt-1">Please enter your business base address.</p>
            </div>

            <template v-if="growthDirection === 'International Expansion'">
              <div>
                <label class="block text-[14px] md:text-[16px] text-[#627293] mb-2">Select Target Markets</label>
                <p :class="['text-[12px] md:text-[14px] mb-2 transition-colors', showMarketError ? 'text-red-500 font-bold' : 'text-[#A9B3C6]']">
                  Pick A Whole Region Or Individual Countries. A Region Already Covers Every Country Inside It.
                </p>
                <input 
                  type="text" 
                  v-model="marketSearchQuery"
                  placeholder="Search Regions Or Countries...." 
                  class="w-full px-4 py-3 rounded-[8px] border text-sm outline-none transition-all bg-[#FAFCFE] placeholder:text-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>

              <div class="bg-[#FAFCFE] border border-[#E9EBF1] p-3  md:p-4 rounded-[20px]">
                <div class="bg-[#FAFCFE] py-2 pb-6 mb-6 border-b border-[#E9EBF1]" v-if="allSelectedTags.length > 0">
                  <span class="text-[14px] md:text-[16px] text-[#627293] block mb-3">Selected Markets</span>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in allSelectedTags" 
                      :key="tag"
                      class="inline-flex items-center bg-[#E1EDFE] text-[#1763F5] px-4 py-3 rounded-[80px] text-[14px] font-bold max-h-[32px]"
                    >
                      {{ tag }}
                      <button @click="removeTag(tag)" class="ml-2 text-[#627293] hover:text-red-500">×</button>
                    </span>
                  </div>
                </div>

                <div class="space-y-4 !mt-0 max-h-[480px] overflow-y-auto  custom-market-scrollbar overflow-hidden rounded-[8px]">
                  <div 
                    v-for="region in filteredRegions" 
                    :key="region.name"
                    class="border border-gray-200 overflow-hidden bg-white"
                  >
                    <div class="bg-[#CCE0FF] px-4 py-3 flex items-center justify-between border-b border-gray-100">
                      <label class="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          :checked="isRegionFullySelected(region)"
                          @change="toggleRegion(region)"
                          class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]"
                        />
                        <span class="font-bold text-sm text-[#1763F5]">{{ region.name }}</span>
                      </label>
                      <span class="font-bold text-[12px] text-[#627293]">{{ region.countries.length }} Markets</span>
                    </div>

                    <div class="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <label 
                        v-for="country in region.countries" 
                        :key="country"
                        class="flex items-center space-x-2 text-[14px] text-[#627293] cursor-pointer"
                      >
                        <input 
                          type="checkbox" 
                          v-model="selectedCountries[region.name]" 
                          :value="country"
                          class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]"
                        />
                        <span class="truncate">{{ country }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </section>

        <section id="plan-section" class="border-b border-[#CCE0FF] pb-8 md:pb-[64px] scroll-mt-44">
          <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] mb-1 md:mb-3">03</span>
          <h2 class="text-[20px] md:text-[32px] font-bold text-[#111218] mb-6 md:mb-8">Choose Your Growth Plan</h2>
          <p class="text-[14px] md:text-[16px] text-[#627293] mb-6 md:mb-8">Choose The Plan That Fits Your Growth Stage. Plans 1–5 Include Managed Media; Plan 6 Is For Other Services Only.</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div 
              v-for="plan in growthPlans" 
              :key="plan.title"
              @click="selectedGrowthPlan = (selectedGrowthPlan === plan.title ? '' : plan.title)"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                selectedGrowthPlan === plan.title ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 
                :class="['font-bold text-[16px] md:text-[20px] mb-1',
                  selectedGrowthPlan === plan.title ? 'text-[#1763F5]' : 'text-[#111218]'
                ]">{{ plan.title }}</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-6">{{ plan.desc }}</p>
              </div>
              <div :class="['pt-3 border-t ', 'text-[12px] font-bold ]',
               selectedGrowthPlan === plan.title ? 'text-[#1763F5] border-[#A9B3C6]' : 'text-[#111218 border-[#E9EBF1]'
              ]">
                Model: <span class="font-[400] text-[#1763F5] text-[12px]">{{ plan.model }}</span>
              </div>
            </div>
          </div>

          <p class="text-[12px] text-[#A9B3C6] mt-4 mb-6">Ad Spend Ranges Are Indicative And May Vary By Market, Platform, And Campaign Goals.</p>

          <div v-if="selectedGrowthPlan === 'Enterprise'" class="space-y-4">
            <h4 class="block text-[14px] md:text-[16px] text-[#627293] mb-2">Managed Media Platforms</h4>
            <div :class="[
              'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between bg-white',
              showEnterpriseError ? 'border-red-500 bg-red-50/20' : 'border-[#E9EBF1]'
            ]">
              <span class="text-[14px] text-[#627293] block border-b border-[#E9EBF1] pb-4 mb-4">Select The Platforms We'll Manage (Multi-Select).</span>
              
              <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 py-4">
                <label class="flex items-center space-x-2 text-[14px] text-[#627293] cursor-pointer">
                  <input type="checkbox" value="Google Ads" v-model="managedPlatforms" class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" />
                  <span>Google Ads</span>
                </label>
                <label class="flex items-center space-x-2 text-[14px] text-[#627293] cursor-pointer">
                  <input type="checkbox" value="TikTok Ads" v-model="managedPlatforms" class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" />
                  <span>TikTok Ads</span>
                </label>
                <label class="flex items-center space-x-2 text-[14px] text-[#627293] cursor-pointer">
                  <input type="checkbox" value="Meta Ads" v-model="managedPlatforms" class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" />
                  <span>Meta Ads</span>
                </label>
                <label class="flex items-center space-x-2 text-[14px] text-[#627293] cursor-pointer">
                  <input type="checkbox" value="Other Platforms" v-model="managedPlatforms" class="w-4 h-4 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" />
                  <span>Other Platforms</span>
                </label>
              </div>

              <div>
                <label class="block text-[14px] text-[#627293] mt-4 mb-2">Please Specify The Platform(s)</label>
                <input 
                  type="text" 
                  v-model="customPlatforms"
                  placeholder="Please Specify The Advertising Platform(s). Comma-Separated" 
                  class="w-full px-4 py-3 rounded-[8px] border text-sm outline-none transition-all bg-[#FAFCFE] placeholder:text-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>
              <p v-if="showEnterpriseError" class="text-[12px] text-red-500 mt-1">Please select at least one platform or specify platforms for Enterprise plan.</p>
            </div>
          </div>
        </section>

        <section id="capabilities-section" class="scroll-mt-44">
          <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] mb-1 md:mb-3">04</span>
          <h2 class="text-[20px] md:text-[32px] font-bold text-[#111218] mb-6 md:mb-8">Select Your Capabilities</h2>
          <p class="text-[14px] md:text-[16px] text-[#627293] mb-6 md:mb-8">Browse The Service Categories, Then Open One To Choose The Specific Services You Need.</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div 
              @click="openModal('accounts')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                accountsSelected.length > 0 ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">Accounts</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Media Account Setup And Permissions - The Prerequisite For All Media Buying.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">Select The Platforms</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ accountsSelected.length > 0 ? accountsSelected.join(' \\ ') : 'PROJECT' }}</p>
              </div>
              <div v-if="accountsSelected.length > 0" class="text-[12px] text-[#1763F5] font-bold">
                {{ accountsSelected.length  }} Platforms Selected
              </div>
            </div>

            <div 
              @click="openModal('creative')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                creativeSelected.length > 0 || creativeCustom ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">Creative Production</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Continuous Creative Production Across Platforms And Markets.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">Selected Service</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ (creativeSelected.length > 0 || creativeCustom) ? [...creativeSelected, creativeCustom].filter(Boolean).join(', ') : 'PROJECT' }}</p>
              </div>
              <div v-if="creativeSelected.length > 0" class="text-[12px] text-[#1763F5] font-bold">
                {{ creativeSelected.length  }} Services Selected
              </div>
            </div>

            <div 
              @click="toggleDirectService('Influencer Marketing')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                directServicesSelected.includes('Influencer Marketing') ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">Influencer Marketing</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Creator Partnerships That Reach Your Target Audience.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">Influencer Campaign</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ directServicesSelected.includes('Influencer Marketing') ? 'Influencer Marketing' : 'PROJECT' }}</p>
              </div>
            </div>

            <div 
              @click="toggleDirectService('Social Media Operations')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                directServicesSelected.includes('Social Media Operations') ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">Social Media Operations</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Ongoing Operation Of One Official Instagram, TikTok Or YouTube Account.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">Influencer Campaign</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ directServicesSelected.includes('Social Media Operations') ? 'Social Media Operations' : 'PROJECT' }}</p>
              </div>
            </div>

            <div 
              @click="openModal('ecommerce')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                ecommerceSelected.length > 0 ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">E-Commerce Operations</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Get The Acquisition Model Working In One Market And Channel Before Scaling.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">Selected Service</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ ecommerceSelected.length > 0 ? ecommerceSelected.join(', ') : 'PROJECT' }}</p>
              </div>
              <div v-if="ecommerceSelected.length > 0" class="text-[12px] text-[#1763F5] font-bold">
                {{ ecommerceSelected.length  }} Services Selected
              </div>
            </div>

            <div 
              @click="toggleDirectService('SEO / GEO')"
              :class="[
                'p-5 rounded-[20px] border transition-all cursor-pointer flex flex-col justify-between',
                directServicesSelected.includes('SEO / GEO') ? 'border-[#1763F5] bg-[#CCE0FF] shadow-[2px_3px_6px_0px_#6253FC52]' : 'border-[#E9EBF1] hover:border-[#1763F5] bg-white hover:shadow-[2px_3px_6px_0px_#6253FC52]'
              ]"
            >
              <div>
                <h3 class="font-bold text-[16px] md:text-[20px] mb-1 text-[#111218]">SEO / GEO</h3>
                <p class="text-[12px] md:text-[12px] text-[#627293] leading-[1.5] mb-2">Improve Visibility Across Search And AI Discovery.</p>
              </div>
              <div>
                <span class="text-[14px] font-bold text-[#1763F5] block">AI Search Visibility Optimization</span>
                <p class="text-[12px] text-[#627293] truncate mb-14">{{ directServicesSelected.includes('SEO / GEO') ? 'SEO / GEO' : 'PROJECT' }}</p>
              </div>
            </div>

          </div>

          <p class="text-[12px] text-[#A9B3C6] mt-4 md:mb-6">No Fixed Pricing. The Quote Depends On Target Market, Industry, Spend, Creative Needs And Service Period — Your Consultant Will Send A Tailored Proposal.</p>
        </section>

      </div>

      <div class="lg:col-span-4 lg:sticky lg:top-48 w-full md:mt-8 lg:mt-0 z-10">
        <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#E9EBF1] relative">
          
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h3 class="font-bold text-[20px] md:text-[24px] text-[#111218]">Your Growth Plan</h3>
            <button @click="clearAll" class="text-[14px] font-bold text-[#1763F5] underline cursor-pointer">Clear All</button>
          </div>

          <div class="space-y-6 text-sm">
            <div v-if="selectedEngine">
              <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] block mb-1">Growth Engine</span>
              <p class="text-[#627293] text-[14px]">{{ selectedEngine }}</p>
            </div>

            <div v-if="growthDirection">
              <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] block mb-1">Target Market</span>
              <p class="text-[#627293] text-[14px] leading-[150%]">
                <template v-if="growthDirection === 'Domestic Growth'">
                  <span v-if="businessBaseSearch">{{ businessBaseSearch }}</span>
                  <span v-else>Domestic Growth (Address required)</span>
                </template>
                <template v-else>
                  {{ allSelectedTags.length > 0 ? allSelectedTags.join(', ') : 'No market selected' }}
                </template>
              </p>
            </div>

            <div v-if="selectedGrowthPlan">
              <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] block mb-1">Growth Plan</span>
              <p class="text-[#627293] text-[14px] leading-[150%]">
                {{ selectedGrowthPlan }}
              </p>
              <template v-if="selectedGrowthPlan === 'Enterprise'">
                <p v-if="managedPlatforms.length > 0" class="text-[#627293] text-[14px] leading-[150%]">
                  Platforms: {{ managedPlatforms.join(' \\ ') }}
                </p>
                <p v-if="customPlatforms.trim()" class="text-[#627293] text-[14px] leading-[150%]">
                  Specify: {{ customPlatforms.trim() }}
                </p>
              </template>
            </div>

            <div v-if="allFinalSelectedCapabilities.length > 0">
              <span class="text-[14px] md:text-[16px] font-bold text-[#1763F5] block mb-1">Additional Services</span>
              <p class="text-[#627293] text-[14px] leading-[150%]">
                {{ allFinalSelectedCapabilities.join(' \\ ') }}
              </p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-[#E9EBF1]">
            <button 
              @click="handleReviewPlan"
              class="inline-flex w-full items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] hover:bg-[linear-gradient(#0A2C85_100%)] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer"
            >
              <span>Review My Plan</span>
              <span>→</span>
            </button>
            <p class="text-[12px] text-left text-[#A9B3C6] mt-3">No Online Payment, A Consultant Confirms Scope, Market And Investment Before Sending A Tailored Proposal.</p>
          </div>

        </div>
      </div>

    </div>

    <div v-if="isReviewModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div class="relative w-full max-w-[1040px] bg-white md:rounded-[20px] rounded-[12px] my-8 max-h-[82vh] flex flex-col shadow-2xl">
        
        <button 
          @click="isReviewModalOpen = false" 
          class="md:hidden absolute -top-9 right-0 z-50 cursor-pointer"
          aria-label="Close"
        >
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E1EDFE"></rect><path d="M12 12L16 16M16 16L20 20M16 16L20 12M16 16L12 20" stroke-width="2" stroke="#627293"></path></svg>
        </button>

          <div class="p-4 pb-0 mb-4 md:px-8 md:pt-8 sm:mb-4 border-b border-[#E9EBF1]">
            <button 
              @click="isReviewModalOpen = false" 
              class="absolute top-6 right-6 hidden md:flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Close"
            >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#E1EDFE"></rect><path d="M14 14L26 26M26 14L14 26" stroke-width="2" stroke="#627293"></path></svg>
            </button>
            <h2 class="text-[20px] md:text-[32px] font-bold text-[#1763F5] mb-2">
              Your Plan Is Ready.
            </h2>
            <p class="text-[16px] md:text-[18px] text-[#627293] mb-6">
              Let's Discuss The Execution Scope, Market Approach And Investment Scale That Fit Your Business.
            </p>
          </div>

         <div class="overflow-y-auto w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"> 
          <div class="px-2 py-4 md:px-4 md:py-6 md:mx-8 md:my-6 mx-[15px] my-0 bg-[#F0F5FF] rounded-[8px] border border-[#E9EBF1] space-y-6 text-sm">
            <div>
              <span class="text-[16px] md:text-[20px] font-bold text-[#1763F5] block mb-1">Growth Engine</span>
              <p class="text-[#627293] text-[14px] md:text-[16px]">{{ selectedEngine || 'None' }}</p>
            </div>

            <div>
              <span class="text-[16px] md:text-[20px] font-bold text-[#1763F5] block mb-1">Target Market</span>
              <p class="text-[#627293] text-[14px] md:text-[16px]">
                <template v-if="growthDirection === 'Domestic Growth'">
                  {{ businessBaseSearch || 'Domestic Growth' }}
                </template>
                <template v-else>
                  {{ allSelectedTags.length > 0 ? allSelectedTags.join(', ') : 'No market selected' }}
                </template>
              </p>
            </div>

            <div>
              <span class="text-[16px] md:text-[20px] font-bold text-[#1763F5] block mb-1">Growth Plan</span>
              <p class="text-[#627293] text-[14px] md:text-[16px]">
                {{ selectedGrowthPlan }}
                <template v-if="selectedGrowthPlan === 'Enterprise'">
                  <span v-if="managedPlatforms.length > 0"> | {{ managedPlatforms.join(', ') }}</span>
                  <span v-if="customPlatforms.trim()"> | {{ customPlatforms.trim() }}</span>
                </template>
              </p>
            </div>

            <div v-if="allFinalSelectedCapabilities.length > 0">
              <span class="text-[16px] md:text-[20px] font-bold text-[#1763F5] block mb-1">Additional Services</span>
              <p class="text-[#627293] text-[14px] md:text-[16px]">
                {{ allFinalSelectedCapabilities.join(' \\ ') }}
              </p>
            </div>
          </div>

          <form @submit.prevent="handleFormSubmit" class="space-y-4 px-2 py-4 md:px-4 md:py-6 md:mx-8 md:my-6 mx-[15px] my-8 border-t border-[#E9EBF1]">
            <h3 class="text-[20px] md:text-[24px] font-bold text-[#111218]">Request A Tailored Proposal</h3>
            <p class="text-[14px] md:text-[16px] text-[#627293] mt-2">Your Markets And Services Carry Over Automatically.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-6 border-t border-[#E9EBF1] !mt-6 pt-6">
              <div>
                <label class="block text-[16px] text-[#627293] mb-2">Name <span class="text-[#1763F5]">*</span></label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required 
                  placeholder="Your Full Name" 
                  class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>

              <div>
                <label class="block text-[16px] text-[#627293] mb-2">Company Name <span class="text-[#1763F5]">*</span></label>
                <input 
                  v-model="form.company_name" 
                  type="text" 
                  required 
                  placeholder="Full Company Name" 
                  class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
              <div>
                <label class="block text-[16px] text-[#627293] mb-2">Work Email <span class="text-[#1763F5]">*</span></label>
                <input 
                  v-model="form.work_email" 
                  type="email" 
                  required 
                  placeholder="Name@Company.Com" 
                  class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>
              <div>
                <label class="block text-[16px] text-[#627293] mb-2">Phone Number (WhatsApp) <span class="text-[#1763F5]">*</span></label>
                <input 
                  v-model="form.phone_number" 
                  type="tel" 
                  required 
                  placeholder="Phone Number" 
                  class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
              <div>
                <label class="block text-[16px] text-[#627293] mb-2">Company Website</label>
                <input 
                  v-model="form.company_website" 
                  type="text" 
                  placeholder="Https://" 
                  class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
                />
              </div>
            </div>

            <div>
              <label class="block text-[16px] text-[#627293] mb-2">Additional Notes</label>
              <textarea 
                v-model="form.additional_notes" 
                rows="3" 
                placeholder="Product Link, Launch Timeline, Existing Channels, Or Questions" 
                class="w-full px-4 py-[7px] md:py-[11px] bg-[#FAFCFE] border border-[#E9EBF1] rounded-[8px] focus:outline-none focus:border-[#1763F5] text-[16px] text-[#111218] placeholder-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"
              ></textarea>
            </div>

            <p class="text-[12px] md:text-[14px] text-[#A9B3C6] leading-[1.5] mt-4">
              By Submitting Your Information, You Agree That We Will Process Your Information In Accordance With Our <a href="#" class="underline text-[#627293]">Privacy Policy</a> And Use It Solely For This Service Consultation And Subsequent Pricing Follow-Up.
            </p>

            <div class="mt-6 w-full">
              <button 
                type="submit" 
                class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] hover:bg-[linear-gradient(#0A2C85_100%)] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-full md:w-auto"
              >
                <span>Request A Tailored Proposal</span>
                <span>→</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>

    <div v-if="activeModal === 'accounts'" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div class="relative w-full max-w-[1040px] bg-white md:rounded-[20px] rounded-[12px] my-8 max-h-[82vh] flex flex-col shadow-2xl">
        <button @click="activeModal = null" class="md:hidden absolute -top-9 right-0 z-50 cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E1EDFE"/>
              <path d="M12 12L16 16M16 16L20 20M16 16L20 12M16 16L12 20" stroke-width="2" stroke="#627293"/>
            </svg>
          </button>
        <div class="p-4 pb-0 mb-4 md:px-8 md:pt-8 sm:mb-4 border-b border-[#E9EBF1]">
          <button @click="activeModal = null" class="absolute top-6 right-6 hidden md:flex items-center justify-center cursor-pointer shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#E1EDFE"/>
              <path d="M14 14L26 26M26 14L14 26" stroke-width="2" stroke="#627293"/>
            </svg>
          </button>
          <h3 class="text-[20px] md:text-[32px] font-bold text-[#1763F5] mb-2">Accounts</h3>
          <p class="text-[16px] md:text-[18px] text-[#627293] mb-6">Select The Platforms You Need Account Services For.</p>
         </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs p-3 md:px-8">
          <label class="flex items-center space-x-2 text-[14px] md:text-[16px] text-[#627293] cursor-pointer"><input type="checkbox" value="Google Ads" v-model="tempAccounts" class="peer w-5 h-5 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" /><span class="peer-checked:text-[#1763F5] transition-colors">Google Ads</span></label>
          <label class="flex items-center space-x-2 text-[14px] md:text-[16px] text-[#627293] cursor-pointer"><input type="checkbox" value="Meta Ads" v-model="tempAccounts" class="peer w-5 h-5 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" /><span class="peer-checked:text-[#1763F5] transition-colors">Meta Ads</span></label>
          <label class="flex items-center space-x-2 text-[14px] md:text-[16px] text-[#627293] cursor-pointer"><input type="checkbox" value="TikTok Ads" v-model="tempAccounts" class="peer w-5 h-5 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" /><span class="peer-checked:text-[#1763F5] transition-colors">TikTok Ads</span></label>   
          <label class="flex items-center space-x-2 text-[14px] md:text-[16px] text-[#627293] cursor-pointer"><input type="checkbox" value="Apple Ads (ASA)" v-model="tempAccounts" class="peer w-5 h-5 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" /><span class="peer-checked:text-[#1763F5] transition-colors">Apple Ads (ASA)</span></label>
          <label class="flex items-center space-x-2 text-[14px] md:text-[16px] text-[#627293] cursor-pointer"><input type="checkbox" value="Other Platforms" v-model="tempAccounts" class="peer w-5 h-5 text-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" /><span class="peer-checked:text-[#1763F5] transition-colors">Other Platforms</span></label>
        </div>

        <div class="mb-2 p-3 pt-0 md:px-8">
          <label class="block text-[16px] text-[#627293] mt-3 mb-2">Please Specify The Platform(s)</label>
          <input type="text" v-model="tempAccountsCustom" placeholder="Specify Other Platforms..." class="w-full px-4 py-3 rounded-[8px] border text-sm outline-none transition-all bg-[#FAFCFE] placeholder:text-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]" />
        </div>

        <div class="flex items-center justify-start space-x-4 p-3 md:px-8 md:mb-8 mb-4">
          <button @click="activeModal = null" class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] rounded-[80px] bg-white hover:bg-[#CCE0FF] border border-[#1763F5] text-[#1763F5] font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Cancel</button>
          <button @click="saveModal('accounts')" class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] hover:bg-[linear-gradient(#0A2C85_100%)] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Add To Plan</button>
        </div>
      </div>
    </div>

    <div v-if="activeModal === 'creative'" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div class="relative w-full max-w-[1040px] bg-white md:rounded-[20px] rounded-[12px] my-8 max-h-[82vh] flex flex-col shadow-2xl">
        <button @click="activeModal = null" class="md:hidden absolute -top-9 right-0 z-50 cursor-pointer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E1EDFE"/>
              <path d="M12 12L16 16M16 16L20 20M16 16L20 12M16 16L12 20" stroke-width="2" stroke="#627293"/>
          </svg>
        </button>
         <div class="p-4 pb-0 mb-4 md:px-8 md:pt-8 sm:mb-4 border-b border-[#E9EBF1]">
          <button @click="activeModal = null" class="absolute top-6 right-6 hidden md:flex items-center justify-center cursor-pointer shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#E1EDFE"/>
              <path d="M14 14L26 26M26 14L14 26" stroke-width="2" stroke="#627293"/>
            </svg>
          </button>
          <h3 class="text-[20px] md:text-[32px] font-bold text-[#1763F5] mb-2">Creative Production</h3>
          <p class="text-[16px] md:text-[18px] text-[#627293] mb-6">Choose The Creative Services You Need.</p>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs m-3 md:mx-8 md:pb-8 border-b border-[#E9EBF1]">
          <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
            <input 
              type="checkbox" 
              value="Creative Factory Lite" 
              v-model="tempCreative" 
              class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
            />
            <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
              <p class="font-bold mb-1">Creative Factory Lite</p>
              <p class="text-[12px] md:text-[14px] text-[#627293]">5 Videos + 15 Images / Month</p>
            </div>
          </label>

          <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
            <input 
              type="checkbox" 
              value="Creative Factory Growth" 
              v-model="tempCreative" 
              class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
            />
            <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
              <p class="font-bold mb-1">Creative Factory Growth</p>
              <p class="text-[12px] md:text-[14px] text-[#627293]">12 Videos + 40 Images / Month</p>
            </div>
          </label>

          <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
            <input 
              type="checkbox" 
              value="Creative Factory Scale" 
              v-model="tempCreative" 
              class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
            />
            <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
              <p class="font-bold mb-1">Creative Factory Scale</p>
              <p class="text-[12px] md:text-[14px] text-[#627293]">30 Videos + 100 Images / Month</p>
            </div>
          </label>
        </div>

        <div class="mb-2 p-3 pt-0 md:px-8">
          <label class="block text-[16px] text-[#111218] font-bold mt-1 mb-1">Custom Creative Services (Optional)</label>
          <span class="block ext-[14px] md:text-[16px] text-[#627293] mb-2 leading-[150%]">Tell us what you need. Leave this blank if the packages above are enough.</span>
          <textarea v-model="tempCreativeCustom" placeholder="Tell Us About Your Creative Needs..." rows="3" class="w-full px-4 py-3 rounded-[8px] border text-sm outline-none transition-all bg-[#FAFCFE] placeholder:text-[#A9B3C6] md:placeholder:text-[14px] placeholder:text-[12px]"></textarea>
        </div>

        <div class="flex items-center justify-start space-x-4 p-3 md:px-8 md:mb-8 mb-4">
          <button @click="activeModal = null" class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] rounded-[80px] bg-white hover:bg-[#CCE0FF] border border-[#1763F5] text-[#1763F5] font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Cancel</button>
          <button @click="saveModal('creative')" class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] hover:bg-[linear-gradient(#0A2C85_100%)] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Add To Plan</button>
        </div>
      </div>
    </div>

    <div v-if="activeModal === 'ecommerce'" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div class="relative w-full max-w-[1040px] bg-white md:rounded-[20px] rounded-[12px] my-8 max-h-[82vh] flex flex-col shadow-2xl">
        <button @click="activeModal = null" class="md:hidden absolute -top-9 right-0 z-50 cursor-pointer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E1EDFE"/>
              <path d="M12 12L16 16M16 16L20 20M16 16L20 12M16 16L12 20" stroke-width="2" stroke="#627293"/>
          </svg>
        </button>
        <div class="p-4 pb-0 mb-4 md:px-8 md:pt-8 sm:mb-4 border-b border-[#E9EBF1]">
          <button @click="activeModal = null" class="absolute top-6 right-6 hidden md:flex items-center justify-center cursor-pointer shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#E1EDFE"/>
              <path d="M14 14L26 26M26 14L14 26" stroke-width="2" stroke="#627293"/>
            </svg>
          </button>
          <h3 class="text-[20px] md:text-[32px] font-bold text-[#1763F5] mb-2">E-Commerce Operations</h3>
          <p class="text-[16px] md:text-[18px] text-[#627293] mb-6">Store Build, Conversion And Retention — Turning Traffic Into Orders.</p>
        </div>
        
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-8 text-xs m-3 md:mx-8 md:pb-8 border-b border-[#E9EBF1]">
        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="Shopify Standard Store" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">Shopify Standard Store</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Project</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="Shopify Brand Growth Store" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">Shopify Brand Growth Store</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Project</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="Shopify Custom Enterprise Store" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">Shopify Custom Enterprise Store</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">From / Project</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="TikTok Shop / DTC Store Operations" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">TikTok Shop / DTC Store Operations</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="E-Commerce Operations - Starter" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">E-Commerce Operations - Starter</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="E-Commerce Operations - Growth" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">E-Commerce Operations - Growth</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="E-Commerce Operations - Scale" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">E-Commerce Operations - Scale</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="EDM And Email Marketing" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">EDM And Email Marketing</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>

        <label class="flex items-start space-x-2 text-[14px] md:text-[16px] cursor-pointer">
          <input 
            type="checkbox" 
            value="Impact Affiliate Management" 
            v-model="tempEcommerce" 
            class="peer w-5 h-5 mt-0.5 text-[#1763F5] accent-[#1763F5] rounded border-[#A9B3C6] focus:ring-[#1763F5]" 
          />
          <div class="text-[#111218] peer-checked:text-[#1763F5] transition-colors">
            <p class="font-bold mb-1">Impact Affiliate Management</p>
            <p class="text-[12px] md:text-[14px] text-[#627293]">Month</p>
          </div>
        </label>
      </div>

        <div class="flex items-center justify-start space-x-4 p-3 md:px-8 md:mb-8 mb-4">
          <button @click="activeModal = null" class="text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-[15px] rounded-[80px] bg-white hover:bg-[#CCE0FF] border border-[#1763F5] text-[#1763F5] font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Cancel</button>
          <button @click="saveModal('ecommerce')" class="inline-flex items-center justify-center text-[14px] xl:text-[16px] px-5 lg:px-9 py-2 lg:py-4 rounded-[80px] bg-[linear-gradient(87.86deg,#3D5BF9_4.79%,#6253FC_100%)] hover:bg-[linear-gradient(#0A2C85_100%)] text-white font-bold transition-all transform leading-none min-h-[40px] cursor-pointer w-[50%] md:w-auto">Add To Plan</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

const { $pb } = useNuxtApp()

const selectedEngine = ref('App Growth')
const growthDirection = ref('Domestic Growth')
const businessBaseSearch = ref('')
const marketSearchQuery = ref('')

const showBaseError = ref(false)
const showMarketError = ref(false)
const showEnterpriseError = ref(false)

const isSticky = ref(false)
const sentinelRef = ref(null)
const headerBarRef = ref(null)

const handleScroll = () => {
  if (sentinelRef.value) {
    const rect = sentinelRef.value.getBoundingClientRect()
    isSticky.value = rect.top <= 16
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const regionsData = reactive([
{
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico', 'Guatemala', 'Honduras', 'Panama', 'Nicaragua', 'Bermuda', 'Belize', 'El Salvador', 'Costa Rica']
  },
  {
    name: 'Latin America & Caribbean',
    countries: [
      'Argentina', 'Brazil', 'Chile', 'Colombia', 'Peru', 'Uruguay', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay',
      'Guyana', 'Suriname', 'Cuba', 'Dominican Republic', 'Haiti', 'Jamaica', 'Trinidad and Tobago', 'Bahamas',
      'Barbados', 'Belize', 'Costa Rica', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico', 'Nicaragua', 'Panama',
      'Antigua and Barbuda', 'Dominica', 'Grenada', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines'
    ]
  },
  {
    name: 'Europe',
    countries: [
      'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Ireland', 'Netherlands', 'Switzerland', 'Sweden', 'Poland',
      'Austria', 'Belgium', 'Denmark', 'Finland', 'Norway', 'Portugal', 'Greece', 'Czech Republic', 'Slovakia', 'Hungary',
      'Romania', 'Bulgaria', 'Croatia', 'Slovenia', 'Serbia', 'Bosnia and Herzegovina', 'Montenegro', 'North Macedonia',
      'Albania', 'Estonia', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Cyprus', 'Iceland', 'Moldova', 'Ukraine', 'Belarus', 'Russia'
    ]
  },
  {
    name: 'Asia',
    countries: [
      'China', 'Japan', 'South Korea', 'North Korea', 'Mongolia', 'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal',
      'Bhutan', 'Afghanistan', 'Iran', 'Iraq', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
      'Yemen', 'Jordan', 'Lebanon', 'Syria', 'Israel', 'Turkey', 'Cyprus', 'Georgia', 'Armenia', 'Azerbaijan',
      'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan', 'Myanmar', 'Thailand', 'Vietnam', 'Laos',
      'Cambodia', 'Malaysia', 'Singapore', 'Indonesia', 'Philippines', 'Brunei', 'Timor-Leste', 'Maldives'
    ]
  },
  {
    name: 'Africa',
    countries: [
      'Egypt', 'Libya', 'Tunisia', 'Algeria', 'Morocco', 'Sudan', 'South Sudan', 'Ethiopia', 'Eritrea', 'Djibouti', 'Somalia',
      'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Tanzania', 'Mozambique', 'Madagascar', 'Malawi', 'Zambia', 'Zimbabwe',
      'South Africa', 'Lesotho', 'Eswatini', 'Namibia', 'Botswana', 'Angola', 'Democratic Republic of the Congo',
      'Republic of the Congo', 'Gabon', 'Equatorial Guinea', 'Cameroon', 'Central African Republic', 'Chad', 'Nigeria',
      'Niger', 'Benin', 'Togo', 'Ghana', "Côte d'Ivoire", 'Liberia', 'Sierra Leone', 'Guinea', 'Guinea-Bissau', 'Senegal',
      'Gambia', 'Mauritania', 'Mali', 'Burkina Faso', 'Cabo Verde', 'Sao Tome and Principe', 'Mauritius', 'Seychelles', 'Comoros'
    ]
  },
  {
    name: 'Oceania',
    countries: [
      'Australia', 'New Zealand', 'Papua New Guinea', 'Fiji', 'Solomon Islands', 'Vanuatu', 'Samoa', 'Tonga', 'Tuvalu',
      'Kiribati', 'Nauru', 'Palau', 'Marshall Islands', 'Micronesia', 'Cook Islands', 'Niue'
    ]
  },
  {
    name: 'Other Territories & Dependencies',
    countries: [
      'Greenland', 'Puerto Rico', 'Guam', 'United States Virgin Islands', 'American Samoa', 'Northern Mariana Islands',
      'French Polynesia', 'New Caledonia', 'Aruba', 'Curaçao', 'Sint Maarten', 'Bonaire', 'Saint Eustatius and Saba',
      'Anguilla', 'British Virgin Islands', 'Cayman Islands', 'Montserrat', 'Turks and Caicos Islands', 'Falkland Islands',
      'Gibraltar', 'Bermuda', 'Faroe Islands', 'Isle of Man', 'Channel Islands', 'Åland Islands'
    ]
  }
])

const selectedCountries = reactive({
  'North America': [],
  'Latin America & Caribbean': [],
  'Europe': []
})

const selectedGrowthPlan = ref('')
const managedPlatforms = ref([])
const customPlatforms = ref('')

const growthPlans = [
  { title: 'Launch', desc: 'Audits, Market And Competitor Analysis; First Campaigns, Daily Optimisation, Closing Benchmarks And A 90-Day Roadmap.', model: 'Project-Based 30-45 Days' },
  { title: 'Starter', desc: 'Get The Acquisition Model Working In One Market And Channel Before Scaling.', model: 'Monthly Retainer' },
  { title: 'Growth', desc: 'Scale What Works: Shift Budget Across Channels And Run Growth Experiments.', model: 'Monthly Retainer' },
  { title: 'Scale', desc: 'Get The Acquisition Model Working In One Market And Channel Before Scaling.', model: 'Monthly Retainer' },
  { title: 'Enterprise', desc: 'Get The Acquisition Model Working In One Market And Channel Before Scaling.', model: 'Custom' },
  { title: 'No Need', desc: 'Pick Other Services Separately: Creative, Influencer, Social And SEO / GEO.', model: 'Other Services Only' }
]

const activeModal = ref(null)
const accountsSelected = ref([])
const accountsCustom = ref('')
const creativeSelected = ref([])
const creativeCustom = ref('')
const ecommerceSelected = ref([])

const directServicesSelected = ref([])

const toggleDirectService = (serviceName) => {
  const index = directServicesSelected.value.indexOf(serviceName)
  if (index > -1) {
    directServicesSelected.value.splice(index, 1)
  } else {
    directServicesSelected.value.push(serviceName)
  }
}

const tempAccounts = ref([])
const tempAccountsCustom = ref('')
const tempCreative = ref([])
const tempCreativeCustom = ref('')
const tempEcommerce = ref([])

watch(growthDirection, () => {
  showBaseError.value = false
  showMarketError.value = false
})

watch(businessBaseSearch, (val) => {
  if (val.trim()) showBaseError.value = false
})

watch([managedPlatforms, customPlatforms], () => {
  if (managedPlatforms.value.length > 0 || customPlatforms.value.trim()) {
    showEnterpriseError.value = false
  }
})

watch(selectedCountries, () => {
  if (allSelectedTags.value.length > 0) showMarketError.value = false
}, { deep: true })

const filteredRegions = computed(() => {
  if (!marketSearchQuery.value) return regionsData
  const query = marketSearchQuery.value.toLowerCase()
  return regionsData.map(region => {
    const matchedCountries = region.countries.filter(c => c.toLowerCase().includes(query))
    if (region.name.toLowerCase().includes(query) || matchedCountries.length > 0) {
      return { ...region, countries: matchedCountries.length ? matchedCountries : region.countries }
    }
    return null
  }).filter(Boolean)
})

const isRegionFullySelected = (region) => {
  const currentSelected = selectedCountries[region.name] || []
  return region.countries.length > 0 && region.countries.every(c => currentSelected.includes(c))
}

const toggleRegion = (region) => {
  if (isRegionFullySelected(region)) {
    selectedCountries[region.name] = []
  } else {
    selectedCountries[region.name] = [...region.countries]
  }
}

const allSelectedTags = computed(() => {
  let tags = []
  regionsData.forEach(region => {
    const selected = selectedCountries[region.name] || []
    if (selected.length === region.countries.length && region.countries.length > 0) {
      tags.push(region.name)
    } else {
      tags.push(...selected)
    }
  })
  return tags
})

const removeTag = (tag) => {
  const region = regionsData.find(r => r.name === tag)
  if (region) {
    selectedCountries[region.name] = []
    return
  }
  for (const regName in selectedCountries) {
    selectedCountries[regName] = selectedCountries[regName].filter(c => c !== tag)
  }
}

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const openModal = (type) => {
  activeModal.value = type
  if (type === 'accounts') {
    tempAccounts.value = [...accountsSelected.value]
    tempAccountsCustom.value = accountsCustom.value
  } else if (type === 'creative') {
    tempCreative.value = [...creativeSelected.value]
    tempCreativeCustom.value = creativeCustom.value
  } else if (type === 'ecommerce') {
    tempEcommerce.value = [...ecommerceSelected.value]
  }
}

const saveModal = (type) => {
  if (type === 'accounts') {
    accountsSelected.value = [...tempAccounts.value]
    accountsCustom.value = tempAccountsCustom.value
  } else if (type === 'creative') {
    creativeSelected.value = [...tempCreative.value]
    creativeCustom.value = tempCreativeCustom.value
  } else if (type === 'ecommerce') {
    ecommerceSelected.value = [...tempEcommerce.value]
  }
  activeModal.value = null
}

const totalCapabilitiesCount = computed(() => {
  return accountsSelected.value.length + creativeSelected.value.length + ecommerceSelected.value.length + directServicesSelected.value.length + (creativeCustom.value ? 1 : 0)
})

const allFinalSelectedCapabilities = computed(() => {
  let list = []
  if (accountsSelected.value.length > 0) {
    list.push(...accountsSelected.value)
  }
  if (creativeSelected.value.length > 0) {
    list.push(...creativeSelected.value)
  }
  if (creativeCustom.value.trim()) {
    list.push(creativeCustom.value.trim())
  }
  if (directServicesSelected.value.length > 0) {
    list.push(...directServicesSelected.value)
  }
  if (ecommerceSelected.value.length > 0) {
    list.push(...ecommerceSelected.value)
  }
  return list
})

const isReviewModalOpen = ref(false)

const form = reactive({
  name: '',
  company_name: '',
  work_email: '',
  phone_number: '',
  company_website: '',
  additional_notes: ''
})

const handleReviewPlan = () => {
  if (growthDirection.value === 'Domestic Growth') {
    if (!businessBaseSearch.value.trim()) {
      showBaseError.value = true
      scrollToSection('market-section')
      return
    }
  } else if (growthDirection.value === 'International Expansion') {
    if (allSelectedTags.value.length === 0) {
      showMarketError.value = true
      scrollToSection('market-section')
      return
    }
  }

  if (selectedGrowthPlan.value === 'Enterprise') {
    if (managedPlatforms.value.length === 0 && !customPlatforms.value.trim()) {
      showEnterpriseError.value = true
      scrollToSection('plan-section')
      return
    }
  }

  isReviewModalOpen.value = true
}

watch(selectedGrowthPlan, (newVal) => {
  if (newVal !== 'Enterprise') {
    managedPlatforms.value = []
    customPlatforms.value = ''
    showEnterpriseError.value = false
  }
})

//PocketBase
const handleFormSubmit = async () => {
  try {
    let planValue = selectedGrowthPlan.value
    if (selectedGrowthPlan.value === 'Enterprise' && managedPlatforms.value.length > 0) {
      planValue += ` | Platforms: ${managedPlatforms.value.join(', ')}`
    }
    if (selectedGrowthPlan.value === 'Enterprise' && customPlatforms.value.trim()) {
      planValue += ` | Specify: ${customPlatforms.value.trim()}`
    }

    const payload = {
      growth_engine: selectedEngine.value,
      target_market_address: businessBaseSearch.value,
      target_market_country: allSelectedTags.value.join(', '),
      growth_plan: planValue,
      additional_services: allFinalSelectedCapabilities.value.join(', '),
      name: form.name,
      company_name: form.company_name,
      work_email: form.work_email,
      phone_number: form.phone_number,
      company_website: form.company_website,
      additional_notes: form.additional_notes
    }

    const record = await $pb.collection('growth_plan').create(payload)
    console.log('提交成功，服务器返回记录：', record)
    alert('Thank you! Your enquiry has been submitted successfully. Our expert will contact you soon.')
    
    isReviewModalOpen.value = false

    Object.keys(form).forEach(key => {
      form[key] = ''
    })

    // clearAll()

  } catch (error) {
    alert(`Submission failed: ${error.message || 'Unknown error'}`)
  }
}

const clearAll = () => {
  selectedEngine.value = ''
  growthDirection.value = ''
  businessBaseSearch.value = ''
  marketSearchQuery.value = ''
  showBaseError.value = false
  showMarketError.value = false
  showEnterpriseError.value = false
  for (const regName in selectedCountries) {
    selectedCountries[regName] = []
  }
  selectedGrowthPlan.value = ''
  managedPlatforms.value = []
  customPlatforms.value = ''
  accountsSelected.value = []
  creativeSelected.value = []
  ecommerceSelected.value = []
  creativeCustom.value = ''
  directServicesSelected.value = []
}
</script>
<style scoped>
.custom-market-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-market-scrollbar::-webkit-scrollbar-button,
.custom-market-scrollbar::-webkit-scrollbar-button:single-button,
.custom-market-scrollbar::-webkit-scrollbar-button:vertical:decrement,
.custom-market-scrollbar::-webkit-scrollbar-button:vertical:increment {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
}

.custom-market-scrollbar::-webkit-scrollbar-track {
  background: #E9EBF1;
  border-radius: 8px;
}

.custom-market-scrollbar::-webkit-scrollbar-thumb {
  background: #A9B3C6;
  border-radius: 24px;
}

.custom-market-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #627293;
}
</style>