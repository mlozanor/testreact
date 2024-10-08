import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Like Component", () => {
  test("Defaults to Likes: 0", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Increments likes by 1 when Like button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Decrements likes by 1 when Dislike button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    const dislikeButton = screen.getByText("Dislike");

    // Increment first to ensure we can decrement
    fireEvent.click(likeButton); // Now it should be Likes: 1
    fireEvent.click(dislikeButton); // Now it should be Likes: 0

    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });
});
