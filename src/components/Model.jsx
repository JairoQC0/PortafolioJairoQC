import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const gltf = useGLTF("./laptop3d/scene.gltf");

  return <primitive object={gltf.scene} {...props} />;
}
