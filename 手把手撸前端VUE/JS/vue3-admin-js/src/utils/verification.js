/**
 * 手机号验证
 * @param {*} value 手机号
 */
export function checkPhone(value) {
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}
/**
 * 6-20数字+英文
 */
export function checkPassword(value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value);
}
/**
 * 6位数字
 */
export function checkCode(value) {
    let regCode = /[a-zA-Z0-9]{6}/;
    return regCode.test(value);
}