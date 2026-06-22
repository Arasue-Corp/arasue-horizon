"use server"

export async function submitLead(formData: FormData) {
  try {
    // Convert FormData to a regular object
    const payload: Record<string, any> = {}
    formData.forEach((value, key) => {
      payload[key] = value
    })
    
    // Add metadata
    payload.timestamp = new Date().toISOString()
    
    console.log(`[Lead Captured] Form Source: ${payload.source || 'Unknown'}`, payload)

    const webhookUrl = process.env.N8N_WEBHOOK_URL

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        console.error('[Action] Webhook error:', await response.text())
        return { error: 'Failed to process submission via webhook' }
      }
    } else {
      // Simulate network latency if no webhook is configured
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('[Action] No N8N_WEBHOOK_URL provided. Simulated success.')
    }

    return { success: true, message: 'Submission received successfully' }
  } catch (error) {
    console.error('[Action] Form submission error:', error)
    return { error: 'Invalid request' }
  }
}
