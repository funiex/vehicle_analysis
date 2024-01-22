// fuction for converting Unix Timestaps(in milliseconds) to DD/MM/YYYY format strings
//used in salesforecast line charts
export default function unixTimeStampToDate(unixTimeStamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixTimeStamp);
    // Hours part from the timestamp
    let dateString = date.toString();
    //short time part from the timestamp
    date = new Date(dateString);
    // date.getDate() returns 1-31
    // date.getFullYear() returns year
    // date.getMonth() returns 0-11
    let finalDateSting = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return finalDateSting;
}
