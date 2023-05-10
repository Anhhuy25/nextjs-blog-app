import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/legacy/image";

export default function PostItem(props) {
  const { title, image, abstract, _id } = props.post;

  const linkPath = `/posts/${_id}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            priority
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{abstract}</p>
        </div>
      </Link>
    </li>
  );
}
