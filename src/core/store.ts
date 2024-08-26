import { create } from "zustand";

interface PawState {
    images: Image[]
    // increase: (by: number) => void
    addImage: (image:Image) => void
}

type Image = {
    file: string;
    likes: number;
    creator: string;
    tagLine: string;
    id: number
};

const useStore = create<PawState>()(set => {
  // this is the store object we can acccess
  images: [
    {
      file: "",
      likes: 0,
      creator: "",
      tagLine: "",
      id: 0,
    },
  ],

  addImage: (by) => set((state) => {  state.images.push(by)}),
//   add a image
// like an image
// unlike an image

});


