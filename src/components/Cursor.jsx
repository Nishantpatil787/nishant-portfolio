import { useEffect, useState } from "react"

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })

      setVisible(true)
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    )

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    )

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      )
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${
        visible ? "cursor-visible" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

export default Cursor