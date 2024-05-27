import Checkbox from "@mui/material/Checkbox";
import { CheckboxFild } from "../../pages/Login/styled";

export const TypeCheckbox = () => {
    return (
        <CheckboxFild>
          <Checkbox
            className="checkbox"
            sx={{
              color: "#ffff;",
              "&.Mui-checked": {
                color: "#FF0000;",
              },
            }}
          />
          <label>Salvar login</label>
        </CheckboxFild>
    );
  };
