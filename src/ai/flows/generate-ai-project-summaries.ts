'use server';
/**
 * @fileOverview Generates AI-powered summaries for project showcases.
 *
 * - generateAiProjectSummaries - A function that generates AI summaries for projects.
 * - GenerateAiProjectSummariesInput - The input type for the generateAiProjectSummaries function.
 * - GenerateAiProjectSummariesOutput - The return type for the generateAiProjectSummaries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiProjectSummariesInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project.'),
  technologiesUsed: z.string().describe('A comma-separated list of technologies used in the project.'),
});
export type GenerateAiProjectSummariesInput = z.infer<typeof GenerateAiProjectSummariesInputSchema>;

const GenerateAiProjectSummariesOutputSchema = z.object({
  aiSummary: z.string().describe('An AI-generated summary of the project.'),
});
export type GenerateAiProjectSummariesOutput = z.infer<typeof GenerateAiProjectSummariesOutputSchema>;

export async function generateAiProjectSummaries(input: GenerateAiProjectSummariesInput): Promise<GenerateAiProjectSummariesOutput> {
  return generateAiProjectSummariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAiProjectSummariesPrompt',
  input: {schema: GenerateAiProjectSummariesInputSchema},
  output: {schema: GenerateAiProjectSummariesOutputSchema},
  prompt: `You are an AI assistant that generates concise summaries for software development projects.

  Given the project name, description, and technologies used, create a summary that highlights the project's purpose and the key technologies involved.

  Project Name: {{{projectName}}}
  Description: {{{projectDescription}}}
  Technologies Used: {{{technologiesUsed}}}

  AI Summary:`,
});

const generateAiProjectSummariesFlow = ai.defineFlow(
  {
    name: 'generateAiProjectSummariesFlow',
    inputSchema: GenerateAiProjectSummariesInputSchema,
    outputSchema: GenerateAiProjectSummariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
