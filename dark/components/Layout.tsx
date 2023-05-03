import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import { Grid, GridItem, Box, useBreakpointValue } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  const mobile = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      {mobile ? (
        <Grid templateRows="auto 1fr auto" h="100vh">
          <Header />
          <GridItem
            display="flex"
            gridGap={4}
            alignItems="center"
            height="100%"
            marginLeft="5%"
          >
            <Box height="100%">
              <Aside />
            </Box>
            {children}
          </GridItem>
        </Grid>
      ) : (
        <Grid templateRows="auto 1fr auto" h="100vh">
          <Header />
          {children}
          <Footer />
        </Grid>
      )}
    </Box>
  );
}
