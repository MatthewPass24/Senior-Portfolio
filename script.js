document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-button');
  const typedTextElement = document.querySelector('.typed-text');

  // Text to type
  const text = "Welcome to my portfolio!";
  let index = 0;

  // Clear existing text and start typing effect
  typedTextElement.textContent = '';

  function type() {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // typing speed (ms)
    }
  }
  type();

  // Fade in buttons with delay after typing
  buttons.forEach((button, i) => {
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
      button.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    }, 3500 + i * 200); // starts after typing finishes (~3.5s)
  });

});
//Gallery with vue
const app = Vue.createApp({
data() {
  return {
    selectedCategory: 'All',
    categories: ['All', 'Junior Year', 'Senior Year', 'Personal'],
    websitesData: {},
    modalVisible: false,         // <--- important
    activeImage: {}              // <--- important
  };
},

  computed: {
    filteredImages() {
      if (!this.websitesData || Object.keys(this.websitesData).length === 0) {
        return [];
      }
      return this.websitesData[this.selectedCategory] || [];
    }
  },
  methods: {
    async fetchWebsitesData() {
      try {
        const response = await fetch('gallery.json');
        this.websitesData = await response.json();
      } catch (error) {
        console.error('Error loading website data:', error);
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    openModal(image) {
      this.activeImage = image;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    }
  },
  created() {
    this.fetchWebsitesData();
  }
});

app.mount('#vue_app');
//lenis code
