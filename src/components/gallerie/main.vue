<template>
  <div>
    <div class="thumbnail-list">
      <img v-for="(source, id) in picLinks" :key="id" :src="source">
    </div>
    <div class="to-top">
      <button @click="goTop">Top</button>
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal" v-if="true">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <img :src="picLinks[0]">
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./main.ts" />
<style scoped lang="scss" src="./main.scss" />
