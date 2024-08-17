import Container from "@mui/material/Container";
import Header from "./navigation/header";
import { Footer } from "./navigation/footer";

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
