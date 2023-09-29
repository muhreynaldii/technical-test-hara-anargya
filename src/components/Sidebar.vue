<template>
  <div class="bg-white text-white w-[281px] h-screen">
    <div class="p-4">
      <h1 class="text-[30px] font-extrabold text-[#152544] pl-5">heylink.</h1>
    </div>
    <nav class="pt-4">
      <ul class="pl-[41px] pr-[11px]">
        <li
          :class="{ 'bg-[#E3F2FD]': $route.path === '/dashboard' }"
          class="h-[46px] rounded-lg"
        >
          <router-link
            to="/"
            class="text-[#424242] font-medium text-base pl-[8px] py-[13px] flex items-center"
          >
            <Icon
              icon="fluent-mdl2:b-i-dashboard"
              width="20"
              height="20"
              class="mr-3"
            />
            Dashboard
          </router-link>
        </li>
        <li
          :class="{ 'bg-[#E3F2FD]': $route.path === '/overview' }"
          class="h-[46px] rounded-lg"
        >
          <router-link
            to="/overview"
            class="text-[#424242] font-medium text-base pl-[8px] py-[13px] flex items-center"
          >
            <Icon
              icon="material-symbols:overview-outline"
              width="20"
              height="20"
              class="mr-3"
            />
            Overview
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
