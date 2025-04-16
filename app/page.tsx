import FristAdSection from '@/components/fristAdSection'
import Hero from '@/components/hero'
import { Flex } from '@/libs/primitives'

export default function LandingPage() {
  return (
    <Flex minHeight={'80vh'} justifyContent={'center'} alignItems={'center'}>
      {' '}
      <Hero/>
      <FristAdSection/>
    </Flex>
  )
}
