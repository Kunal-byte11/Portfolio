"use server";

import {
  askMyPortfolio,
  type AskMyPortfolioInput,
} from "@/ai/flows/ask-my-portfolio-rag-feature";
import {
  generateAiProjectSummaries,
  type GenerateAiProjectSummariesInput,
} from "@/ai/flows/generate-ai-project-summaries";

export const getAiProjectSummary = async (
  input: GenerateAiProjectSummariesInput
) => {
  try {
    const result = await generateAiProjectSummaries(input);
    return result.aiSummary;
  } catch (error) {
    console.error("Error generating AI project summary:", error);
    return "Could not generate summary.";
  }
};

export const askPortfolio = async (input: AskMyPortfolioInput) => {
  try {
    const result = await askMyPortfolio(input);
    return result.answer;
  } catch (error) {
    console.error("Error asking portfolio:", error);
    return "I'm sorry, I encountered an error. Please try again.";
  }
};
