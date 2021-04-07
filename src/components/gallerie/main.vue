<template>
  <div class="thumbnail-list">
    <img v-for="(source, id) in picLinks" :key="id" :src="source">
    <img v-for="(source, id) in picLinks" :key="id" :src="source">
  </div>
</template>

<script lang="ts" src="./main.ts" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css" src="./main.css" />
