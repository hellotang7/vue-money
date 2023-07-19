<template>
    <div>
        <Layout_>
            <Tabs  :dataSource="typeList" :value.sync="type"/>


            <div class="tags">

                <ol>
                    <li @click="createTag">
                        <div class="lef">
                            <p>添加新的标签</p>
                        </div>
                        <svg class="icon">
                            <use xlink:href="#right"/>
                        </svg>
                    </li>

                    <li v-for="tag in tags" :key="tag.id">
                        <div class="lef">
                            <svg class="icon">
                                <use :xlink:href="`#${tag.img}`"/>
                            </svg>
                            <p>{{ tag.name }}</p>
                        </div>
                        <svg class="icon" @click="remove(tag.id)">
                            <use xlink:href="#remove"/>
                        </svg>
                    </li>


                </ol>


            </div>

        </Layout_>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import typeList from '@/constants/typeList';
    import Tabs from '@/components/Tabs.vue';
    import Vue from 'vue';

    @Component({
        components: {Tabs},

    })
    export default class Labels extends Vue {
        typeList=typeList;

        type = '-';
        get tags() {
            return this.$store.state.tagList;
        }
        created() {
            this.$store.commit('fetchTag');
        }


        createTag() {
            this.$router.push('/labels/add');
        }

        remove(id: string) {
            alert('确认删除吗？');
            this.$store.commit('removeTag', id);
        }


    }
</script>
<style lang="scss" scoped>


  .tags {
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    position: relative;

    ol {
      //border: 1px solid red;
      flex-grow: 1;


      li {
        border-top: 1px solid #e2e2e2;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 14px;


        .lef {
          display: flex;
          align-items: center;
          flex-direction: row;

          .icon {

            font-size: 32px;
            margin-right: 8px;
          }

          p {
            font-size: 15px;
          }
        }

        .icon {
          font-size: 18px;


        }

        &:first-child {
          border-top: none
        }

      }
    }


  }
  .types::v-deep  li {
    &.selected {
      background: #f3c50c;
      color: #fff;
    }}

</style>

