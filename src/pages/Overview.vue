<template>
  <div class="bg-gray-100 py-8">
    <div
      class="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-y-auto max-h-screen"
    >
      <h1 class="text-2xl font-semibold mb-4 text-center">
        Province & City Information
      </h1>
      <div class="mb-4">
        <label
          for="provinceSelect"
          class="block text-sm font-medium text-gray-700"
        >
          Select Province:
        </label>
        <select
          v-model="selectedProvince"
          @change="filterCities"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select Province</option>
          <option
            v-for="provinsi in province"
            :key="provinsi.id"
            :value="provinsi.id"
          >
            {{ provinsi.name }}
          </option>
        </select>
      </div>
      <div v-if="filteredCities.length > 0" class="mb-4">
        <h2 class="text-lg font-semibold mb-2">
          Cities in the Selected Province:
        </h2>
        <ul class="list-disc list-inside">
          <li v-for="city in filteredCities" :key="city.id">{{ city.name }}</li>
        </ul>
      </div>
      <div class="mb-4">
        <label for="citySelect" class="block text-sm font-medium text-gray-700">
          Select City
        </label>
        <select
          v-model="selectedCity"
          @change="getProvinceName"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select City</option>
          <option v-for="city in city" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
        <div v-if="selectedProvinceName" class="mt-2">
          <p class="text-sm text-gray-500">
            Province Name: {{ selectedProvinceName }}
          </p>
        </div>
      </div>
      <div>
        <label for="sortSelect" class="block text-sm font-medium text-gray-700">
          Sort Provinces:
        </label>
        <select
          v-model="sortOption"
          @change="sortProvinces"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="id_asc">ID Province (Ascending)</option>
          <option value="id_desc">ID Province (Descending)</option>
          <option value="name_asc">Province Name (Ascending)</option>
          <option value="name_desc">Province Name (Descending)</option>
        </select>
        <ul
          v-if="sortedProvinces.length > 0"
          class="list-disc list-inside mt-2"
        >
          <li v-for="provinsi in sortedProvinces" :key="provinsi.id">
            {{ provinsi.id }} - {{ provinsi.name }}
          </li>
        </ul>
      </div>
      <img src="../assets/img/indonesia.png" alt="" />
    </div>
  </div>
</template>

<script>
import provinceData from "../assets/js/province";
import cityData from "../assets/js/city";

export default {
  data() {
    return {
      province: provinceData,
      city: cityData,
      selectedProvince: "",
      filteredCities: [],
      selectedCity: "",
      selectedProvinceName: "",
      sortedProvinces: [],
      sortOption: "id_asc",
    };
  },
  methods: {
    filterCities() {
      this.filteredCities = this.city.filter(
        (city) => city.provinsi_id === parseInt(this.selectedProvince)
      );
    },
    getProvinceName() {
      const selectedCity = this.city.find(
        (city) => city.id === parseInt(this.selectedCity)
      );

      if (selectedCity) {
        const selectedProvince = this.province.find(
          (provinsi) => provinsi.id === selectedCity.provinsi_id
        );

        if (selectedProvince) {
          this.selectedProvinceName = selectedProvince.name;
        } else {
          this.selectedProvinceName = "Provinsi tidak ditemukan";
        }
      } else {
        this.selectedProvinceName = "";
      }
    },
    sortProvinces() {
      let sortedProvinces = [...this.province];
      const compareFunction = (a, b) => {
        if (this.sortOption === "id_asc") {
          return a.id - b.id;
        } else if (this.sortOption === "id_desc") {
          return b.id - a.id;
        } else if (this.sortOption === "name_asc") {
          return a.name.localeCompare(b.name);
        } else if (this.sortOption === "name_desc") {
          return b.name.localeCompare(a.name);
        }
      };
      sortedProvinces.sort(compareFunction);
      this.sortedProvinces = sortedProvinces;
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
</style>
