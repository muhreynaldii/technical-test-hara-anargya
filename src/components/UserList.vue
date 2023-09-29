<template>
  <div
    class="h-full w-full bg-white rounded-[10px] shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]"
  >
    <div class="h-[69px] w-full flex items-center">
      <h2 class="text-[#080808] pl-[28px] text-[17px] font-semibold">
        User List
      </h2>
    </div>
    <table class="w-full">
      <thead class="bg-[#FAFBFC] h-[49px]">
        <tr>
          <th class="text-[12px] text-[#7C7C7C] font-semibold px-4">ID</th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold text-start">
            User
          </th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold">
            Date of Birth
          </th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold">Email</th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold">Job</th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold">Country</th>
          <th class="text-[12px] text-[#7C7C7C] font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="h-[49px] border-b">
          <td class="text-[#686868] text-center">{{ user.id }}</td>
          <td>
            <div class="flex items-center justify-start">
              <img
                :src="user.profile_picture"
                alt="User Image"
                class="rounded-full h-[30px] w-[30px] mr-2"
              />
              <p class="text-[12px] text-[#080808] text-medium text-center">
                {{ user.first_name }} {{ user.last_name }}
              </p>
            </div>
          </td>
          <td class="text-[#686868] text-[12px] text-center">
            {{ formatDate(user.date_of_birth) }}
          </td>
          <td class="text-[12px] text-[#080808] text-medium text-center">
            {{ user.email }}
          </td>
          <td class="text-[#686868] text-[12px] text-center">{{ user.job }}</td>
          <td class="text-[12px] text-[#080808] text-medium text-center">
            {{ user.country }}
          </td>
          <td class="text-center">
            <!-- <button
              class="shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)] text-[12px] text-[#080808] text-medium mr-[10px] h-[22px]"
              @click="selectUser(user)"
            >
              Select
            </button> -->
            <button
              class="shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)] text-[12px] text-[#080808] text-medium h-[22px] px-2 hover:bg-gray-200"
              @click="viewDetail(user)"
            >
              View Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <transition name="fade">
      <ModalDetail
        :selectedUser="selectedUser"
        v-if="showPopup"
        @close="showPopup = false"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import axios from "axios";
import ModalDetail from "./ModalDetail.vue";

const users = ref([]);
const showPopup = ref(false);
const selectedUser = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/users"
    );
    users.value = response.data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const formatDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

const viewDetail = (user) => {
  console.log("Viewing details of user:", user);
  selectedUser.value = user;
  showPopup.value = true;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
