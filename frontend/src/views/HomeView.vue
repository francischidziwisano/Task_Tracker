<template>
  <div class="container">
    <NavBar />
    <div class="row">
    <div class="col-4"></div>
    <div class="col-4 border border-secondary mt-4 mb-2 pt-4 pb-4 rounded">   
      <h2 class="card-title pt-2 pb-2 fw-bold"> Login </h2>
        <p> Enter login details below, to access your account.</p>
      <form class="form-floating gx-3 gy-2">
        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            placeholder="Username"
            v-model="NewUser.username"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="NewUser.userpassword"
            required/>
        </div>
        <button type="button" class="btn btn-secondary" @click="addToAPI"> Login </button>
        <div> </div>
      </form>
    </div>
    <div class="col-4"></div>
  </div>
    <MyFooter />
  </div>
</template>

<script>
import axios from 'axios';
//import swal from "sweetalert2";
import NavBar from '@/components/NavBar.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      NewUser: {username: '', userpassword: ''}
    }
  }, 
  components: {
     NavBar,
     MyFooter
  },
  methods: {
    addToAPI () {
      let newUser = {
        username: this.NewUser.username,
        userpassword: this.NewUser.userpassword
      }
      console.log(this.NewUser)
      axios.post('http://localhost:3000/login', newUser)
      .then((response) => {
        if (response.status == 200){
          localStorage.setItem('token', response.data.token);
          this.$router.push('/task/');
        }
        console.log(response.data)})
      .catch((error) => console.log(error));
    },
    goToNamesTests(){
      this.$router.push({ name: "ListCustomers"});
    }
  }
}
</script>

