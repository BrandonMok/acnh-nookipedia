import React, {useRef} from 'react';

export default function Search({list, updateList}) {
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

            // check if the filtered array contains data.
            if (filteredList.length > 0) {
                updateList(filteredList);
            }
            else {
                // no results filtered.
                updateList([]);
            }
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