import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetFeaturedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getFeaturedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/users/product/featured`, {
        withCredentials: true,
      });
    } catch (err) {}
  };
};

export default useGetFeaturedProducts;
