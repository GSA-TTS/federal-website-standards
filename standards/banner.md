---
layout: layouts/page
tags: standards
title: Banner
category:
  ["Consistent visual design and agency brand identity"]
appliesTo: Executive branch federal agencies
why: Lorem ipsum…
status: 16% of executive branch gov sites have implemented the banner
statusIndicator: 🟡
pageFlowSection: "Top of page"
summary: true
---

# Banner

## Standard
Use the banner at the top of every page to identify your site as an official federal government site.

![USWDS banner component](../_site/assets/banner.png)

## Why
The banner identifies official websites of government organizations in the United States. The banner includes a drop-down that helps people understand that the website is official and secure. The banner is one of the most recognizable design elements on federal websites. 

## How to implement
Use the [USWDS banner component](https://designsystem.digital.gov/components/banner/).

## When to use
The USWDS banner text identifies .gov and .mil domains and HTTPS as indicators that a website is an official government website. **Use this banner only if your site uses both the proper top-level domain (TLD) and HTTPS.**

## Flexibility
The banner component should avoid customization. Both text and semantic structure for this component should come from USWDS.

## Examples
[U.S. Department of State](https://www.state.gov/)

![U.S. Department of State banner]()

[U.S. Department of Defense](https://www.defense.gov/)

![U.S. Department of Defense banner]()

## Implementation status
16% of executive branch public sites scanned by the [Site Scanner](https://digital.gov/guides/site-scanning/) have implemented the banner in a way that is compliant with the U.S. Web Design System (USWDS).

## Where to go for help
[USWDS community](https://designsystem.digital.gov/about/community/)

## Agencies working on this standard
TBD

## Category
Consistent visual design and agency brand identity

## Page flow section
Top of page

## For developers
### If you’re using USWDS
Until the USWDS provides a content delivery network (CDN) with images, use your system’s method for optimizing the banner icons. You might need to change the path of these images accordingly. The default path is `/assets/img/usa–[icon name]`.
If you’re using a templating system, create a separate component file. Name the file `banner.[system suffix]`. This will allow future developers to easily identify and update the code when the design system makes changes.

### If you’re NOT using USWDS
Still not using the USWDS? You can quickly implement using the following code and style:
