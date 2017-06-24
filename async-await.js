/* run onnode.js version 7.10 */
const axios = require('axios'); //use package "npm i axios -S"
var instance = axios.create({
    baseURL: 'https://unsplash.it/'
});


/*เมื่อต้องการใช้ await ประกาศ async หน้า function เสมอ */
async function getData(cb) {
    /*await หน้า function promise ที่ต้องการให้รอ*/
    return await instance.get('/list');
}
/*เมื่อต้องการใช้ await ประกาศ async หน้า function เสมอ */
async function main() {
    try {
        /*await หน้า function promise ที่ต้องการให้รอ*/
        let result = await getData();
        console.log('BAKA result',result.data.length);
    } catch (error) {
        /*ดักจับ error */
        console.log('case error',error.code);
    }
}
main();