module.exports = function(app, friendsArr) {

    app.get("/api/friends", (req, res) => {
        res.send(friendsArr)
    })

    app.post("/api/friends", (req, res) => {

        let userObj = req.body
        let closestFriend;
        let smallestDifference = 40;

        for (let i = 0; i < friendsArr.length; i++) {
            let currentDifference = calcTotalDif(userObj, friendsArr[i])
            
            if (currentDifference < smallestDifference) {
                smallestDifference = currentDifference
                closestFriend = friendsArr[i]
            }
        }

        res.send(closestFriend)

    })

}


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