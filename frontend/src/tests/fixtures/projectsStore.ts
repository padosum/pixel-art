import { INITIAL_COLOR_PALLETE, INITIAL_TOOL_OPTIONS } from "../../constants";
import { ToolOption } from "../../types/Tool";
import grid from "./grid";
const initialGrid = JSON.parse(grid);
const frame = {
  id: 0,
  projectId: 0,
  grid: initialGrid,
  animateInterval: 25,
};

const projectsStore = {
  project: {
    id: 0,
    animate: false,
    cellSize: 10,
    gridColumns: 20,
    gridRows: 20,
    pallete: INITIAL_COLOR_PALLETE,
    title: "title",
    description: "description",
    isPublished: false,

    frames: [frame],
  },
  currentProjectId: 0,
  currentFrameId: 0,
  selectedTool: "pen" as keyof ToolOption,
  options: INITIAL_TOOL_OPTIONS,
};

const exampleState = (
  grid: string[],
  gridColumns: number,
  gridRows: number
) => {
  return {
    project: {
      id: 0,
      animate: false,
      cellSize: 10,
      gridColumns,
      gridRows,
      pallete: INITIAL_COLOR_PALLETE,
      title: "title",
      description: "description",
      isPublished: false,

      frames: [
        {
          id: 0,
          projectId: 0,
          grid,
          animateInterval: 25,
        },
      ],
    },
    currentProjectId: 0,
    currentFrameId: 0,
    selectedTool: "pen" as keyof ToolOption,
    options: INITIAL_TOOL_OPTIONS,
  };
};

const initialProject = {
  project: {
    id: "initial",
    animate: false,
    cellSize: 10,
    gridColumns: 16,
    gridRows: 16,
    pallete: INITIAL_COLOR_PALLETE,
    title: "",
    description: "",
    isPublished: false,
    frames: [
      {
        id: 0,
        projectId: "initial",
        grid: Array.from({ length: 16 * 16 }, () => ""),
        animateInterval: 25,
      },
    ],
  },
  currentProjectId: "initial",
  currentFrameId: 0,
  selectedTool: "pen" as keyof ToolOption,
  options: INITIAL_TOOL_OPTIONS,
};

export { exampleState, initialProject };
export default projectsStore;
