<style lang="less" scoped>
@import './style/common.less';

.nav {
    display: block;
    width: 250px;
    height: 100vh;
    flex: 0 0 auto;

    &-links {
        position: fixed;
        left: 0;
        top: 0;
        width: 250px;
        height: 100vh;
        overflow: auto;
        margin: 0;
        list-style-type: none;
        padding: 0;
        padding-bottom: 20px;
    }
    &-title {
        padding: 20px 30px;
    }
    &-link {
        // border-bottom: 1px solid #fdfdfd;
        // padding: 10px 10px;
        a {
            color: @fontColor;
            font-size: 14px;
            // text-overflow: ellipsis;
            // overflow: hidden;
            white-space: nowrap;
            display: block;
            padding: 12px 30px 12px 48px;

            &:active, &:hover, &:focus {
                text-decoration: none;
            }

            &:hover {
                background: @backgroundActive;
            }

            &.router-link-active {
                background: @backgroundActive;
                color: @fontActive;
                border-right: 4px solid @fontActive;
            }
        }
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #f5f5f5;
    }

    /* 定义滚动条轨道 内阴影+圆角 */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    /* 定义滑块 内阴影+圆角 */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, .1);
    }
}
</style>
<template>
<nav :class="scope">
    <ul :class="`${scope}-links`">
        <template v-for="route in routes">
            <li :class="`${scope}-title`">{{ route.type }}</li>
            <li :key="index" v-for="component, index in route.components" :class="`${scope}-link`"><router-link :to="`/${index}`">{{ component }}</router-link></li>
        </template>
    </ul>
</nav>
</template>
<script>
import routes from './routes.js';
export default {
    data(){
        return {
            scope: 'nav',
            routes,
        }
    }
}
</script>
