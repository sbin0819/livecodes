---
sidebar_class_name: exclude_from_sidebar
---

# Features

## Overview

_LiveCodes_ is an open-source, client-side, code playground that runs in the browser. It enables quick prototyping and experimenting with a wide variety of [technologies](../languages/) (including 80+ languages, frameworks and processors) without having to manually setup a development environment for each. The [result](./result.md) is displayed as a regular web page. The rapid feedback of previewing the result page without waiting for build steps significantly boosts productivity.

![LiveCodes screenshot](../../static/img/screenshots/react-template.png)

## Powerful Editor

The default code editor is the powerful editor that powers [VS Code](https://code.visualstudio.com/), featuring code-completion, go-to-definition, multi-cursor support and other powerful features you got used to. The editor is very [customizable](./editor-settings.md). It supports [keyboard shortcuts](./keyboard-shortcuts.md), [code formatting](./code-format.md), [Emmet abbreviations](./editor-settings#emmet) and even [Vim and Emacs bindings](./editor-settings.md#editor-modes).

## Mobile-friendly

The responsive layout allows working on devices with different screen sizes. On mobile, a lighter-weight touch-friendly code editor (Code Mirror 6) is used, so that you can experiment your ideas on the go.

## External code/libraries

[External scripts/stylesheets](./external-resources.md) can be added to the web page. There is a UI screen that helps you search for and add NPM libraries and google fonts. Moreover, [NPM modules can be imported](./npm-modules.md) without having to do any `npm install`s.

## Import and Code Pre-fill

Code can be [imported](./import.md) from a variety of sources including GitHub gist, GitHub file, directory in a GitHub repo, Gitlab snippet, Gitlab file, directory in a Gitlab repo, JS Bin, raw code, code in web page DOM and code in zip file. You can also [pre-fill code](./code-prefill.md) using various ways.

## Share/Export

Projects can be easily [shared](./share.md) as URLs or QR codes. In addition, you may export any project as HTML, JSON or zip file containing source code files. You may also export to other services like GitHub gists, CodePen or JSFiddle.

## Embed

Projects can be [embedded](./embeds.md) in any web page. The embed screen allows you to customize the embed options and preview the resulting playground. An easy-to-use, yet powerful, [SDK](../sdk/), that allows [communication](../sdk/js-ts.md#sdk-methods) between the embedding page and the playground.

## Deploy

Projects can be [deployed](./deploy.md) to public URLs that can be shared with others. This is hosted for free on GitHub Pages.

## Starter Templates

A large number of [starter templates](./templates.md) are available. They can be used to get you started with most of the supported technologies.

## Assets

Your own local assets (e.g. images, icons, fonts, local scripts and stylesheets) can be added to the app and then used in any project. The assets are made available even when the projects are shared, exported or deployed.

## Dev Tools

[Tools](./tools-pane.md) like [console](./console.md), [compiled code viewer](./compiled-code.md) and [test runner](./tests.md) can significantly improve your development experience.

## Broadcast

You can [broadcast](./broadcast.md) source code or result in real-time to others. This can be of great value as an educational tool and for demo purposes.

## Sync/Backup/Restore

Do you work on multiple devices? No Problem! You may [sync](./sync.md), [backup and restore](./backup-restore.md) your data any time on any device.

## Client-side!

LiveCodes runs in the browser, where all the processing/transpilation occurs, with no server rounds required. So, after the initial load, it becomes pretty fast. It can be hosted on any static file server or CDN. No `npm install`s. Just the browser!

## Developer-friendly

LiveCodes makes it easy to [get started](../getting-started). It is highly [configurable](../configuration). Lots of features can be
configured by URL [query params](../configuration/query-params). The [SDK](../sdk/) facilitates [embedding](./embeds.md)
playgrounds and allows easy [communication](../sdk/js-ts#sdk-methods) with
them. The SDK is available as a [JS/TS](../sdk/js-ts.md) library, as well as [React](../sdk/react.md) and [Vue](../sdk/vue.md) Components.

## Comprehensive Documentations

Rich documentations with screenshots, code samples and live demos are available. They cover the app [features](../features/), [configuration](../configuration/), [supported languages](../languages/) and [SDK](../sdk/) (including [TypeScript Types](../api/modules)). A gallery of usage examples is provided as a [storybook](pathname:///../stories).

## Focused on Privacy

Projects are private by default. The code you write in LiveCodes never leaves your computer, unless you choose to [share](./share.md), [export](./export.md), [broadcast](./broadcast.md) or [sync](./sync.md) it. No cookies are used. User data is stored in the browser.

## Free and Open-Source

LiveCodes is free, with no limits for use and no ads.
No account is even required (unless [GitHub integration](./github-integration.md) is needed).
Do you want to [self-host](../getting-started.md#self-hosting) it for commercial use? No problem! It is [MIT-licensed](../license.md) 🎉. Please consider [sponsoring LiveCodes](../sponsor.md) ❤.
