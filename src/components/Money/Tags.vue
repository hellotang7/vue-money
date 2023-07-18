<template>
    <div class="tags">

        <ul>
            <li v-for="tag in dataSource" :key="tag.id"
                @click="toggle(tag)"
            >
                <svg class="icon" :class="{selected:selectedTags.indexOf(tag)>=0}">
                    <use :xlink:href="`#${tag.img}`"/>
                </svg>
                <span>{{ tag.name }}</span>
            </li>
            <li @click="newTag">
                <svg class="icon">
                    <use xlink:href="#edit"/>
                </svg>
                <span>编辑</span>
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({
        computed:{
            tagList(){
                return this.$store.state.tagList
            }
        }
    })
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
        selectedTags: string[] = [];

        created(){
            this.$store.commit('fetchTag')
        }
        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags = [];
                this.selectedTags.push(tag);
            }

            this.$emit('update:value', this.selectedTags);
        }

        newTag() {
            this.$router.push('/labels');
        }

    }
</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;


    ul {
      display: flex;
      text-align: center;
      flex-wrap: wrap;


      li {
        width: 25%;
        padding: 8px 0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          padding: 1px;
          background: #f5f5f5;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          margin-bottom: 5px;

          &.selected {
            background: #ffda47;

          }
        }


      }
    }


  }

</style>
