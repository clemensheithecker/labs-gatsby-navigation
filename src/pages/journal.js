import React from "react"

import LoremIpsum from "../components/LoremIpsum"
import SEO from "../components/SEO"

export default function Journal() {
  return (
    <div>
      <SEO title="Journal" description="A sample journal page" />
      <h1>Journal</h1>
      <LoremIpsum />
    </div>
  )
}
