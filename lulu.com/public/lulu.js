

/*自动生成js文件 插入到页面*/
const random = Math.random()
window[random] = (data) => {
    console.log(data)
}
const script = document.createElement('script')
script.src = `http://qq.com:8888/franks.js?functionName=${random}`  //qq.com里面的frank.js
script.onload = () => {
   script.remove()  //script 执行完毕删除
}
document.body.appendChild(script)

// console.log('lulu.js页面')
// const request = new XMLHttpRequest()
// request.open('GET','http://qq.com:8888/franks.json')  //得到json里面的文件数据  想要得到谁的文件里面的内容就引用谁
// request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.response)
//     }
// }
// request.send()