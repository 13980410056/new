<template>
  <div class="">

  </div>
</template>
<!---->
<script>
  export default {
    name: '',
    data () {
      return {
        resetPwdVisible: false
      }
    },
    components: {},
    mounted(){
      this.formShow()
    },
    methods: {
      formShow(){
          this.resetPwdVisible=sessionStorage.getItem("resetPwdVisible")
      },
      formOut(){
        sessionStorage.setItem("resetPwdVisible",false)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
