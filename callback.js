/* run onnode.js version 7.10 */

const axios = require('axios'); //use package "npm i axios -S"
var instance = axios.create({
    baseURL: 'https://unsplash.it/'
});

function getData(cb) {
    /*step2 รับ function เข้ามาผ่าน parameter ด้วยตัวแปร cb*/
    instance.get('/list').then(function (response) {
            /*step3 โยนค่ากับไป โดยเรากำหนด param ตัวแรก 
            เป็นที่สำหรับกรณี error  ตัวที่สอง สำหรับส่ง ข้อมูลกลับ*/
            cb(null, response.data);
        })
        .catch(function (error) {
            /*step3 กรณี error*/
            cb("if error");
        });
}

function main() {
    console.log('main work');
    /*step1 เราโยน function ลงไปเป็น parametor*/
    getData(function (error, result) {
        /*step4 รอรับค่าจากที่ step3 ส่งกลับมา โดยเราอาจดัก error เเบบนี้
         if(error){
            ทำบางอย่างเมื่อ error
         }
        */
        console.log('main todo');
        console.log("response total %s <", result.length);
        console.log("main end")
    });
}


function mainHellCase() {
    getData(function (error, result) {
        console.log("hell 1 response total %s <", result.length);
        getData(function (error, result) {
            console.log("hell 2 response total %s <", result.length);
            getData(function (error, result) {
                console.log("hell 3 response total %s <", result.length);
                getData(function (error, result) {
                    // HELL หรือยังครับ เเต่ใครว่ายัง หรือชอบ ก็ตามสบายครับ ไม่ขัดศรัทธา
                    console.log("hell 4 response total %s <", result.length);
                });
            });
        });
    });
}
mainHellCase();
main();