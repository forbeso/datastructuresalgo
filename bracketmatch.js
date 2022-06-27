function checkBracketMatch(brackets){

    let stack = [];

    for ( let i=0; i < brackets.length; i++ ) {

        let x = brackets[i];

        if (x == '[' || x == '{' || x == '(' ) {

            stack.push(x);
            continue;
        }


        if (stack.length == 0){
            return false;
        }



        let check;
        switch(x){
            case ')':
            check = stack.pop();

            if (check == '{' || check == '[')
                return false;
            break;

            case'}':
                check = stack.pop();

                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();

                if (check == '(' || check == '{')
                    return false;
                break;
        
        }


    }

    

    console.log(stack.length == 0)
    return stack.length == 0; 

}


function xyz() {

    if (checkBracketMatch("([{}])")){
        console.log("balanced")
    }

    else console.log("unbalanced")
    
}


xyz()
