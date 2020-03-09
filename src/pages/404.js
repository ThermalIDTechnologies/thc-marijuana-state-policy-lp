import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <div style={{ textAlign: `center` }}>
      <img
        src="https://res.cloudinary.com/crjars/video/upload/q_auto:best/e_loop/v1583796809/source.gif"
        alt="cute dog 404 gif"
      />
    </div>
  </Layout>
)

export default NotFoundPage
