import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Map messages to Groq expected format (system message can be added)
    const formattedMessages = [
      {
        role: 'system',
        content: 'You are HerLife AI, a friendly, empathetic, and extremely knowledgeable women\'s health assistant. Keep your responses concise, supportive, and informative. Use emojis sparingly but warmly. Never provide formal medical diagnoses; always recommend consulting a doctor for serious issues.'
      },
      ...messages.map((m: any) => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Groq API error:', err);
      return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ response: data.choices[0].message.content });

  } catch (error) {
    console.error('Error processing chat:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
