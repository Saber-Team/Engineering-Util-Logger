/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Saber-Team
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict';

/**
 * 表示logger等级的类,控制日志输出.
 * 对某个级别的日志进行输出则对高于此级别的日志也进行输出.
 * <p>使用时尽量用预制的级别如: Level.SEVERE.
 * <p>级别从高到低:
 * <ul>
 * <li>SEVERE (highest value)
 * <li>WARNING
 * <li>INFO
 * <li>CONFIG
 * <li>FINE
 * <li>FINER
 * <li>FINEST  (lowest value)
 * </ul>
 * 还有一个级别是 OFF 可以关闭日志, 级别 ALL 可以开启所有日志.
 * @param {string} name 级别名.
 * @param {number} value 级别值.
 * @constructor
 */
var Level = function(name, value) {
  /**
   * 级别的名称
   * @type {string}
   */
  this.name = name;
  /**
   * 级别的值
   * @type {number}
   */
  this.value = value;
};


/**
 * @return {string} 返回能表示当前日志等级的字符串.
 * @override
 */
Level.prototype.toString = function() {
  return this.name;
};


/**
 * OFF用于关闭日志.
 * This level is initialized to Infinity.
 * @type {!Level}
 */
Level.OFF = new Level('OFF', Infinity);


/**
 * SHOUT表示严重级别 for extra debugging loudness.
 * 默认权值1200.
 * @type {!Level}
 */
Level.SHOUT = new Level('SHOUT', 1200);


/**
 * 客户端程序默认的级别是Level.SEVERE.
 * SEVERE表示发生了错误. 默认权值1000.
 * @type {!Level}
 */
Level.SEVERE = new Level('SEVERE', 1000);


/**
 * WARNING是警告级别. 权值900.
 * @type {!Level}
 */
Level.WARNING = new Level('WARNING', 900);


/**
 * INFO表示提供一些信息的日志. 权值800.
 * @type {!Level}
 */
Level.INFO = new Level('INFO', 800);


/**
 * CONFIG表示配置信息. 默认权值700.
 * @type {!Level}
 */
Level.CONFIG = new Level('CONFIG', 700);


/**
 * FINE表示提供轨迹追踪信息的消息tracing.
 * 权值500.
 * @type {!Level}
 */
Level.FINE = new Level('FINE', 500);


/**
 * FINER 轨迹信息较为详细.
 * This level is initialized to <CODE>400</CODE>.
 * @type {!Level}
 */
Level.FINER = new Level('FINER', 400);


/**
 * FINEST 轨迹信息最详细.
 * This level is initialized to <CODE>300</CODE>.
 * @type {!Level}
 */
Level.FINEST = new Level('FINEST', 300);


/**
 * 记录所有日志.
 * This level is initialized to <CODE>0</CODE>.
 * @type {!Level}
 */
Level.ALL = new Level('ALL', 0);


/**
 * 预定义的一些等级.
 * @type {!Array.<!Logger.Level>}
 * @final
 */
Level.PREDEFINED_LEVELS = [
  Level.OFF,
  Level.SHOUT,
  Level.SEVERE,
  Level.WARNING,
  Level.INFO,
  Level.CONFIG,
  Level.FINE,
  Level.FINER,
  Level.FINEST,
  Level.ALL
];