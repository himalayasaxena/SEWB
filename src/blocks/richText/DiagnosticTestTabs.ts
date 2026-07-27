import type { Block } from 'payload'

export const DiagnosticTestTabs: Block = {
  slug: 'diagnosticTestTabs',
  interfaceName: 'DiagnosticTestTabsBlock',
  labels: {
    singular: 'Tabs',
    plural: 'Tabs',
  },
  fields: [
    {
      name: 'tab1Label',
      type: 'text',
      required: true,
      defaultValue: 'Blood glucose tests',
    },
    {
      name: 'tab2Label',
      type: 'text',
      required: true,
      defaultValue: 'HbA1c tests',
    },
    {
      name: 'tab3Label',
      type: 'text',
      required: true,
      defaultValue: 'Fasting blood sugar tests',
    },
    {
      name: 'tab1Title',
      type: 'text',
      required: true,
      defaultValue: 'Blood Glucose Tests',
    },
    {
      name: 'tab1Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Blood glucose tests measure the amount of sugar (glucose) in your blood at a given time. They are used to diagnose and monitor conditions like Diabetes and help manage overall health. These tests can be done fasting, after meals, or randomly using a lab test or a glucometer at home.',
    },
    {
      name: 'tab2Title',
      type: 'text',
      required: true,
      defaultValue: 'HbA1c Tests',
    },
    {
      name: 'tab2Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'The HbA1c test measures your average blood sugar levels over the past two to three months. It is a key tool for diagnosing prediabetes and diabetes and helping you and your healthcare team monitor your treatment plan.',
    },
    {
      name: 'tab3Title',
      type: 'text',
      required: true,
      defaultValue: 'Fasting Blood Sugar',
    },
    {
      name: 'tab3Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'A fasting blood sugar test is usually done after you have not eaten anything for at least 8 hours. This test is often used to diagnose diabetes or prediabetes by checking how your body handles sugar without recent intake.',
    },
  ],
}
