import { createSlice } from "@reduxjs/toolkit";
import employeesData from "../Data/employees.json";

const initialState = employeesData.map((emp, index) => ({
  ...emp,
  id: index + 1,
}));

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
    updateEmployee: (state, action) => {
      return state.map((emp) =>
        emp.id == action.payload.id ? action.payload : emp
      );
    },
    deleteEmployee: (state, action) => {
      return state.filter((emp) => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
