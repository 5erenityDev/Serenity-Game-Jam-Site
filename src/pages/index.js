import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="About Our Team">
      <p>Welcome to Serenity Jam! Serenity Jam is a game jam in which users will try to create the best Godot games they can. The Serenity Jam team puts an emphasis on the usage of Free and Open Source software during development to promote the FOSS standard.</p>
      <p>If you're interested in joining the next Serenity Jam. It will open on June 1st, 2024 and close that following Saturday giving Jam participants a week to make their games.</p>
      <p>Work together and focus on learning over creating the best product. We hope to see you in the jam!</p>
      <StaticImage
        alt="Game Jam Image"
        src="../images/SerenityJam.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage