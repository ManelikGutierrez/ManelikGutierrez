import React from 'react'
import * as THREE from 'three';

export const HeroLights = () => {
  return (
        <>
           {/* <spotLight
           position={[4,7, 8]}
           angle={0.25}
           intensity={100}
           penumbra={0.2}
           color={"white"}
           /> */}

            {/* <spotLight
           position={[4, 5, 4]}
           angle={0.3}
           intensity={40}
           penumbra={0.5 }
           color="#4cc9f0"
           /> */}

          {/*Lamp light */}
          <pointLight
           position={[2, 2.9, -1]}
           angle={0.4}
           intensity={20}
           penumbra={1}
           color="#ee1a1a"
           />
           
           <spotLight
           position={[-3, 5, 5]}
           angle={0.4}
           intensity={60}
           penumbra={1}
           color="#9d4edd"
           />

            {/*Monitor Light */}
            <pointLight
           position={[-0.2, 2, -1.1]}
           angle={0.2}
           intensity={4}
           penumbra={1}
           color="#faf4c5"
           />

           <primitive
           object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
           position={[1, 3, 4]}
           intensity={10}
           rotation ={[-Math.PI / 4, Math.PI / 4, 0]}
           />

           <pointLight
            position={[0, 1, 0]}
            intensity={1} 
            color='#7209b7'
           />

            <pointLight
            position={[1, 2, -2]}
            intensity={1} 
            color='#0d00a4'
           />
        </>
    )
}
