/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Modal, ModalTrigger } from "./ui/animated-modal";


interface IProps {
 text:string,
 styleClass:string
 icon:ReactNode
}
const CoustomButton = ({ icon,text, styleClass}:IProps) => {
  return (
    <Modal>
      <ModalTrigger className={styleClass}>
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
         {
          text
         }
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
