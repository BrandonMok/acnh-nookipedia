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

    // [TODO] Fix performance here
    // having search called on onChange causes it to fire multiple times...
    function handleSearch(e) {
        e.preventDefault();

        // Wait a bit before doing the filtering to give user time to enter full name.
        // otherwise, code performance would hurt with the code filtering the list each time a letter is entered.
        setTimeout(() => {
            const searchTerm = textInput.current.value;

            if (searchTerm !== "") {
                let sanitizedInput = inputSanitize(searchTerm).trim();

                if (!isNaN(sanitizedInput)) {
                    // number value - only numeric value is the price
                    let userInputNum = parseInt(sanitizedInput);

                    let filteredNumList = fullList.filter((item) => {
                        let itemPrice = item[1].price;
                        return itemPrice === userInputNum;
                    });

                    updateList(filteredNumList);
                }
                else {
                    // string values
                    let validInput = sanitizedInput.toLowerCase();
            
                    let filteredList = fullList.filter((item) => {
                        let itemName = item[1].name["name-USen"].toString().toLowerCase();
                        let shadow = item[1].shadow ? item[1].shadow.toString().toLowerCase() : undefined;

                        if (itemName.includes(validInput)) {
                            return itemName.includes(validInput);
                        }
                        else if (shadow !== undefined && shadow.includes(validInput)) {
                            return shadow.includes(validInput)
                        }
                        else {
                            return null;
                        }
                    });

                    updateList(filteredList);
                }
            }
            else {
                // empty string, need to reset list to full list...
                updateList(fullList);
            }
        }, 1500);
    }

    return (   
        <div className='container search'>
            <form className='search__form'>
                <input type="text" 
                    placeholder='Enter name or price...' 
                    className='search__form__input' 
                    ref={textInput} 
                    onChange={handleSearch} 
                />
            </form>
        </div>
    );
}