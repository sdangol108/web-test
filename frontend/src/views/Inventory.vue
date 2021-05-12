<template>
  <div>
    <h1>Inventory</h1>
    <section class="form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="form.name" class="input" type="text" placeholder="Text input" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inventory',

  async mounted() {
    try {
      await axios.get('http://localhost:9090/inventory')
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      form: {
        name: 'Shreejana'
      }
    }
  }
}
</script>
