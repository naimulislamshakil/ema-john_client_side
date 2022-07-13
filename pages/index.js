import Layout from "../Component/Pages/Layout/Layout";
import Footer from "../Component/Shared/Fooder";
import Navbar from "../Component/Shared/Navbar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Layout>{"Home Page"}</Layout>
        <Footer></Footer>
      </div>
    </>
  );
}
