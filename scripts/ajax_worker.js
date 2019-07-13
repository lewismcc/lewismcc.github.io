var handleRequest = function (data) {
    postMessage(data)
}

addEventListener('message', function (e) {
    var xhr = new XMLHttpRequest
    xhr.open('GET', e.data)
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            handleRequest(xhr.responseText)
        }
    }

    xhr.send()
})