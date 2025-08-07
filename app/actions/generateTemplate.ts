
'use server'

export async function generateTemplate(prevState: any, formData: FormData) {
  const prompt = formData.get('prompt') as string;

  if (!prompt || !prompt.trim()) {
    return { error: 'Prompt is required.', success: null };
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
      // Try to parse errorBody as JSON, if it fails, use the raw text.
      let errorMessage = errorBody;
      try {
        const errorJson = JSON.parse(errorBody);
        errorMessage = errorJson.message || errorBody;
      } catch (e) {
        // Not a JSON error, use the raw text
      }
      return { error: `Failed to generate template: ${errorMessage}`, success: null };
    }

    const result = await response.json();
    return { success: result, error: null };
  } catch (error: any) {
    console.error('Error generating template:', error);
    return { error: 'Failed to generate template. Please try again later.', success: null };
  }
}

