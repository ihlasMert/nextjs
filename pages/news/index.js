//our-domain.com/news/something-important
import Link from "next/link";
import React, { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>he News page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Nextjs is a great Framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
