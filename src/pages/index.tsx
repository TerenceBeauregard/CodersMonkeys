import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Seo } from '@/ui/components/seo/seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description='description'/>
      <h1>Hello word</h1>
    </>
  )
}
