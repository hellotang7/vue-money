<template>
    <div>
        <Layout_>
            <Types/>

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
                                <use xlink:href="`#${tag.img}`"/>
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
    import Types from '@/components/Money/Types.vue';
    import {Component} from 'vue-property-decorator';
    import Vue from 'vue';

    @Component({
        components: {Types},

    })
    export default class Labels extends Vue {
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
            margin-right: 6px;
            font-size: 26px;
          }

          p {
          }
        }

        .icon {
          font-size: 20px;


        }

        &:first-child {
          border-top: none
        }

      }
    }


  }


</style>

