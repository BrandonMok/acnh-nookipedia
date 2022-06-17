/**
 * TODO:
 * Stubbed in component to handle searching of data from api
 * TBD - Most likely will accept a prop for what area it is located on and to call the respective function
 */

import React from 'react';

export default function Search({list, updateFishList}) {
    // take prop: list
    // sort through this list and return the found item

    function searchSubmit() {
        // take search term, sanitize, and then look for object that matches it, return

        // once item is found or not, call 'updateFishList" which is a function as a prop from parent
        // this function (the updating State function) will update the state and update the UI
    }


    return (    
        <form>
            <input type="text" />
        </form>
    );
}