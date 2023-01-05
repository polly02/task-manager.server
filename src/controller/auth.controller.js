const express = require("express")
const { buildResponse } = require("../helper/buildResponse")
const { handleError } = require("../helper/handleError")
const { createUser, doAuthorisation } = require("../services/auth.service")
const route = express.Router()

route.post("/reg", async function (req, res) {
    try {
        const { name, surname, pwd, email } = req.body
        await createUser(name, surname, pwd, email)
        buildResponse(res, 200, "success")
    } catch (error) {
        handleError(res, 404, error.message)
    }
})


route.post("/auth", async function (req, res) {
    try {
        const { pwd, email } = req.body
        await doAuthorisation(pwd, email)
        buildResponse(res, 200, "success")
    } catch (error) {
        handleError(res, 404, error.message)
    }
})

module.exports = route