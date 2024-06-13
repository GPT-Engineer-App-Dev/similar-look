import { Container, VStack, Text, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6} textAlign="center">
        <Image src="/src/assets/stripe-logo.png" alt="Stripe Logo" width="150px" />
        <Box>
          <Text fontSize="3xl" fontWeight="bold">Congratulations Lovable Labs Incorporated!</Text>
          <Text fontSize="lg">You've just received your first payment through Stripe.</Text>
          <Text fontSize="lg" mt={4}>Your first payout for this payment of <b>$10.00</b> (minus any fees) should land in your bank account on <b>12/28/23</b>.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;