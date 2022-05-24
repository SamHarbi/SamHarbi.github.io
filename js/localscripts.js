anime({
    targets: '.title',
    translateY: 25,
    duration: 400,
    });

anime({
    targets: '.navbar',
    translateY: 25,
    opacity: '100%',
    duration: 1000,
    });

var initTopScroll = anime({
    targets: '.card',
    translateY: 25,
    opacity: '10%',
    duration: 1000,
    });

var fadeNav = anime({
    targets: '.lockednavbar',
    translateY: 25,
    opacity: '100%',
    duration: 1000,
    autoplay: false,
    });

var scrollEffect = anime({
    targets: '.card',
    opacity: '100%',
    autoplay: false,
    duration: 3000,
    translateY: 100,
    
});

var scrollDownIcon = anime({
    targets: '#scroll',
    translateY: 200,
    loop: true,
    easing: 'easeInOutSine'
})


window.onscroll = function(e) {
    scrollEffect.seek(window.scrollY);
    fadeNav.seek(window.scrollY);

    if(window.scrollY == 0)
    {
        scrollEffect.seek(25);
    }
}

/*
//Setup Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderer and attach to page HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
document.getElementById("model").appendChild( renderer.domElement );

//Create 3 cubes for walls
const cube1 = new THREE.BoxGeometry(100, 1, 1);
const cube2 = new THREE.BoxGeometry(100, 1, 1);
const cube3 = new THREE.BoxGeometry(1, 1, 100);

//const material = new THREE.MeshBasicMaterial( { color: 283044 } );
const loader = new THREE.CubeTextureLoader();
loader.setPath( 'textures/' );

const textureCube = loader.load( [
	'wall1.png', 'wall1.png',
	'wall1.png', 'wall1.png',
	'wall1.png', 'wall1.png'
] );

textureCube.repeat.x = 8;
textureCube.repeat.y = 8;

const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

const wall1 = new THREE.Mesh( cube1, material );
const wall2 = new THREE.Mesh( cube2, material );
const wall3 = new THREE.Mesh( cube3, material );
const wall4 = new THREE.Mesh( cube3, material );

const map = new THREE.TextureLoader().load( 'textures/target.png' );
const pointer = new THREE.SpriteMaterial( { map: map } );

const sprite = new THREE.Sprite( pointer );
//scene.add( sprite );
//sprite.scale.set(0.02, 0.02, 0.02);

scene.add( wall1 );
scene.add( wall2 );
scene.add( wall3 );
scene.add( wall4 );

wall2.position.z = 6;

//sprite.position.z = 4.8;

wall3.rotation.x = 0;
wall3.position.x = 10;
wall4.rotation.x = 0;
wall4.position.x = -10;

camera.position.z = 5;

var xRotation = -1;
var zRotation = 1;

function animate() {
	requestAnimationFrame( animate );

	camera.rotation.y += 0.01;

    //sprite.position.x += 0.001 * xRotation;
    //sprite.position.z += 0.001 * zRotation;

	renderer.render( scene, camera );
};

animate();*/