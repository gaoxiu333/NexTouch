"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Mesh } from "three";

function MeshComponent() {
  // 获取模型
  const fileUrl = "/book/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useGLTF(fileUrl);
  console.log(gltf);
  // 旋转动画
  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //   });
  const mationns = useAnimations(gltf.animations);
  useEffect(() => {
    console.log("actions", mationns);
    // actions?.jump.paly()
    mationns.actions["The Life"]?.play();
  });
  return (
    <mesh ref={mationns?.ref}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* 画布 */}
      <Canvas className="h-2xl w-2xl">
        {/* 交互控制 */}
        <OrbitControls />
        {/* 灯光 */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
