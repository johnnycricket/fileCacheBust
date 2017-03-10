var crypto = require('crypto');

module.exports = {
    hashGenFactory: () => {
        var self = {
            returnHash: () => {
                var date = Date.now().toString();
                var hash = crypto.createHash('sha256');

                hash.update(date);
                return hash.digest('hex');
            }
        }
        return self;
    }
}