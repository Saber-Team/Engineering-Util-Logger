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

class Logger {
  constructor(name, level, record) {

  }
}

module.exports = Logger;

define([
    '../debug/util',
    '../debug/logrecord',
    '../debug/logger',
    '../debug/loglevel'
  ],
  function(debug, LogRecord, Logger, LogLevel) {

    'use strict';

    return {
      /** @define {boolean} 是否允许打日志. */
      ENABLED: debug.LOGGING_ENABLED,

      /** @constructor */
      Level: LogLevel,

      /** @constructor */
      LogRecord: LogRecord,

      /**
       * 如果有返回单例否则创建一个新的日志.
       * If a new logger is created its log level will be configured based
       * on the debug.LogManager configuration and it will configured to also
       * send logging output to its parent's handlers.
       * @see debug.LogManager
       *
       * @param {string} name 日志名称. 名称是点分割的包.类格式, such as Sogou.Net.BrowserChannel.
       * @param {log.Level=} opt_level 覆盖原logger的level
       * @return {log.Logger} The named logger or null if logging is disabled.
       */
      getLogger: function(name, opt_level) {
        if (debug.LOGGING_ENABLED) {
          var logger = Logger.getLogger(name);
          if (opt_level && logger)
            logger.setLevel(opt_level);
          return logger;
        } else {
          return null;
        }
      },

      /**
       * 为logger添加处理器.
       * @param {Logger} logger
       * @param {Function} handler 处理器函数.
       */
      addHandler: function(logger, handler) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.addHandler(handler);
        }
      },

      /**
       * 移除logger事件处理器.
       * @param {Logger} logger
       * @param {Function} handler 要移除的句柄.
       * @return {boolean} Whether the handler was removed.
       */
      removeHandler: function(logger, handler) {
        if (debug.LOGGING_ENABLED && logger) {
          return logger.removeHandler(handler);
        } else {
          return false;
        }
      },

      /**
       * 写日志. 条件满足的情况下对所有注册的处理器(output Handler objects)
       * 传递消息信息.
       * @param {Logger} logger
       * @param {LogLevel} level 日志等级.
       * @param {string} msg 消息.
       * @param {Error|Object=} opt_exception 关联的异常对象.
       */
      log: function(logger, level, msg, opt_exception) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.log(level, msg, opt_exception);
        }
      },

      /**
       * Logs a message at the Level.SEVERE level.
       * @param {Logger} logger
       * @param {string} msg 消息.
       * @param {Error=} opt_exception 关联的异常对象
       */
      error: function(logger, msg, opt_exception) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.severe(msg, opt_exception);
        }
      },

      /**
       * Logs a message at the Level.WARNING level.
       * @param {Logger} logger
       * @param {string} msg 消息.
       * @param {Error=} opt_exception 关联的异常对象.
       */
      warning: function(logger, msg, opt_exception) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.warning(msg, opt_exception);
        }
      },

      /**
       * Logs a message at the Level.INFO level.
       * @param {Logger} logger
       * @param {string} msg 消息.
       * @param {Error=} opt_exception 关联的异常对象.
       */
      info: function(logger, msg, opt_exception) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.info(msg, opt_exception);
        }
      },

      /**
       * Logs a message at the Level.Fine level.
       * @param {Logger} logger
       * @param {string} msg 消息.
       * @param {Error=} opt_exception 关联的异常对象.
       */
      fine: function(logger, msg, opt_exception) {
        if (debug.LOGGING_ENABLED && logger) {
          logger.fine(msg, opt_exception);
        }
      }
    };
  }
);