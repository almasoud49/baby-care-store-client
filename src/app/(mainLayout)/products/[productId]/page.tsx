import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductImageSlide from "@/components/ProductDetails/ProductImageSlide";
import ProductSideInfo from "@/components/ProductDetails/ProductSideInfo";
import { TProduct } from "@/types/type.global";
import { Container } from "@mui/material";

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/products`
  );
  const products = await res.json();

  return products.data.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = params;

  const res = await fetch(
    `${process.env.SERVER_URL}/api/product/${productId}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const product = data?.data;

  return (
    <div className=" my-20">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ProductImageSlide product={product} />
          <ProductSideInfo product={product} />
        </div>
        <div className="mt-12">
          <ProductDescription product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
