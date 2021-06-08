<template>
  <div id="app">
    <h1>Axios API Test</h1>
    <div id="nav">
      <router-link to="/">GET</router-link> |
      <router-link to="/post">POST</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
  h1{
    font-size:40px;
  }
h2{
  margin:20px 0;
  font-size:24px;
}
</style>
