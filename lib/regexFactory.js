module.exports = {
    regExFactory: () => {
        var self = {
            fileName: (matcher, file, hash) => {
                var regexMatcher = self.cleanMatcher(matcher);
                file = file.replace(regexMatcher, `${matcher}?rel=${hash}`);
                return file;
            },
            cleanMatcher: (matchToClean) => {
                matchToClean = matchToClean.replace(/([\^$\\.*+?()[\]{}|/])|(\b\'\b)/g, '\\$&');
                return new RegExp('(' + matchToClean + '\?rel=\\d+)|('+ matchToClean +')');
            }
        }
        return self;
    }
} 