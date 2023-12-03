# 交互与体验

TODO

技术测试：
- 简单动画
  - 过渡效果
  - 转场动画
- threejs
- p5js

## threejs

[doc](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models)

## 3d 模型格式

- `GLB`,`GLTF`,`COLLADA`, `OBJ`,`FBX`

**GLB (GLTF Binary):**

- **格式类型：** 二进制格式。
- **特点：** GLB 文件是 GLTF（GL Transmission Format）的二进制版本，通常包含模型的几何信息、材质、动画和其他相关数据。它是 GLTF 的紧凑版本，所有的数据都被封装到一个二进制文件中。
- **应用场景：** 主要用于WebGL和WebXR应用，以及其他支持 GLTF 格式的应用。

**GLTF (GL Transmission Format):**

**格式类型：** 文本和二进制两种格式。
**特点：** GLTF 是一种开放的三维模型交换格式，包含模型的几何、材质、动画等信息。GLTF 文件可以是文本格式 (.gltf) 或二进制格式 (.glb)。
**应用场景：** 广泛用于WebGL、游戏开发、虚拟现实（VR）和增强现实（AR）等应用。

**COLLADA (.dae):**

**格式类型：** XML 文本格式。
**特点：** COLLADA 是一种开放的数字内容交换格式，支持各种数据类型，包括几何、动画、物理模拟等。由于是文本格式，它可读性较好，但文件相对较大。
**应用场景：** 用于在不同的三维建模和动画软件之间进行数据交换。

**OBJ (Wavefront .obj):**

**格式类型：** 文本格式。
**特点：** OBJ 文件是一种简单的文本格式，主要包含几何信息，如顶点、面、法线等。它不包含材质、纹理或其他额外的数据。
**应用场景：** 常用于静态模型的导入和导出，不包含复杂的材质或动画信息。

**FBX (Filmbox):**

**格式类型：** 二进制和ASCII两种格式。
**特点：** FBX 是由 Autodesk 开发的格式，支持几乎所有类型的三维数据，包括几何、材质、动画、光照等。它是一个相对较复杂的二进制格式，广泛用于 Autodesk 系列软件之间的数据交换。
**应用场景：** 在各种三维应用程序之间进行复杂的数据交换，如Maya、3ds Max等。

> 总结：GLTF 和 GLB 格式在Web开发中更为流行，因为它们轻量且适用于WebGL应用。COLLADA 适用于不同软件之间的数据交换，而 OBJ 和 FBX 则通常用于更专业的三维建模和动画软件之间的数据传递。

## 设计软件

- spline
- [Blender](https://www.blender.org/) - 款费、开源的三维图形软件，支持建模、动画、渲染等多种功能，广泛应用于动画制作、游戏开发和艺术设计等领域。
- [Substance Painter](https://www.adobe.com/products/substance3d-painter.html) - Adobe 家的软件，广泛用于电影、游戏、虚拟现实（VR）和增强现实（AR）等领域
- [Modo](https://www.foundry.com/products/modo) - 一款综合的三维建模工具，适用于各种创意领域
- [Toolbag](https://marmoset.co/toolbag/) - 一个强大的实时渲染工具，为三维艺术家提供了一个直观而高效的工作环境，用于查看、调整和展示他们的创作。
- [Houdini](https://www.sidefx.com/products/houdini/) - 广泛应用于电影制作、电视特效、游戏开发等行业，特别适用于那些需要高度程序化和复杂效果的项目
- [Cinema 4D](https://www.cineversity.com/)
- Maya
- 3ds Max

> [更多参考](https://github.khronos.org/glTF-Project-Explorer/)

## 工具

- COLLADA2GLTF - COLLADA 格式换 glTF
- FBX2GLTF - FBX 格式转 glTF
- OBJ2GLTF - OBJ 转 glTF

## 素材

- [sketchfab](https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount) - 有丰富的 glTF 格式模型