const request = new XMLHttpRequest()
request.open('GET','franks.json')  //得到json里面的文件数据  想要得到谁的文件里面的内容就引用谁
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response)
    }
}
request.send()