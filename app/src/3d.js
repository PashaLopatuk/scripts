const THREE = require('three')

/* 
    тут нифіга не трогай, ти не шариш
*/

console.log('loading 3d.js\n...')

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 )
let renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry(50, 50, 50);
let material = new THREE.MeshBasicMaterial({ color : 0x00E16941 });
let cube = new THREE.Mesh( geometry, material );

scene.add( cube );
camera.position.z = 5;