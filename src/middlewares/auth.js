const adminAuth = (req, res, next) => {
    console.log("Admin authentication middleware executed");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(403).send("Unauthorized access");
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    console.log("User authentication middleware executed");
    const token = "abc";
    const isUserAuthorized = token === "abc";
    if (!isUserAuthorized) {
        res.status(403).send("Unauthorized access");
    } else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth
};