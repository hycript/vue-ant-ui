<template>
<div class="icons-list">
    <vIcon type="alert" theme="filled"></vIcon>
    <vIcon type="bug" theme="outlined"></vIcon>
    <vIconSVG type="audio" theme="filled"></vIconSVG>
    <vIconSVG type="issues-close" theme="outlined"></vIconSVG>
</div>
</template>
<script>
import AlertFill from '@ant-design/icons/lib/fill/AlertFill.js';
import AudioFill from '@ant-design/icons/lib/fill/AudioFill.js';
import BugOutline from '@ant-design/icons/lib/outline/BugOutline.js';
import IssuesCloseOutline from '@ant-design/icons/lib/outline/IssuesCloseOutline.js';

import Icon from '../index';

Icon.add([AlertFill, AudioFill, BugOutline, IssuesCloseOutline]);

export default{

}
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 12px;
  font-size: 24px;
}
</style>
