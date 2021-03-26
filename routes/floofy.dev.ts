// @ts-ignore
import { Request, Response } from "express";
import Armpit from "../utils/logger";
import request from "../utils/request";
const paths = [
    '/floofydev'
]

async function handler(req: Request, res: Response) {
    // console.log(req.body)
    // console.log(req.query)

    let useragent = req.body.useragent
    let response;

    try {
        response = await request("floofy", {
            useragent
        })

    } catch (error) {
        // console.error("Encountered an Error", error)
        response = {
            success: false,
            error: {
                msg: error.message
            }
        }
    }
    res.send(response)
}

export {
    paths,
    handler
}