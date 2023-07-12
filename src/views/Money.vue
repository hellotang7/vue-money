<template>
    <div>
        <Layout classPrefix="layout">

            <NumberPad/>

            <Notes/>

            <Tags :dataSource="tags"/>

            <Types/>

        </Layout>
    </div>
</template>

<script lang="js">
    import Notes from '@/components/Money/Notes.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Types from '@/components/Money/Types.vue';

    export default {
        components: {Notes, NumberPad, Tags, Types},
        data() {
            return {
                tags: [
                    {img: 'shoping', name: '购物'},
                    {img: 'eat', name: '餐饮'},
                    {img: 'home', name: '居住'},
                    {img: 'bus', name: '交通'},
                    {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                    // {img: 'add', name: '添加'},
                ]
            }
        }

    };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

</style>

<style lang="scss" scoped>


</style>
