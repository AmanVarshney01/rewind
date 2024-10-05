import { Stack } from 'expo-router'

import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text className=" text-4xl">YOOsss</Text>
        <Button>
          <Text className="text-background">Click me</Text>
        </Button>
      </Container>
    </>
  )
}
