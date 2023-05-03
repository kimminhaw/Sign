import { useRouter } from "next/router";
import { Box, Button } from "@chakra-ui/react";

export default function Aside() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="150px"
      height="150px"
      padding="10px"
      border="1px solid"
      borderRadius="15px"
      justifyContent="center"
      marginRight="10px"
    >
      <Button textAlign="left" marginBottom="10px">
        🏚 홈
      </Button>
      <Button textAlign="left" marginBottom="10px">
        🗺 내 근처
      </Button>
      <Button textAlign="left" marginBottom="10px">
        🗨 채팅
      </Button>
      <Button
        textAlign="center"
        backgroundColor="#319795"
        color="white"
        marginTop="auto"
        marginBottom="6px"
      >
        + 글쓰기
      </Button>
    </Box>
  );
}
