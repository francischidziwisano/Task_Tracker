<template>
  <div class="hello mb-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="nav-link active" aria-current="page" to="/"> <img src="./../../assets/logo.png" alt="" width="30" height="24"> Task Tracking </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/task/">List of Tasks</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/task/addtask"> Add Task</router-link>
                </li>
            </ul>
            <button class="btn btn-light btn-sm d-flex m-3" type="submit"><router-link class="nav-link" to="/">Logout</router-link></button>
            </div>
        </div>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
