<script setup lang="ts">
import '../../styles/components/content_body.scss'
</script>

<template>
  <div class="content-body w-full p-[24px]">
    <div class="header flex flex-col md:flex-row md:justify-between mb-6">
      <slot name="viewer-header"></slot>
    </div>

    <div class="logs-viewer min-w-full overflow-auto border-[1px] rounded">
      <div class="min-w-[600px] h-full">
        <div class="viewer-body flex items-center justify-center">
          <slot name="viewer-content"></slot>
        </div>

        <div class="viewer-footer p-4 border-t-[1px] flex flex-row justify-between items-center">
          <slot name="viewer-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../styles/helpers';

.content-body {
  max-width: none;

  @include min(md) {
    // Update the subtracted width based on the width of sidebar.
    max-width: calc(100% - 354px);
  }
}
</style>
