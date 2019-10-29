let path = window.location.hash.substr(1)

const loadPage = (path = 'home') => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
            let element = document.querySelector('#body-content')
            if(xhr.status == 200){
                element.innerHTML = xhr.responseText
            }else if(xhr.status == 404){
                element.innerHTML = "<h1>Halaman Tidak Ditemukan</h1>"
            }else{
                element.innerHTML = "<h1>Maaf. halaman tidak dapat di akses!</h1>"
            }
        }
    }
    xhr.open('GET',`pages/${path}.html`,true)
    xhr.send()
}

export default loadPage