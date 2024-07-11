import { ReactNode } from "react";

type MyComponentProps = {
    children: ReactNode;
  }
  
const Container = ({children}:MyComponentProps) => {
    return (
        <div className="px-6  mx-auto">
            {children}
        </div>
    );
};

export default Container;