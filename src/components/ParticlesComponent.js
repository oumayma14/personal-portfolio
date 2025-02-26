import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log(engine); // Log engine to see if it's initialized properly
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(() => ({
    background: {
      color: { value: "#CBDCEB" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        push: { distance: 200, duration: 15 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: "#133E87" },
      links: {
        color: "#133E87", distance: 150, enable: true, opacity: 0.3, width: 1,
      },
      move: {
        direction: "none", enable: true, outModes: { default: "bounce" },
        random: true, speed: 1, straight: false,
      },
      number: { density: { enable: true }, value: 150 },
      opacity: { value: 1.0 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return init ? <Particles id={props.id} init={particlesLoaded} options={options} /> : null;
};

export default ParticlesComponent;
