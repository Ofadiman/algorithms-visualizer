/* eslint-disable react/no-multi-comp,no-mixed-operators,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
// Link: https://www.youtube.com/watch?v=xy_tbV4pC54

import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events'
import { RootState } from '@react-three/fiber/dist/declarations/src/core/store'
import React, {
  Dispatch,
  Fragment,
  ReactElement,
  RefObject,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
  useState
} from 'react'
import { HexColorPicker } from 'react-colorful'

import { isMeshPropsRotationThreeEuler } from '../type-guards/isMeshPropsRotationThreeEuler.guard'

type ShoeFragmentColors = {
  band: string
  caps: string
  inner: string
  laces: string
  mesh: string
  patch: string
  sole: string
  stripes: string
}

type ShoeFragment = keyof ShoeFragmentColors

type ShoeProps = {
  activeShoeFragment: ShoeFragment
  handleActiveShoeFragmentChange: (shoeFragment: ShoeFragment) => void
  shoeFragmentColors: ShoeFragmentColors
}

const Shoe = (props: ShoeProps): ReactElement => {
  const meshRef: RefObject<MeshProps | null> = useRef(null)
  // @ts-expect-error: No time to type this.
  const { nodes, materials }: ReturnType<typeof useGLTF> = useGLTF(`shoe.glb`)
  const [cursorActivePart, setCursorActivePart]: [ShoeFragment | null, Dispatch<SetStateAction<ShoeFragment | null>>] =
    useState<ShoeFragment | null>(null)

  useFrame((state: RootState): void => {
    if (isMeshPropsRotationThreeEuler(meshRef)) {
      const elapsedTime: number = state.clock.getElapsedTime()
      // @ts-expect-error: Incorrect library typings.
      meshRef.current.position.y = (1 + Math.sin(elapsedTime / 1.5)) / 10
      meshRef.current.rotation.x = Math.cos(elapsedTime / 4) / 8
      meshRef.current.rotation.y = Math.sin(elapsedTime / 4) / 8
      meshRef.current.rotation.z = -0.2 - (1 + Math.sin(elapsedTime / 1.5)) / 20
    }
  })

  useEffect((): void => {
    const fill: string = cursorActivePart === null ? `#fff` : props.shoeFragmentColors[cursorActivePart]

    const cursor: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${fill}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${
      cursorActivePart ?? `none`
    }</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`

    const auto: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`

    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      Boolean(cursorActivePart) ? cursor : auto
    )}'), auto`
  }, [cursorActivePart, props.shoeFragmentColors])

  return (
    <group
      dispose={null}
      onPointerDown={(event: ThreeEvent<PointerEvent>): void => {
        event.stopPropagation()
        // @ts-expect-error: Incorrect library typings.
        props.handleActiveShoeFragmentChange(event.object.material.name)
      }}
      onPointerOut={(event: ThreeEvent<PointerEvent>): void => {
        event.stopPropagation()
        setCursorActivePart(null)
      }}
      onPointerOver={(event: ThreeEvent<PointerEvent>): void => {
        event.stopPropagation()
        // @ts-expect-error: Incorrect library typings.
        setCursorActivePart(event.object.material.name)
      }}
      ref={meshRef}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.shoeFragmentColors.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.shoeFragmentColors.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.shoeFragmentColors.caps} />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.shoeFragmentColors.inner}
      />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.shoeFragmentColors.sole} />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.shoeFragmentColors.stripes}
      />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.shoeFragmentColors.band} />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.shoeFragmentColors.patch}
      />
    </group>
  )
}

const initialPartColors: ShoeFragmentColors = {
  band: `#ffffff`,
  caps: `#ffffff`,
  inner: `#ffffff`,
  laces: `#ffffff`,
  mesh: `#ffffff`,
  patch: `#ffffff`,
  sole: `#ffffff`,
  stripes: `#ffffff`
}

export const TutorialTwo = (): ReactElement => {
  const [shoeFragmentColors, setShoeFragmentColors]: [
    ShoeFragmentColors,
    Dispatch<SetStateAction<ShoeFragmentColors>>
  ] = useState<ShoeFragmentColors>(initialPartColors)
  const [activeShoeFragment, setActiveShoeFragment]: [ShoeFragment, Dispatch<SetStateAction<ShoeFragment>>] =
    useState<ShoeFragment>(`mesh`)

  const handleActiveShoeFragmentChange = (shoeFragment: ShoeFragment): void => {
    setActiveShoeFragment(shoeFragment)
  }

  return (
    <Fragment>
      <Canvas camera={{ position: [0, 0, 2.75] }} style={{ height: 800 }}>
        <ambientLight intensity={0.3} />
        <spotLight angle={0.1} intensity={0.3} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe
            activeShoeFragment={activeShoeFragment}
            handleActiveShoeFragmentChange={handleActiveShoeFragmentChange}
            shoeFragmentColors={shoeFragmentColors}
          />
          <Environment files={`shoe-environment.hdr`} />
          <ContactShadows
            blur={2}
            far={1}
            height={10}
            opacity={0.25}
            position={[0, -0.8, 0]}
            rotation-x={Math.PI / 2}
            width={10}
          />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
      <div style={{ alignItems: `center`, display: `flex`, flexFlow: `column`, justifyContent: `center` }}>
        <HexColorPicker
          className={`picker`}
          color={shoeFragmentColors[activeShoeFragment]}
          onChange={(color: string): void => {
            setShoeFragmentColors((prevShoeFragmentColors: ShoeFragmentColors): ShoeFragmentColors => {
              return { ...prevShoeFragmentColors, [activeShoeFragment]: color }
            })
          }}
        />
        <h1>{activeShoeFragment}</h1>
      </div>
    </Fragment>
  )
}
