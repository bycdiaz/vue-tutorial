<template>
  <div class="hello">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{ index + 1 }}. {{ data.skill }}</li>
      </ul>

      <div v-bind:class="alertObject"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { 'skill': 'Vue.js'},
        { 'skill': 'Frontend Developer'},
        { 'skill': 'JavaScript'},
        { 'skill': 'Ruby'},
      ],
      alertObject: {
        alert: true,
        anotherClass: true,
      }
    }
  }
}
</script>

<style scoped>
  .alert {
    background-color: yellow;
    width: 100%;
    height: 30px;
  }

  .anotherClass {
    border: 5px solid black;
  }  
</style>
