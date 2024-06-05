/*
 * MIT License
 *
 * Copyright (C) Huawei Technologies Co.,Ltd. 2024. All rights reserved.
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
 */
const TAG = 'CameraUtils'

const Utils = {
  //节流
  throttle(fn, interval) {
    // 1.记录上一次的开始时间
    let lastTime = 0

    // 2.事件触发时, 真正执行的函数
    const _throttle = function () {

      // 2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime()

      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长时间需要去触发函数
      const remainTime = interval - (nowTime - lastTime)
      //第一次会执行，原因是nowTime刚开始是一个很大的数字，结果为负数
      //若最后一次没能满足条件，不会执行
      if (remainTime <= 0) {
        // 2.3.真正触发函数
        fn()
        // 2.4.保留上次触发的时间
        lastTime = nowTime
      }
    }
    return _throttle
  },
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

}

export default Utils