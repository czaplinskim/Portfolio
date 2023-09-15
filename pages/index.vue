<template>
    <section class="main-section">
        <hello-section/>
        <List :list="webProjectsInfo"/>
        <List :list="stackInfo"/>
        <List :list="stackInLineInfo"/>
        <List :list="softwareInfo"/>
        <List id="contact" :list="contactInfo"/>
    </section>
    <div class="custom-cursor"></div>
</template>

<script setup>
import HelloSection from '../components/HelloSection.vue';



onMounted(() => { 
   
    document.addEventListener('mousemove', function(e) {
  const customCursor = document.querySelector('.custom-cursor');
  const links = document.querySelectorAll('a, #switcherRange');

  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
  
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      customCursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
      customCursor.classList.remove('hover');
    });
  })
});

})



const webProjectsInfo = {
    listName: "some web projects",
    listType: "Description",
    items: [
        {
            isLink: false,
            linkUrl: null,
            name: "HIPPIEZA Mielno Festival 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            isLink: false,
            linkUrl: null,
            name: "PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            isLink: false,
            linkUrl: null,
            name: "BNGTool",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            isLink: false,
            linkUrl: null,
            name: "PRZEJAZDY",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            isLink: false,
            linkUrl: null,
            name: "EVENT REGISTRATION SYSTEM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
}

const softwareInfo = {
    listName: "other software",
    listType: "Horizontal",
    items: [
        {
            isLink: false,
            linkUrl: null,
            name: "Figma",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Adobe Photoshop",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Adobe Illustrator",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Adobe InDesign",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Power BI",
        },


    ]
}

const stackInfo = {
    listName: "stack",
    listType: "Horizontal",
    items: [
        {
            isLink: false,
            linkUrl: null,
            name: "Vue JS",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "JavaScript",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "HTML",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "CSS/SCSS",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Nuxt JS",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "TypeScript",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "GSAP",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Bootstrap",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Wordpress",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Node.js",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "GitHub",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "FireBase",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Strapi",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "PHP (basics)",
        },
        {
            isLink: false,
            linkUrl: null,
            name: "Vuelidate",
        },


    ]
}

const stackInLineInfo = {
    listName: "next in line",
    listType: "Horizontal",
    items: [
        {
            isLink: false,
            linkUrl: null,
            name: "Express JS",
        },
        {
            isLink: false,
            linkUrl: null,
            name: 'MySQL',
        },
        {
            isLink: false,
            linkUrl: null,
            name: 'Jira',
        } ,
        {
            isLink: false,
            linkUrl: null,
            name: 'Scrum',
        }
    
    ]
}

const contactInfo = {
    listName: "contact",
    listType: "Regular",
    items: [
        {
            isLink: true,
            linkUrl: "czaplinskim@icloud.com",
            name: "czaplinskim@icloud.com",
        },
        {
            isLink: true,
            linkUrl: "+48791150450",
            name: "+48791150450",
        },
        {
            isLink: true,
            linkUrl: "LinkedIn",
            name: "LinkedIn",
        },
        {
            isLink: true,
            linkUrl: "GitHub",
            name: "GitHub",
        }

    ]
}
 
</script>

<style lang="scss" >

@import "../assets/scss/main.scss";

.main-section {
    padding: 370px $mobile-global-padding 0;
}

@media only screen and (min-width: 768px) {

    .main-section {
    padding: 370px $global-padding 0;
}

}



</style>