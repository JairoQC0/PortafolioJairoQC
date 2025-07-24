import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Luces decorativas */}
      <div className="glow1" />
      <div className="glow2" />
      <div className="glow3" />

      {/* Contenido principal */}
      <div className="container">
        <div className="textContainer">
          <h1 className="name">Jairo Quispe Coa</h1>
          <h2 className="subtitle">Fullstack Developer</h2>
        </div>

        <div className="canvasWrapper">
          <Canvas
            camera={{ position: [0, 0, 1.4], fov: 70 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 2, 2]} intensity={1.2} />
            <pointLight position={[0, 0, 2]} intensity={1.5} color={"white"} />
            <Model
              scale={0.6}
              rotation={[Math.PI / 11, 2.75, 0]}
              position={[0, -0.35, 0]}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </header>
  );
}

export default Header;
