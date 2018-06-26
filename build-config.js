/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
  // The editor creator to use.
  editor: '@davidpolberger/ckeditor5-editor-headless/src/headlesseditor',

  // The name under which the editor will be exported.
  moduleName: 'HeadlessEditor',

  // Plugins to include in the build.
  plugins: [
    '@ckeditor/ckeditor5-essentials/src/essentials',
    '@ckeditor/ckeditor5-alignment/src/alignmentediting',
    '@ckeditor/ckeditor5-autoformat/src/autoformat',
    '@ckeditor/ckeditor5-basic-styles/src/bold/boldediting',
    '@ckeditor/ckeditor5-basic-styles/src/italic/italicediting',
    '@ckeditor/ckeditor5-basic-styles/src/underline/underlineediting',
    '@ckeditor/ckeditor5-basic-styles/src/strikethrough/strikethroughediting',
    '@ckeditor/ckeditor5-basic-styles/src/code/codeediting',
    '@ckeditor/ckeditor5-block-quote/src/blockquoteediting',
    '@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyediting',
    '@ckeditor/ckeditor5-font/src/fontsize/fontsizeediting',
    '@ckeditor/ckeditor5-heading/src/headingediting',
    '@ckeditor/ckeditor5-image/src/image',
    '@ckeditor/ckeditor5-image/src/imagecaption',
    '@ckeditor/ckeditor5-image/src/imagestyle',
    '@ckeditor/ckeditor5-image/src/imageupload/imageuploadprogress',
    '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting',
    '@ckeditor/ckeditor5-upload/src/filereader',
    '@ckeditor/ckeditor5-upload/src/filerepository',
    '@ckeditor/ckeditor5-link/src/linkediting',
    '@ckeditor/ckeditor5-list/src/listediting',
    '@ckeditor/ckeditor5-paragraph/src/paragraphcommand'
  ],

  config: {
  // UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
    language: 'en'
  }
};
