import { randomUUID } from 'node:crypto'

import { buildEditorState } from '@payloadcms/richtext-lexical'
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

type LexicalChild = DefaultNodeTypes | SerializedBlockNode

function textNode(text: string, format = 0): LexicalChild {
  return {
    type: 'text',
    detail: 0,
    format,
    mode: 'normal',
    style: '',
    text,
    version: 1,
  } as LexicalChild
}

function paragraph(...parts: Array<string | LexicalChild>): LexicalChild {
  const children = parts.flatMap((part) => (typeof part === 'string' ? [textNode(part)] : [part]))
  return {
    type: 'paragraph',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    textStyle: '',
    version: 1,
  } as LexicalChild
}

function heading(tag: 'h2' | 'h3' | 'h4', text: string): LexicalChild {
  return {
    type: 'heading',
    tag,
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  } as LexicalChild
}

function bulletList(items: string[]): LexicalChild {
  return {
    type: 'list',
    listType: 'bullet',
    start: 1,
    tag: 'ul',
    children: items.map((item, index) => ({
      type: 'listitem',
      children: [textNode(item)],
      direction: 'ltr',
      format: '',
      indent: 0,
      value: index + 1,
      version: 1,
    })),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  } as LexicalChild
}

function blockNode(fields: Record<string, unknown>): SerializedBlockNode {
  return {
    type: 'block',
    fields: {
      id: randomUUID(),
      ...fields,
    },
    format: '',
    version: 2,
  } as SerializedBlockNode
}

export type ShowcaseBodyInput = {
  intro: string
  youtubeUrl: string
  galleryImageIds: string[]
  galleryCaption: string
  pdfFileId: string
  pdfLabel: string
}

export function buildShowcaseBody(input: ShowcaseBodyInput) {
  const nodes = [
      paragraph(input.intro),
      heading('h2', 'Why continuous monitoring matters'),
      paragraph(
        'Connected devices turn everyday signals — steps, sleep, heart rate, and glucose — into ',
        textNode('actionable trends', 1),
        ' clinicians and individuals can review together.',
      ),
      bulletList([
        'Spot early warning signs before symptoms escalate',
        'Share structured summaries with your care team',
        'Keep historical context in one secure timeline',
      ]),
      heading('h3', 'Watch: SEWB platform overview'),
      blockNode({
        blockType: 'embedYoutube',
        url: input.youtubeUrl,
      }),
      heading('h3', 'Platform highlights'),
      blockNode({
        blockType: 'imageGallery',
        images: input.galleryImageIds,
        caption: input.galleryCaption,
      }),
      heading('h3', 'Diagnostic tests explained'),
      blockNode({
        blockType: 'diagnosticTestTabs',
        tab1Label: 'Blood glucose tests',
        tab2Label: 'HbA1c tests',
        tab3Label: 'Fasting blood sugar tests',
        tab1Title: 'Blood Glucose Tests',
        tab1Description:
          'Blood glucose tests measure the amount of sugar in your blood at a given time. They help diagnose and monitor diabetes and support day-to-day management with lab tests or home glucometers.',
        tab2Title: 'HbA1c Tests',
        tab2Description:
          'The HbA1c test reflects average blood sugar over two to three months. It is widely used to diagnose prediabetes and diabetes and to track long-term treatment effectiveness.',
        tab3Title: 'Fasting Blood Sugar',
        tab3Description:
          'A fasting blood sugar test is taken after at least eight hours without food. It shows how your body regulates glucose without recent intake and is common in screening workflows.',
      }),
      heading('h3', 'Download the patient guide'),
      blockNode({
        blockType: 'pdfDownload',
        file: input.pdfFileId,
        label: input.pdfLabel,
      }),
      paragraph(
        'Questions about your readings? ',
        textNode('Talk to a licensed professional', 1),
        ' — SEWB supports access to care but does not replace medical advice.',
      ),
    ] as (DefaultNodeTypes | SerializedBlockNode)[]

  return buildEditorState<DefaultNodeTypes | SerializedBlockNode>({ nodes })
}

export function buildSimpleBody(paragraphs: string[]) {
  const nodes = paragraphs.map((text) => paragraph(text)) as (DefaultNodeTypes | SerializedBlockNode)[]

  return buildEditorState<DefaultNodeTypes | SerializedBlockNode>({ nodes })
}
