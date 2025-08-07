
'use server'

export async function generateTemplate(prevState: any, formData: FormData) {
  const prompt = formData.get('prompt') as string;

  if (!prompt || !prompt.trim()) {
    return { error: 'Prompt is required.', success: null };
  }

  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("N8N_WEBHOOK_URL is not defined in the environment variables.");
    }

    const response = await fetch(webhookUrl, {
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

    const n8nResponse = await response.json();

    // Check for error messages within the n8n response payload
    if (n8nResponse && (n8nResponse.error || n8nResponse.success === false)) {
      const errorMessage = n8nResponse.error || n8nResponse.message || 'n8n workflow failed to generate template.';
      return { error: `Workflow generation failed: ${errorMessage}`, success: null };
    }

    return { success: n8nResponse, error: null };
  } catch (error: any) {
    console.error('Error generating template:', error);
    return { error: 'Failed to connect to n8n service. Please check your N8N_WEBHOOK_URL and try again.', success: null };
  }
}

