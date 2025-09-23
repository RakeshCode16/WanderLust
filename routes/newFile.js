const router = require("./user");
const wrapAsync = require("../utils/wrapAsync");

router.post("/signup", wrapAsync(async (req, res) => {
    let { username, email, password } = req.body;
}));    
