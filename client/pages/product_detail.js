import SimilarProducts from "../components/home_suite/SimilarProducts";
import ProductDetailsCard from "../components/product/ProductDetailsCard";
import ProductInfoCard from "../components/product/ProductInfoCard";
import Layout from "../components/util/Layout";

export default function product_detail() {
    return <>
<Layout>
    <ProductDetailsCard />
        <ProductInfoCard />
        <SimilarProducts />
</Layout>
</>
};
