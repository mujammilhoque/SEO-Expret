'use client'
import React from "react";
// internal
import { products_category } from "@/components/shop/shop-category/shop-category";
import SingleCategory from "@/components/shop/shop-category/single-category";
import SectionWrapper from "@elements/section-wrapper";

const ElShopCategoryGrid = ({element_style=true }) => {
  const products_category_data = element_style ? products_category.slice(0, 4) : products_category
  return (
    <section className="product__category pt-10 pb-100">
      <div className="container">
        <SectionWrapper
          title="Minimal & Clean Design"
          subtitle="Shop Category Grid"
        />
        <div className="row">
          {products_category_data.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <SingleCategory item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElShopCategoryGrid;
