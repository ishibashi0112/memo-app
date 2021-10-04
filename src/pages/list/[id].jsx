import React, { useRouter } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lists from "../../components/Lists";
import Form from "../../components/Form";

export default function list() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>a</title>
      </Head>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 ">
          <Lists />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}
