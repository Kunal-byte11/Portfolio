'use server';
/**
 * @fileOverview Implements a RAG (Retrieval-Augmented Generation) flow that answers questions about the portfolio.
 *
 * - askMyPortfolio - An async function that accepts a question and returns an AI-generated answer based on the portfolio content.
 * - AskMyPortfolioInput - The input type for the askMyPortfolio function, containing the user's question.
 * - AskMyPortfolioOutput - The output type for the askMyPortfolio function, containing the AI-generated answer.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskMyPortfolioInputSchema = z.object({
  question: z.string().describe('The question to ask about the portfolio.'),
});
export type AskMyPortfolioInput = z.infer<typeof AskMyPortfolioInputSchema>;

const AskMyPortfolioOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AskMyPortfolioOutput = z.infer<typeof AskMyPortfolioOutputSchema>;

export async function askMyPortfolio(input: AskMyPortfolioInput): Promise<AskMyPortfolioOutput> {
  return askMyPortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askMyPortfolioPrompt',
  input: {schema: AskMyPortfolioInputSchema},
  output: {schema: AskMyPortfolioOutputSchema},
  prompt: `You are a helpful AI assistant that answers questions about a portfolio.
Use the provided context to answer the question to the best of your ability.

Question: {{{question}}}

Context: I am a full-stack developer with experience in React, Next.js, Firebase, and Genkit. I have worked on several projects, including a plant diagnosis app and this very portfolio.
`,
});

const askMyPortfolioFlow = ai.defineFlow(
  {
    name: 'askMyPortfolioFlow',
    inputSchema: AskMyPortfolioInputSchema,
    outputSchema: AskMyPortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
