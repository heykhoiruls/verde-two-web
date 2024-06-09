export const images: string[] = [
  "photos/home/home-hero-2.png",
  "photos/home/home-hero-3.png",
  "photos/home/home-hero-4.png",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
