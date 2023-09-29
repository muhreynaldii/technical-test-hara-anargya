<template>
  <div id="app">
    <div class="flex flex-row">
      <Sidebar />
      <div class="flex-grow bg-gray-100">
        <div
          class="h-[65px] bg-white shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)] flex items-center pl-9"
        >
          <h2 class="text-[#080808] text-[17px] font-semibold">Conversion</h2>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../src/components/Sidebar.vue";
</script>
