const loadProfile = () => {

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 || xhr.status != 200) return

        document.querySelector('#profile').innerHTML = xhr.responseText
    }
    xhr.open('GET','/src/components/profile.html',true)
    xhr.send()
}

export default loadProfile