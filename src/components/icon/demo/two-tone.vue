<template>
  <div class="icons-list">
    <vIcon type="smile" theme="twoTone" />
    <vIcon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
    <vIconSVG type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  </div>
</template>
<script>
import SmileTwoTone from '@ant-design/icons/lib/twotone/SmileTwoTone.js';
import HeartTwoTone from '@ant-design/icons/lib/twotone/HeartTwoTone.js';
import CheckCircleTwoTone from '@ant-design/icons/lib/twotone/CheckCircleTwoTone.js';
import Icon from '../index';

Icon.add([SmileTwoTone, HeartTwoTone, CheckCircleTwoTone]);

export default{

}
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
