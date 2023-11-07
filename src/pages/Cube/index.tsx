import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as style from './style';
import { PINK } from '@/constants';
const CubePage: React.FC = () => {
  useEffect(() => {
    const renderer = initCube();
    return () => {
      const element = document.getElementById('cube');
      if (element) {
        element.removeChild(renderer?.domElement);
      }
    };
  });
  const initCube = () => {
    //创建场景
    const scene = new THREE.Scene();
    //创建透视相机
    const camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth - 300) / (window.innerHeight - 100),
      0.1,
      1000,
    );
    camera.position.z = 3;

    //创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 300, window.innerHeight - 100);

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
  return <style.Wrapper id="cube"></style.Wrapper>;
};

export default CubePage;
