import projects from './modules/projects.js';

projects.map((item) => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `
  <div class="card">
  <div class="project-img">
    <img class="corona-img" src="${item.img}" alt="">
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
    <p>${item.description}</p>
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
  // const myHeader = document.querySelector('.main-header');
  // myHeader.classList.add('active');
  // const myNavbar = document.querySelector('.main-nav');
  // myNavbar.classList.add('active');
  // const myLogo = document.querySelector('.my-logo');
  // myLogo.classList.add('active');
  // const lineBar = document.querySelector('.hamburger');
  // lineBar.classList.add('active');
  // const imgCross = document.querySelector('.cross-img');
  // imgCross.classList.add('active');
});

const closeMenu = document.querySelector('.cross-img');
closeMenu.addEventListener('click', () => {
  mobileHamMenuPop.classList.add('hidden');
  popMenu.style.display = 'block';

  // const myHeader = document.querySelector('.main-header');
  // myHeader.classList.remove('active');
  // const myNavbar = document.querySelector('.main-nav');
  // myNavbar.classList.remove('active');
  // const myLogo = document.querySelector('.my-logo');
  // myLogo.classList.remove('active');
  // const lineBar = document.querySelector('.hamburger');
  // lineBar.classList.remove('active');
  // const imgCross = document.querySelector('.cross-img');
  // imgCross.classList.remove('active');

});

const modal = document.createElement('div');
modal.classList.add('modal');
const viewProjectBtn = document.querySelectorAll('.btn');
viewProjectBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
    <div class="modal-header-top">
      <h2 class="modal-title">${projects[i].name}</h2>
      <img class="close-btn" src="./images/Enabled-2.svg" alt="close-btn">
    </div>
    <div class="modal-header-bottom">
    ${projects[i].company} ${projects[i].dot} ${projects[i].position} ${projects[i].dot} ${projects[i].date}
    </div>
    </div>
    <div class="modal-body">
      <div class="main-image-holder">
        <img class="main-image" src="${projects[i].img}" alt="">
      </div>
      <div class="modal-text">
        <p>${projects[i].description}</p>
        </div>
        <div class="modal-technologies">
          <h5 class="blue-padding">${projects[i].tech1}</h5>
          <h5 class="blue-padding">${projects[i].tech2}</h5>
          <h5 class="blue-padding">${projects[i].tech3}</h5>
        </div>

        <div class="modal-btns">
          <a href="${projects[i].liveLink}" class="modal-btn" target="_blank">See Live</a>
          <a href="${projects[i].sourceLink}" class="modal-btn" target="_blank">See Source</a>
          </div>
    </div>
    </div>
    `;
    return document.body.appendChild(modal);
    
  });
});

const closeBtn = [...document.querySelectorAll('.close-btn')];
closeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('clicked');
  });
});



// const modal = document.querySelector('.modal');
//     modal.classList.remove('hidden');
//     const modalImg = document.querySelector('.modal-img');
//     modalImg.src = projects[i].img;
//     const modalName = document.querySelector('.modal-name');
//     modalName.innerHTML = projects[i].name;
//     const modalCompany = document.querySelector('.modal-company');
//     modalCompany.innerHTML = projects[i].company;
//     const modalPosition = document.querySelector('.modal-position');
//     modalPosition.innerHTML = projects[i].position;
//     const modalDate = document.querySelector('.modal-date');
//     modalDate.innerHTML = projects[i].date;
//     const modalDescription = document.querySelector('.modal-description');
//     modalDescription.innerHTML = projects[i].description;
//     const modalTech1 = document.querySelector('.modal-tech1');
//     modalTech1.innerHTML = projects[i].tech1;
//     const modalTech2 = document.querySelector('.modal-tech2');
//     modalTech2.innerHTML = projects[i].tech2;
//     const modalTech3 = document.querySelector('.modal-tech3');
//     modalTech3.innerHTML = projects[i].tech3;





    

  // const popUpMobileProject = document.createElement('div');
  // popUpMobileProject.classList.add('pop-up-mobile');
  // popUpMobileProject.innerHTML = `"Testing"`;
  // return document.querySelector('.project-section').appendChild(popUpMobileProject);

// const popOutMenu = document.querySelector('.cross-img')
// popOutMenu.addEventListener('click', () => {


// }


// const popOutMenu2 = document.querySelector('.link-3');
// popOutMenu2.addEventListener('click', () => {
//   const myHeader = document.querySelector('.main-header');
//   myHeader.classList.remove('active');
//   const myNavbar = document.querySelector('.main-nav');
//   myNavbar.classList.remove('active');
//   const myLogo = document.querySelector('.my-logo');
//   myLogo.classList.remove('active');
//   const lineBar = document.querySelector('.hamburger');
//   lineBar.classList.remove('active');
//   const imgCross = document.querySelector('.cross-img');
//   imgCross.classList.remove('active');
// });

// const popOutMenu3 = document.querySelector('.link-4');
// popOutMenu3.addEventListener('click', () => {
//   const myHeader = document.querySelector('.main-header');
//   myHeader.classList.remove('active');
//   const myNavbar = document.querySelector('.main-nav');
//   myNavbar.classList.remove('active');
//   const myLogo = document.querySelector('.my-logo');
//   myLogo.classList.remove('active');
//   const lineBar = document.querySelector('.hamburger');
//   lineBar.classList.remove('active');
//   const imgCross = document.querySelector('.cross-img');
//   imgCross.classList.remove('active');
// });

// const popOutMenu4 = document.querySelector('.link-5');
// popOutMenu4.addEventListener('click', () => {
//   const myHeader = document.querySelector('.main-header');
//   myHeader.classList.remove('active');
//   const myNavbar = document.querySelector('.main-nav');
//   myNavbar.classList.remove('active');
//   const myLogo = document.querySelector('.my-logo');
//   myLogo.classList.remove('active');
//   const lineBar = document.querySelector('.hamburger');
//   lineBar.classList.remove('active');
//   const imgCross = document.querySelector('.cross-img');
//   imgCross.classList.remove('active');
// });

// const popInProjectDetails = document.querySelector('.button-1');
// popInProjectDetails.addEventListener('click', () => {
//   if (window.innerWidth <= 992) {
//     const popProject = document.querySelector('.container-modal');
//     popProject.classList.add('active');
//     document.querySelector('.project-head-1').textContent = projects[0].name;
//     document.querySelector('.popup-cross').src = projects[0].img;
//     document.querySelector('.canopy-img-1').src = projects[0].img1;
//     document.querySelector('.main-project-img-mobile').src = projects[0].img2;
//     document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
//     document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
//     document.querySelector('.button-icon-live').src = projects[0].img4;
//     document.querySelector('.button-icon-git').src = projects[0].img5;
//   } else if (window.innerWidth >= 992) {
//     const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//     popDesktopProjectOut.classList.add('active');
//     document.querySelector('.desktop-popup-main-head').textContent = projects[0].name;
//     document.querySelector('.popup-cross-desktop').src = projects[0].img;
//     document.querySelector('.skill-list-img').src = projects[0].img1;
//     document.querySelector('.desktop-main-img-popup').src = projects[0].img8;
//     document.querySelector('.popUpWindowPara').textContent = projects[0].details2;
//     document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
//     document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
//     document.querySelector('.popup-img-live-1').src = projects[0].img4;
//     document.querySelector('.popup-img-live-2').src = projects[0].img5;
//     const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
//     popOutWindowDesktop.addEventListener('click', () => {
//       const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//       popDesktopProjectOut.classList.remove('active');
//     });
//   }
//   const popOutProjectDetails = document.querySelector('.popup-cross');
//   popOutProjectDetails.addEventListener('click', () => {
//     const popProjectOut = document.querySelector('.container-modal');
//     popProjectOut.classList.remove('active');
//   });
// });
// const popInProjectDetails2 = document.querySelector('.button-2-pop');
// popInProjectDetails2.addEventListener('click', () => {
//   if (window.innerWidth <= 992) {
//     const popProject = document.querySelector('.container-modal');
//     popProject.classList.add('active');
//     document.querySelector('.project-head-1').textContent = projects[1].name;
//     document.querySelector('.popup-cross').src = projects[0].img;
//     document.querySelector('.canopy-img-1').src = projects[0].img1;
//     document.querySelector('.main-project-img-mobile').src = projects[0].img6;
//     document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
//     document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
//     document.querySelector('.button-icon-live').src = projects[0].img4;
//     document.querySelector('.button-icon-git').src = projects[0].img5;
//   } else if (window.innerWidth >= 992) {
//     const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//     popDesktopProjectOut.classList.add('active');
//     document.querySelector('.desktop-popup-main-head').textContent = projects[1].name;
//     document.querySelector('.popup-cross-desktop').src = projects[0].img;
//     document.querySelector('.skill-list-img').src = projects[0].img1;
//     document.querySelector('.desktop-main-img-popup').src = projects[0].img8;
//     document.querySelector('.popUpWindowPara').textContent = projects[0].details2;
//     document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
//     document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
//     document.querySelector('.popup-img-live-1').src = projects[0].img4;
//     document.querySelector('.popup-img-live-2').src = projects[0].img5;
//     const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
//     popOutWindowDesktop.addEventListener('click', () => {
//       const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//       popDesktopProjectOut.classList.remove('active');
//     });
//   }
//   const popOutProjectDetails = document.querySelector('.popup-cross');
//   popOutProjectDetails.addEventListener('click', () => {
//     const popProjectOut = document.querySelector('.container-modal');
//     popProjectOut.classList.remove('active');
//   });
// });
// const popInProjectDetails3 = document.querySelector('.button-3-pop');
// popInProjectDetails3.addEventListener('click', () => {
//   if (window.innerWidth <= 992) {
//     const popProject = document.querySelector('.container-modal');
//     popProject.classList.add('active');
//     document.querySelector('.project-head-1').textContent = projects[0].name;
//     document.querySelector('.popup-cross').src = projects[0].img;
//     document.querySelector('.canopy-img-1').src = projects[0].img1;
//     document.querySelector('.main-project-img-mobile').src = projects[0].img7;
//     document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
//     document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
//     document.querySelector('.button-icon-live').src = projects[0].img4;
//     document.querySelector('.button-icon-git').src = projects[0].img5;
//   } else if (window.innerWidth >= 992) {
//     const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//     popDesktopProjectOut.classList.add('active');
//     document.querySelector('.desktop-popup-main-head').textContent = projects[0].name;
//     document.querySelector('.popup-cross-desktop').src = projects[0].img;
//     document.querySelector('.skill-list-img').src = projects[0].img1;
//     document.querySelector('.desktop-main-img-popup').src = projects[0].img8;
//     document.querySelector('.popUpWindowPara').textContent = projects[0].details2;
//     document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
//     document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
//     document.querySelector('.popup-img-live-1').src = projects[0].img4;
//     document.querySelector('.popup-img-live-2').src = projects[0].img5;
//     const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
//     popOutWindowDesktop.addEventListener('click', () => {
//       const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//       popDesktopProjectOut.classList.remove('active');
//     });
//   }
//   const popOutProjectDetails = document.querySelector('.popup-cross');
//   popOutProjectDetails.addEventListener('click', () => {
//     const popProjectOut = document.querySelector('.container-modal');
//     popProjectOut.classList.remove('active');
//   });
// });
// const popInProjectDetails4 = document.querySelector('.button-4-pop');
// popInProjectDetails4.addEventListener('click', () => {
//   if (window.innerWidth <= 992) {
//     const popProject = document.querySelector('.container-modal');
//     popProject.classList.add('active');
//     document.querySelector('.project-head-1').textContent = projects[1].name;
//     document.querySelector('.popup-cross').src = projects[0].img;
//     document.querySelector('.canopy-img-1').src = projects[0].img1;
//     document.querySelector('.main-project-img-mobile').src = projects[3].img;
//     document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
//     document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
//     document.querySelector('.button-icon-live').src = projects[0].img4;
//     document.querySelector('.button-icon-git').src = projects[0].img5;
//   } else if (window.innerWidth >= 992) {
//     const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//     popDesktopProjectOut.classList.add('active');
//     document.querySelector('.desktop-popup-main-head').textContent = projects[1].name;
//     document.querySelector('.popup-cross-desktop').src = projects[0].img;
//     document.querySelector('.skill-list-img').src = projects[0].img1;
//     document.querySelector('.desktop-main-img-popup').src = projects[0].img8;
//     document.querySelector('.popUpWindowPara').textContent = projects[0].details2;
//     document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
//     document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
//     document.querySelector('.popup-img-live-1').src = projects[0].img4;
//     document.querySelector('.popup-img-live-2').src = projects[0].img5;
//     const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
//     popOutWindowDesktop.addEventListener('click', () => {
//       const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
//       popDesktopProjectOut.classList.remove('active');
//     });
//   }
//   const popOutProjectDetails = document.querySelector('.popup-cross');
//   popOutProjectDetails.addEventListener('click', () => {
//     const popProjectOut = document.querySelector('.container-modal');
//     popProjectOut.classList.remove('active');
//   });
// });

// document.getElementById('my-form').addEventListener('submit', (e) => {
//   const emailValue = document.getElementById('my-email').value;
//   const emailError = document.getElementById('error-mes');
//   const regex = /^[a-z]/g;
//   if (regex.test(emailValue)) {
//     emailError.textContent = '';
//   } else {
//     e.preventDefault();
//     emailError.textContent = 'Email should be in lowercase';
//   }
// });

// const modal = document.createElement('div');
//       modal.classList.add('modal');
//       modal.innerHTML = `
//       <div class="modal-content">
//       <div class="modal-header">
//         <h3 class="modal-title">${projects[0].name}</h3>
//         <button class="close-btn">X</button>
//       </div>
//       <div class="modal-body">
//         <div class="modal-img">
//           <img src="${projects[0].img}" alt="">
//         </div>
//         <div class="modal-details">
//           <div class="modal-credentials">
//             <p>${projects[0].company}</p>
//             <img src="${projects[0].dot}" alt="dot">
//             <p>${projects[0].position}</p>
//             <img src="${projects[0].dot}" alt="dot">
//             <p>${projects[0].date}</p>
//           </div>
//           <p>${projects[0].description}</p>
//           <div class="modal-technology">
//             <h5 class="blue-padding">${projects[0].tech1}</h5>
//             <h5 class="blue-padding">${projects[0].tech2}</h5>
//             <h5 class="blue-padding">${projects[0].tech3}</h5>
//           </div>
//           <div class="modal-btns">
//             <button class="modal-btn">See Live</button>
//             <button class="modal-btn">See Source</button>
//           </div>
//         </div>
//       </div>
//     </div>
//       `;
//       return document.querySelector('.modal-section').appendChild(modal);
//     }
