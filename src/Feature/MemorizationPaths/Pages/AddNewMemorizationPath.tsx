import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import MemorizationPathForm from "../Components/MemorizationPathForm";
import type { MemorizationPathFormData } from "../Types/memorizationPath.types";
import api from "../../../api/axios";

const AddNewMemorizationPath = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: MemorizationPathFormData) => {
    try {
      setIsLoading(true);
      await api.post("/memorization-paths", data);
      navigate("/dashboard/memorization-paths");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-t-[15px] border-[#CB997E] rounded-2xl bg-white mt-[8%] h-[65%]">
      <div className="mt-[4%]">
        <CustomFormTitle title="إضافة مسار جديد" />
        <MemorizationPathForm
          mode="add"
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default AddNewMemorizationPath;
