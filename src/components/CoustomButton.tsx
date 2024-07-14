/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, ModalTrigger } from "./ui/animated-modal";

const CoustomButton = ({ icon }:any) => {
  return (
    <Modal>
      <ModalTrigger className="bg-gray-700 dark:bg-white dark:text-black text-white text-sm flex justify-center group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Search
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          {
            icon
          }
        </div>
      </ModalTrigger>
    </Modal>
  );
};

export default CoustomButton;
