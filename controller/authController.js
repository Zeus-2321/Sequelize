const signUp = (req, res, next) => {
    res.json({
        status:'success',
        message:'SignUp route working'
    })
}

module.exports = {signUp}