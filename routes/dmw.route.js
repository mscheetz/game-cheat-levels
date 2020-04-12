const express = require('express');
const router = express.Router();
const repo = require('../data/dmw.repo');
const enums = require('../classes/enums');

router.use(async(req, res, next) =>{
    console.log('dr mario world level router called');
    next();
});

router.get('/', async(req, res, next) => {
    const message = 'Levels';
    let levels = await repo.getAll();

    levels.forEach(level => {
        let attributeArray = [];
        if(level.attributes & enums.dmwAttributes.beaker) {
            attributeArray.push("beaker");
        }
        if(level.attributes & enums.dmwAttributes.bubble) {
            attributeArray.push("bubble");
        }
        if(level.attributes & enums.dmwAttributes.cloud) {
            attributeArray.push("cloud");
        }
        if(level.attributes & enums.dmwAttributes.coin) {
            attributeArray.push("coin");
        }
        if(level.attributes & enums.dmwAttributes.dust) {
            attributeArray.push("dust");
        }
        if(level.attributes & enums.dmwAttributes.fan) {
            attributeArray.push("fan");
        }
        if(level.attributes & enums.dmwAttributes.ice) {
            attributeArray.push("ice");
        }
        if(level.attributes & enums.dmwAttributes.key) {
            attributeArray.push("key");
        }
        if(level.attributes & enums.dmwAttributes.scroll) {
            attributeArray.push("scroll");
        }
        if(level.attributes & enums.dmwAttributes.switch) {
            attributeArray.push("switch");
        }
        level.attributes = attributeArray;
    })

    res.json(message);
})

module.exports = router;