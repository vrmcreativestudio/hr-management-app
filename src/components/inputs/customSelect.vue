<template>
  <div class="field_select">
    <select
      data-te-select-init
      :value="modelValue"
      @change="$emit('update:modelValue', ($event?.target as HTMLSelectElement).value)"
      :disabled="disabled"
      v-bind="$attrs">
      <slot name="options"></slot>
    </select>
    <label data-te-select-label-ref>{{ (modelValue ? '' : 'Select ') + label }}</label>
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
      type: [String, Array],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
