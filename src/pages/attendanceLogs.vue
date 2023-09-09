<script setup lang="ts">
import LogsViewer from '../components/content/logsViewer.vue'
</script>

<template>
  <LogsViewer class="attendance-logs">
    <template #viewer-header>
      <div class="content-title flex flex-row items-center mb-2 md:mb-0">
        <font-awesome-icon icon="fa-calendar" />
        <h3 class="ml-2">Date Range</h3>
      </div>
      <div class="tabs flex flex-row">
        <a href="/#" class="tab-item active flex flex-row items-center py-1.5 px-2 rounded-tl rounded-bl">
          <span class="mr-2">Active Logs</span>
          <font-awesome-icon icon="check" />
        </a>
        <a href="/#" class="tab-item flex flex-row items-center py-1.5 px-2 border-[1px] rounded-tr rounded-br">
          <span>Deleted Logs</span>
        </a>
      </div>
    </template>

    <template #viewer-content>
      <div class="text-center py-10">
        <img class="mx-auto" src="../assets/no_payslip.png" alt="No logs" />
        <h2>No attendance logs to show</h2>
        <p>Get started by searching for the logs</p>
      </div>
    </template>

    <template #viewer-footer>
      <div class="items-per-page flex flex-row">
        <span class="mr-2">Items per page</span>
        <select class="max-w-[57px] py-0 px-2 border-[1px] rounded">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option selected>10</option>
        </select>
      </div>

      <div class="pagination">
        <ul class="list-none flex flex-row flex-wrap">
          <li>
            <a href="#" class="px-2">
              <font-awesome-icon icon="backward-fast" />
            </a>
          </li>
          <li>
            <a href="#" class="px-2">
              <font-awesome-icon icon="backward-step" />
            </a>
          </li>
          <li>
            <div class="pager flex flex-row">
              <span>Page </span>
              <input type="number" value="1" min="1" class="max-w-[48px] mx-2 text-center border-[1px] rounded" />
              <span>of 1</span>
            </div>
          </li>
          <li>
            <a href="#" class="px-2">
              <font-awesome-icon icon="forward-step" />
            </a>
          </li>
          <li>
            <a href="#" class="px-2">
              <font-awesome-icon icon="forward-fast" />
            </a>
          </li>
        </ul>
      </div>

      <div class="pager-info">
        <span>Showing 0 of 0</span>
      </div>
    </template>
  </LogsViewer>
</template>

<style lang="scss">
.attendance-logs .logs-viewer {
  // Update the subtracted height based on the height of #viewer-header.
  height: calc(100% - 49.6px);
}
</style>
