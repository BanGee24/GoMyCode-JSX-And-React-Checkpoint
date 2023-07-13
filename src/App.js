import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";
import { Card } from "react-bootstrap";
import "./App.css";

const App = () => {
  const firstName = "Muiz";

  return (
    <div>
      <card>
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
            <Image image={product.image} />
          </Card.Text>
        </Card.Body>
      </card>
      {/* this shows the code for the greeting under the card. */}
      <p className="greeting-text">Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;
