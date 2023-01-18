import React from 'react'
import style from '@/styles/pages/customize.module.scss'

const CustomizeLower = ({ description }) => (
  <section className={style.customizeLowerSec}>
    <h3>Comment</h3>
    <article>{description}</article>
  </section>
)

export { CustomizeLower }
