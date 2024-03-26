"use client";

import React from "react";
import Container from "@/components/ui/Container";
import CreateNewArticle from "@/components/CreateNewArticle/CreateNewArticle";

const page = () => {
  return (
    <Container>
      <div className="mt-8 mb-28 mx-5">
        <CreateNewArticle />
      </div>
    </Container>
  );
};

export default page;
