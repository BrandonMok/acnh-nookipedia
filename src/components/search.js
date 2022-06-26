import React, {useRef} from 'react';

/**
 * Search
 * Search functionality to filter a prop list of items based on a search term.
 * @param list - current state value from a specific area (e.g. fish, bugs, etc.)
 * @param backup - ref variable value that is the total list of a specific area (backup / original list that's left untouched from any array mutations)
 * @param updateList - state variable update function
 */
export default function Search({list, backup, updateList}) {
    const textInput = useRef();

    function inputSanitize(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function handleSearch(e) {
        e.preventDefault();

        const searchTerm = textInput.current.value;

        if (searchTerm !== "") {
            const validInput = inputSanitize(searchTerm);
    
            let filteredList = list.filter((item) => {
                let itemName = item[1].name["name-USen"].toString().toLowerCase();
                return itemName.toLowerCase().includes(validInput);
            });

            updateList(filteredList);
        }
        else {
            // empty string, need to reset list to full list...
            updateList(backup);
        }
    }

    return (   
        <div className='container search'>
            <form className='search__form'>
                <input type="text" placeholder='Enter term here...' className='search__form__input' ref={textInput} />
                <button type="submit" onClick={handleSearch} className='search__form__submit'>Submit</button>
            </form>
        </div>
    );
}