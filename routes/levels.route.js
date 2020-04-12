const express = require('express');
const router = express.Router();
const repo = require('../data/level.repo');
const enums = require('../classes/enums');

router.use(async(req, res, next) =>{
    console.log('level router called');
    next();
});

router.get('/', async(req, res, next) => {
    const message = 'Levels';
    let levels = await repo.getAll();
    
    levels.forEach(level => {
        let attributeArray = [];
        if(level.attributes & enums.attributes.beaker) {
            attributeArray.push("beaker");
        }
        if(level.attributes & enums.attributes.bubble) {
            attributeArray.push("bubble");
        }
        if(level.attributes & enums.attributes.cloud) {
            attributeArray.push("cloud");
        }
        if(level.attributes & enums.attributes.coin) {
            attributeArray.push("coin");
        }
        if(level.attributes & enums.attributes.dust) {
            attributeArray.push("dust");
        }
        if(level.attributes & enums.attributes.fan) {
            attributeArray.push("fan");
        }
        if(level.attributes & enums.attributes.ice) {
            attributeArray.push("ice");
        }
        if(level.attributes & enums.attributes.key) {
            attributeArray.push("key");
        }
        if(level.attributes & enums.attributes.scroll) {
            attributeArray.push("scroll");
        }
        if(level.attributes & enums.attributes.switch) {
            attributeArray.push("switch");
        }
        level.attributes = attributeArray;
    })

    res.json(message);
})

module.exports = router;