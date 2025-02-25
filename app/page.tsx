import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Particles from "./components/Particles/Particles";

export default function Home() {
  return (
    <div className="max-h-screen overflow-x-hidden">

      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="container mx-auto z-50">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6"></div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
