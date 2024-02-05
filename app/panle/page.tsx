"use client";
import React, { useRef, useEffect } from "react";
import * as Three from "three";

const Bracelet = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 创建场景
    const scene = new Three.Scene();
    // 设置背景为黑色
    scene.background = new Three.Color(0x000000);

    // 创建相机
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 创建渲染器
    const renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 创建环形几何体
    const geometry = new Three.TorusGeometry(1, 0.1, 16, 100);
    const material = new Three.MeshBasicMaterial({ color: 0xffffff }); // 设置颜色为白色
    const torus = new Three.Mesh(geometry, material);

    // 将环添加到场景中
    scene.add(torus);
    // 初始化相机位置
    const initialCameraPosition = { x: 0, y: 0, z: 100 }; // 远处的位置
    camera.position.set(
      initialCameraPosition.x,
      initialCameraPosition.y,
      initialCameraPosition.z
    );
    const targetCameraPosition = { x: 0, y: 0, z: 2 }; // 初始位置

    // 动画循环
    let animationProgress = 0; // 动画进度
    const animationDuration = 100; // 动画持续时间（帧数）
    let aidx;

    const animate = () => {
      aidx = requestAnimationFrame(animate);
      // 计算相机位置
      camera.position.set(0, 0, camera.position.z - 0.6);

      // 更新动画进度

      // 如果动画完成，停止动画
      if (camera.position.z <= 2) {
        cancelAnimationFrame(aidx);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 调整窗口大小时更新渲染器尺寸
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Bracelet;
