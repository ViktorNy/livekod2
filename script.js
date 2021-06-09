/** 
 * @typedef {{ month: String, weekday: String}} DateInfo
 */

window.addEventListener('load', main);

function main() {
    const now = new Date();
    const dateInfo = getDateInfo(now);
    
    const main = document.querySelector('main');

    const monthH2 = document.createElement('h2');
    monthH2.innerText = dateInfo.month;
    main.append(monthH2);

    const weekdayH2 = document.createElement('h2');
    weekdayH2.innerText = dateInfo.weekday;
    main.append(weekdayH2);

    h2.innerHTML = now.toDateString();
}

/**
 * returns formatted info from a date object
 * @param {Date} date 
 * @returns {DateInfo}
 */

function getDateInfo(date) {
    const monthAsString = getMonthString(date);
    const weekdayAsString = getDayString(date);

    return{
        month: monthAsString,
        weekday: weekdayAsString
    }
}

/**
 * returns month from given date in swedish
 * @param {Date} date 
 * @param {String} language
 * @returns {String}
 */

function getMonthString(date, language) {
    // TODO: Use language. . .
    const monthIndex = date.getMonth();

    switch (monthIndex) {
        case 0:
            return 'Januari';
        case 1:
            return 'Februari'
            break;
        case 2:
            return 'Mars'
            break;
        case 3:
            return 'Apri'
            break;
        case 4:
            return 'Maj'
            break;
        case 5:
            return 'Juni'
            break;
        case 6:
            return 'Juli'
            break;
        case 7:
            return 'Augusti'
            break;
        case 8:
            return 'September'
            break;
        case 9:
            return 'Oktober'
            break;
        case 10:
            return 'November'
            break;
        case 11:
            return 'December'
            break;
        default:
            break;
    }
}

/**
 * returns weekday in swedish for given date
 * @param {Date} date 
 * @returns {String}
 */

function getDayString(date) {
    const dayIndex = date.getDay();

    switch (dayIndex) {
        case 0:
            return 'Måndag'
            break;
        case 1:
            return 'Tisdag'
            break;
        case 2:
            return 'Onsdag'
            break;
        case 3:
            return 'Torsdag'
            break;
        case 4:
            return 'Fredag'
            break;
        case 5:
            return 'Lördag'
            break;
        case 6:
            return 'Söndag'
            break;
    }
}


