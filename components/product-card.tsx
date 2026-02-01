import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Product } from "@/types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="mb-2">${product.price}</p>
      <Badge>{product.category}</Badge>
    </Card>
  );
}
