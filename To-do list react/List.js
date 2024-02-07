/*==============List.js component============== */

import "./List.css"
function List({ itemList, updateItemList }) { // receiving  props
    const deleteItemFromList = key => { // function to delete items using their key
        const newList = itemList.filter(itemobj => { // I have used filter method so that we can filter the keys to be deleted
            return itemobj.key !== key; //comparing the key to be deleted, key is the one that is to be deleted and itemObj.key holds othe key not to be deleted.
        });
        updateItemList(newList); //updateItemList holds the newly updated List of item
    };

return (
    <div>
       {itemList.map(itemObj => { //I have used the map method to Iterate over each elements of the array be displayed.
            return (
                <div key={itemObj.key} className="Item">
                    <p>{itemObj.item}</p>  
                    <button onClick={() => deleteItemFromList (itemObj.key)}>X</button> 
                </div> //itemObj.key will be used to diplay the keys that have not been deleted
            );
        })} 
    </div>
    
);
}

export default List;
