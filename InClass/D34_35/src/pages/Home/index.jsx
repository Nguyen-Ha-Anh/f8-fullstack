import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function () {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/employees");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={onClick}>go to employees</button>
    </>
  );
}
