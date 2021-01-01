import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>This is Home page</h1>
      <ExampleButton>Click Me!!</ExampleButton>
    </Layout>
  )
}
