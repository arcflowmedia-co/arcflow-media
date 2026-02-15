import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// Premium Golden Particle Colors
const COLORS = ["#FFD700", "#FDB931", "#E2B007", "#BF9675", "#E7C6A2"]
const PARTICLE_COUNT = 12000

function ParticleAura() {
  const pointsRef = useRef()
  const { mouse, viewport } = useThree()

  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    // Enhanced golden glow
    gradient.addColorStop(0, 'rgba(255,235,180,1)')      // Bright golden core
    gradient.addColorStop(0.2, 'rgba(255,220,150,0.8)')  // Golden mid-tone
    gradient.addColorStop(0.5, 'rgba(255,200,120,0.4)')  // Soft golden edge
    gradient.addColorStop(1, 'rgba(255,180,100,0)')      // Transparent golden falloff
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)
    return new THREE.CanvasTexture(canvas)
  }, [])

  const [positions, colors, initialPositions, velocities] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const init = new Float32Array(PARTICLE_COUNT * 3)
    const vel = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 12 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.5
      const z = (r * Math.cos(phi)) * 0.6

      pos.set([x, y, z], i * 3)
      init.set([x, y, z], i * 3)
      vel.set([0, 0, 0], i * 3)

      const color = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)])
      col.set([color.r, color.g, color.b], i * 3)
    }
    return [pos, col, init, vel]
  }, [])

  const prevMouse = useRef(new THREE.Vector3())

  useFrame((state) => {
    const time = state.clock.elapsedTime

    const mX = (mouse.x * viewport.width) / 2
    const mY = (mouse.y * viewport.height) / 2
    const currentMouse = new THREE.Vector3(mX, mY, 0)
    const mouseVel = new THREE.Vector3().subVectors(currentMouse, prevMouse.current)

    const attrPos = pointsRef.current.geometry.attributes.position

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      let x = attrPos.array[i3]
      let y = attrPos.array[i3 + 1]
      let z = attrPos.array[i3 + 2]

      const ix = initialPositions[i3]
      const iy = initialPositions[i3 + 1]
      const iz = initialPositions[i3 + 2]

      const zoom = 0.4
      const noise = Math.sin(x * zoom + time * 0.1) * Math.cos(y * zoom + time * 0.15)
      const flowX = Math.cos(time * 0.05 + noise) * 0.001
      const flowY = Math.sin(time * 0.05 + noise) * 0.001

      const dx = mX - x
      const dy = mY - y
      const dSq = dx * dx + dy * dy
      const dist = Math.sqrt(dSq)

      let forceX = 0
      let forceY = 0

      if (dist < 4.0) {
        const force = (1 - dist / 4.0)
        forceX += mouseVel.x * force * 0.3
        forceY += mouseVel.y * force * 0.3
        forceX -= dx * force * 0.005
        forceY -= dy * force * 0.005
      }

      const returnX = (ix - x) * 0.02
      const returnY = (iy - y) * 0.02
      const returnZ = (iz - z) * 0.02

      velocities[i3] += flowX + forceX + returnX
      velocities[i3 + 1] += flowY + forceY + returnY
      velocities[i3 + 2] += returnZ

      velocities[i3] *= 0.94
      velocities[i3 + 1] *= 0.94
      velocities[i3 + 2] *= 0.94

      x += velocities[i3]
      y += velocities[i3 + 1]
      z += velocities[i3 + 2]

      attrPos.array[i3] = x
      attrPos.array[i3 + 1] = y
      attrPos.array[i3 + 2] = z
    }

    attrPos.needsUpdate = true
    prevMouse.current.copy(currentMouse)

    pointsRef.current.rotation.y = Math.sin(time * 0.02) * 0.02
    pointsRef.current.rotation.x = Math.cos(time * 0.03) * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        alphaMap={particleTexture}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.95}
      />
    </points>
  )
}

export default function ParticleAuraHero() {
  const containerRef = useRef()
  return (
    <div ref={containerRef} className="hero-container" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "var(--bg-primary)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Canvas eventSource={containerRef} camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} color="#966548" />
          <ParticleAura />
        </Canvas>
      </div>



      <div className="hero-content" style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "left",
        padding: "140px 2rem 2rem",
        boxSizing: "border-box",
        maxWidth: "1200px",
        margin: "0 auto",
        pointerEvents: "none"
      }}>
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 5rem)",
          color: "var(--text-primary)",
          marginBottom: "1.5rem",
          textShadow: "0px 4px 15px rgba(0,0,0,1)",
          width: "100%",
          maxWidth: "900px",
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          pointerEvents: "auto"
        }}>
          Install An AI Booking Machine<br />
          <span style={{ color: "#FFFFFF", textShadow: "0px 4px 15px rgba(0,0,0,1)" }}>That Turns Missed Leads Into Booked Jobs</span>
        </h1>

        <p style={{
          fontSize: "1.25rem",
          color: "#FFFFFF",
          fontWeight: "600",
          marginBottom: "3rem",
          maxWidth: "650px",
          lineHeight: "1.6",
          textShadow: "0px 4px 12px rgba(0,0,0,1)",
          pointerEvents: "auto"
        }}>
          ArcFlow Media builds intelligent websites, AI chatbots, voice agents, and paid ad systems that capture, qualify, and book home service leads automatically - without hiring more staff.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.5rem",
          pointerEvents: "auto"
        }}>
          <a href="#contact" style={{
            backgroundColor: "var(--btn-primary)",
            color: "#4A2A16",
            padding: "clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 5vw, 3rem)",
            fontSize: "clamp(0.9rem, 4vw, 1.125rem)",
            border: "none",
            borderRadius: "4px",
            fontWeight: "800",
            letterSpacing: "0.05em",
            boxShadow: "0 10px 30px rgba(150, 101, 72, 0.3)",
            textTransform: "uppercase",
            maxWidth: "100%",
            whiteSpace: "normal",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            cursor: "pointer"
          }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "var(--btn-hover)"
              e.target.style.boxShadow = "0 10px 40px rgba(150, 101, 72, 0.5)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "var(--btn-primary)"
              e.target.style.boxShadow = "0 10px 30px rgba(150, 101, 72, 0.3)"
            }}
          >
            Book a 30-Min Strategy Call
          </a>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "200px",
        background: "linear-gradient(to bottom, transparent, var(--bg-secondary))",
        zIndex: 5,
        pointerEvents: "none"
      }} />
    </div>
  )
}
