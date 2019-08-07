export default function(root, node){
    if(!root || !node) return false;
    while(node){
        if(node === root){
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
