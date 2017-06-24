/* run onnode.js version 7.10 */
const axios = require('axios'); //use package "npm i axios -S"
var instance = axios.create({
    baseURL: 'https://unsplash.it/'
});

function getData() {
    /*step2 ใช้คำสั่ง new Promise , 
    return new Promise เพื่อต้องการส่ง promise กลับ*/
    return new Promise(function (resolve, reject) {
        instance.get('/list').then(function (response) {
            /*step3 โยนค่ากับไป ผ่าน reslove */
            resolve(response.data);
        }).catch(function (error) {
            /*step3 กรณี error โยนค่ากับไป reject*/
            reject("if error");
        });
    })
}

function main() {
    console.log('main work');
    /*step1 เราโยน function ลงไปเป็น parametor*/
    getData().then(function (result) {
        console.log('main todo');
        console.log("response total %s <", result.length);
        console.log("main end")
    }).catch(function (error) {
        console.log("case error");
    })
}

function mainPromise() {
    getData().then(function (result) {
        getData().then(function (result) {
            getData().then(function (result) {
                getData().then(function (result) {
                    console.log('result',result.length);
                     // ผมว่าก็ HELL ดีนะครับ สวยดี
                })
            })
        })
    })
}

function mainPromisepretty() {
    getData().then(function (result) {
        return getData();
    }).then(function(result){
        return getData();
    }).then(function(result){
        return getData();
    }).then(function(result){
        return getData();
    }).then(function(result){
        console.log('BAKA result',result.length);
    })
}

mainPromise();
mainPromisepretty();
main();