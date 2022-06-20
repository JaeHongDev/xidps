const apiConfig = {
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

/**
 * @typedef {object} header
 * @property {string} Content-Type (default) application/json
 */
/**
 * @typedef { object } requestOption
 * @property {string} method - (default) GET | POST | PUT | PATCH | UPDATE
 * @property {string} mode -  no-cors, (default) cors, same-origin
 * @property {string} cache - (default) no-cache, reload, force-cache, only-if-cached
 * @property {header} headers - headers
 * @property {string} redirect - manual, *follow, error
 * @property {string} referrerPolicy - 지원하지 않는 브라우저가 있으므로 설정하지 말 것
 * @property {object} data - form data
 * @summary - 설정 옵션
 *
 */
/**
 * @param {string} url url bla bla
 * @param {requestOption} config - config
 * @param {targetElement} $elements
 * @summary
 */
const get = (url, config) => {
  return request(url, {
    ...apiConfig,
    method: "GET"
  });
}

/**
 * @param {string} url url bla bla
 * @param {requestOption} config - config
 * @summary
 */
const request = async (url, config) => {
  try {
    const response = await fetch(url, config);
    if (!response.ok) throw Error("요청 실패");

    const result = await response.json();
    return result;

  } catch (error) {
    return error.message;
  } finally {
  }
};


export default {
  get
}
