<template>
    <div class="tags">

        <ul>
            <li v-for="tag in dataSource" :key="tag.name"
                @click="toggle(tag)"
                >
                <svg class="icon" :class="{selected:selectedTags.indexOf(tag)>=0}">
                    <use :xlink:href="`#${tag.img}`" />
                </svg>
                <span>{{ tag.name }}</span>
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
        selectedTags: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags = []
                this.selectedTags.push(tag);
                console.log(this.selectedTags);

            }
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
        border-radius: 50%;
        width: 25%;
        padding: 8px 0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          background: #f5f5f5;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-bottom: 5px;
          &.selected {
            background: #ffda47;

          }
        }


      }
    }


  }

</style>
