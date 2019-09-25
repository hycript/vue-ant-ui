import Transition from './transition';
import TransitionGroup from './transitionGroup';
import CollapseTransition from './collapseTransition';

Transition.Group = TransitionGroup;
Transition.Collapse = CollapseTransition;

export default Transition;

export {
    Transition,
    TransitionGroup,
    CollapseTransition,
};
