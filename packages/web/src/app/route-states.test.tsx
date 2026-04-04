import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./loading";
import NotFound from "./not-found";

describe("app route states", () => {
  it("renders the loading state", () => {
    render(<Loading />);

    expect(screen.getByRole("heading", { name: "Loading agent state" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Loading dashboard...");
    expect(screen.getByText("Fetching projects, sessions, and orchestrators.")).toBeInTheDocument();
  });

  it("renders the not-found state", () => {
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
    expect(
      screen.getByText("The page you requested does not exist in this workspace or may have moved."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return to dashboard" })).toHaveAttribute("href", "/");
  });
});
