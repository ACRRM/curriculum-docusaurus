/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useThemeConfig from '../../utils/useThemeConfig';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();

  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
    className={clsx("footer", {
      "footer--dark": footer.style === "dark",
    })}
  >
    <div className={styles.containerFooter}>
      <div className={`row ${styles.row}`}>
        <div className={styles.left}>
          <p>
            ACRRM acknowledges Australian Aboriginal People and Torres Strait
            Islander People as the first inhabitants of the nation. We respect
            the traditional owners of lands across Australia in which our
            members and staff work and live, and pay respect to their elders
            past, present and future.
          </p>
          <p>
            © 2020 Australian College of Rural and Remote Medicine - ABN: 12
            078 081 848
          </p>
        </div>
        <div className={styles.right}>
          <p>
            The right doctors, in the right places, with the right skills,
            providing rural and remote people with excellent health care.
          </p>
          <div>
            <a href="https://acrrm.org.au/contact-us">Contact Us</a>
            <a href="https://acrrm.org.au/privacy">Privacy</a>
            <a href="https://acrrm.org.au/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
