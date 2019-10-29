let listProjetcs = [
    { title : 'Qiklan Indonesia', img: '/assets/img/qiklan.png', url : '#' },
    { title : 'Informatics Expo', img: '/assets/img/expo.png', url : '#' },
    { title : 'Website Kab.Kutim', img: '/assets/img/kutai.png', url : '#' },
]

const loadProject = () => {
    const projects = listProjetcs.map(project => {
        return `
        <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${project.img}">
          </div>
          <div class="card-content">
            <p>${project.title}</p>
          </div>
          <div class="card-action">
            <a class="text-blue" href="${project.url}">Lihat</a>
          </div>
        </div>
        </div>
        `
    })
    document.querySelector('#projects').innerHTML = projects.join('')

}

export default loadProject