<template>
  <svg class="icon" aria-hidden="true" :style="{fontSize: fs}">
    <use :xlink:href="name"></use>
  </svg>


</template>

<script>
export default {
  name: "IconFont",

  props: {
    name: {
      type: String,
      required: true,
    },

    fs:{
      type: String,
      default:()=> "20px"
    }
  }

}
</script>

<style scoped>

</style>