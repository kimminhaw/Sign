import Link from "next/link";
import {
  Box,
  Image,
  Input,
  Button,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SignIn(): JSX.Element {
  const mobile = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      {mobile ? (
        <Box
          position="absolute"
          top="50"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center">
            <Image src="/logo.svg" alt="logo" w="250px" />
            <Box w="250px" fontSize="20px" marginBottom="30px">
              동네이야기부터 중고거래까지 가까운 이웃과 함께해요
            </Box>
          </Box>
          <Flex direction="column" alignItems="center" width="50%">
            <Input
              placeholder="이름"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Input
              placeholder="이메일"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Input
              placeholder="비밀번호"
              type="password"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Button
              className="log"
              backgroundColor="#319795"
              color="white"
              width="343px"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            >
              회원가입
            </Button>
            <Divider width="340px" margin="0" />
            <Button
              width="343px"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            >
              Continue with Google
            </Button>
            <Flex justifyContent="center" alignItems="center">
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#319795" }}
              >
                <h3>이미 계정이 있나요?</h3>
              </Link>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center">
            <Image src="/logo.svg" alt="logo" w="250px" />
            <Box w="250px" fontSize="20px" marginBottom="30px">
              동네이야기부터 중고거래까지 가까운 이웃과 함께해요
            </Box>
          </Box>
          <Flex direction="column" alignItems="center" width="50%">
            <Input
              placeholder="이름"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Input
              placeholder="이메일"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Input
              placeholder="비밀번호"
              type="password"
              width="320px"
              backgroundColor="#e5e5e5"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            />
            <Button
              className="log"
              backgroundColor="#319795"
              color="white"
              width="343px"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            >
              회원가입
            </Button>
            <Divider width="340px" margin="0" />
            <Button
              width="343px"
              marginBottom="10px"
              borderRadius="15px"
              padding="10px"
            >
              Continue with Google
            </Button>
            <Flex justifyContent="center" alignItems="center">
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#319795" }}
              >
                <h3>이미 계정이 있나요?</h3>
              </Link>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
