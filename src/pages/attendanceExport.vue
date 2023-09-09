<script setup lang="ts">
import LogsViewer from '../components/content/logsViewer.vue'
</script>

<template>
  <LogsViewer class="attendance-export">
    <template #viewer-header>
      <div class="content-title flex flex-col mb-2 md:mb-0">
        <h2>Export files</h2>
        <p>No file to download</p>
      </div>
    </template>

    <template #viewer-content>
      <div class="text-center py-10">
        <img class="mx-auto" src="../assets/no_payslip.png" alt="No logs" />
        <h2>There are no exported items to show on your end.</h2>
        <p>Search for the logs and click Export to generate the file here.</p>
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
.attendance-export .logs-viewer {
  height: calc(100% - 80px);
}
</style>
