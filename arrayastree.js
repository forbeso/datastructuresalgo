
const tree = new Array(9).fill(undefined)


const setLeft = (key, parent) => {

    if (tree[parent] == undefined ) {
        console.log("No parent found")
    }
    else {
        tree[(parent * 2) + 1] = key
        //console.log(key)
    }
}




function createRoot(key){
        //console.log(tree)


tree.map((item, index) => {
    
})

        if (tree[0] == undefined) {
            tree[0] = key;
        }
        else {
            console.log("Tree already has a node")
            
        }

        //console.log(tree)
}

function printArrayTree(){

   for (let i=0; i < tree.length; i++){

    if (tree[i] != undefined){
        console.log(tree[i])
        continue;

    }else{
        console.log("-")
    }
        
   }

}

createRoot('A')
setLeft('B', 0)
setRight('C',0)
Set

printArrayTree()