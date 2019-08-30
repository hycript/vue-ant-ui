export default {
    functional: true,
    render(createElement, context){
        console.log(context);
        return [...context.children]
    }
}
