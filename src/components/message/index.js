import Notification from '../notification/Notification';
import Message from './message';
import Icon from '../icon';

let defaultDuration = 3;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'ant-message';
let transitionName = 'move-up';
let getContainer = () => document.body;
let maxCount;
