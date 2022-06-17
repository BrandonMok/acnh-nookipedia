import React from 'react';

export default function Search({list, updateFishList}) {
    // take prop: list
    // sort through this list and return the found item

    function handleSearch(e) {
        e.preventDefault();

        // take search term, sanitize, and then look for object that matches it, return

        // once item is found or not, call 'updateFishList" which is a function as a prop from parent
        // this function (the updating State function) will update the state and update the UI
    }


    return (   
        <div className='container search'>
            <form className='search__form'>
                <input type="text" placeholder='Enter term here...' className='search__form__input' />
                <button type="submit" onClick={handleSearch} className='search__form__submit'>Submit</button>
            </form>
        </div>
    );
}