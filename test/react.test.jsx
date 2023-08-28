import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";
import { Calculator, numbers, operations } from "../src/Calculator";



describe("Calculator", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Calculator />);
  });

  it("should render title correctly", () => {
    render(<Calculator />);

    screen.getByText("Calculator");
  });

  it("should render numbers", () => {
    render(<Calculator />);

    numbers.forEach((number) => screen.getByText(number));
  });

  it("should render four rows", () => {
    render(<Calculator />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
  });

  it("should render operations", () => {
    render(<Calculator />);

    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });

  it("should render equal sign", () => {
    render(<Calculator />);

    screen.getByText("=");
  });

  it("should render input", () => {
    render(<Calculator />);

    screen.getByRole("textbox");
  });

  it("should show user input after clicking a number", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });

  it("should show user input after clicking several numbers", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const two = screen.getByText("2");
    fireEvent.click(two);

    const three = screen.getByText("3");
    fireEvent.click(three);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("123");
  });

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole('textbox')
    expect (input.value).toBe('1+1');

  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    const equal = screen.getByText("=");
    fireEvent.click(plus);
    fireEvent.click(one);
    fireEvent.click(equal);

    const input = screen.getByRole('textbox')
    expect (input.value).toBe('2');
  })

  it('should concat multiple operations', () => {
    render(<Calculator />)

    const one = screen.getByText("1");
    fireEvent.click(one);

    const six = screen.getByText("6");
    const plus = screen.getByText("+");
    const minus = screen.getByText('-')
    const equal = screen.getByText("=");
    fireEvent.click(plus);
    fireEvent.click(one);
    fireEvent.click(equal);
    fireEvent.click(minus)
    fireEvent.click(six)
    fireEvent.click(equal);

    const input = screen.getByRole('textbox')
    expect (input.value).toBe('-4');
  })

  it('should show reset button', () => {
    render(<Calculator />)

    const reset = screen.getByText("CE");
    
    expect(reset).toBeTruthy()

  })

  it('should show reset input value', () => {
    render(<Calculator />)

    const reset = screen.getByText("CE");
    fireEvent.click(reset);
    
    const input = screen.getByRole('textbox')
    expect (input.value).toBe("0");

  })
});
