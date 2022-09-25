const projects = [
  {
    id: 1,
    name: 'Tonic',
    img: './images/portfolioImg1.svg',
    company: 'CANOPY',
    dot: './images/dot.svg',
    position: 'Front-End-Dev',
    date: '2022',
    description: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 2,
    name: 'multi-post stories',
    img: './images/Portfolio2.svg',
    company: 'CANOPY',
    dot: './images/dot.svg',
    position: 'Front-End-Dev',
    date: '2022',
    description: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 3,
    name: 'Tonic',
    img: './images/portfolio-3.svg',
    company: 'CANOPY',
    dot: './images/dot.svg',
    position: 'Front-End-Dev',
    date: '2022',
    description: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 4,
    name: 'Multi-post stories',
    img: './images/portfolio-4.svg',
    company: 'CANOPY',
    dot: './images/dot.svg',
    position: 'Front-End-Dev',
    date: '2022',
    description: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
];

projects.map((item) => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `
  <div class="card">
  <div class="project-img">
    <img src="${item.img}" alt="">
  </div>
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
    <button class="btn" id=${item.id} >View Project</button>
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

const viewProjectBtn = document.querySelectorAll('.btn');

viewProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.id)
})  
});




    

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
