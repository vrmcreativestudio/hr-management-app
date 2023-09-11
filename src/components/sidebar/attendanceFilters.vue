<template>
  <form class="attendance-log-filters" @submit.prevent="handleSubmit">
    <div class="filter-inputs p-6 border-b-[1px]">
      <div class="date-range mb-4">
        <h3 class="mb-4">Date Range</h3>

        <CustomDatepicker 
          label="Date From"
          v-model="formData.field_date_from"
          :disabled="disabledFields" />

        <CustomDatepicker 
          label="Date To"
          v-model="formData.field_date_to"
          :disabled="disabledFields" />
      </div>

      <div class="more-filters">
        <div class="flex flex-row items-center justify-between mb-2">
          <h3>Filters</h3>
          <a
            href="#showAllFilters"
            role="button"
            aria-expanded="false"
            data-te-dropdown-toggle-ref
            @click.prevent="showAllFilters = !showAllFilters"
            class="toggle-filter py-1 px-2 hover:underline">
            {{ showAllFilters ? 'Hide All' : 'Show All' }}
          </a>
        </div>

        <div v-show="!showAllFilters" class="hide-more-filters flex flex-col gap-2 py-2">
          <div class="filter-item">
            <font-awesome-icon icon="fa-regular fa-building" />
            <span>{{ formData.field_company || 'Company' }}</span>
          </div>
          <div class="filter-item">
            <font-awesome-icon icon="fa-solid fa-users" />
            <span>{{ formData.field_department || 'All' }}</span>
          </div>
          <div class="filter-item">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span>{{ formData.field_location || 'All' }}</span>
          </div>
          <div class="filter-item">
            <font-awesome-icon icon="fa-solid fa-user" />
            <span>{{ formData.field_employee.length > 0 ? formData.field_employee.join(', ') : 'All' }}</span>
          </div>
        </div>

        <div v-show="showAllFilters" class="show-more-filters flex flex-col gap-4">
          <CustomSelect
            label="Company"
            v-model="formData.field_company"
            :disabled="disabledFields">
            <template #options>
              <option value="" hidden selected></option>
              <option value="Sprout Solutions">Sprout Solutions</option>
              <option value="McDollibee">McDollibee</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
            </template>
          </CustomSelect>

          <CustomSelect
            label="Department"
            v-model="formData.field_department"
            :disabled="disabledFields || !formData.field_company">
            <template #options>
              <option value="" hidden selected></option>
              <option value="all">All</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
            </template>
          </CustomSelect>

          <CustomSelect
            label="Location"
            v-model="formData.field_location"
            :disabled="disabledFields || !formData.field_department">
            <template #options>
              <option value="" hidden selected></option>
              <option value="all">All</option>
              <option value="Alabang">Alabang</option>
              <option value="Pasig">Pasig</option>
              <option value="Taguig">Taguig</option>
              <option value="Quezon City">Quezon City</option>
            </template>
          </CustomSelect>

          <div class="field_select">
            <select
              data-te-select-init
              v-model="formData.field_employee"
              multiple
              :disabled="disabledFields || !formData.field_location">
              <option value="Johny">Johny</option>
              <option value="Juana">Juana</option>
              <option value="Juan">Juan</option>
              <option value="Nena">Nena</option>
            </select>
            <label data-te-select-label-ref>{{ (formData.field_employee ? '' : 'Select ') }}Employee</label>
          </div>
        </div> 
      </div>       
    </div>

    <div class="filter-actions p-6 flex flex-col gap-2 border-b-[1px] md:border-b-0">
      <button type="submit" class="w-full block search-filter p-4 rounded" :disabled="disabledSubmit">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <span class="ml-2">Search</span>
      </button>
      <button type="button" class="w-full block export-filter p-4 border rounded" :disabled="disabledExport">
        <font-awesome-icon icon="fa-solid fa-download" />
        <span class="ml-2">Export</span>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Datepicker, Input, Select, initTE } from 'tw-elements'

import CustomSelect from '../inputs/customSelect.vue'
import CustomDatepicker from '../inputs/customDatepicker.vue'

export default {
  mounted() {
    this.initialize();
  },
  updated() {
    this.initialize();
  },
  data() {
    return {
      showAllFilters: false,
      disabledFields: false,
      disabledSubmit: false,
      disabledExport: false,
      formData: {
        field_date_from: "",
        field_date_to: "",
        field_company: "",
        field_department: "",
        field_location: "",
        field_employee: []
      }
    };
  },
  methods: {
    initialize() {
      initTE({ Datepicker, Input, Select });
      this.disabledFields = localStorage.getItem("disabledFields") === 'true' || false;
      this.disabledSubmit = localStorage.getItem("disabledSubmit") === 'true' || false;
      this.disabledExport = localStorage.getItem("disabledExport") === 'true' || false;
    },
    handleSubmit(event: Event) {
      event.preventDefault();
      alert(`
        Form submitted. Data extracted:
        Date from: ${this.formData.field_date_from}
        Date to: ${this.formData.field_date_to}
        Company: ${this.formData.field_company}
        Department: ${this.formData.field_department}
        Location: ${this.formData.field_location}
        Employee: ${this.formData.field_employee.join(', ')}
      `);
    }
  },
  components: { CustomSelect, CustomDatepicker }
}
</script>
