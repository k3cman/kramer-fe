import { useState } from "react";

export function ProducstHook() {
  const [product, setProduct] = useState(null);

  return [product, setProduct];
}
