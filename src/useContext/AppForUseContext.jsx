import React, { useState, useEffect } from "react";
import FunctionContextComponent from "../FunctionContextComponent";
import FunctionNumberContextComponent from "../FunctionNumberContextComponent";
import { NumberProvider } from "./NumberContext";
import { ThemeProvider } from "./ThemeContext";

function AppForUseContext() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      <NumberProvider>
        <FunctionNumberContextComponent />
      </NumberProvider>
    </>
  );
}

export default AppForUseContext;
