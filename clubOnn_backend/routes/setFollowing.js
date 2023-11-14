const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
    const { clubid, uid, action } = req.body;
    const db = req.db;
    const clubs = db.clubs;
    const users = db.users;

    clubs.findOne({
        where: { id: clubid }
    })
        .then((response) => {
            followerlist = JSON.parse(response.followerlist);
            index = followerlist.indexOf(uid);
            if (action == 1) {
                if (index == -1) followerlist.push(uid);
            }
            if (action == 0) {
                followerlist.splice(index, 1);
            }
            response.update({ followerlist: JSON.stringify(followerlist) })
            .then(() => {
                users.findOne({
                    where: { id: uid }
                })
                .then((response) => {
                    clubslist = JSON.parse(response.clubsfollowing);
                    index = clubslist.indexOf(clubid);
                    if (action == 1) {
                        if (index == -1) clubslist.push(clubid);
                    }
                    if (action == 0) {
                        clubslist.splice(index, 1);
                    }
                    response.update({ clubsfollowing: JSON.stringify(clubslist) })
                })

            })
            res.send({
                data: response.followerlist,
                msg: 'Hello, You are calling the setFollowing api'
            });
        })
        .catch((error) => {
            console.log('Error: ', error);
        })

    // res.send('Hello, You are calling the getFollowings api');
});

module.exports = router;