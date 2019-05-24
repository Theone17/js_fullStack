// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request');
const crypto = require('crypto');

cloud.init()
const db = cloud.database();
const getSessionKey = (code) => {
  const opts = {
    appid: "wxa35c4bec2ba665b1",
    secret: "0fa72c9866afe7b0fffcb88c08559bf2",
    js_code: code,
    grant_type: "authorization_code"
  }
  return new Promise((resolve, reject) => {
    request({
      method: "GET",
      url: "https://api.weixin.qq.com/sns/jscode2session",
      qs: opts,
      json: true
    }, (err, res, body) => {
      if (err) {
        reject(err)
      }
      resolve(body);
    })
  })
}

// 云函数入口函数
exports.main = async (event, context) => {
  // eslint
  try {
    const { code, avatarUrl } = event;
    const weixinRes = await getSessionKey(code);
    const { session_key, openid } = weixinRes;
    // 存入用户信息
    const findByOpenid = await db.collection('user').where({
      openid
    })
    .get()
    if (!findByOpenid.data.length) {
      const insertRes = await db.collection('user')
      .add({
        data: {
          openid,
          avatarUrl
        }
      })
    }
    // md5加密算法 sha256
    const skey = crypto.createHash('sha1').update(session_key, 'utf8').digest('hex');
    return {
      skey
    }
  } catch (error) {
    return {
      error
    }
  }
  
}