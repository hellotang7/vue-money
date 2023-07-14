<template>
    <div>
        <label class="notes">
            <span class="name">备注：</span>
            <input v-model="value" type="text" placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue, {watch} from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        value = '';

        @Watch('value')
        watchValue(value:string){
            this.$emit('update:value',this.value)
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
