import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Posts() {
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const mobile = useBreakpointValue({ base: false, md: true });

  return (
    <Box>
      {mobile ? (
        <Box position="relative" h="800px" justifyContent="center">
          <Box w="70%" h="100%" display="flex" flexDirection="column">
            <Box
              w="100%"
              h="10%"
              overflowX="scroll"
              css={{ "&::-webkit-scrollbar": { display: "none" } }}
              whiteSpace="nowrap"
              paddingTop="5px"
              marginBottom="5px"
              display="flex"
              flexDirection="row"
            >
              <Draggable
                axis="x"
                bounds={{ left: -190, top: 0, right: 0, bottom: 0 }}
              >
                <Box>
                  {[
                    "일상",
                    "동네소식",
                    "중고거래",
                    "동네 맛집",
                    "알바",
                    "같이해요",
                    "운동",
                  ].map((text, index) => (
                    <Button
                      key={`button${index + 1}`}
                      onClick={() => handleClick(`button${index + 1}`)}
                      backgroundColor={
                        activeButton === `button${index + 1}`
                          ? "#319795"
                          : "inherit"
                      }
                      borderRadius="10px"
                      border="none"
                      padding="10px"
                      margin="10px"
                    >
                      {text}
                    </Button>
                  ))}
                </Box>
              </Draggable>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              overflowY="scroll"
              whiteSpace="nowrap"
              position="relative"
              height="90%"
              css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물1
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물2
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물3
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물4
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box position="relative" h="800px" justifyContent="center">
          <Box w="100%" h="100%" display="flex" flexDirection="column">
            <Box
              w="100%"
              h="10%"
              overflowX="scroll"
              css={{ "&::-webkit-scrollbar": { display: "none" } }}
              whiteSpace="nowrap"
              paddingTop="5px"
              marginBottom="5px"
              display="flex"
              flexDirection="row"
            >
              <Draggable
                axis="x"
                bounds={{ left: -190, top: 0, right: 0, bottom: 0 }}
              >
                <Box>
                  {[
                    "일상",
                    "동네소식",
                    "중고거래",
                    "동네 맛집",
                    "알바",
                    "같이해요",
                    "운동",
                  ].map((text, index) => (
                    <Button
                      key={`button${index + 1}`}
                      onClick={() => handleClick(`button${index + 1}`)}
                      backgroundColor={
                        activeButton === `button${index + 1}`
                          ? "#319795"
                          : "inherit"
                      }
                      borderRadius="10px"
                      border="none"
                      padding="10px"
                      margin="10px"
                    >
                      {text}
                    </Button>
                  ))}
                </Box>
              </Draggable>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              overflowY="scroll"
              whiteSpace="nowrap"
              position="relative"
              height="90%"
              css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물1
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물2
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물3
              </Box>
              <Box
                w="100%"
                h="calc((100%) / 2)"
                borderBottom="1px solid"
                borderRadius="15px"
              >
                게시물4
              </Box>
            </Box>
            <Button
              position="absolute"
              bottom="20px"
              right="15px"
              zIndex="99"
              backgroundColor="#319795"
              borderRadius="10px"
              color="white"
            >
              + 글쓰기
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
