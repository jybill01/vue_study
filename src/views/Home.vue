<template>
  <div>
    <img src="../assets/춘천2.jpg" id="bg" alt="">
    <HomeNotice id="no"></HomeNotice>
  </div>
</template>

<script>
import HomeNotice from "../components/HomeNotice";

export default {
  components:{
    HomeNotice,
  }
}
</script>

<style scoped>

#bg{
  top: -20px;
  min-width: 100%;
  position: relative;
}

#no{
  top: -20px;
  position: relative;
}

</style>