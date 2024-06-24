// pattern one
function searchTablate(tablateName, searchStr) {
    let newVal = searchStr.replace(/ |$/gi, '.* ').trim();
    
    var matcher = new RegExp(`^${newVal}$`, 'gi');
    console.log(matcher);
    return matcher.test(tablateName);
}

// let tablateName = "Thyronorm 150MG Tablet";
// let searchStr = 'thy 150'

// let tablateName = "THYRONORM 112MCG TABLET ";
// let searchStr = 'THY 112';

// let tablateName = "PIOZ 30MG TABLET";
// let searchStr = 'PIO 30 TAB';

let tablateName = "LANTUS SOLOSTAR 3ML 100IU INJECTION";
let searchStr = 'LAN SOLO 3ML 100';

console.log( searchTablate(tablateName, searchStr) );