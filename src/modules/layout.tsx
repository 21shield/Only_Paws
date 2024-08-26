import Header from "./navigation/components/header";
import { Footer } from "./navigation/components/footer";
import { LandingPage } from "./landing/landingPage";
import { styled } from "@mui/material/styles";

const BaseContainer = styled("div")({
  border: "solid 6px red",
});

function Layout() {
  return (
    <BaseContainer>
      <Header />
      <LandingPage />
      <Footer />
    </BaseContainer>
  );
}

export default Layout;
