import contains from './contains';

export {
    contains,
}

export function addClass(el, cls){
    if(!el || !cls) return;
    let curClass = el.className;
    let classes = curClass.trim() === '' ? [] : curClass.split(' ');

    cls.trim().split(' ').forEach(cls => {
        if(!cls) return;
        if(classes.indexOf(cls) === -1){
            classes.push(cls);
        }
    })

    el.className = classes.join(' ');
}

export function removeClass(el, cls){
    if(!el || !cls) return;
    let curClass = el.className;
    if(!curClass.trim()) return;
    let classes = curClass.trim().split(' ');
    cls.trim().split(' ').forEach(cls => {
        if(!cls) return;
        const index = classes.indexOf(cls);
        if(index > -1){
            classes.splice(index, 1);
        }
    })
    el.className = classes.join(' ');
}
