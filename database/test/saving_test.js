const assert = require('assert')
const MarioChar = require('../model/mario')
describe('saving records', function(){

    // Create test
    it('save a record to database', function(){
        var char = new MarioChar({
            name : 'Mario'
        })
        char.save().then(function(){
            assert(char.isNew === false)
            done()
        })

    })
})