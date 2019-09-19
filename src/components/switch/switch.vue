<style lang="less" src="./style/index.less"></style>
<template>
<button
    ref="switch"
    :class="classes"
    v-on="$$listeners"
    @click="toggle" @keydown="handleKeyDown" @mouseup="handleMouseUp"
    role="switch" :aira-checked="stateChecked" :tabIndex="tabIndex"
>
    <Icon v-if="loading" type="loading" :class="`${prefixCls}-loading-icon`" />
    <span :class="`${prefixCls}-inner`">
        <template v-if="stateChecked">
            <slot name="checkedChildren">{{ checkedChildren }}</slot>
        </template>
        <template v-else>
            <slot name="unCheckedChildren">{{ unCheckedChildren }}</slot>
        </template>
    </span>
</button>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';
import { hasProp } from '../_util/props-util';
import Icon from '../icon';

export default {
    name: 'vSwitch',
    mixins: [events],
    exceptListeners: ['change', 'click', 'keydown', 'mouseup'],
    components: {
        Icon,
    },
    model: {
        prop: 'checked',
        event: 'change',
    },
    data(){
        const { checked, defaultChecked = false } = this;
        return {
            stateChecked: checked === undefined ? checked : defaultChecked,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-switch'),
        // size=default and size=large are the same
        size: PropTypes.oneOf(['small', 'default', 'large']).def('default'),
        disabled: PropTypes.bool,
        checkedChildren: PropTypes.any,
        unCheckedChildren: PropTypes.any,
        tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        autoFocus: PropTypes.bool,
        loading: PropTypes.bool,
    },
    computed: {
        classes(){
            const { prefixCls, size, disabled, loading, stateChecked: checked } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-checked`]: checked,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-small`]: size === 'small',
                [`${prefixCls}-loading`]: loading,
            }
        }
    },
    watch: {
        checked(val){
            this.stateChecked = val;
        }
    },
    mounted(){
        this.$nextTick(() => {
            const { autoFocus, disabled, loading } = this;
            if(autoFocus && !disabled && !loading){
                this.focus();
            }
        })
    },
    methods: {
        setChecked(checked){
            if(this.disabled || !!this.loading) return;
            if(!hasProp(this, 'checked')){
                this.stateChecked = checked;
            }
            this.$emit('change', checked)
        },
        toggle(){
            const checked = !this.stateChecked;
            this.setChecked(checked);
            this.$emit('click', checked);
        },
        handleKeyDown(e) {
            if (e.keyCode === 37) {
                // Left
                this.setChecked(false);
            } else if (e.keyCode === 39) {
                // Right
                this.setChecked(true);
            }
        },
        handleMouseUp(e) {
            if (this.$refs.switch) {
                this.$refs.switch.blur();
            }
            this.$emit('mouseup', e);
        },
        focus() {
            this.$refs.switch.focus();
        },
        blur() {
            this.$refs.switch.blur();
        },
    }
}
</script>
