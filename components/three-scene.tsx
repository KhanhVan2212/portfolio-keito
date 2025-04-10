import { useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import AnimatedBoxes from "./AnimatedBoxes" // Updated import to match existing component
import ParticlesAnimation from "./ParticleAnimation" // Updated import to match existing component

interface SceneProps {
  // Add any props if needed
}

function Scene({ ...props }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { get } = useThree() // Changed to use get instead of destructuring camera

  // Updated to use pointer instead of deprecated mouse
  useFrame((state) => {
    if (groupRef.current) {
      // Using interpolation for smooth rotation
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.5,
        4,
        0.1
      )
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.5,
        4,
        0.1
      )
    }
  })

  return (
    <group ref={groupRef} {...props}>
      <AnimatedBoxes />
      <ParticlesAnimation />
    </group>
  )
}

export default function ThreeScene() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
