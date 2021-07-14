<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" id="bar">
    <b-navbar-brand id="brand" class="mt-4" :to="'/'">GROAD</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mx-auto">
        <b-nav-item :to="'/introduction'" class="mx-5">마음의 순례길</b-nav-item>
        <b-nav-item :to="'/helper'" class="mx-5">여행 도우미</b-nav-item>
        <b-nav-item :to="'/story'" class="mx-5">순례길 이야기</b-nav-item>
        <b-nav-item :to="'information'" class="mx-5">여행 정보</b-nav-item>
        <b-nav-item :to="'/community'" class="mx-5">커뮤니티</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

#bar{
  height: 100px;
}

#nav_collapse{
  font-size: 20px;
}

#brand{
  font-size: 30px;
}

</style>