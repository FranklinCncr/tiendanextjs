import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from "next/link"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout title="Bienvenido">
      <h1>Index</h1>
    </Layout>    
  )
}
