document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");

          projects.forEach(project => {
              if (filterValue === "all" || project.classList.contains(filterValue)) {
                  project.style.display = "block";
              } else {
                  project.style.display = "none";
              }
          });
      });
  });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});
