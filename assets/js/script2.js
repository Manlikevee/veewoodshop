$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
          autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1300: {
            items: 4
          },
          1600: {
            items: 5
          }
        }
      })
  
  
  
  const tabLinks = document.querySelectorAll(".tab-links li a");
  const tabContent = document.querySelectorAll(".tab-content .tab");
  
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Remove the 'active' class from all tab links and tabs
      tabLinks.forEach(function (tabLink) {
        tabLink.parentElement.classList.remove("active");
      });
      tabContent.forEach(function (tab) {
        tab.classList.remove("active");
      });
  
      // Add the 'active' class to the clicked tab link and tab
      this.parentElement.classList.add("active");
      const tab = document.querySelector(this.getAttribute("href"));
      tab.classList.add("active");
    });
  });
  
  // Set the first tab to be active by default
  tabLinks[0].click();
  
  
  