function calcTotalDif(userObj, friendObj) {

    let difArr = []

    for (let i = 0; i < userObj.scores.length; i++) {

        let scoreDif = Math.abs(userObj.scores[i] - friendObj.scores[i])

        difArr.push(scoreDif)

    }

    return totalDifMath(difArr)

}

function totalDifMath(arr) {

    let totalDif = 0

    for (let j = 0; j < arr.length; j++) {

        totalDif = totalDif + arr[j]

    }

    return totalDif
}