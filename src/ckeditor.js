/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import HeadlessEditorBase from '@davidpolberger/ckeditor5-editor-headless/src/headlesseditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AlignmenteditingPlugin from '@ckeditor/ckeditor5-alignment/src/alignmentediting';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldeditingPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold/boldediting';
import ItaliceditingPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic/italicediting';
import UnderlineeditingPlugin from '@ckeditor/ckeditor5-basic-styles/src/underline/underlineediting';
import StrikethrougheditingPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough/strikethroughediting';
import CodeeditingPlugin from '@ckeditor/ckeditor5-basic-styles/src/code/codeediting';
import BlockquoteeditingPlugin from '@ckeditor/ckeditor5-block-quote/src/blockquoteediting';
import FontfamilyeditingPlugin from '@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyediting';
import FontsizeeditingPlugin from '@ckeditor/ckeditor5-font/src/fontsize/fontsizeediting';
import HeadingeditingPlugin from '@ckeditor/ckeditor5-heading/src/headingediting';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageuploadprogressPlugin from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadprogress';
import ImageuploadeditingPlugin from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting';
import FilereaderPlugin from '@ckeditor/ckeditor5-upload/src/filereader';
import FilerepositoryPlugin from '@ckeditor/ckeditor5-upload/src/filerepository';
import LinkeditingPlugin from '@ckeditor/ckeditor5-link/src/linkediting';
import ListeditingPlugin from '@ckeditor/ckeditor5-list/src/listediting';
import ParagraphcommandPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraphcommand';

export default class HeadlessEditor extends HeadlessEditorBase {}

HeadlessEditor.build = {
	plugins: [
		EssentialsPlugin,
		AlignmenteditingPlugin,
		AutoformatPlugin,
		BoldeditingPlugin,
		ItaliceditingPlugin,
		UnderlineeditingPlugin,
		StrikethrougheditingPlugin,
		CodeeditingPlugin,
		BlockquoteeditingPlugin,
		FontfamilyeditingPlugin,
		FontsizeeditingPlugin,
		HeadingeditingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImageuploadprogressPlugin,
		ImageuploadeditingPlugin,
		FilereaderPlugin,
		FilerepositoryPlugin,
		LinkeditingPlugin,
		ListeditingPlugin,
		ParagraphcommandPlugin
	],
	config: {
		language: 'en'
	}
};
