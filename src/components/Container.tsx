import { ReactNode } from "react";

type MyComponentProps = {
    children: ReactNode;
  }
  
const Container = ({children}:MyComponentProps) => {
    return (
        <div className="px-4 sm:px-6 lg:px-20 mx-auto flex justify-center items-center">
            {children}
        </div>
    );
};

export default Container;