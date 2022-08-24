<template>
  <div class="app">
  Hello2 ! {{ mycount }}
    <button @click="mycount++;" >Add</button>
    <button @click="mycount--; " >Sub</button>
    <button @click=onBtnClick >Err</button>
  </div>
</template>

<script>
export default  {
  data() {
    return {
      mycount: 0
    }
  },
  methods:{
    onBtnClick(){
      console.log("xz");
      throw new Error();

    }

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
  background-color: rebeccapurple;
}
button{
  margin: 5px 10px;
  padding: 5px 10px;
}
</style>