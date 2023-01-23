import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { describe, test, afterEach } from "vitest";
import HelloWorld from "./index";

describe("Integration test", () => {
  afterEach(cleanup);

  test("Minimal render display expected text", () => {
    render(<HelloWorld />);
  });

  test("Expected greetee is displayed", () => {
    const greetee = "Universe";
    render(<HelloWorld greetee={greetee} />);
  });
});

/*
secret link:
https://tomsouthall.com/blog/publishing-react-component-using-vite
*/
