import React, {useRef} from 'react';

/**
 * Search
 * Search functionality to filter a prop list of items based on a search term.
 * @param list - current state value from a specific area (e.g. fish, bugs, etc.)
 * @param backup - ref variable value that is the total list of a specific area (backup / original list that's left untouched from any array mutations)
 * @param updateList - state variable update function
 */
export default function Search({fullList, updateList}) {
    const textInput = useRef();

    function inputSanitize(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function handleSearch(e) {
        e.preventDefault();

        // Wait a bit before doing the filtering to give user time to enter full name.
        // otherwise, code performance would hurt with the code filtering the list each time a letter is entered.
        setTimeout(() => {
            const searchTerm = textInput.current.value;

            if (searchTerm !== "") {
                const validInput = inputSanitize(searchTerm).trim().toLowerCase();
        
                let filteredList = fullList.filter((item) => {
                    let itemName = item[1].name["name-USen"].toString().toLowerCase();
    
                    return itemName.toLowerCase().includes(validInput);
                });
    
                updateList(filteredList);
            }
            else {
                // empty string, need to reset list to full list...
                updateList(fullList);
            }
        }, 1000);
    }

    return (   
        <div className='container search'>
            <form className='search__form'>
                <input type="text" 
                    placeholder='Enter name...' 
                    className='search__form__input' 
                    ref={textInput} 
                    onChange={handleSearch} 
                />
            </form>
        </div>
    );
}