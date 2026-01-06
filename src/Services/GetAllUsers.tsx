import {BASE_URL, USERS} from '@/Constant/route';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/${USERS}`);
  return response.data;
};

const GetAllUsers = () => {
  return useQuery({
    queryKey: ['getAllUsers'],
    queryFn: getAllUsers
  });
};

export default GetAllUsers;
