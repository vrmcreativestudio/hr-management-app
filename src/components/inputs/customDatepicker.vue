<template>
  <div class="date-from relative mb-4" data-te-datepicker-init data-te-input-wrapper-init>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent p-3 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      placeholder=""
      :disabled="disabled"
      v-bind="$attrs" />
    <label
      class="pointer-events-none absolute left-3 top-[4px] z-[1] mb-0 max-w-[90%] origin-[0_0] truncate pt-[6px] pr-[5px] scale-125 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] peer-focus:scale-100 peer-data-[te-input-state-active]:-translate-y-[1.25rem] peer-data-[te-input-state-active]:scale-100 motion-reduce:transition-none"
      >{{ label }}</label
    >
  </div>
</template>
<script lang="ts">
export default {
  props: {
    label: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
