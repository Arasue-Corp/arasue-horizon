

export async function submitLead(formData: FormData) {
  // In a real app, this is where you'd connect to HubSpot, Salesforce, PostgreSQL, etc.
  
  const email = formData.get('email')
  const intent = formData.get('intent')
  
  // Simulate network latency and database insertion
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log(`[Lead Captured] Intent: ${intent} | Email: ${email}`)

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return { error: 'Please provide a valid email address.' }
  }

  return { success: true, message: 'Your request has been received. Our architects will contact you shortly.' }
}
