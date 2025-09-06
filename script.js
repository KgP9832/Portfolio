// Portfolio Data
const portfolioData = {
  logo: "MyPortfolio",
  name: "Krishna Gopal Patra",
  tagline: "Frontend Developer | Web Enthusiast",
  profilePic: "image1.jpg",
  cv: "kgpcv.pdf",
  about: "Hi, I'm Krishna Gopal Patra, a highly motivated BCA student specializing in Computer Application, graduating in 2025. Eager to apply foundational programming knowledge and problem-solving skills gained through academic projects and coursework. I am keen to contribute to innovative projects and learn from experienced professionals. Actively seeking opportunities to develop my technical expertise and collaborate on impactful initiatives within the tech industry.",
  education: [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institute: "Kharagpur College under Vidyasagar University",
      year: "2022 - 2025",
      details: "Specializing in Computer Applications. Gained foundational knowledge in programming, database management, and web development."
    },
    {
      degree: "Higher Secondary",
      institute: "Goaltore High School",
      year: "2022",
      details: "Completed higher secondary education with Science stream."
    }
  ],
  skills: ["HTML", "CSS", "JavaScript","SQL","Java","C","Python","PHP"],
  projects: [
    {
      title: "KK Computer Science Solution",
      description: "Developed a responsive web platform where students can upload computer science-related questions and get expert solutions from educators. Built using HTML, CSS, PHP, MySQL, and JavaScript for interactivity.",
      link: "#"
    },
    {
      title: "Number Guess Game",
      description: "Java Swing program for guessing numbers. User has 10 attempts to guess a number between 1-100. Shows feedback and remaining attempts.",
      link: "https://github.com/KgP9832?tab=repositories"
    },
    {
      title: "ATM Interface",
      description: "Simple ATM simulation using console input. Allows viewing transaction history, withdrawing, depositing, and checking balance with timestamped transactions.",
      link: "https://github.com/KgP9832?tab=repositories"
    }
  ],
  contact: {
    email: "krishnagopalpatra3108@gmail.com",
    phone: "+91 9832457469"
  }
};

// ===== Navbar =====
document.getElementById("logo").textContent = portfolioData.logo;

const navLinks = ["About", "Education", "Skills", "Projects", "Contact"];
const navList = document.getElementById("nav-links");
navLinks.forEach(link => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="#${link.toLowerCase()}">${link}</a>`;
  navList.appendChild(li);
});

// ===== Hero Section =====
const hero = document.getElementById("hero");
hero.innerHTML = `
  <div class="profile-pic"><img src="${portfolioData.profilePic}" alt="Profile Picture"></div>
  <h1>Hello, I'm ${portfolioData.name}</h1>
  <p>${portfolioData.tagline}</p>
  <a href="${portfolioData.cv}" download>
    <button>Download CV</button>
  </a>
`;

// ===== About Section =====
document.getElementById("about").innerHTML = `
  <h2>About Me</h2>
  <div class="about-card">${portfolioData.about}</div>
`;

// ===== Education Section =====
const educationSection = document.getElementById("education");
educationSection.innerHTML = `<h2>Education</h2><div id="education-container"></div>`;
portfolioData.education.forEach(edu => {
  const div = document.createElement("div");
  div.classList.add("education-card");
  div.innerHTML = `
    <h3>${edu.degree}</h3>
    <p><strong>Institute:</strong> ${edu.institute}</p>
    <p><strong>Year:</strong> ${edu.year}</p>
    <p>${edu.details}</p>
  `;
  document.getElementById("education-container").appendChild(div);
});

// ===== Skills Section =====
const skillsSection = document.getElementById("skills");
skillsSection.innerHTML = `<h2>Skills</h2><ul id="skills-list"></ul>`;
portfolioData.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  document.getElementById("skills-list").appendChild(li);
});

// ===== Projects Section =====
const projectSection = document.getElementById("projects");
projectSection.innerHTML = `<h2>Projects</h2><div class="project-container" id="project-container"></div>`;
portfolioData.projects.forEach(project => {
  const div = document.createElement("div");
  div.classList.add("project-card");
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  document.getElementById("project-container").appendChild(div);
});

// ===== Contact Section =====
document.getElementById("contact").innerHTML = `
  <h2>Contact</h2>
  <div class="contact-card">
    <p>Email: <a href="mailto:${portfolioData.contact.email}" style="color:#ffffff;">${portfolioData.contact.email}</a></p>
    <p>Phone: ${portfolioData.contact.phone}</p>
    <form id="contact-form">
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
`;

// ===== Footer =====
document.getElementById("footer").innerHTML = `
  <p>© ${new Date().getFullYear()} ${portfolioData.name} | Built with ❤️</p>
`;

// ===== Contact Form Submission =====
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent Successfully!");
});

// ===== Scroll Animation for Floating Cards =====
function scrollFadeIn() {
  const about = document.querySelector(".about-card");
  const education = document.querySelectorAll(".education-card");
  const contact = document.querySelector(".contact-card");

  const triggerBottom = window.innerHeight * 0.85;

  // About Card
  if(about.getBoundingClientRect().top < triggerBottom){
    about.classList.add("active");
  }

  // Education Cards
  education.forEach(card => {
    if(card.getBoundingClientRect().top < triggerBottom){
      card.classList.add("active");
    }
  });

  // Contact Card
  if(contact.getBoundingClientRect().top < triggerBottom){
    contact.classList.add("active");
  }
}

window.addEventListener("scroll", scrollFadeIn);
window.addEventListener("load", scrollFadeIn);
