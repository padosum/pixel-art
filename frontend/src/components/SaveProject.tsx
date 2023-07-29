import { useAddProjectMutation } from "../store";
import { Project } from "../types/Project";
import Button from "./common/Button";

const SaveProject = ({ project }: { project: Project }) => {
  const [addProject, results] = useAddProjectMutation();

  const handleSaveProject = () => {
    addProject(project);
  };
  return (
    <Button
      className="flex grow justify-center rounded bg-input-color px-4 py-2 text-center text-sm text-gray-100 hover:bg-input-color-hover"
      onClick={handleSaveProject}
      loading={results.isLoading}
    >
      SAVE
    </Button>
  );
};

export default SaveProject;
