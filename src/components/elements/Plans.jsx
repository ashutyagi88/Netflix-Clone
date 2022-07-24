import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";

function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  console.log(products);

  return (
    <PlansStyle>
      {products.map((product) => {
        return (
          <PlansData>
            <PlansInfo>
              <h4>{product.name}</h4>
              <h5>{product.description}</h5>
              <h6>
                {product.currency}
                {product.price}
              </h6>
            </PlansInfo>
            <PlanBtn>Subscribe</PlanBtn>
          </PlansData>
        );
      })}
    </PlansStyle>
  );
}

const PlansStyle = styled.div``;

const PlansData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const PlansInfo = styled.div``;

const PlanBtn = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

export default Plans;
