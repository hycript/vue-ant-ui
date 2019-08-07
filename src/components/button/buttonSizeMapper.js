const mapper = {
    large: 'lg',
    small: 'sm',
}

export default function(size){
    return mapper[size] || '';
}
