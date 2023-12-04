"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useGraph, useLoader } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Mesh } from "three";

function MeshComponent() {
  // 获取模型
  const fileUrl = "/donat.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const { nodes } = gltf;
  console.log("gltf", gltf);
  const keys = Object.keys(nodes);
  // 旋转动画
  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //   });
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a;
  });

  return (
    <group>
      {keys.map((key) => (
        <mesh
          key={key}
          ref={mesh}
          geometry={nodes[key]?.geometry}
          material={nodes[key]?.material}
        />
      ))}
      {/* <mesh
        ref={mesh}
        geometry={nodes.donat?.geometry}
        material={nodes.donat?.material}
      >
        <primitive object={gltf.scene} />
        <boxBufferGeometry />
        <meshStandardMaterial />
      </mesh> */}
    </group>
  );
}
const MainGroup = () => {
  const meshs = [
    "Scene",
    "Plane",
    // "icing",
    "Sphere",
    "Sphere001",
    "Sphere002",
    "Sphere003",
  ];
  const fileUrl = "/donat.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const myMesh = React.useRef();
  console.log(Object.keys(gltf.nodes));
  const { nodes } = gltf;
  //   const { nodes, materials } = useGraph(gltf.scene);
  console.log(gltf);
  useFrame(({ clock }) => {
    // myMesh.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <group>
      {/* <mesh
        ref={myMesh}
        geometry={nodes["icing"]?.geometry}
        material={nodes["icing"]?.material}
      ></mesh> */}
      <mesh
      // ref={myMesh}
      // geometry={nodes["Plane"]?.geometry}
      // material={nodes["Plane"]?.material}
      >
        <primitive object={gltf.scene} />
      </mesh>
      {/* {meshs.map((key) => (
        <mesh
          key={key}
          //   ref={mesh}
            geometry={nodes[key]?.geometry}
            material={nodes[key]?.material}
        >
          <primitive object={nodes[key]} />
        </mesh>
      ))} */}
    </group>
  );
};

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* 画布 */}
      <Canvas className="h-2xl w-2xl">
        {/* 交互控制 */}
        <OrbitControls />
        {/* 灯光 */}
        <ambientLight intensity={0.1} />
        <directionalLight color="pink" position={[0, 0, 5]} />

        <pointLight position={[10, 10, 10]} />

        <MainGroup />
      </Canvas>
    </div>
  );
}
