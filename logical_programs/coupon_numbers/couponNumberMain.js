/******************************************************************************
 *  Execution       :   1. default node         cmd> node couponNumberMain.js
 *                      2. if nodemon installed cmd> nodemon couponNumberMain.js
 *
 *  Purpose         : create distinct coupon numbers.
 *
 *  @description
 *
 *  @file           : couponNumberMain.js
 *  @overview       : create a distinct coupon number of given numbe of times. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
let read = require('readline-sync');
let callFunction = require('./couponNumberBL');

let numberOfCoupons = read.question('enter the number of coupon you want to create :');
callFunction.distinctCoupon(numberOfCoupons);