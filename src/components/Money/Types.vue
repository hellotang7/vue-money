<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'" @click="selectedType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectedType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="js">
    export default {
        props:['xxx'],
        data(){
            return{
                type:'-'  //'-'表示支出，'+'表示收入
            }
        },
        methods:{
            selectedType(type){
                if(type !== '-' && type!=='+'){
                    throw new Error('type is error')
                }
                this.type = type
                console.log(type);
            }
        },
        mounted() {
            console.log(this.xxx)
        }
    };
</script>

<style lang="scss" scoped>
  .types {
    display: flex;
    background: #c4c4c4;
    font-size: 24px;
    text-align: center;


    li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>
