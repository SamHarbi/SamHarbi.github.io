import * as THREE from "./Three/three.module.js";
import { GLTFLoader } from "./Three/GLTFLoader.js";

const loader = new GLTFLoader();

let buildingTypes = [3];
let buildings = [36]; 
for(let i=0; i<36; i++)
{
	buildings[i] = new THREE.Object3D();
	if(i<3)
	{
		buildingTypes[i] = new THREE.Object3D();
	}
}

loader.load( '/Models/Kenny/skyscraperA.glb', function ( gltf ) {

	gltf.scene.scale.multiplyScalar(70);
	gltf.scene.scale.y = 180;
	for(let i=0; i<5; i++)
	{
		buildings[i].add(gltf.scene.clone());
	}
	
}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( '/Models/Kenny/skyscraperB.glb', function ( gltf ) {

	gltf.scene.scale.multiplyScalar(70);
	gltf.scene.scale.y = 180;
	buildings[10] = new THREE.Object3D();
	buildings[10].add(gltf.scene.clone());

	for(let i=5; i<10; i++)
	{
		buildings[i].add(gltf.scene.clone());
	}
	
	
}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( '/Models/Kenny/skyscraperE.glb', function ( gltf ) {

	gltf.scene.scale.multiplyScalar(70);
	gltf.scene.scale.y = 180;
	for(let i=10; i<15; i++)
	{
		buildings[i].add(gltf.scene.clone());
	}
	
}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( '/Models/Kenny/skyscraperF.glb', function ( gltf ) {

	gltf.scene.scale.multiplyScalar(70);
	gltf.scene.scale.y = 180;
	for(let i=15; i<20; i++)
	{
		buildings[i].add(gltf.scene.clone());
	}
	
}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( '/Models/Kenny/large_buildingG.glb', function ( gltf ) {

	gltf.scene.scale.multiplyScalar(70);
	gltf.scene.scale.y = 180;
	for(let i=20; i<25; i++)
	{
		buildings[i].add(gltf.scene.clone());
	}
	
}, undefined, function ( error ) {

	console.error( error );

} );



//Setup Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 30000 );
scene.background = new THREE.Color( 0x283044);

//Renderer and attach to page HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight/2, false );
document.getElementById("model").appendChild( renderer.domElement );

let material = new THREE.MeshLambertMaterial( { color: 0xf18f01 } );

const sunLight1 = new THREE.DirectionalLight( 'rgb(255,255,255)', 2 );
const sunLight2 = new THREE.DirectionalLight( 'rgb(255,255,255)', 2 );
scene.add( sunLight1 );
sunLight1.position.set( 5, 20, 20);

scene.add( sunLight2 );
sunLight2.position.set( -5, -2, -2);

const geometry = new THREE.BoxGeometry( 29000, 15000, 6000 );
const uvTexture = new THREE.TextureLoader().load("./Models/Skybox/clouds1_south.bmp");

const mesh = new THREE.MeshStandardMaterial({
	map: uvTexture,
});

const skybox = new THREE.Mesh(geometry, mesh);
skybox.material.side = THREE.BackSide;
scene.add( skybox );



let x_pos = -512;
let z_pos = 10;
let y_pos = -600;

const CubeMap = [];
const CubeObjectMap = [];
for(let i = 0; i < 36; i++)
{
    let buildingID = 1;
	
	buildings[i].position.x = x_pos + Math.random() * 60;
	buildings[i].position.z = z_pos + Math.random() * 60;
	buildings[i].position.y = y_pos - Math.random() * 300;
	scene.add(buildings[i]);
	x_pos = x_pos + 128;

	if(x_pos > 512)
	{
		x_pos = -512;
		z_pos -= 128;
		y_pos += 64;
		//material = new THREE.MeshLambertMaterial( { color: 0xf16f01 } );
	}
}
	

camera.position.z = 290;
camera.position.y = -100;

let camMod = 1;

function animate() {
	requestAnimationFrame( animate );

	camera.rotation.y += 0.001 * camMod;
	if(camera.rotation.y > 0.2 || camera.rotation.y < -0.2)
	{
		camMod = camMod * -1;
	}

	

	renderer.render( scene, camera );
};

animate();




