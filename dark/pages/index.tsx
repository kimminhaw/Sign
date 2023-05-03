import Link from "next/link";
import Script from "next/script";
import {
  Box,
  Image,
  Input,
  Button,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SignIn(): JSX.Element {
  const mobile = useBreakpointValue({ base: false, md: true });
  // PC버전이 TRUE, 모바일버전이 FALSE
  return (
    <Box>
      {mobile ? (
        <Box
          position="absolute"
          top="20%"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box textAlign="center">
            <Image src="/logo.svg" alt="logo" w="250px" />
            <Box w="250px" fontSize="20px">
              동네이야기부터 중고거래까지 가까운 이웃과 함께해요
            </Box>
          </Box>
          <Flex direction="column" alignItems="center" width="50%">
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
            <Link href="/home">
              <Button
                className="log"
                backgroundColor="#319795"
                color="white"
                width="343px"
                marginBottom="10px"
                borderRadius="15px"
                padding="10px"
              >
                로그인
              </Button>
            </Link>
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
              <Text marginRight="10px">
                <h3>새로 오셨나요?</h3>
              </Text>
              <Link
                href="/signup"
                style={{ textDecoration: "none", color: "#319795" }}
              >
                <h3>회원가입</h3>
              </Link>
            </Flex>
          </Flex>
          <Script src="/path/to/script.js" strategy="beforeInteractive" />
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
            <Link href="/home">
              <Button
                className="log"
                backgroundColor="#319795"
                color="white"
                width="343px"
                marginBottom="10px"
                borderRadius="15px"
                padding="10px"
              >
                로그인
              </Button>
            </Link>
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
              <Text marginRight="10px">
                <h3>새로 오셨나요?</h3>
              </Text>
              <Link
                href="/signup"
                style={{ textDecoration: "none", color: "#319795" }}
              >
                <h3>회원가입</h3>
              </Link>
            </Flex>
          </Flex>
          <Script src="/path/to/script.js" strategy="beforeInteractive" />
        </Box>
      )}
    </Box>
  );
}
