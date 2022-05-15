<template>
  <div class="container"><NavBar />
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4 border border-secondary mt-4 mb-2 pt-4 pb-4 rounded">   
      <h2 class="card-title pt-2 pb-2 fw-bold"> Create Account</h2>
        <p>If you are new fill the form below, to create account.</p>
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
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="NewUser.useremail"
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
        <button type="button" class="btn btn-secondary" @click="addToAPI"> Submit Details</button>
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
import swal from "sweetalert2";
import NavBar from '@/components/NavBar.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      NewUser: {username: '', useremail: '', userpassword: ''}
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
        useremail: this.NewUser.useremail,
        userpassword: this.NewUser.userpassword
      }
      console.log(this.NewUser)
      axios.post('http://localhost:3000/adduser', newUser)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
      if (this.NewUser.username !== "" && this.NewUser.useremail !== "" && this.NewUser.userpassword !== ""){
              swal.fire({
                title: "Registration Succesfully",
                text: this.NewUser.username + " your account has been successfully created!",
                type: "success",
                confirmButtonClass: "btn btn-success btn-fill",
                buttonsStyling: false,
                icon: "success"
              });
      } 
      else {
              swal.fire({
                title: "Empty Fields",
                text: "Make sure that all field are filled",
                type: "error",
                confirmButtonClass: "btn btn-success btn-fill",
                buttonsStyling: false,
                icon: "error"
              });
      }
    },
    goToNamesTests(){
      this.$router.push({ name: "ListCustomers"});
    }
  }
}
</script>

