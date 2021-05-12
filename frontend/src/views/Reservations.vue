<template>
  <div>
    <h1>Reservations</h1>
    <section class="form">
      <div class="field">
        <div class="main">
          <label class="label">First Name: </label>
          <MyformInput :inputVal="user.fullName" :instruct="user.placeholder"/>
        </div>
        <div class="main">
          <label class="label">Last Name: </label>
          <MyformInput :inputVal="user.name" :instruct="user.placeholder" :myStyle="mystyle"/>
        </div>
        <div class="main">
          <label class="label">Name: </label>
          <MyformInput :inputVal="user.name" :instruct="user.placeholder"/>
        </div>
        <div class="main">
          <label class="label">Name: </label>
          <MyformInput :inputVal="user.name" :instruct="user.placeholder"/>
        </div>
      </div>
    </section>
  </div>  
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import MyformInput from '../components/MyformInput.vue'
import axios from 'axios'

@Component({
  components: {
    MyformInput
  }
})
export default  class Reservations extends Vue {

  async mounted() {
    try {
      await axios.get('http://localhost:9090/reservations')
    } catch (error) {
      console.error(error)
    }
  }
  data(){
    return {
      user: {
        placeholder: "Enter name of the customer"
      },
      myStyle: {
        text : "font-size:16pt;height:20px;width:20px",
        number: "font-size:16pt;height:20px;width:20px",
      }
    }

  }
}
</script>
