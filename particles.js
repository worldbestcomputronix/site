// ===== particles.js =====
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Multiple particle clusters
const clusters = [];
const clusterCount = 5; 

for (let c = 0; c < clusterCount; c++) {
  const particleCount = 1000;
  const positions = [];
  const radius = 5 + c*3;

  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions.push(x, y, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0x39ff14, size: 0.05 });
  const points = new THREE.Points(geometry, material);

  scene.add(points);
  clusters.push({ points, speed: 0.001 + Math.random()*0.003 });
}

// Mouse interaction
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  clusters.forEach(cluster => {
    cluster.points.rotation.y += cluster.speed + mouseX * 0.01;
    cluster.points.rotation.x += cluster.speed + mouseY * 0.01;
  });

  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
