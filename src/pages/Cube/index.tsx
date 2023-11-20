import React, { useEffect } from 'react';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { Wrapper, Card } from './style';
import { PINK } from '@/constants';
const ThreeDemoPage: React.FC = () => {
  const initCube = () => {
    //创建场景
    const scene = new THREE.Scene();

    //创建透视相机
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3;

    //创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);

    //将渲染的元素添加到页面中
    const element = document.getElementById('cube');
    if (element) {
      element.appendChild(renderer.domElement);
    }

    //创建场景中的动画
    //图形
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //材质
    const material = new THREE.MeshBasicMaterial({ color: PINK });
    //网格
    const cubeMesh = new THREE.Mesh(geometry, material);
    scene.add(cubeMesh);

    //设置旋转动画
    function animate() {
      requestAnimationFrame(animate);

      cubeMesh.rotation.x += 0.05;
      cubeMesh.rotation.y += 0.05;
      renderer.render(scene, camera);
    }

    animate();
    return renderer;
  };

  const initLine = () => {
    //创建场景
    const scene = new THREE.Scene();

    //创建透视相机
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    //创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);

    //将渲染的元素添加到页面中
    const element = document.getElementById('line');
    if (element) {
      element.appendChild(renderer.domElement);
    }

    //创建场景中的动画
    //图形
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //材质
    const material = new THREE.MeshBasicMaterial({ color: PINK });
    //网格
    const cubeMesh = new THREE.Mesh(geometry, material);
    scene.add(cubeMesh);
    renderer.render(scene, camera);
    return renderer;
  };

  const removeElement = (renderer: any) => {
    const element = document.getElementById('cube');
    if (element) {
      element.removeChild(renderer?.domElement);
    }
  };

  useEffect(() => {
    console.log('是否支持WebGL', WebGL.isWebGLAvailable());
    const cubeRenderer = initCube();
    const lineRenderer = initLine();
    return () => {
      removeElement(cubeRenderer);
      removeElement(lineRenderer);
    };
  });

  return (
    <Wrapper>
      <Card id="cube"></Card>
      <Card id="line"></Card>
    </Wrapper>
  );
};

export default ThreeDemoPage;
