import React from "react";
import Link from "next/link";
// internal
import products from "@/data/products";
import SingleCartItem from "../cart-area/single-cart-item";

// cart items
const cart_items = products.slice(0, 2);

const WishlistArea = () => {
  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#">
              <div className="table-content table-responsive">
                <div className="tp-continue-shopping">
                  <p>
                    <Link href="/shop">
                      Continue Shopping <i className="fal fa-reply"></i>
                    </Link>
                  </p>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart_items.map((item, i) => (
                      <SingleCartItem key={i} {...item} />
                    ))}
                  </tbody>
                </table>
              </div> 
              <div className="row">
                <div className="col-12">
                  <div className="tp-wishlist-btn mt-50">
                    <Link href="/cart" className="tp-btn tp-btn-black">
                      Go to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistArea;
