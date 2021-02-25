import React from "react";
import BookList from "./BookList";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero imgSrc="https://s.gr-assets.com/assets/award/2020/signed-out-hp/desktop-background@2x.png" />
      <BookList />
      <Footer />
    </div>
  );
}

export default Home;
