import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Stack } from 'expo-router'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text className=" text-4xl">YOO</Text>
        <Button>
          <Text className="text-background">Click me</Text>
        </Button>
      </Container>
    </>
  )
}
