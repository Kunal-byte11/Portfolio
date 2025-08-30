'use server';
/**
 * @fileOverview An AI avatar/assistant for answering questions about the portfolio owner and their projects.
 *
 * - interactiveAIAvatarAssistant - A function that handles the AI avatar/assistant interaction.
 * - InteractiveAIAvatarAssistantInput - The input type for the interactiveAIAvatarAssistant function.
 * - InteractiveAIAvatarAssistantOutput - The return type for the interactiveAIAvatarAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIAvatarAssistantInputSchema = z.object({
  query: z.string().describe('The user query about the portfolio owner or their projects.'),
});
export type InteractiveAIAvatarAssistantInput = z.infer<typeof InteractiveAIAvatarAssistantInputSchema>;

const InteractiveAIAvatarAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type InteractiveAIAvatarAssistantOutput = z.infer<typeof InteractiveAIAvatarAssistantOutputSchema>;

export async function interactiveAIAvatarAssistant(input: InteractiveAIAvatarAssistantInput): Promise<InteractiveAIAvatarAssistantOutput> {
  return interactiveAIAvatarAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveAIAvatarAssistantPrompt',
  input: {schema: InteractiveAIAvatarAssistantInputSchema},
  output: {schema: InteractiveAIAvatarAssistantOutputSchema},
  prompt: `You are an AI assistant on a personal portfolio website. Your job is to answer questions about the portfolio owner and their projects.

  User query: {{{query}}}
  `,
});

const interactiveAIAvatarAssistantFlow = ai.defineFlow(
  {
    name: 'interactiveAIAvatarAssistantFlow',
    inputSchema: InteractiveAIAvatarAssistantInputSchema,
    outputSchema: InteractiveAIAvatarAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
