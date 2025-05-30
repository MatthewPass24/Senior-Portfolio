AOS.init({
    once: true
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
    