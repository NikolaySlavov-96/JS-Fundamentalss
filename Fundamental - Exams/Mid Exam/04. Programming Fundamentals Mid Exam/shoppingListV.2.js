function shoppingList(array){

    let shopList = array.shift().split(`!`);
    let currentName = array.shift();
    let currentNameLength = array.length;
    
    /// THE BIG Problems ---> хем въртя цикъл хем трия елементи и не може да 
    // завърти пълен за да направи пълна проверка от там дава 70/100


    for(let n = 0; n < currentNameLength; n++){
        
        let [commandName , itemName , newName] = currentName.split(` `);
       
        switch(commandName){
            case 'Urgent': 
                urgent(shopList , itemName); 
            break;
            case 'Unnecessary': 
                unnecessary(shopList , itemName); 
            break;
            case 'Correct': 
                correct(shopList , itemName , newName); 
            break;
            case 'Rearrange': 
                rearrange(shopList , itemName); 
            break;
            default: break;
        }
        currentName = array.shift();
    }

    function search(list , itemName){

        let searchS = list.includes(itemName);

        return searchS;
    
    }


    function urgent(list , itemName){
        
        let work = search(list , itemName);

        if(!work){
            list.unshift(itemName);
        }

    }


    function unnecessary(list , itemName){

        let work = search(list , itemName);

        if(work){
            let index = list.indexOf(itemName);

            list.splice(index , 1);
        }

    }


    function correct(list , oldName , newName){

        let work = search(list , oldName);

        if(work){
            let index = list.indexOf(oldName);

            list[index] = newName;
        }
    }


    function rearrange(list , itemName){

        let work = search(list , itemName);

        if(work){
            let index = list.indexOf(itemName);

            list.splice(index , 1);
            list.push(itemName);
        }

    }
    
    console.log(shopList.join(`, `))
}

shoppingList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]);

shoppingList((["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grape","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!"]));