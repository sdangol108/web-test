<template>
  <input
    v-model="inputVal"
    class="input"
    type="inputType"
    :placeholder="instruct"
    :class="decorator"
    :style="myStyle"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Watch } from 'vue-property-decorator'

@Component
export default class MyformInput extends Vue {
  @PropSync('input', { type: String }) readonly inputType!: string
  @Prop() readonly inputVal!: string
  @Prop({ default: 'instructions' }) readonly instruct!: string
  @Prop() readonly myStyle!: string

  @Prop({ default: false }) readonly valChange!: boolean

  //   @Watch('child')
  //   onChildChanged(val: string, oldVal: string) {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 input[type="text"]{
    padding: 20px 10px;
    line-height: 28px; 
 }

 .decorator {
   display: block;
   width: 100%;
   height: calc(1.5em + .75rem + 2px);
   padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
   transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }
</style>
