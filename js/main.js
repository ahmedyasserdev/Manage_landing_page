

// Testimonial data
const testimonials = [
  {
    name: "Anisha Li",
    avatar: "./images/avatar-anisha.png",
    quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
  },
  {
    name: "Ali Bravo",
    avatar: "./images/avatar-ali.png",
    quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
  },
  {
    name: "Richard Watts",
    avatar: "./images/avatar-richard.png",
    quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
  },
  {
    name: "Shanai Gough",
    avatar: "./images/avatar-shanai.png",
    quote: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
  }
];

// Function to create a testimonial element
const  createTestimonialElement = (testimonial) => {
  const testimonialElement = document.createElement('div');
  testimonialElement.classList.add('swiper-slide', 'testimonial');

  testimonialElement.innerHTML = `
    <img src="${testimonial.avatar}" width = "100px" class ="mx-auto object-fit-cover" alt="${testimonial.name}">
    <h5 class="text-2 my-4" >${testimonial.name}</h5>
    <p class = "w-75 px-4 px-md-0 d-block mx-auto" >${testimonial.quote}</p>
  `;

  return testimonialElement;
}

// Populate testimonials in the DOM
const testimonialsContainer = document.getElementById('testimonials');
testimonials.forEach(testimonial => {
  const testimonialElement = createTestimonialElement(testimonial);
  testimonialsContainer.appendChild(testimonialElement);
});



// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is <= 767px (mobile)
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is > 767px (desktop)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
