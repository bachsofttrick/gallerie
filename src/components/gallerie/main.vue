<template>
  <div>
    <div class="thumbnail-list">
      <img v-for="(source, id) in picLinks" :key="id" :src="source">
      <div class="multiply-time">
        <input v-model="times" />
        <button @click="multiplySrc(times)">Multiply</button>
        <button @click="deleteHalf">Delete</button>
      </div>
    </div>
    <div class="to-top">
      <button @click="goTop">Top</button>
    </div>
  </div>
</template>

<script lang="ts" src="./main.ts" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css" src="./main.css" />
