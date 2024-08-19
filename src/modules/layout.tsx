import Container from "@mui/material/Container";
import Header from "./navigation/components/header";
import { Footer } from "./navigation/components/footer";

function Layout() {
  return (
    <Container>
      <Header />
      <h1>Some content to go here</h1>
      <Footer />
    </Container>
  );
}

export default Layout;
