import projects from './modules/projects.js';

projects.map((item) => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `
  <div class="card">
  <div class="project-img">
    <img class="corona-img" src="${item.img}" alt="project">
  </div>
  <div class="project-info">
  <div class="project-details">
    <h3 class="main-name">${item.name}</h3>
    <div class="credentials">
    <p>${item.company}</p>
    <img src="${item.dot}" alt="dot">
    <p>${item.position}</p>
    <img src="${item.dot}" alt="dot">
    <p>${item.date}</p>
  </div>
    <p class="description-desktop-version">${item.description}</p>
    <div class="technology">
      <h5 class="blue-padding">${item.tech1}</h5>
      <h5 class="blue-padding">${item.tech2}</h5>
      <h5 class="blue-padding">${item.tech3}</h5>
    </div>
    <button class="btn">View Project</button>
  </div>
  </div>
  </div>
  `;
  return document.querySelector('.project-section').appendChild(project);
});

const popMenu = document.querySelector('.hamburger');
const mobileHamMenuPop = document.querySelector('.mobile-ham-menu-pop');
popMenu.addEventListener('click', () => {
  mobileHamMenuPop.classList.remove('hidden');
  popMenu.style.display = 'none';
});

const closeMenu = document.querySelector('.cross-img');
closeMenu.addEventListener('click', () => {
  mobileHamMenuPop.classList.add('hidden');
  popMenu.style.display = 'block';
});

// popup modal

const modal = document.createElement('div');
const overlay = document.getElementsByClassName('overlay')[0];
modal.classList.add('modal');
const viewProjectBtn = document.querySelectorAll('.btn');
viewProjectBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
    <div class="modal-header-top">
      <h2 class="modal-title">${projects[i].name}</h2>
      <img class="close-btn" src="./images/Enabled-3.svg">
    </div>
    <div class="modal-header-bottom">
    ${projects[i].company} <img src="${projects[i].dot}"> ${projects[i].position} <img src="${projects[i].dot}"> ${projects[i].date}
    </div>
    </div>
    <div class="modal-body">
      <div class="main-image-holder">
        <img class="main-image" src="${projects[i].img}" alt="">
      </div>
      <div class="desktop-modal-details">
      <div>
      <div class="modal-text">
        <p>${projects[i].description}</p>
        </div>
        </div>
        <div>
        <div class="modal-technologies">
          <h5 class="blue-padding">${projects[i].tech1}</h5>
          <h5 class="blue-padding">${projects[i].tech2}</h5>
          <h5 class="blue-padding">${projects[i].tech3}</h5>
        </div>
        <div class="thin-line"></div>

        <div class="modal-btns">
          <a href="${projects[i].liveLink}" class="modal-btn" target="_blank">See Live <img class="btn-icon-modal" src="${projects[i].seeLive}"></a>
          <a href="${projects[i].sourceLink}" class="modal-btn" target="_blank">See Source <img class="btn-icon-modal" src="${projects[i].seeSource}"></a>
          </div>
          </div> 
          </div>
    </div>
    </div>
    `;
    document.body.appendChild(modal);
    overlay.classList.remove('hidden');

    const closeModal = document.querySelector('.close-btn');
    closeModal.addEventListener('click', () => {
      modal.remove();
      overlay.classList.add('hidden');
    }, { once: true });
  });
});


