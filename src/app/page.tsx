import { Metadata } from "next";
import PageHome from "./home/PageHome";

export const metadata: Metadata = {
  title: "Five-Star Living at Verde Two",
  description:
    "For leasing information, please contact us. Elegant and luxury living experience in Jakarta",
};

const Home = () => {
  return (
    <main>
      <PageHome />
    </main>
  );
};

export default Home;
