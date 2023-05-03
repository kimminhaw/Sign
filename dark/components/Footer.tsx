import { useRouter } from "next/router";
import { Button, Flex } from "@chakra-ui/react";

export default function Footer() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }

  return (
    <Flex
      align="center"
      justify="space-between"
      position="relative"
      bottom="0"
      width="100%"
    >
      <Button
        size="xl"
        fontSize="30px"
        width="50px"
        height="50px"
        margin="20px"
      >
        🏚
      </Button>
      <Button
        size="xl"
        fontSize="30px"
        width="50px"
        height="50px"
        margin="20px"
      >
        🔍
      </Button>
      <Button
        size="xl"
        fontSize="30px"
        width="50px"
        height="50px"
        margin="20px"
      >
        🗺
      </Button>
      <Button
        size="xl"
        fontSize="30px"
        width="50px"
        height="50px"
        margin="20px"
      >
        🗨
      </Button>
      <Button
        size="xl"
        fontSize="30px"
        width="50px"
        height="50px"
        margin="20px"
      >
        🙂
      </Button>
    </Flex>
  );
}
