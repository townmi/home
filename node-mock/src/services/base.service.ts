export default class BaseService {


    /**
     * create
     *
     *
     * @memberOf BaseService
     */
    create(obj: object) {
        throw new Error('This method must be overwritten!')
    }

    /**
     * update
     *
     *
     * @memberOf BaseService
     */
    update(id: string, obj: object) {
        throw new Error('This method must be overwritten!')
    }

    /**
     *
     * findById
     *
     * @memberOf BaseService
     */
    findById(id: string) {
        throw new Error('This method must be overwritten!')
    }

    /**
     *
     * findOne
     *
     * @memberOf BaseService
     */
    findOne() {
        throw new Error('This method must be overwritten!')
    }

    /**
     *
     * destroy
     *
     * @memberOf BaseService
     */
    destroy(id: string) {
        throw new Error('This method must be overwritten!')
    }

    /**
     * findAll
     *
     *
     * @memberOf BaseService
     */
    findAll(obj: object) {
        throw new Error('This method must be overwritten!')
    }

    /**
     * findAndCountAll
     *
     *
     * @memberOf BaseService
     */
    findAndCountAll(obj: object) {
        throw new Error('This method must be overwritten!')
    }
}
