<template>
    <Layout>
        <div class="types">
            <div @click="goback">
                <svg class="icon">
                    <use xlink:href="#back"/>
                </svg>

            </div>
            <div>添加标签</div>
            <div></div>
        </div>
        <Notes fieldName="标签名：" placeholder="请输入标签名"  @update:value="updateTag"  />

        <div>
            <p>图标</p>
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                </li>


            </ul>
        </div>
        <div class="x" @click="x" >
            <button>确定</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Notes from '@/components/Money/Notes.vue';
    import tagListModel from '@/models/tagListModel';


    @Component({
        components: {Notes}
    })
    export default class extends Vue {
        tagName!:string
        tag?:{id:string,name:string} = undefined
        x() {

            const name = this.tagName
            if (!name) {
                window.alert('不能为空');
            } else if (tagListModel.create(name) === 'duplicated') {
                alert('标签名重复了')

            }else{
                this.$router.back()

            }

        }
        updateTag(value:string){
            this.tagName = value


        }
        goback(){
            this.$router.back()
        }
    }
</script>

<style lang="scss" scoped>
  .types {
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 12px 16px;

    div {
      &:nth-child(1) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        font-size: 26px;
      }

      &:nth-child(2) {

      }

      &:nth-child(3) {
        width: 44px;
        height: 44px;
      }
    }
  }

  div {
    p {
      padding: 12px 16px
    }

    ul {
      display: flex;
      text-align: center;
      flex-wrap: wrap;

      li {

        width: 25%;
        padding: 8px 0;
        font-size: 14px;


        .icon {
          padding: 1px;
          background: #f5f5f5;
          width: 44px;
          height: 44px;
          border-radius: 10px;

          &.selected {
            background: #ffda47;

          }
        }


      }
    }

  }

  .x{
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;


    button{
      height: 40px;
      cursor: pointer;
      width: 80%;
      background: #f3c50c;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      color: #fff;
      font-weight: 700;
      border-radius: 20px;
    }
  }

</style>
