import { useProducts, useProduct} from "./products";

describe("useProduct()", () =>{
  test("return a product", () => {
    const slang = "RedBull";
    const product = useProduct({ slang });

    expect(product.title).toEqual("RedBull");
  });

  test("retuns undefined if product is was not found", () => {
    const slang = "O-RedBull";
    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
})

describe("useProducts()", () => {
  test("retuns a product list", () => {
    const products = useProducts();
    expect(products.length).toBeGreaterThan(1);
  })
})