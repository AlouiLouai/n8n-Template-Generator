'use server'

export async function generateTemplate(prevState: any, formData: FormData) {
  const prompt = formData.get('prompt') as string;

  if (!prompt || !prompt.trim()) {
    return { error: 'Prompt is required.', success: false, data: null };
  }

  try {
    const response = await fetch('https://n8n.connectorzzz.com/webhook-test/generate-template', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`HTTP error! status: ${response.status}`, errorBody);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error('Error generating template:', error);
    return { error: 'Failed to generate template. Please try again later.', success: false, data: null };
  }
}
