<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "RootComponent",
  data() {
    return {
      //
    };
  }
};
</script>
<style>
p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
}
html {
  overflow: hidden !important;
}
.application--wrap {
  background: url("https://lh4.googleusercontent.com/zL5Ri6F_Uobt7fvdDFzqwPzbmId4g2UKvS7swOj-KveBn_nw1sg5hrF4N5ce21VSg25LgAxDOAyJkIt2KmM53LqUa7m8vufCIOLpcLbvIO54YOr8Lgd8xV0_OPEVfL3ouASy9oqn");
  background-size: cover;
}
</style>

