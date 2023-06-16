import { useDispatch, useSelector } from "react-redux";
import {
  carDetailFailure,
  carDetailSuccess,
  carDetailStart,
} from "../../../redux/cars/slice";
import axios from "axios";

function useCars() {
  const dispatch = useDispatch();
  const { carDetail } = useSelector((state) => state.car);
  const fetchCarDetail = async (id) => {
    try {
      dispatch(carDetailStart());
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${id}`
      );
      dispatch(carDetailSuccess(response.data));
    } catch (error) {
      dispatch(carDetailFailure());
    }
  };

  return {
    fetchCarDetail,
    carDetail,
  };
}

export default useCars;
