



export default class Exception {
    private code: string
    private msg: string
    private exMsg: string
    private errors: object = {

    }

    constructor(code: string = '', exMsg: string = '') {
        this.code = code
        this.msg = this.errors[code]
        this.exMsg = exMsg
    }

    throw(code: string = '', exMsg: string = '') {
        let errorMsg = this.errors[code]
        let err: any = new Error(`${errorMsg} ${exMsg}`)
        err.code = code
        throw err
    }
}