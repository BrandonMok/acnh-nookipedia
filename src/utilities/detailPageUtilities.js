// Month Map
let monthMap = new Map();
monthMap.set('1', 'January');
monthMap.set('2', 'February');
monthMap.set('3', 'March');
monthMap.set('4', 'April');
monthMap.set('5', 'May');
monthMap.set('6', 'June');
monthMap.set('7', 'July');
monthMap.set('8', 'August');
monthMap.set('9', 'September');
monthMap.set('10', 'October');
monthMap.set('11', 'November');
monthMap.set('12', 'December');

export function convertMonthNumToText(responseObj) {
    if (responseObj["availability"]["month-northern"] !== "" && responseObj["availability"]["month-southern"] !== "") {
        let northernAvail =  responseObj["availability"]["month-northern"];
        let southernAvail =  responseObj["availability"]["month-southern"];
    
        let northernNumArr = northernAvail.split('-');
        let northernText = monthMap.get(northernNumArr[0]) + "-" + monthMap.get(northernNumArr[1]);
    
        let southernNumArr = southernAvail.split('-');
        let southernText = monthMap.get(southernNumArr[0]) + "-" + monthMap.get(southernNumArr[1]);
    
        // Update the key/values in the responseObj
        responseObj = {
            ...responseObj, 
            "availability": { 
                ...responseObj["availability"], 
                "month-northern": northernText, 
                "month-southern": southernText
            }
        }
    }

    return responseObj;
}

export function capitalizeFirstChar(responseObj) {
    if (responseObj["name"]["name-USen"]) {
        let bugName = responseObj["name"]["name-USen"];
    
        let nameArr = bugName.split(" ");
        nameArr = nameArr.map((namePart) => {
            return namePart.charAt(0).toUpperCase() + namePart.substring(1, namePart.length);
        });
    
        responseObj = {
            ...responseObj, 
            name: nameArr.join(" ")
        };
    }

    return responseObj;
}