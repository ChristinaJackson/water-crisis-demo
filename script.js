import * as ScrollSnap from '/node_modules/scroll-snap/dist/index.js'
// import ScrollSnap from 'scroll-snap'
// import * as ScrollSnap from '/node_modules/scroll-snap/dist/esm/index.js'
// import {ScrollSnap} from '/node_modules/scroll-snap/dist/esm/index.js'


// import * as easeInOutQuad from '/node_modules/scroll-snap/dist/index.js'


const snapConfig = {
  snapDestinationX: '0%',
  snapDestinationY: '90%',
  timeout: 100,
  duration: 300,
  easing: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
},
}

function callback() {
  console.log('element snapped')
}

const element = document.getElementsByTagName('SECTION')
console.log(
  ScrollSnap)
const snapObject = ScrollSnap(element, snapConfig)
// 
// snapObject.bind(callback)

// unbind the element
// snapObject.unbind();