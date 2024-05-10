// Define the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

// Function to create a dot
function createDot(x: number, y: number): SVGCircleElement {
  const dot = document.createElementNS(svgNS, "circle") as SVGCircleElement;
  dot.setAttribute("cx", x.toString());
  dot.setAttribute("cy", y.toString());
  dot.setAttribute("r", "3");
  dot.setAttribute("fill", "#fff");
  return dot;
}

// Function to create a line
function createLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): SVGLineElement {
  const line = document.createElementNS(svgNS, "line") as SVGLineElement;
  line.setAttribute("x1", x1.toString());
  line.setAttribute("y1", y1.toString());
  line.setAttribute("x2", x2.toString());
  line.setAttribute("y2", y2.toString());
  line.setAttribute("stroke", "#ffffffaa");
  return line;
}

// Function to create SVG from numbers
function createSVGFromNumbers(numbers: number[]): SVGSVGElement {
  const svg = document.createElementNS(svgNS, "svg") as SVGSVGElement;
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");

  let previousDot: SVGCircleElement | null = null;

  numbers.forEach((number, index) => {
    // Calculate position for the dot
    const x = (index + 1) * 20; // This is an arbitrary spacing value
    const y = 100 - number; // Assuming the SVG height is 100 for demonstration

    // Create and append the dot
    const dot = createDot(x, y);
    svg.appendChild(dot);

    // If there's a previous dot, create and append a line
    if (previousDot) {
      const line = createLine(
        parseInt(previousDot.getAttribute("cx")!),
        parseInt(previousDot.getAttribute("cy")!),
        x,
        y
      );
      svg.insertBefore(line, svg.firstChild); // Insert line behind dots
    }

    // Update the previous dot reference
    previousDot = dot;
  });

  return svg;
}
const numbers: number[] = [10, 50, 20, 60, 30]; // Replace with your array of numbers
const svgElement: SVGSVGElement = createSVGFromNumbers(numbers);
