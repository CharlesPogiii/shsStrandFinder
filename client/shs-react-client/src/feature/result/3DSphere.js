import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import $ from "jquery";

function draw3DSphere() {
  $(() => {
    // RENDERER
    const canvas = $("#3DWebGL");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas[0] });
    renderer.setSize(canvas.width(), canvas.height());
    renderer.setClearColor(0xffffff);

    // SCENE
    const scene = new THREE.Scene();

    // CREATE SHAPES
    const geometry = new THREE.SphereGeometry(3, 5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xff83 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.width() / canvas.height()
    );
    camera.position.z = 10;
    scene.add(camera);

    // RENDERING
    renderer.render(scene, camera);

    // RESIZING
    window.addEventListener("resize", () => {
      const width = $("#3DWebGL-cont").width();
      const height = $("#3DWebGL").height();

      // UPDATE
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    // RENDER PER FRAME
    const loop = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };

    loop();
  });
}

export { draw3DSphere };
