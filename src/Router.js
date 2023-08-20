import React, {
    Suspense,
  } from "react";

  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Flex, Spinner } from "@chakra-ui/react";
  import Home from "./pages/Home";
  import FollowUp from "./pages/FollowUp";


  const SwitchRouter = () => {
    return (
      <Suspense
        fallback={
          <Flex
            minH="100vh"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner />
            Cargando...
          </Flex>
        }
      >
        <Routes>
          <Route path="/follow-up/:incident_id/:contact_id" element={<FollowUp />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    );
  };

  const Router = () => {
    return (
      <BrowserRouter basename="/">
        <SwitchRouter />
      </BrowserRouter>
    );
  };
  
  export default Router;

