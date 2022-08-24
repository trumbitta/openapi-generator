/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HasOnlyReadOnly model module.
 * @module model/HasOnlyReadOnly
 * @version 1.0.0
 */
class HasOnlyReadOnly {
    /**
     * @member {String} bar
     * @type {String}
     */
    bar;
    /**
     * @member {String} foo
     * @type {String}
     */
    foo;

    

    /**
     * Constructs a new <code>HasOnlyReadOnly</code>.
     * @alias module:model/HasOnlyReadOnly
     */
    constructor() { 
        
        HasOnlyReadOnly.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HasOnlyReadOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HasOnlyReadOnly} obj Optional instance to populate.
     * @return {module:model/HasOnlyReadOnly} The populated <code>HasOnlyReadOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HasOnlyReadOnly();

            if (data.hasOwnProperty('bar')) {
                obj['bar'] = ApiClient.convertToType(data['bar'], 'String');
            }
            if (data.hasOwnProperty('foo')) {
                obj['foo'] = ApiClient.convertToType(data['foo'], 'String');
            }
        }
        return obj;
    }
}



export default HasOnlyReadOnly;

