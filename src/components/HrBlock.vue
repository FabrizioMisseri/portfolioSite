<script>
export default {
    name: 'HrBlock',
}
</script>

<template>
    <div class="hr"></div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;



.hr {
    display: inline-block;
    width: 100%;
    height: 4px;
    background-color: $ironColor;
    margin: 0 auto;
}
</style>