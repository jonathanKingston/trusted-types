/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

/** @fileoverview @externs */

/**
 * Policy defining rules for creating Trusted Types.
 * @typedef {TrustedTypesInnerPolicy}
 */
var TrustedTypesInnerPolicy = {
  /**
   * Function defining rules for creating a TrustedHTML object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedHTML object.
   */
  createHTML(s){},

  /**
   * Function defining rules for creating a TrustedURL object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedURL object.
   */
  createURL(s){},

  /**
   * Function defining rules for creating a TrustedScriptURL object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedScriptURL object.
   */
  createScriptURL(s){},

  /**
   * Function defining rules for creating a TrustedScript object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedScript object.
   */
  createScript(s){},
};

/**
 * @constructor
 */
var TrustedTypePolicyFactory = function() {};

/**
 * Creates a TT policy.
 *
 * Returns a frozen object representing a policy - a collection of functions
 * that may create TT objects based on the user-provided rules specified
 * in the builder function.
 *
 * @param  {string} name A unique name of the policy.
 * @param  {!TrustedTypesInnerPolicy} policy The policy rules.
 * @param  {boolean=} opt_expose Iff true, the policy will be exposed
 *   (available globally).
 * @return {!TrustedTypePolicy} The policy that may create TT objects
 *   according to the rules in the builder.
 */
TrustedTypePolicyFactory.prototype.createPolicy = function(name, policy,
    opt_expose){};

/**
 * Return a Policy object, if the policy was defined and exposed.
 * @param  {string} name The name of the policy.
 * @return {?TrustedTypePolicy}
 */
TrustedTypePolicyFactory.prototype.getExposedPolicy = function(name){};

/**
 * Returns all defined policy names.
 * @return {!Array<string>}
 */
TrustedTypePolicyFactory.prototype.getPolicyNames = function(){};

/**
 * Object that represents a Trusted HTML code, safe to be inserted into DOM into
 * HTML context.
 * @constructor
 */
var TrustedHTML = function() {};

/**
 * Object that represents a Trusted URL, safe to be inserted into DOM in
 * URL context.
 * @constructor
 */
var TrustedURL = function() {};

/**
 * Object that represents a Trusted Script URL, safe to be inserted into DOM as
 * a script URL.
 * @constructor
 */
var TrustedScriptURL = function() {};

/**
 * Object that represents a Trusted JavaScript code string, safe to be executed.
 * @constructor
 */
var TrustedScript = function() {};

/**
 * Policy allowing to create Trusted Types.
 * @constructor
 * @property {!string} name
 */
var TrustedTypePolicy = function() {};

/**
 * Creates a TrustedHTML object from a string.
 * @param  {string} s Input string
 * @return {!TrustedHTML}
 */
TrustedTypePolicy.prototype.createHTML = function(s) {};

/**
 * Creates a TrustedURL object from a string.
 * @param  {string} s Input string
 * @return {!TrustedURL}
 */
TrustedTypePolicy.prototype.createURL = function(s) {};

/**
 * Creates a TrustedScriptURL object from a string.
 * @param  {string} s Input string
 * @return {!TrustedScriptURL}
 */
TrustedTypePolicy.prototype.createScriptURL = function(s) {};

/**
 * Creates a TrustedScript object from a string.
 * @param  {string} s Input string
 * @return {!TrustedScript}
 */
TrustedTypePolicy.prototype.createScript = function(s) {};

/**
 * @const {!TrustedTypePolicyFactory}
 */
var TrustedTypes;