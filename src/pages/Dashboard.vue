<template>
  <div class="pl-9 pt-[30px] pr-9">
    <div class="flex justify-between">
      <CardDashboard
        title="Pending"
        :mainAmount="2480"
        :decimalAmount="30"
        :percent="2.15"
        iconName="ph:arrow-up-right-bold"
        iconColor="#4cbf93"
      />
      <CardDashboard
        title="Paid"
        :mainAmount="84310"
        :percent="1.1"
        iconName="ph:arrow-down-right-bold"
        iconColor="#ee7c85"
      />
      <CardDashboard
        title="Rejected"
        :mainAmount="12155"
        :percent="2.15"
        iconName="ph:arrow-up-right-bold"
        iconColor="#4cbf93"
      />
    </div>
    <UserList class="mt-[31px]" />
  </div>
</template>

<script setup>
import CardDashboard from "../components/CardDashboard.vue";
import UserList from "../components/UserList.vue";
</script>

<style scoped></style>
