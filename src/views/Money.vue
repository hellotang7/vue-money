<template>
    <div>
        <Layout classPrefix="layout">

            <NumberPad/>

            <Notes/>

            <Tags/>

            <Types/>

        </Layout>
    </div>
</template>

<script lang="ts">
    import Notes from '@/components/Money/Notes.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Types from '@/components/Money/Types.vue';

    export default {
        components: {Notes, NumberPad, Tags, Types}
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
