import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { closeModal, toast } from "../store";

import { FileType } from "../types/FileType";

import downloadFrames from "../utils/downloadFrames";

import Preview from "./Preview";
import Button from "./common/Button";
import ExportCSS from "./ExportCSS";
import Toggle from "./common/Toggle";
import { Modal } from "./common/Modal";
import { Tab } from "./common/Tab";
import { useState } from "react";

const ExportModal = () => {
  const dispatch = useAppDispatch();
  const { data, duration, currentFrameId } = useAppSelector(
    (state) => state.projects.present
  );
  const activeFrameIndex = data.frames.findIndex(
    (frame) => frame.id === currentFrameId
  );

  const [params, setParams] = useSearchParams();

  const [animate, setAnimate] = useState(false);

  const handleDownloadDrawing = (type: FileType) => {
    const { frames, gridRows: rows, gridColumns: columns, cellSize } = data;
    const activeFrame = frames[activeFrameIndex];

    dispatch(toast({ type: "information", message: "Downloading..." }));
    downloadFrames({
      type,
      frames,
      duration,
      activeFrame,
      rows,
      columns,
      cellSize,
    });
  };

  const handleToggleAnimation = () => {
    setAnimate((prevAnimate) => !prevAnimate);
  };

  return (
    <Modal.Frame
      open={!!params.get("modal")}
      onClose={() => {
        params.delete("modal");
        setParams(params);
        dispatch(closeModal());
      }}
      size="5xl"
    >
      <Modal.Head>Preview</Modal.Head>
      <Modal.Body>
        <Tab.Frame>
          <Tab.TabPane display="File">
            <Toggle
              id="css-animation"
              label="Animation"
              disabled={data.frames.length <= 1}
              onChange={handleToggleAnimation}
              className="ml-1 mt-2"
            />
            <Preview
              animate={animate}
              cellSize={10}
              activeFrameIndex={activeFrameIndex}
            />
            <div className="flex gap-1">
              <Button
                className="rounded bg-neutral-900 p-2"
                onClick={() => {
                  handleDownloadDrawing("PNG");
                }}
              >
                PNG
              </Button>
              <Button
                className="rounded bg-neutral-900 p-2"
                onClick={() => {
                  handleDownloadDrawing("GIF");
                }}
              >
                GIF
              </Button>
              <Button
                className="rounded bg-neutral-900 p-2"
                onClick={() => {
                  handleDownloadDrawing("Sprite");
                }}
              >
                Sprite
              </Button>
            </div>
          </Tab.TabPane>
          <Tab.TabPane display="CSS">
            <Toggle
              id="css-animation"
              label="Animation"
              disabled={data.frames.length <= 1}
              onChange={handleToggleAnimation}
              className="ml-1 mt-2"
            />
            <Preview
              animate={animate}
              cellSize={10}
              activeFrameIndex={activeFrameIndex}
            />
            <ExportCSS animate={animate} />
          </Tab.TabPane>
        </Tab.Frame>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default ExportModal;
