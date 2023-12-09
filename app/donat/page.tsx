"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Mesh, TextureLoader } from "three";

function MeshComponent() {
  // 获取模型
  const texture = useLoader(TextureLoader, "/donat1/donat base_001.png");

  const fileUrl = "/donat1/donat 2.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useGLTF(fileUrl);
  const { nodes, animations, materials } = gltf;
  const ani = useAnimations(animations, nodes["donat"]);
  console.log(gltf);
  console.log("animations__", animations);
  useEffect(() => {
    ani.actions["donatAction.001"]?.play();
  });
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        console.log("child", child.isMesh, child);
        if (child.isMesh) {
          console.log(
            "child.material.isGLTFSpecularGlossinessMaterial",
            child.material.isGLTFSpecularGlossinessMaterial
          );
        }
      });
    }
  }, [gltf]);
  return (
    <>
      <pointLight {...nodes.点光} intensity={200} />
      <pointLight {...nodes.点光001} intensity={20} />
      <pointLight {...nodes.点光002} intensity={1} />
      <group>
        <mesh
          ref={mesh}
          scale={50}
          geometry={nodes.donat.geometry}
          material={materials["材质.001"]}
          material-roughness={1}
          // material-metalness={0.5}
          material-map={texture}
        ></mesh>
        <mesh scale={50}>
          <primitive object={nodes.icing} />
        </mesh>
        {/* <mesh scale={50}>
          <primitive object={gltf.scene} />
        </mesh> */}
        {/* <mesh scale={50}>
          <primitive object={nodes.donat} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.sprinkle} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.Scene} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.sprinkle001} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.sprinkle002} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.sprinkle003} />
        </mesh>
        <mesh scale={50}>
          <primitive object={nodes.sprinkle004} />
        </mesh> */}
      </group>
    </>
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
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <MeshComponent />
      </Canvas>
    </div>
  );
}
