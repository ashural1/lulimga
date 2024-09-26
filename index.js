new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "images/couple.jpg",
            img2: "images/couple2.jpg",
            img3: "images/couple3.jpg",
            title: "ASALIM",
            isOpen: false,
          },
          {
            img1: "images/cute.jpg",
            img2: "images/cute2.jpg",
            img3: "images/cute3.jpg",
            title: "LULIM",
            isOpen: false,
          },
          {
            img1: "images/baby2.jpg",
            img2: "images/baby.jpg",
            img3: "images/baby3.jpg",
            title: "XAYOTIM",
            isOpen: false,
          },
          {
            img1: "images/sleep.jpg",
            img2: "images/sleep2.jpg",
            img3: "images/sleep3.jpg",
            title: "SEVGLIM",
            isOpen: false,
          },
          {
            img1: "images/HERO1.jpg",
            img2: "images/Hero2.jpg",
            img3: "images/hero3.jpg",
            title: "SHRINIM",
            isOpen: false,
          },
     
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });
  