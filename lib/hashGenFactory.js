var crypto = require('crypto');

module.exports = {
    returnHash: () => {
        var date = Date.now().toString();
        var hash = crypto.createHash('sha256');

        hash.update(date);
        return hash.digest('hex');
    }
}