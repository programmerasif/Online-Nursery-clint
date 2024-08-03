import { IComponentProps } from "./Types/types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


const SelectUi = ({handleSelectChange}: IComponentProps) => {
  

  
    return (
        <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Catagory" className="text-gray-700"/>
      </SelectTrigger>
      <SelectContent>
      <SelectGroup >
          <SelectItem value="Flowers">Flowers</SelectItem>
          <SelectItem value="Herbs">Herbs</SelectItem>
          <SelectItem value="Indoor Plants">Indoor Plants</SelectItem>
          <SelectItem value="Medicinal Plants">Medicinal Plants</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    );
};

export default SelectUi;