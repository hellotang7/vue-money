<template>
    <div>
        <label class="notes">
            <span class="name">{{ this.fieldName }}</span>
            <input :value="value" @input="watchValue($event.target.value)" type="text" :placeholder="`${this.placeholder}`">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue, {watch} from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        @Prop({default:''})value!:string;
        @Prop({required:true}) fieldName!:string
        @Prop() placeholder?:string

        watchValue(value:string){
            this.$emit('update:value',value)
        }


    }
</script>

<style lang="scss" scoped>
  .notes {
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;

    .name {
      padding-right: 16px;
    }

    input {
      height: 54px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
