import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';

import SimpleGLTFAsset from './SimpleGLTFAsset';
import SimpleLight from './SimpleLight';
import AnimatedCamera from './AnimatedCamera';
import styles from '../ProjectCard/ProjectCard.module.css';

function Scene() {
  return (
    <div className={styles.canvas_wrapper}>
      <div className={styles.menu_wrapper}>
        <h1>Jane Cheng</h1>
      </div>
      <Canvas>
        {/* Camera 🎥 */}
        <AnimatedCamera />
        <Sparkles size={10} color={'#fff'} scale={[10, 10, 10]}></Sparkles>

        {/* Lights 💡 */}
        <SimpleLight position={[1, 0, 0]} color={'red'} />
        <SimpleLight position={[-1, 0.5, 0]} color={'blue'} />
        <SimpleLight position={[-1, -0.5, 0]} color={'green'} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={['#000']} attach="background" />

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <SimpleGLTFAsset
            position={[0, 0, 0]}
            modelUrl={
              'https://cdn.glitch.global/6ccaa534-e1a1-4e75-8aad-e817ee43b884/abstract-shape.glb?v=1695698655436'
            }
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
