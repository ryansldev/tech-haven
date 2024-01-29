"use client"

import React from "react"
import { Category, Media } from "../../../../payload/payload-types";
import Link from "next/link";

import classes from './index.module.scss'
import { useFilter } from "../../../_providers/Filter";

type CategoryCardProps = {
  key: string
  category: Category
}

const CategoryCard = ({
  key,
  category
}: CategoryCardProps) => {
  const media = category.media as Media

  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href='/products'
      className={classes.card}
      key={key}
      style={{ backgroundImage: `url(${media.url})`}}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard