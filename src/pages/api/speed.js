import { getRequest } from "@/requests/uxrecord"

const test = {
    "captchaResult": "CAPTCHA_NOT_NEEDED",
    "kind": "pagespeedonline#result",
    "id": "https://uxrate.vercel.app/",
    "loadingExperience": {
        "initial_url": "https://uxrate.vercel.app/"
    },
    "lighthouseResult": {
        "requestedUrl": "https://uxrate.vercel.app/",
        "finalUrl": "https://uxrate.vercel.app/",
        "mainDocumentUrl": "https://uxrate.vercel.app/",
        "finalDisplayedUrl": "https://uxrate.vercel.app/",
        "lighthouseVersion": "11.0.0",
        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/117.0.5938.149 Safari/537.36",
        "fetchTime": "2023-10-15T22:47:58.711Z",
        "environment": {
            "networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
            "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/117.0.5938.149 Safari/537.36",
            "benchmarkIndex": 333.5,
            "credits": {
                "axe-core": "4.7.2"
            }
        },
        "runWarnings": [],
        "configSettings": {
            "emulatedFormFactor": "desktop",
            "formFactor": "desktop",
            "locale": "en-US",
            "onlyCategories": [
                "accessibility",
                "best-practices"
            ],
            "channel": "lr"
        },
        "audits": {
            "html-xml-lang-mismatch": {
                "id": "html-xml-lang-mismatch",
                "title": "`\u003chtml\u003e` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
                "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.7/html-xml-lang-mismatch).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "duplicate-id-active": {
                "id": "duplicate-id-active",
                "title": "`[id]` attributes on active, focusable elements are unique",
                "description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn how to fix duplicate `id`s](https://dequeuniversity.com/rules/axe/4.7/duplicate-id-active).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "dlitem": {
                "id": "dlitem",
                "title": "Definition list items are wrapped in `\u003cdl\u003e` elements",
                "description": "Definition list items (`\u003cdt\u003e` and `\u003cdd\u003e`) must be wrapped in a parent `\u003cdl\u003e` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.7/dlitem).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "input-image-alt": {
                "id": "input-image-alt",
                "title": "`\u003cinput type=\"image\"\u003e` elements have `[alt]` text",
                "description": "When an image is being used as an `\u003cinput\u003e` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.7/input-image-alt).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "td-has-header": {
                "id": "td-has-header",
                "title": "`\u003ctd\u003e` elements in a large `\u003ctable\u003e` have one or more table headers.",
                "description": "Screen readers have features to make navigating tables easier. Ensuring that `\u003ctd\u003e` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.7/td-has-header).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-toggle-field-name": {
                "id": "aria-toggle-field-name",
                "title": "ARIA toggle fields have accessible names",
                "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.7/aria-toggle-field-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "table-fake-caption": {
                "id": "table-fake-caption",
                "title": "Tables use `\u003ccaption\u003e` instead of cells with the `[colspan]` attribute to indicate a caption.",
                "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.7/table-fake-caption).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "meta-viewport": {
                "id": "meta-viewport",
                "title": "`[user-scalable=\"no\"]` is not used in the `\u003cmeta name=\"viewport\"\u003e` element and the `[maximum-scale]` attribute is not less than 5.",
                "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.7/meta-viewport).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "items": [],
                    "type": "table"
                }
            },
            "table-duplicate-name": {
                "id": "table-duplicate-name",
                "title": "Tables have different content in the summary attribute and `\u003ccaption\u003e`.",
                "description": "The summary attribute should describe the table structure, while `\u003ccaption\u003e` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.7/table-duplicate-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-required-children": {
                "id": "aria-required-children",
                "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
                "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.7/aria-required-children).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "video-caption": {
                "id": "video-caption",
                "title": "`\u003cvideo\u003e` elements contain a `\u003ctrack\u003e` element with `[kind=\"captions\"]`",
                "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.7/video-caption).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "button-name": {
                "id": "button-name",
                "title": "Buttons have an accessible name",
                "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.7/button-name).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "type": "table",
                    "headings": []
                }
            },
            "js-libraries": {
                "id": "js-libraries",
                "title": "Detected JavaScript libraries",
                "description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
                "score": null,
                "scoreDisplayMode": "informative",
                "details": {
                    "debugData": {
                        "stacks": [
                            {
                                "id": "next",
                                "version": "13.5.4"
                            },
                            {
                                "id": "next-fast"
                            }
                        ],
                        "type": "debugdata"
                    },
                    "items": [
                        {
                            "version": "13.5.4",
                            "name": "Next.js",
                            "npm": "next"
                        }
                    ],
                    "headings": [
                        {
                            "valueType": "text",
                            "key": "name",
                            "label": "Name"
                        },
                        {
                            "label": "Version",
                            "key": "version",
                            "valueType": "text"
                        }
                    ],
                    "type": "table"
                }
            },
            "doctype": {
                "id": "doctype",
                "title": "Page has the HTML doctype",
                "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
                "score": 1,
                "scoreDisplayMode": "binary"
            },
            "aria-command-name": {
                "id": "aria-command-name",
                "title": "`button`, `link`, and `menuitem` elements have accessible names",
                "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.7/aria-command-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "interactive-element-affordance": {
                "id": "interactive-element-affordance",
                "title": "Interactive elements indicate their purpose and state",
                "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "html-lang-valid": {
                "id": "html-lang-valid",
                "title": "`\u003chtml\u003e` element has a valid value for its `[lang]` attribute",
                "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.7/html-lang-valid).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "items": [],
                    "type": "table"
                }
            },
            "image-alt": {
                "id": "image-alt",
                "title": "Image elements have `[alt]` attributes",
                "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.7/image-alt).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "duplicate-id-aria": {
                "id": "duplicate-id-aria",
                "title": "ARIA IDs are unique",
                "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.7/duplicate-id-aria).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "items": [],
                    "type": "table"
                }
            },
            "aria-valid-attr-value": {
                "id": "aria-valid-attr-value",
                "title": "`[aria-*]` attributes have valid values",
                "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr-value).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "type": "table",
                    "items": []
                }
            },
            "valid-source-maps": {
                "id": "valid-source-maps",
                "title": "Page has valid source maps",
                "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "image-size-responsive": {
                "id": "image-size-responsive",
                "title": "Serves images with appropriate resolution",
                "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/serve-responsive-images/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "type": "table",
                    "headings": []
                }
            },
            "aria-input-field-name": {
                "id": "aria-input-field-name",
                "title": "ARIA input fields have accessible names",
                "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.7/aria-input-field-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "definition-list": {
                "id": "definition-list",
                "title": "`\u003cdl\u003e`'s contain only properly-ordered `\u003cdt\u003e` and `\u003cdd\u003e` groups, `\u003cscript\u003e`, `\u003ctemplate\u003e` or `\u003cdiv\u003e` elements.",
                "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.7/definition-list).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "html-has-lang": {
                "id": "html-has-lang",
                "title": "`\u003chtml\u003e` element has a `[lang]` attribute",
                "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.7/html-has-lang).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "items": [],
                    "headings": []
                }
            },
            "select-name": {
                "id": "select-name",
                "title": "Select elements have associated label elements.",
                "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.7/select-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "input-button-name": {
                "id": "input-button-name",
                "title": "Input buttons have discernible text.",
                "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.7/input-button-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "deprecations": {
                "id": "deprecations",
                "title": "Avoids deprecated APIs",
                "description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "paste-preventing-inputs": {
                "id": "paste-preventing-inputs",
                "title": "Allows users to paste into input fields",
                "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "label": {
                "id": "label",
                "title": "Form elements have associated labels",
                "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.7/label).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "headings": [],
                    "items": []
                }
            },
            "preload-fonts": {
                "id": "preload-fonts",
                "title": "Fonts with `font-display: optional` are preloaded",
                "description": "Preload `optional` fonts so first-time visitors may use them. [Learn more about preloading fonts](https://web.dev/preload-optional-fonts/)",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "accesskeys": {
                "id": "accesskeys",
                "title": "`[accesskey]` values are unique",
                "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.7/accesskeys).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-hidden-body": {
                "id": "aria-hidden-body",
                "title": "`[aria-hidden=\"true\"]` is not present on the document `\u003cbody\u003e`",
                "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `\u003cbody\u003e`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.7/aria-hidden-body).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "items": [],
                    "type": "table"
                }
            },
            "charset": {
                "id": "charset",
                "title": "Properly defines charset",
                "description": "A character encoding declaration is required. It can be done with a `\u003cmeta\u003e` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
                "score": 1,
                "scoreDisplayMode": "binary"
            },
            "use-landmarks": {
                "id": "use-landmarks",
                "title": "HTML5 landmark elements are used to improve navigation",
                "description": "Landmark elements (`\u003cmain\u003e`, `\u003cnav\u003e`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "aria-hidden-focus": {
                "id": "aria-hidden-focus",
                "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
                "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.7/aria-hidden-focus).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "object-alt": {
                "id": "object-alt",
                "title": "`\u003cobject\u003e` elements have alternate text",
                "description": "Screen readers cannot translate non-text content. Adding alternate text to `\u003cobject\u003e` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.7/object-alt).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "listitem": {
                "id": "listitem",
                "title": "List items (`\u003cli\u003e`) are contained within `\u003cul\u003e`, `\u003col\u003e` or `\u003cmenu\u003e` parent elements",
                "description": "Screen readers require list items (`\u003cli\u003e`) to be contained within a parent `\u003cul\u003e`, `\u003col\u003e` or `\u003cmenu\u003e` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.7/listitem).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-allowed-role": {
                "id": "aria-allowed-role",
                "title": "Values assigned to `role=\"\"` are valid ARIA roles.",
                "description": "ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.7/aria-allowed-roles).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "custom-controls-roles": {
                "id": "custom-controls-roles",
                "title": "Custom controls have ARIA roles",
                "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "empty-heading": {
                "id": "empty-heading",
                "title": "All heading elements contain content.",
                "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.7/empty-heading).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "is-on-https": {
                "id": "is-on-https",
                "title": "Uses HTTPS",
                "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "items": [],
                    "type": "table"
                }
            },
            "aria-allowed-attr": {
                "id": "aria-allowed-attr",
                "title": "`[aria-*]` attributes match their roles",
                "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.7/aria-allowed-attr).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "type": "table",
                    "items": []
                }
            },
            "csp-xss": {
                "id": "csp-xss",
                "title": "Ensure CSP is effective against XSS attacks",
                "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
                "score": null,
                "scoreDisplayMode": "informative",
                "details": {
                    "items": [
                        {
                            "description": "No CSP found in enforcement mode",
                            "severity": "High"
                        }
                    ],
                    "type": "table",
                    "headings": [
                        {
                            "subItemsHeading": {
                                "key": "description"
                            },
                            "label": "Description",
                            "valueType": "text",
                            "key": "description"
                        },
                        {
                            "label": "Directive",
                            "subItemsHeading": {
                                "key": "directive"
                            },
                            "valueType": "code",
                            "key": "directive"
                        },
                        {
                            "key": "severity",
                            "label": "Severity",
                            "valueType": "text",
                            "subItemsHeading": {
                                "key": "severity"
                            }
                        }
                    ]
                }
            },
            "image-aspect-ratio": {
                "id": "image-aspect-ratio",
                "title": "Displays images with correct aspect ratio",
                "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "headings": [],
                    "items": []
                }
            },
            "visual-order-follows-dom": {
                "id": "visual-order-follows-dom",
                "title": "Visual order on the page follows DOM order",
                "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "aria-dialog-name": {
                "id": "aria-dialog-name",
                "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
                "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.7/aria-dialog-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "geolocation-on-start": {
                "id": "geolocation-on-start",
                "title": "Avoids requesting the geolocation permission on page load",
                "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "target-size": {
                "id": "target-size",
                "title": "Touch targets have sufficient size and spacing.",
                "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.7/target-size).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "meta-refresh": {
                "id": "meta-refresh",
                "title": "The document does not use `\u003cmeta http-equiv=\"refresh\"\u003e`",
                "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.7/meta-refresh).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-tooltip-name": {
                "id": "aria-tooltip-name",
                "title": "ARIA `tooltip` elements have accessible names",
                "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.7/aria-tooltip-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "valid-lang": {
                "id": "valid-lang",
                "title": "`[lang]` attributes have a valid value",
                "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.7/valid-lang).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "skip-link": {
                "id": "skip-link",
                "title": "Skip links are focusable.",
                "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.7/skip-link).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-roles": {
                "id": "aria-roles",
                "title": "`[role]` values are valid",
                "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.7/aria-roles).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "type": "table",
                    "headings": []
                }
            },
            "bypass": {
                "id": "bypass",
                "title": "The page contains a heading, skip link, or landmark region",
                "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.7/bypass).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "color-contrast": {
                "id": "color-contrast",
                "title": "Background and foreground colors have a sufficient contrast ratio",
                "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.7/color-contrast).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "offscreen-content-hidden": {
                "id": "offscreen-content-hidden",
                "title": "Offscreen content is hidden from assistive technology",
                "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "th-has-data-cells": {
                "id": "th-has-data-cells",
                "title": "`\u003cth\u003e` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
                "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.7/th-has-data-cells).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "label-content-name-mismatch": {
                "id": "label-content-name-mismatch",
                "title": "Elements with visible text labels have matching accessible names.",
                "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.7/label-content-name-mismatch).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "tabindex": {
                "id": "tabindex",
                "title": "No element has a `[tabindex]` value greater than 0",
                "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.7/tabindex).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "headings": [],
                    "type": "table"
                }
            },
            "aria-progressbar-name": {
                "id": "aria-progressbar-name",
                "title": "ARIA `progressbar` elements have accessible names",
                "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.7/aria-progressbar-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "heading-order": {
                "id": "heading-order",
                "title": "Heading elements appear in a sequentially-descending order",
                "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.7/heading-order).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "headings": [],
                    "items": []
                }
            },
            "focus-traps": {
                "id": "focus-traps",
                "title": "User focus is not accidentally trapped in a region",
                "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "inspector-issues": {
                "id": "inspector-issues",
                "title": "No issues in the `Issues` panel in Chrome Devtools",
                "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "type": "table",
                    "headings": []
                }
            },
            "no-unload-listeners": {
                "id": "no-unload-listeners",
                "title": "Avoids `unload` event listeners",
                "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more about unload event listeners](https://web.dev/bfcache/#never-use-the-unload-event)",
                "score": 1,
                "scoreDisplayMode": "binary"
            },
            "link-in-text-block": {
                "id": "link-in-text-block",
                "title": "Links are distinguishable without relying on color.",
                "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.7/link-in-text-block).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "link-name": {
                "id": "link-name",
                "title": "Links have a discernible name",
                "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.7/link-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "notification-on-start": {
                "id": "notification-on-start",
                "title": "Avoids requesting the notification permission on page load",
                "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "items": [],
                    "type": "table",
                    "headings": []
                }
            },
            "managed-focus": {
                "id": "managed-focus",
                "title": "The user's focus is directed to new content added to the page",
                "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "logical-tab-order": {
                "id": "logical-tab-order",
                "title": "The page has a logical tab order",
                "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "td-headers-attr": {
                "id": "td-headers-attr",
                "title": "Cells in a `\u003ctable\u003e` element that use the `[headers]` attribute refer to table cells within the same table.",
                "description": "Screen readers have features to make navigating tables easier. Ensuring `\u003ctd\u003e` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.7/td-headers-attr).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-required-parent": {
                "id": "aria-required-parent",
                "title": "`[role]`s are contained by their required parent element",
                "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.7/aria-required-parent).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-valid-attr": {
                "id": "aria-valid-attr",
                "title": "`[aria-*]` attributes are valid and not misspelled",
                "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "items": [],
                    "headings": []
                }
            },
            "frame-title": {
                "id": "frame-title",
                "title": "`\u003cframe\u003e` or `\u003ciframe\u003e` elements have a title",
                "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.7/frame-title).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-meter-name": {
                "id": "aria-meter-name",
                "title": "ARIA `meter` elements have accessible names",
                "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.7/aria-meter-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "form-field-multiple-labels": {
                "id": "form-field-multiple-labels",
                "title": "No form fields have multiple labels",
                "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.7/form-field-multiple-labels).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-required-attr": {
                "id": "aria-required-attr",
                "title": "`[role]`s have all required `[aria-*]` attributes",
                "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.7/aria-required-attr).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "items": [],
                    "headings": []
                }
            },
            "list": {
                "id": "list",
                "title": "Lists contain only `\u003cli\u003e` elements and script supporting elements (`\u003cscript\u003e` and `\u003ctemplate\u003e`).",
                "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.7/list).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "landmark-one-main": {
                "id": "landmark-one-main",
                "title": "Document has a main landmark.",
                "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.7/landmark-one-main).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "aria-text": {
                "id": "aria-text",
                "title": "Elements with the `role=text` attribute do not have focusable descendents.",
                "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.7/aria-text).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "identical-links-same-purpose": {
                "id": "identical-links-same-purpose",
                "title": "Identical links have the same purpose.",
                "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.7/identical-links-same-purpose).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "focusable-controls": {
                "id": "focusable-controls",
                "title": "Interactive controls are keyboard focusable",
                "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "custom-controls-labels": {
                "id": "custom-controls-labels",
                "title": "Custom controls have associated labels",
                "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
                "score": null,
                "scoreDisplayMode": "manual"
            },
            "document-title": {
                "id": "document-title",
                "title": "Document has a `\u003ctitle\u003e` element",
                "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.7/document-title).",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "type": "table",
                    "headings": [],
                    "items": []
                }
            },
            "aria-treeitem-name": {
                "id": "aria-treeitem-name",
                "title": "ARIA `treeitem` elements have accessible names",
                "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.7/aria-treeitem-name).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "image-redundant-alt": {
                "id": "image-redundant-alt",
                "title": "Image elements do not have `[alt]` attributes that are redundant text.",
                "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.7/image-redundant-alt).",
                "score": null,
                "scoreDisplayMode": "notApplicable"
            },
            "errors-in-console": {
                "id": "errors-in-console",
                "title": "No browser errors logged to the console",
                "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
                "score": 1,
                "scoreDisplayMode": "binary",
                "details": {
                    "headings": [],
                    "type": "table",
                    "items": []
                }
            }
        },
        "categories": {
            "accessibility": {
                "id": "accessibility",
                "title": "Accessibility",
                "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/how-to-review/) is also encouraged.",
                "score": 1,
                "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/how-to-review/).",
                "auditRefs": [
                    {
                        "id": "accesskeys",
                        "weight": 0,
                        "group": "a11y-navigation"
                    },
                    {
                        "id": "aria-allowed-attr",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-allowed-role",
                        "weight": 1,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-command-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-dialog-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-hidden-body",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-hidden-focus",
                        "weight": 7,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-input-field-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-meter-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-progressbar-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-required-attr",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-required-children",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-required-parent",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-roles",
                        "weight": 7,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-text",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-toggle-field-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-tooltip-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-treeitem-name",
                        "weight": 0,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-valid-attr-value",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "aria-valid-attr",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "button-name",
                        "weight": 10,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "bypass",
                        "weight": 0,
                        "group": "a11y-navigation"
                    },
                    {
                        "id": "color-contrast",
                        "weight": 7,
                        "group": "a11y-color-contrast"
                    },
                    {
                        "id": "definition-list",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "dlitem",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "document-title",
                        "weight": 7,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "duplicate-id-active",
                        "weight": 0,
                        "group": "a11y-navigation"
                    },
                    {
                        "id": "duplicate-id-aria",
                        "weight": 10,
                        "group": "a11y-aria"
                    },
                    {
                        "id": "form-field-multiple-labels",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "frame-title",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "heading-order",
                        "weight": 3,
                        "group": "a11y-navigation"
                    },
                    {
                        "id": "html-has-lang",
                        "weight": 7,
                        "group": "a11y-language"
                    },
                    {
                        "id": "html-lang-valid",
                        "weight": 7,
                        "group": "a11y-language"
                    },
                    {
                        "id": "html-xml-lang-mismatch",
                        "weight": 0,
                        "group": "a11y-language"
                    },
                    {
                        "id": "image-alt",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "image-redundant-alt",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "input-button-name",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "input-image-alt",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "label-content-name-mismatch",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "label",
                        "weight": 7,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "link-in-text-block",
                        "weight": 0,
                        "group": "a11y-color-contrast"
                    },
                    {
                        "id": "link-name",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "list",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "listitem",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "meta-refresh",
                        "weight": 0,
                        "group": "a11y-best-practices"
                    },
                    {
                        "id": "meta-viewport",
                        "weight": 10,
                        "group": "a11y-best-practices"
                    },
                    {
                        "id": "object-alt",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "select-name",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "skip-link",
                        "weight": 0,
                        "group": "a11y-names-labels"
                    },
                    {
                        "id": "tabindex",
                        "weight": 7,
                        "group": "a11y-navigation"
                    },
                    {
                        "id": "table-duplicate-name",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "table-fake-caption",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "td-has-header",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "td-headers-attr",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "th-has-data-cells",
                        "weight": 0,
                        "group": "a11y-tables-lists"
                    },
                    {
                        "id": "valid-lang",
                        "weight": 0,
                        "group": "a11y-language"
                    },
                    {
                        "id": "video-caption",
                        "weight": 0,
                        "group": "a11y-audio-video"
                    },
                    {
                        "id": "focusable-controls",
                        "weight": 0
                    },
                    {
                        "id": "interactive-element-affordance",
                        "weight": 0
                    },
                    {
                        "id": "logical-tab-order",
                        "weight": 0
                    },
                    {
                        "id": "visual-order-follows-dom",
                        "weight": 0
                    },
                    {
                        "id": "focus-traps",
                        "weight": 0
                    },
                    {
                        "id": "managed-focus",
                        "weight": 0
                    },
                    {
                        "id": "use-landmarks",
                        "weight": 0
                    },
                    {
                        "id": "offscreen-content-hidden",
                        "weight": 0
                    },
                    {
                        "id": "custom-controls-labels",
                        "weight": 0
                    },
                    {
                        "id": "custom-controls-roles",
                        "weight": 0
                    },
                    {
                        "id": "empty-heading",
                        "weight": 0,
                        "group": "hidden"
                    },
                    {
                        "id": "identical-links-same-purpose",
                        "weight": 0,
                        "group": "hidden"
                    },
                    {
                        "id": "landmark-one-main",
                        "weight": 0,
                        "group": "hidden"
                    },
                    {
                        "id": "target-size",
                        "weight": 0,
                        "group": "hidden"
                    }
                ]
            },
            "best-practices": {
                "id": "best-practices",
                "title": "Best Practices",
                "score": 1,
                "auditRefs": [
                    {
                        "id": "is-on-https",
                        "weight": 5,
                        "group": "best-practices-trust-safety"
                    },
                    {
                        "id": "geolocation-on-start",
                        "weight": 1,
                        "group": "best-practices-trust-safety"
                    },
                    {
                        "id": "notification-on-start",
                        "weight": 1,
                        "group": "best-practices-trust-safety"
                    },
                    {
                        "id": "csp-xss",
                        "weight": 0,
                        "group": "best-practices-trust-safety"
                    },
                    {
                        "id": "paste-preventing-inputs",
                        "weight": 3,
                        "group": "best-practices-ux"
                    },
                    {
                        "id": "image-aspect-ratio",
                        "weight": 1,
                        "group": "best-practices-ux"
                    },
                    {
                        "id": "image-size-responsive",
                        "weight": 1,
                        "group": "best-practices-ux"
                    },
                    {
                        "id": "preload-fonts",
                        "weight": 0,
                        "group": "best-practices-ux"
                    },
                    {
                        "id": "doctype",
                        "weight": 1,
                        "group": "best-practices-browser-compat"
                    },
                    {
                        "id": "charset",
                        "weight": 1,
                        "group": "best-practices-browser-compat"
                    },
                    {
                        "id": "no-unload-listeners",
                        "weight": 1,
                        "group": "best-practices-general"
                    },
                    {
                        "id": "js-libraries",
                        "weight": 0,
                        "group": "best-practices-general"
                    },
                    {
                        "id": "deprecations",
                        "weight": 5,
                        "group": "best-practices-general"
                    },
                    {
                        "id": "errors-in-console",
                        "weight": 1,
                        "group": "best-practices-general"
                    },
                    {
                        "id": "valid-source-maps",
                        "weight": 0,
                        "group": "best-practices-general"
                    },
                    {
                        "id": "inspector-issues",
                        "weight": 1,
                        "group": "best-practices-general"
                    }
                ]
            }
        },
        "categoryGroups": {
            "pwa-installable": {
                "title": "Installable"
            },
            "load-opportunities": {
                "title": "Opportunities",
                "description": "These suggestions can help your page load faster. They don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
            },
            "best-practices-trust-safety": {
                "title": "Trust and Safety"
            },
            "a11y-names-labels": {
                "title": "Names and labels",
                "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
            },
            "a11y-navigation": {
                "title": "Navigation",
                "description": "These are opportunities to improve keyboard navigation in your application."
            },
            "a11y-aria": {
                "title": "ARIA",
                "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
            },
            "best-practices-general": {
                "title": "General"
            },
            "a11y-audio-video": {
                "title": "Audio and video",
                "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
            },
            "metrics": {
                "title": "Metrics"
            },
            "a11y-best-practices": {
                "title": "Best practices",
                "description": "These items highlight common accessibility best practices."
            },
            "best-practices-browser-compat": {
                "title": "Browser Compatibility"
            },
            "a11y-language": {
                "title": "Internationalization and localization",
                "description": "These are opportunities to improve the interpretation of your content by users in different locales."
            },
            "best-practices-ux": {
                "title": "User Experience"
            },
            "diagnostics": {
                "title": "Diagnostics",
                "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
            },
            "seo-content": {
                "title": "Content Best Practices",
                "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
            },
            "seo-crawl": {
                "title": "Crawling and Indexing",
                "description": "To appear in search results, crawlers need access to your app."
            },
            "a11y-tables-lists": {
                "title": "Tables and lists",
                "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
            },
            "budgets": {
                "title": "Budgets",
                "description": "Performance budgets set standards for the performance of your site."
            },
            "pwa-optimized": {
                "title": "PWA Optimized"
            },
            "seo-mobile": {
                "title": "Mobile Friendly",
                "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
            },
            "a11y-color-contrast": {
                "title": "Contrast",
                "description": "These are opportunities to improve the legibility of your content."
            }
        },
        "timing": {
            "total": 9112.3000000000011
        },
        "i18n": {
            "rendererFormattedStrings": {
                "varianceDisclaimer": "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
                "opportunityResourceColumnLabel": "Opportunity",
                "opportunitySavingsColumnLabel": "Estimated Savings",
                "errorMissingAuditInfo": "Report error: no audit information",
                "errorLabel": "Error!",
                "warningHeader": "Warnings: ",
                "passedAuditsGroupTitle": "Passed audits",
                "notApplicableAuditsGroupTitle": "Not applicable",
                "manualAuditsGroupTitle": "Additional items to manually check",
                "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
                "crcLongestDurationLabel": "Maximum critical path latency:",
                "crcInitialNavigation": "Initial Navigation",
                "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
                "labDataTitle": "Lab Data",
                "warningAuditsGroupTitle": "Passed audits but with warnings",
                "snippetExpandButtonLabel": "Expand snippet",
                "snippetCollapseButtonLabel": "Collapse snippet",
                "thirdPartyResourcesLabel": "Show 3rd-party resources",
                "runtimeDesktopEmulation": "Emulated Desktop",
                "runtimeMobileEmulation": "Emulated Moto G Power",
                "runtimeNoEmulation": "No emulation",
                "runtimeSettingsBenchmark": "Unthrottled CPU/Memory Power",
                "runtimeSettingsCPUThrottling": "CPU throttling",
                "runtimeSettingsDevice": "Device",
                "runtimeSettingsNetworkThrottling": "Network throttling",
                "runtimeSettingsUANetwork": "User agent (network)",
                "runtimeUnknown": "Unknown",
                "dropdownCopyJSON": "Copy JSON",
                "dropdownDarkTheme": "Toggle Dark Theme",
                "dropdownPrintExpanded": "Print Expanded",
                "dropdownPrintSummary": "Print Summary",
                "dropdownSaveGist": "Save as Gist",
                "dropdownSaveHTML": "Save as HTML",
                "dropdownSaveJSON": "Save as JSON",
                "dropdownViewer": "Open in Viewer",
                "footerIssue": "File an issue",
                "throttlingProvided": "Provided by environment",
                "calculatorLink": "See calculator.",
                "runtimeSettingsAxeVersion": "Axe version",
                "viewTreemapLabel": "View Treemap",
                "showRelevantAudits": "Show audits relevant to:"
            }
        },
        "stackPacks": [
            {
                "id": "next.js",
                "title": "Next.js",
                "iconDataURL": "data:image/svg+xml,\u003csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 207 124\"\u003e\u003cpath fill=\"%23000\" d=\"M48.942 32.632h38.96v3.082h-35.39v23.193H85.79v3.082H52.513v25.464h35.794v3.081H48.942V32.632Zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14Zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373ZM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zm183.194 53.891c.738 0 1.276-.563 1.276-1.29 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29Zm3.509-3.393c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911Zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928Z\"/\u003e\u003c/svg\u003e",
                "descriptions": {
                    "unused-javascript": "Use `Webpack Bundle Analyzer` to detect unused JavaScript code. [Learn more](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)",
                    "offscreen-images": "Use the `next/image` component instead of `\u003cimg\u003e` to automatically lazy-load images. [Learn more](https://nextjs.org/docs/basic-features/image-optimization).",
                    "uses-long-cache-ttl": "Configure caching for immutable assets and `Server-side Rendered` (SSR) pages. [Learn more](https://nextjs.org/docs/going-to-production#caching).",
                    "uses-optimized-images": "Use the `next/image` component instead of `\u003cimg\u003e` to adjust image quality. [Learn more](https://nextjs.org/docs/basic-features/image-optimization).",
                    "unsized-images": "Use the `next/image` component to make sure images are always sized appropriately. [Learn more](https://nextjs.org/docs/api-reference/next/image#width).",
                    "unused-css-rules": "Consider setting up `PurgeCSS` in `Next.js` configuration to remove unused rules from stylesheets. [Learn more](https://purgecss.com/guides/next.html).",
                    "user-timings": "Consider using `Next.js Analytics` to measure your app's real-world performance. [Learn more](https://nextjs.org/docs/advanced-features/measuring-performance).",
                    "uses-text-compression": "Enable compression on your Next.js server. [Learn more](https://nextjs.org/docs/api-reference/next.config.js/compression).",
                    "prioritize-lcp-image": "Use the `next/image` component and set \"priority\" to true to preload LCP image. [Learn more](https://nextjs.org/docs/api-reference/next/image#priority).",
                    "modern-image-formats": "Use the `next/image` component instead of `\u003cimg\u003e` to automatically optimize image format. [Learn more](https://nextjs.org/docs/basic-features/image-optimization).",
                    "uses-responsive-images": "Use the `next/image` component to set the appropriate `sizes`. [Learn more](https://nextjs.org/docs/api-reference/next/image#sizes).",
                    "render-blocking-resources": "Use the `next/script` component to defer loading of non-critical third-party scripts. [Learn more](https://nextjs.org/docs/basic-features/script)."
                }
            }
        ],
        "entities": [
            {
                "name": "vercel.app",
                "isFirstParty": true,
                "isUnrecognized": true,
                "origins": [
                    "https://uxrate.vercel.app"
                ]
            },
            {
                "name": "vercel-insights.com",
                "isUnrecognized": true,
                "origins": [
                    "https://vitals.vercel-insights.com"
                ]
            }
        ],
        "fullPageScreenshot": {
            "nodes": {
                "1-6-META": {
                    "bottom": 0,
                    "width": 0,
                    "right": 0,
                    "top": 0,
                    "left": 0,
                    "height": 0
                },
                "1-4-INPUT": {
                    "width": 326,
                    "bottom": 268,
                    "right": 838,
                    "height": 56,
                    "top": 212,
                    "left": 512
                },
                "1-2-FORM": {
                    "right": 838,
                    "height": 157,
                    "top": 196,
                    "left": 512,
                    "bottom": 353,
                    "width": 326
                },
                "1-0-BUTTON": {
                    "bottom": 50,
                    "height": 37,
                    "right": 879,
                    "left": 668,
                    "top": 14,
                    "width": 211
                },
                "1-5-META": {
                    "width": 0,
                    "height": 0,
                    "right": 0,
                    "left": 0,
                    "top": 0,
                    "bottom": 0
                },
                "1-1-HEADER": {
                    "height": 64,
                    "top": 0,
                    "width": 1350,
                    "right": 1350,
                    "bottom": 64,
                    "left": 0
                },
                "1-7-META": {
                    "height": 0,
                    "bottom": 0,
                    "left": 0,
                    "top": 0,
                    "width": 0,
                    "right": 0
                },
                "1-3-LABEL": {
                    "left": 526,
                    "top": 228,
                    "height": 23,
                    "right": 697,
                    "width": 171,
                    "bottom": 251
                }
            },
            "screenshot": {
                "data": "data:image/webp;base64,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",
                "height": 940,
                "width": 1350
            }
        }
    },
    "analysisUTCTimestamp": "2023-10-15T22:47:58.711Z"
}

const CATEGORIES = [
    'ACCESSIBILITY',
    'PERFORMANCE',
    'BEST_PRACTICES',
]

const resCategories = [
    'accessibility',
    'performance',
    'best-practices'
]

const DEVICES = [
    'DESKTOP',
    'MOBILE',
]

export const generateUrl = (url, device = 'MOBILE', category = 'CATEGORY_UNESPECIFIED') => {
    const requrl = new URL('https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed')
    const params = requrl.searchParams
    params.append('url', url)
    params.append('locale', 'es-MX')
    params.append('category', category)
    params.append('strategy', device)
    return requrl
}

export const filterResult = (data, i) => {
    if (data.error) {
        const { error: { code, message } } = data
        return {
            error: {
                code,
                message
            }
        }
    }
    const result = data.lighthouseResult.categories[resCategories[i]]
    const score = data.lighthouseResult.categories[resCategories[i]].score
    const analysisTimestamp = data.analysisUTCTimestamp
    const environment = data.lighthouseResult.environment
    const screenShot = data.lighthouseResult.fullPageScreenshot.screenshot.data
    const techStack = data.lighthouseResult.stackPacks
    return {
        name: result.title,
        score,
        details: {
            result,
            analysisTimestamp,
            environment,
            screenShot,
            techStack
        }
    }
}

export const speedinsights = async (url) => {
    const requests = CATEGORIES.map(e => getRequest(generateUrl(url, 'DESKTOP', e)))
    const responses = await Promise.allSettled(requests)
    const results = responses.map(({ value }, i) => filterResult(value, i))
    return results
}

export default async function speeed(req, res) {
    const { body: { url } } = req
    const results = await speedinsights(url)
    res.status(200).json(results)
}