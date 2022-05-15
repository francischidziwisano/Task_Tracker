<template>
<div class="container"><NavBar />
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4 border border-secondary mt-4 mb-2 pt-4 pb-4 rounded">   
      <h2 class="card-title pt-2 pb-2 fw-bold"> Add New Task</h2>
        <p>Fill the form below, to add a new task.</p>
      <form class="form-floating gx-3 gy-2">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            v-model="AddLink.Title"
            required
          />
        </div>
        <div class="mb-3">
          <input 
            type="text"
            class="form-control"
            placeholder="Due Date"
            v-model="AddLink.Due_Date"
            required/><i class="fas fa-calendar input-prefix"></i>
        </div>  
        <div class="mb-3">
          <textarea
            type="text"
            class="form-control"
            placeholder="Description"
            v-model="AddLink.Description"
            required></textarea>
        </div>    
        <div class="mb-2">
          <select 
            class="form-control" 
            aria-label="Default select example"
            placeholder="Category"
            v-model="AddLink.Status"
            required
          >
                <option selected>Select</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
          </select>
        </div>
        <button type="button" class="btn btn-secondary" @click="addToAPI">Submit Details</button>
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
import NavBar from '@/components/task/NavBar.vue'
import MyFooter from '@/components/task/MyFooter.vue'
//add tasks
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      AddLink: {Title: '', Due_Date: '', Description: '', Status: ''}
    }
  }, 
   components: {
     NavBar,
     MyFooter
    },
  methods: {
    addToAPI () {
      let newAddLink = {
        Title: this.AddLink.Title,
        Due_Date: this.AddLink.Due_Date,
        Description: this.AddLink.Description,
        Status: this.AddLink.Status
      }
      console.log(this.AddLink)
      axios.post('http://localhost:3000/addtask', newAddLink)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
      if (this.AddLink.Title !== "" && this.AddLink.Due_Date !== "" && this.AddLink.Description !== ""){
              swal.fire({
                title: "Task Succesfully Created",
                text: this.AddLink.Title + " has been successfully created!",
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
    datepicker()
{    ('.datepicker').datepicker({
  inline: true
})},
    goToNamesTests(){
      this.$router.push({ name: "ListCustomers"});
    }
  }
}
</script>

