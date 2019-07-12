var App = {
  elements: document.querySelectorAll("nav.navbar > div.collapse.navbar-collapse > ul > li"),
  state: {
    activeElement: null,
    isInside: false
  },
  InitPopper: function(element) {
    var referenceElement = element.querySelector("a.dropdown-toggle");
    var dropdown = element.querySelector("div.dropdown-menu");
    var dropdownCloseBtn = element.querySelector("div.row.mx-0.text-center");

    var popper = new Popper(referenceElement, dropdown, {
        placement: 'bottom'
    });
    
    referenceElement.addEventListener("focusout", function(){ 
        console.log(this.state.isInside);
        if (!this.state.isInside)
          this.closeDropdown(dropdown);
    }.bind(this))
    
    referenceElement.addEventListener("click", function() {
      var dropdownDisplay = dropdown.style.display;
      var activeElement = this.state.activeElement;
      
      if (activeElement !== null) {
          activeElement.style.display = "none";
      }
      
      dropdown.style.display = dropdownDisplay === "none" || dropdownDisplay === "" 
        ? "block" 
        : "none";
      
      this.state.activeElement = dropdown;
      
      this.state.activeElement.addEventListener("mouseenter", function() {
        this.state.isInside = true;
      }.bind(this))
      
      this.state.activeElement.addEventListener("mouseleave", function() {
        this.state.isInside = false;
        referenceElement.focus();
      }.bind(this))

      popper.update();      

    }.bind(this)); 
    
    
    if (!!dropdownCloseBtn) {
      dropdownCloseBtn.addEventListener("click", function(){ 
        this.closeDropdown(dropdown) 
      }.bind(this))
    }
    
  },
  closeDropdown: function(dropdown) {
    dropdown.style.display = "none";
    this.state.activeElement = null;
  },
  init: function() {
    for(var i = 0; i < this.elements.length; i++) {
      var element = this.elements[i];
      this.InitPopper(element);
    }
  }
} 

App.init();
