<template>
    <div class="switchers-container el-with-border">
        <div class="theme-switcher-container">
          
          <span class="theme-switcher__before"></span>
          <span class="theme-switcher__after"></span> 

          <div class="theme-switcher-inner-container">

            <span class="theme-switcher__thumb"></span> 
            <input @input="testF()" v-model="classNumber" id="switcherRange" class="theme-switcher" type="range" min="0" max="3" step="0.01">
           
            
          </div>
          
       

       
            
          </div>

        <div class="lang-switcher-container el-with-border">
            <NuxtLink class="lang-switcher" to="/">PL</NuxtLink>
        </div>
    </div>
</template>

<script setup>

import mix from 'mix-css-color'
import { ref } from 'vue'
const { $gsap } = useNuxtApp()

const white = '#FFF'
const beige = '#FFF9E1'
const green = '#33764C'
const red  = '#BC3731'

const black = '#121212'
const darkBlue = '#29509D'
const yellow  = '#FFD600'
const neonGreen = '#2DE572'

const grey = '#DFDCCA'

const classNumber = ref(0)

const testF = () => {


  const roundedValue = (classNumber.value - Math.floor(classNumber.value)) * 100

  const selectedValue = parseFloat(classNumber.value);
  const minValue = parseFloat(switcherRange.min);
  const maxValue = parseFloat(switcherRange.max);

const percentOfChoosenRange = ((selectedValue - minValue) / (maxValue - minValue)) * 100;

  

  let backgroundColor
  let headerColor 
  let navbarBorderColor
  let paragraphColor
  let divederColor 

  if(classNumber.value < 1 ) {
    
    navbarBorderColor = mix(darkBlue, black, roundedValue)
    backgroundColor = mix(beige, white, roundedValue)
    headerColor = mix(darkBlue, black, roundedValue)
    
    paragraphColor = mix(black, black, roundedValue)

    divederColor = mix(darkBlue, black, roundedValue)

  } else if (classNumber.value >= 1 && classNumber.value < 2) {

    navbarBorderColor = mix(white, darkBlue, roundedValue)

     backgroundColor = mix(green, beige, roundedValue)
     headerColor = mix(yellow, darkBlue, roundedValue)

     paragraphColor = mix(white, black, roundedValue)

     divederColor = mix(yellow, darkBlue, roundedValue)

  } else if (classNumber.value >= 2 && classNumber.value < 3) {
    
    navbarBorderColor = mix(grey, white, roundedValue)
     backgroundColor = mix(red, green, roundedValue)
     headerColor = mix(neonGreen, yellow, roundedValue)

     paragraphColor = mix(beige, white, roundedValue)

     divederColor = mix(neonGreen, yellow, roundedValue)
 

  } else if (classNumber.value == 3) {

    navbarBorderColor = grey

    backgroundColor = red
    headerColor = neonGreen

    paragraphColor = beige

    divederColor = neonGreen

  }

           


  

  const body = document.body
  const headers = document.querySelectorAll('h1, h2, h3, h4')
  const navbar = document.querySelector(".navbar")
  const navbarBorders = document.querySelectorAll('.el-with-border')

  const cursor = document.querySelector(".custom-cursor")

  const textElements = document.querySelectorAll('p, dt, dd, a, li, ul')

  const divederElements = document.querySelectorAll('.list__item')

  const themeSwitcher = document.querySelectorAll(".theme-switcher, .theme-switcher__before, .theme-switcher__after")

  const switcherThumb = document.querySelector('.theme-switcher__thumb')

  const magicNumber = (percentOfChoosenRange/32) * 10
  switcherThumb.style.left = `calc(${percentOfChoosenRange}% - ${magicNumber}px )`

  switcherThumb.style.backgroundColor = backgroundColor.hex
  switcherThumb.style.borderColor = navbarBorderColor.hex

  themeSwitcher.forEach(ts => {
    ts.style.backgroundColor = navbarBorderColor.hex
  })

  textElements.forEach(t => {
    t.style.color = paragraphColor.hex
  })

  divederElements.forEach(d => {
    d.style.borderColor = divederColor.hex
  })


  body.style.background = backgroundColor.hex;
  navbar.style.background = backgroundColor.hex

  navbarBorders.forEach(b => {

    b.style.borderColor = navbarBorderColor.hex;
  })

  headers.forEach(h => {

    h.style.color = headerColor.hex
    
  });

  cursor.style.backgroundColor = navbarBorderColor.hex

            
}

</script>

<style lang="scss" scoped>

.switchers-container {
    display: flex;
    flex-wrap: nowrap;
    height: 60px;
    border-bottom: 2px solid;
}

.theme-switcher-container {
    flex: 1;

}

.lang-switcher-container {
    flex: 0 0 60px; 
    border-left: 2px solid;

}

.theme-switcher-inner-container {
    display: flex;
    width: 80%;
    align-items: center;
    position: absolute;
}

.lang-switcher-container,
.theme-switcher-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.lang-switcher {
    font-family: 'Signifier';
    font-size: 0.6rem;
    color: black;
    text-decoration: none;;
}

.theme-switcher::-webkit-slider-runnable-track,
.theme-switcher::-moz-range-track {

    -webkit-appearance: none;
  appearance: none;

}

.theme-switcher {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px; 
  background-color: black; 
  position: absolute;
  cursor: none;


}


.theme-switcher__before,
.theme-switcher__after {
  content: "";
    position: absolute;
    width: 10%;
    height: 2px;
    background-color: black;
}

.theme-switcher__before {
  left: 0; 
}

.theme-switcher__after {
  right: 0%; 
}

.theme-switcher__thumb {
  width: 30px; 
  height: 30px; 
  background-color: white;
  border: 2px solid black; 
  border-radius: 50%; 
  position: absolute;

  pointer-events: none;
  z-index: 1;

}
.theme-switcher::-webkit-slider-thumb
 {
  -webkit-appearance: none;
  appearance: none;
  width: 30px; 
  height: 30px; 
  background-color: black;
  border: 2px solid black; 
  border-radius: 50%; 
  cursor: none;
  opacity: 0%;


}

.theme-switcher::-moz-range-thumb
 {
  -webkit-appearance: none;
  appearance: none;
  width: 30px; 
  height: 30px; 
  background-color: white;
  border: 2px solid black; 
  border-radius: 50%; 
  cursor: none;
  opacity: 0%;

}



</style>