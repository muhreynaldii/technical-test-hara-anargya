<template>
  <div
    class="w-[347px] h-[143px] rounded-[10px] bg-white shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]"
  >
    <div class="p-4">
      <div class="flex justify-between">
        <p class="text-[#727272] font-semibold">{{ title }}</p>
        <div
          class="w-[34px] h-[34px] rounded-[4px] bg-[#F2F4F7] flex items-center justify-center"
        >
          <Icon
            icon="mingcute:transfer-line"
            width="20"
            height="20"
            color="#817f7f"
          />
        </div>
      </div>
      <p class="text-[#080808] font-semibold text-xl">
        {{ formattedAmount }}{{ decimalAmount ? "," : ""
        }}<span class="text-[#9A9A9A]">{{ decimalAmount }}</span>
      </p>
    </div>
    <div
      class="h-[47px] bg-[#F9FAFC] w-full pl-[17px] flex justify-between items-center"
    >
      <div class="flex items-center">
        <Icon :icon="iconName" :color="iconColor" width="15" height="15" />
        <p class="text-[#4CBF93] text-[10px] font-semibold">
          {{ formattedPercent }}
        </p>
        <p class="text-[#AAAAAA] text-[10px] font-medium pl-1">Last Month</p>
      </div>
      <p class="text-[#6E6E6E] text-[10px] font-semibold pr-3 cursor-pointer">
        View More
      </p>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

export default {
  props: {
    title: String,
    mainAmount: Number,
    decimalAmount: Number,
    percent: Number,
    iconName: String,
    iconColor: String,
  },
  components: {
    Icon,
  },
  setup(props) {
    const formattedAmount = computed(() => {
      return props.mainAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });

    const formattedPercent = computed(() => {
      return props.percent.toString().replace(".", ",");
    });
    return {
      formattedAmount,
      formattedPercent,
    };
  },
};
</script>

<style scoped></style>
