import Container from "@mui/material/Container";
import Header from "./navigation/components/header";
import { Footer } from "./navigation/components/footer";
import { LandingPage } from "./landing/landingPage";

function Layout() {
  return (
    <Container>
      <Header />
      <LandingPage />
      <Footer />
    </Container>
  );
}

export default Layout;
