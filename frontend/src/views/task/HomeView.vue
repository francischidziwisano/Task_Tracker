<template>
    <div class="container"><NavBar />
    <div>
            
            <div class="row">
                <div class="col-8 ">
                    <h2 class="text-left">List of Tasks</h2> 
                </div>
                
                <div class="col-4 text-right">
                    <form class="d-flex">
                        <input class=" form-control me-2" type="search" placeholder="Search" width="50px" aria-label="Search" required />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                       
                    </form>
                </div>
            </div>
            <table class="table table-sm table-striped ">
            <thead class="table-dark">
                <tr>
                    <th scope="col" class="text-start"># </th>
                    <th scope="col" class="text-start">Title </th>
                    <th scope="col" class="text-start">Description </th>
                    <th scope="col" class="text-start">Date Added </th>
                    <th scope="col" class="text-start">Due Date </th>
                    <th scope="col" class="text-start">Completion Status </th>
                    <th scope="col" class="text-start">Options </th>
                    <th scope="col" class="text-start"> </th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="(addlink_alias, index) in Addtask" v-bind:key="addlink_alias._id">
                    <th scope="row" class="text-start"> {{index}}. {{ addlink_alias.index }} </th>
                    <td class="text-start"> {{ addlink_alias.Title }} </td>
                    <td class="text-start"> {{ addlink_alias.Date_Added }} </td>
                    <td class="text-start"> {{ format_date(addlink_alias.Due_Date) }} </td>
                    <td class="text-start"> {{ addlink_alias.Description }} </td>
                    <td class="text-start"> {{ addlink_alias.Status }} </td>
                    <td class="text-start ">
                        <select 
                        class="form-select" 
                        id="inputGroupSelect01" 
                        v-model="Status"
                        placeholder="Choose Status"
                        v-on:change="updateTask(addlink_alias._id)">
                            <option selected disabled>Choose Status</option>
                            <option value="Complete"> Complete </option>
                            <option value="Incomplete"> Incomplete </option>
                        </select>
                        
                    </td>
                    <td>
                        <button class="btn m-0 p-0 btn-link" v-on:click="deleteTask(addlink_alias._id)">
                            <i class="bi bi-trash" style="color:red">    </i>
                        </button>
                        
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
        <MyFooter />
    </div>
</template>
<script>
import axios from 'axios';
import NavBar from '@/components/task/NavBar.vue'
import MyFooter from '@/components/task/MyFooter.vue'
import moment from "moment";

export default ({
    name: 'ListCustomers',
    data() {
        return{
            Addtask: [],
            Status: '',
        }    
    },  
    components: {
     NavBar,
     MyFooter,
    },
    methods: {
    format_date(value){
         if (value) {
           return moment(String(value)).format('DD-MM-YYYY')
          }
      },
    deleteTask(_id) {
        
        axios.delete("http://localhost:3000/deleteuser", { data: { _id: _id} })
            console.log(_id);  
            location.reload()          
            alert("Task Deleted");
        },
    updateTask(id) {
        let newStatus = {
                Status: this.Status
        }
        axios.post("http://localhost:3000/updatetask/"+id, newStatus)
            console.log(newStatus);
            location.reload()  
            alert("Task Updated");
        }
    },
    mounted(){
        axios.get('http://localhost:3000/addtask')
        .then((response) => {
            console.log(response.data);
            this.Addtask = response.data;
        })
        .catch ((error) => {
            console.log(error);
        });
    }
})
</script>
