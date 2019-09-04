<template>
  <div class="home">
    <button @click="returnConfirm()">返回</button>
    <label>{{this.$store.state.userInput}}</label>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
  },
  methods:{
      returnConfirm:function(){
          var con = confirm("返回？");
          if(con==true){
              this.$router.push({ path: "/main" });
          }
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
