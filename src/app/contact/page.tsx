import { Metadata } from "next";
import PageContact from "./PageContact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Fully Furnished | Ask for a Quote Take your new life in Verde Two.",
};

const Contact = () => {
  return <PageContact />;
};

export default Contact;
