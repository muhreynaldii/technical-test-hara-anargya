<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="fixed inset-0 bg-gray-700 opacity-50"></div>
    <div class="bg-white rounded-lg p-4 w-[400px] z-50 relative">
      <h2 class="text-[#080808] text-lg font-semibold mb-4">User Details</h2>
      <div v-if="selectedUser">
        <div class="mb-4">
          <img
            :src="selectedUser.profile_picture"
            alt="User Image"
            class="rounded-full h-[80px] w-[80px] mx-auto mb-2"
          />
        </div>
        <div class="mb-2">
          <p class="text-[#080808] text-base font-semibold">Name:</p>
          <p class="text-[#686868] text-base">
            {{ selectedUser.first_name }} {{ selectedUser.last_name }}
          </p>
        </div>
        <div class="mb-2">
          <p class="text-[#080808] text-base font-semibold">Email:</p>
          <p class="text-[#686868] text-base">{{ selectedUser.email }}</p>
        </div>
        <div class="mb-2">
          <p class="text-[#080808] text-base font-semibold">Date of Birth:</p>
          <p class="text-[#686868] text-base">
            {{ formatDate(selectedUser.date_of_birth) }}
          </p>
        </div>
        <div class="mb-2">
          <p class="text-[#080808] text-base font-semibold">Job:</p>
          <p class="text-[#686868] text-base">{{ selectedUser.job }}</p>
        </div>
        <div class="mb-4">
          <p class="text-[#080808] text-base font-semibold">Country:</p>
          <p class="text-[#686868] text-base">{{ selectedUser.country }}</p>
        </div>
      </div>
      <button class="absolute right-4 top-4" @click="handleClose">
        <Icon icon="octicon:x-12" color="#fa1212" width="15" height="15" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineEmits, defineProps } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  selectedUser: Object,
});

const emits = defineEmits(["close"]);

const handleClose = () => {
  emits("close");
};

const formatDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
</script>
