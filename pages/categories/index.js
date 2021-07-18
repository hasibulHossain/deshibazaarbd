import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import CategoryListContainer from "../../components/category/CategoryListContainer";

export default function CategoriesPage() {
  return (
    <MainLayout pageTitle='Categories'>
      <CategoryListContainer parentID={'all'} />
    </MainLayout>
  );
}
