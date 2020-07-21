/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Layout from "@theme/Layout";

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We could not find what you were looking for.</p>
            <p>Try using the search bar! 🔍</p>
            <p>
              If you still can't find what you're looking for, try{" "}
              <a
                href="https://www.acrrm.org.au/resources"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACRRM Resources.
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
