const sqlCheck = {
    idSpecialCharactersCheck: (login_id) => {
        const specialCharactersRegex = /^[a-zA-Z0-9]+$/;
        return specialCharactersRegex.test(login_id);
    }
};


module.exports = sqlCheck;

