
//Setup Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color( 0x283044);


//Renderer and attach to page HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight/2, false );
document.getElementById("model").appendChild( renderer.domElement );

let material = new THREE.MeshLambertMaterial( { color: 0xf18f01 } );

const sunLight = new THREE.DirectionalLight( 'rgb(255,255,255)', 1 );
scene.add( sunLight );
sunLight.position.set( 5, 10, 20 );

let x_pos = -128;
let z_pos = 10;
let y_pos = 0;

const CubeMap = []
const CubeObjectMap = []
for(let i = 0; i < 48; i++)
{
    CubeMap[i] = new THREE.BoxGeometry(20, 20, 20);
    CubeObjectMap[i] = new THREE.Mesh( CubeMap[i], material );
	scene.add( CubeObjectMap[i] );

	//Place Straight line of cubes on X axis
	CubeObjectMap[i].position.x = x_pos;
	CubeObjectMap[i].position.z = z_pos;
	CubeObjectMap[i].position.y = Math.random() * 30;
	x_pos = x_pos + 32;

	if(x_pos > 256)
	{
		x_pos = -128;
		z_pos -= 35;
		//material = new THREE.MeshLambertMaterial( { color: 0xf16f01 } );
	}
}

camera.position.z = 50;
camera.position.x = 40;
camera.position.y = 10;

camMod = 1;

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