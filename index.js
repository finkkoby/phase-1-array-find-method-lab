// code your solution here

function superbowlWin(array) {
    let foundAWin = array.find(function(item) {
        return item.result === "W";
    })
    if (foundAWin === undefined) {
        return undefined
    } else {
        return foundAWin.year
    }
}