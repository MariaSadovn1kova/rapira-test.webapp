<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Главная', href: '#', current: false },
  { name: 'Блог', href: '#', current: true },
]
</script>

<template>
  <Disclosure as="nav" class="nav bg-black" v-slot="{ open }">

    <div class="nav__wrapper h-full flex justify-center">

      <div class="nav__container h-full relative flex items-center justify-between">

        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md py-2 text-gray-400 ">
            <span class="absolute -inset-0.5" />
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="nav__items-wrapper flex flex-1 items-center sm:ml-1">

          <div class="nav__logo flex flex-shrink-0 items-center">
            <img 
              class="h-8 w-auto" 
              src="@/assets/svg/logo.svg" 
              alt="Your Company" 
            />
          </div>

          <div class="nav__btns hidden sm:ml-6 sm:block">
            <div class="flex nav__item-container">
              <a 
                v-for="item in navigation" 
                :key="item.name" 
                :href="item.href" 
                :class="[item.current ? 'nav__item--active' : 'nav__item--unactive', 'nav__item']"
              >
                {{ item.name }}
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>

    <DisclosurePanel class="nav__dropdown sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton 
          v-for="item in navigation" 
          :key="item.name" as="a" 
          :href="item.href" 
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" 
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
      </DisclosureButton>
      </div>
    </DisclosurePanel>

  </Disclosure>
</template>

<style lang="sass" scoped>
.nav 
  height: 78px

.nav__wrapper
  padding: var(--nav-wrapper-padding)

.nav__container 
  width: var(--nav-width)

.nav__items-wrapper
  padding: var(--nav-items-padding)
  
.nav__btns 
  margin-left: 80px
  
.nav__logo 
  width: 150px
  height: 100%

.nav__item-container
  gap: 20px

.nav__item
  padding: 8px 14px 8px 14px
  font-size: 16px
  font-weight: 600
  line-height: 16px

.nav__item--unactive
  color: var(--color-nav-item-color)

.nav__item--active
  color: var(--color-nav-item-active-color)
  background: rgba(#fff, 0.1)

.nav__dropdown
  position: absolute
  z-index: 100
  width: 100%
  background: var(--color-nav-bg)
</style>