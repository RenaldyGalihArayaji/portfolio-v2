import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Particles from "./components/Particles/Particles";
import BlurText from "./components/BlurText/BlurText";


export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className="max-h-screen overflow-x-hidden">

      {/* Backgorund */}
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

      {/* Header */}
      <div className="container mx-auto bg-[#0c183ed8] py-3 px-6 mt-4 shadow-md rounded-full flex items-center justify-between max-w-[50%] lg:max-w-[40%] fixed left-1/2 transform -translate-x-1/2">
        <h2 className="text-xl font-bold text-white">
          R<span className="text-orange-600">G</span>A
        </h2>
        <ul className="flex space-x-6">
          <li><a href="" className="text-orange-600 text-[13px]  transition duration-300">Home</a></li>
          <li><a href="" className="text-white text-[13px] hover:text-orange-600 transition duration-300">About</a></li>
          <li><a href="" className="text-white text-[13px] hover:text-orange-600 transition duration-300">Skill</a></li>
          <li><a href="" className="text-white text-[13px] hover:text-orange-600 transition duration-300">Project</a></li>
          <li><a href="" className="text-white text-[13px] hover:text-orange-600 transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Home */}
      <div className="container mx-auto z-50">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
            <BlurText
              text="Isn't this so cool?!"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
