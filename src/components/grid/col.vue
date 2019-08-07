<style lang="less" src="./style/index.less"></style>
<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import PropTypes from '~utils/vue-types';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const colSize = PropTypes.shape({
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
}).loose

const objectOrNumber = PropTypes.oneOfType([PropTypes.number, colSize]);


export default {
    data(){
        return {
            gutter: 0,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-col'),
        span: stringOrNumber,
        order: stringOrNumber,
        offset: stringOrNumber,
        push: stringOrNumber,
        pull: stringOrNumber,
        xs: objectOrNumber,
        sm: objectOrNumber,
        md: objectOrNumber,
        lg: objectOrNumber,
        xl: objectOrNumber,
        xxl: objectOrNumber,
    },
    computed: {
        classes(){
            const { prefixCls, span, order, offset, push, pull } = this

            let sizeClassObj = {};

            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
                let sizeProps = {}
                if (/\d/.test(this[size])) {
                    sizeProps.span = this[size];
                } else if (typeof this[size] === 'object') {
                    sizeProps = this[size] || {};
                }

                sizeClassObj = {
                    ...sizeClassObj,
                    [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                    [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
                    [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
                    [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
                    [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
                }
            });

            return {
                [`${prefixCls}-${span}`]: span !== undefined,
                [`${prefixCls}-order-${order}`]: order,
                [`${prefixCls}-offset-${offset}`]: offset,
                [`${prefixCls}-push-${push}`]: push,
                [`${prefixCls}-pull-${pull}`]: pull,
                ...sizeClassObj,
            }
        },
        styles() {
            const { gutter } = this;
            return gutter > 0 ? {
                paddingLeft: `${gutter / 2}px`,
                paddingRight: `${gutter / 2}px`,
            } : {}
        }
    },
    methods: {
    }
}
</script>
