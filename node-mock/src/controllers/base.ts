import { Request } from "express"


interface Http {
    req: Request,
    res: any
}


/**
 * BaseControler.js
 *
 */
export default class BaseControler {
    public http: Http
    constructor(args: Http) {
        this.http = args
    }
}
