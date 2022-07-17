import React, { useRef, useCallback } from 'react';
import Proptypes from 'prop-types';

/**
 * Search
 * Search functionality to filter a prop list of items based on a search term.
 * @param list - current state value from a specific area (e.g. fish, bugs, etc.)
 * @param backup - ref variable value that is the total list of a specific area (backup / original list that's left untouched from any array mutations)
 * @param updateList - state variable update function
 */

// Kept outside to be pure
function inputSanitize(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').trim();
}

export default function Search({fullList, updateList}) {
    const textInput = useRef();

    // clears text in input AND sets list back to full
    function clearInput(e) {
        textInput.current.value = " ";
        updateList(fullList);
    }

    const handleSearch = useCallback((e) => {
        e.preventDefault(); // not fully functional -- may want to move away from onChange

        const searchTerm = textInput.current.value;

        if (searchTerm !== "") {
            const validInput = inputSanitize(searchTerm).toLowerCase();
    
            let filteredList = fullList.filter((item) => {
                const itemName = item[1].name["name-USen"].toString().toLowerCase();
                const shadow = item[1].shadow !== undefined ? item[1].shadow.toString().toLowerCase() : "";
                const price = item[1].price.toString() + " bells";

                return (
                    itemName.includes(validInput) || 
                    shadow.includes(validInput) ||
                    price.includes(validInput)
                )
            });

            // update givenList with the filtered version.
            updateList(filteredList);
        }
        else {
            // searchTerm empty - reload full list.
            updateList(fullList);
        }
    }, []);

    return (   
        <div className='container search'>
            <form className='search__form'>
                <input type="text" 
                    placeholder='Enter search term...' 
                    className='search__form__input' 
                    ref={textInput} 
                    onChange={(e) => handleSearch(e)} 
                    onClick={(e) => clearInput(e)}
                />
            </form>
        </div>
    );
}

Search.propTypes = {
    fullList: Proptypes.array,
    updateList: Proptypes.func
}