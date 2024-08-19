import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// mock data
import { mockData } from "../mocks/mockImageData";

export const MediaContainer = () => {
  return (
    <Container>
      <ImageList sx={{ height: "450" }} variant="woven" cols={3} gap={8}>
        {mockData.map(item => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};
