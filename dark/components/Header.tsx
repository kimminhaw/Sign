import { useRouter } from "next/router";
import {
  Box,
  Button,
  Input,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/signup") {
    return null;
  }

  const { toggleColorMode } = useColorMode();

  const mobile = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      {mobile ? (
        <Box
          display="flex"
          justifyContent="space-between"
          position="relative"
          top={0}
          width="95%"
          height="30px"
          margin="20px"
        >
          <Button
            height="30px"
            width="70px"
            backgroundColor="#319795"
            color="white"
          >
            안산 ∨
          </Button>
          <Input width="50%" placeholder="🔍 검색" />
          <Button onClick={toggleColorMode} marginRight="15px">
            🌙
          </Button>
          <Button display="none">🙂</Button>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="space-between"
          position="relative"
          top={0}
          width="95%"
          height="30px"
          margin="20px"
        >
          <Button
            height="30px"
            width="70px"
            backgroundColor="#319795"
            color="white"
          >
            안산 ∨
          </Button>
          <Button onClick={toggleColorMode} marginRight="15px">
            🌙
          </Button>
          <Button display="none">🙂</Button>
        </Box>
      )}
    </Box>
  );
}
